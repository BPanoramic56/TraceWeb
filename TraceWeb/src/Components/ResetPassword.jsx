function ResetPassword() {
  const [status, setStatus] = useState('loading'); // loading | success | invalid

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const hashParams   = new URLSearchParams(window.location.hash.replace(/^#/, ''));

    const type  = searchParams.get('type')  || hashParams.get('type');
    const code  = searchParams.get('code');
    const error = searchParams.get('error') || hashParams.get('error');

    // Supabase-level error in the URL (e.g. expired link, already used)
    if (error) {
      console.error('Supabase auth error:', error, searchParams.get('error_description'));
      setStatus('invalid');
      return;
    }

    // No recovery signal — someone navigated here directly
    if (!type && !code) {
      setStatus('invalid');
      return;
    }

    const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

    const redirect = () => {
      setStatus('success');
      setTimeout(() => { window.location.href = 'trace://reset-password'; }, 800);
    };

    // ── CRITICAL: subscribe to auth state BEFORE anything else ──────
    // When Supabase JS initialises it may exchange the ?code= token
    // synchronously (PKCE) or the #access_token hash (implicit) before
    // React's useEffect even runs. Setting up the listener first ensures
    // we catch the resulting SIGNED_IN / PASSWORD_RECOVERY event
    // regardless of timing.
    const { data: { subscription } } = client.auth.onAuthStateChange((event, session) => {
      // PKCE fires SIGNED_IN; implicit flow fires PASSWORD_RECOVERY
      if ((event === 'SIGNED_IN' || event === 'PASSWORD_RECOVERY') && session) {
        redirect();
      }
    });

    // Also check immediately — the exchange may have already completed
    // before our listener was attached (race condition on fast networks)
    client.auth.getSession().then(({ data: { session } }) => {
      if (session) { redirect(); }
      // If no session yet, the listener above will catch it.
      // Final safety-net: if nothing has fired after 5 s, give up.
      else {
        setTimeout(() => {
          client.auth.getSession().then(({ data: { session } }) => {
            if (!session) setStatus('invalid');
          });
        }, 5000);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // ── Shared card wrapper ──
  const Card = ({ children }) => (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 24px' }}>
      <div className="animate-fade-up delay-1" style={{ maxWidth:360, width:'100%', textAlign:'center' }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:28 }}>
          <div style={{
            width:52, height:52, borderRadius:16, flexShrink:0,
            background:'linear-gradient(135deg, #6366f1, #818cf8)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 8px 30px rgba(99,102,241,0.3)',
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17l4-8 4 5 3-3 4 6"/>
              <circle cx="19" cy="5" r="2" fill="white" stroke="none"/>
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  );

  if (status === 'loading') return (
    <Card>
      <div style={{ display:'flex', justifyContent:'center', marginBottom:20 }}>
        <div style={{ width:36, height:36, border:'2px solid rgba(99,102,241,0.2)', borderTopColor:'var(--accent)', borderRadius:'50%', animation:'spin 0.8s linear infinite' }}/>
      </div>
      <h2 style={{ fontFamily:'DM Serif Display, serif', fontSize:26, marginBottom:10 }}>Opening Trace…</h2>
      <p style={{ color:'var(--muted)', fontSize:13, lineHeight:1.7 }}>
        Verifying your reset link. You'll be redirected to the app in a moment.
      </p>
    </Card>
  );

  if (status === 'success') return (
    <Card>
      <div style={{ color:'#4ade80', display:'flex', justifyContent:'center', marginBottom:16 }}><Icons.CheckCircle /></div>
      <h2 style={{ fontFamily:'DM Serif Display, serif', fontSize:26, marginBottom:10 }}>Redirecting to Trace</h2>
      <p style={{ color:'var(--muted)', fontSize:13, lineHeight:1.7 }}>
        Link verified. Opening the app now to complete your password reset.
      </p>
      <div style={{ marginTop:20, height:2, background:'rgba(255,255,255,0.06)', borderRadius:1, overflow:'hidden' }}>
        <div style={{ height:'100%', background:'linear-gradient(90deg, var(--accent), var(--accent-light))', borderRadius:1, animation:'progressBar 2s linear forwards' }}/>
      </div>
    </Card>
  );

  // invalid / expired
  return (
    <Card>
      <div style={{ color:'#f87171', display:'flex', justifyContent:'center', marginBottom:16 }}><Icons.AlertCircle /></div>
      <h2 style={{ fontFamily:'DM Serif Display, serif', fontSize:26, marginBottom:10 }}>Link expired</h2>
      <p style={{ color:'var(--muted)', fontSize:13, lineHeight:1.7, marginBottom:24 }}>
        This password reset link is invalid or has already been used. Please request a new one from the app.
      </p>
      <a href="trace://request-reset" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'linear-gradient(135deg, var(--accent), var(--accent-light))', color:'#fff', borderRadius:12, padding:'12px 24px', textDecoration:'none', fontSize:13, fontWeight:500, boxShadow:'0 6px 20px rgba(99,102,241,0.35)' }}>
        Open Trace App
      </a>
    </Card>
  );
}

export default ResetPassword