function Privacy({ setPage }) {
  const sections = [
    {
      title: 'Information We Collect: Location',
      body: `Trace requires location services in order to keep track of your movement as you ski. All this data is initially only held locally, and is only sent to our database at the end of your day. Our database is securely held by multiple policies in order to keep your data safe, private and unidentifiable.`,
    },
    {
      title: 'Information We Collect: Account Information',
      body: `Trace also requires an account in order to keep track of your days. The account you create with Trace is held securely within a backend that prioritizes your privacy. Trace will never share your email or password information with third parties. Your account information is also held locally with Apple's Keychain system, which is fully encrypted and only utilized to quickly log you in when opening the app.`,
    },
    {
      title: 'How Information Is Used',
      body: `Information collected is used solely to improve the app experience. We use anonymized analytics to understand how features are used, crash data to fix bugs faster, and account data to sync your preferences across devices. We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
    },
    {
      title: 'Data Storage',
      body: `Your data is stored securely using industry-standard encryption. Local data remains on your device unless you opt into cloud sync. Any data transmitted to our servers is encrypted in transit using TLS and at rest using AES-256.`,
    },
    {
      title: 'Third-Party Services',
      body: `We may use trusted third-party services to help operate the app, including crash reporting (e.g. Sentry) and anonymized analytics. These services are contractually bound to protect your data and may not use it for any purpose other than helping us operate Trace.`,
    },
    {
      title: 'Contact',
      body: `For any privacy-related questions or requests, including data deletion, please reach out at privacy@trace.app. We respond to all requests within 72 hours.`,
    },
  ];

  return (
    <div style={{ minHeight:'100vh', paddingTop:60 }}>
      <div style={{ maxWidth:660, margin:'0 auto', padding:'clamp(60px,10vh,120px) clamp(20px,5vw,40px)' }}>

        <div className="animate-fade-up delay-1" style={{ marginBottom:12 }}>
          <span style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--accent)', fontWeight:500 }}>Legal</span>
        </div>

        <h1 className="animate-fade-up delay-2" style={{ fontFamily:'DM Serif Display, serif', fontSize:'clamp(32px,4vw,48px)', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:8 }}>
          Privacy Policy
        </h1>

        <p className="animate-fade-up delay-3" style={{ color:'#52525b', fontSize:12, marginBottom:48, borderBottom:'1px solid rgba(255,255,255,0.05)', paddingBottom:24 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' })}
        </p>

        <div style={{ display:'flex', flexDirection:'column' }}>
          {sections.map((s, i) => (
            <div key={i} className={`animate-fade-up delay-${Math.min(i+3,6)}`} style={{ padding:'28px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontFamily:'DM Serif Display, serif', fontSize:17, marginBottom:12, color:'#e4e4e7', display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--accent)', display:'inline-block', flexShrink:0 }}/>
                {s.title}
              </h3>
              <p style={{ color:'var(--muted)', lineHeight:1.8, fontSize:14, paddingLeft:16 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop:48, display:'flex', gap:16, flexWrap:'wrap' }}>
          <button onClick={() => setPage('home')} style={{ background:'none', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:'9px 18px', color:'#71717a', fontSize:13, cursor:'pointer', fontFamily:'DM Sans, sans-serif', transition:'color 0.2s, border-color 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.color='var(--text)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.25)'; }}
            onMouseOut={e => { e.currentTarget.style.color='#71717a'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; }}
          >← Back home</button>
        </div>
      </div>
    </div>
  );
}

export default Privacy