function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const isHidden = page === 'reset-password';
  if (isHidden) return null;

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:1000,
      padding:'0 clamp(20px,5vw,80px)', height:60,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background: scrolled ? 'rgba(15,15,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition:'background 0.4s ease, border-color 0.4s ease',
    }}>
      <button onClick={() => setPage('home')} style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:10 }}>
        <div style={{
          width:30, height:30, borderRadius:8, flexShrink:0,
          background:'linear-gradient(135deg, #6366f1, #818cf8)',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 4px 14px rgba(99,102,241,0.4)',
        }}>
          <img
            src="src/assets/images/TraceMountain.png"
            alt="Trace logo"
            style={{ width:30, height:30, borderRadius:8, objectFit:'cover', flexShrink:0 }}
          />
        </div>
        <span style={{ fontFamily:'DM Serif Display, serif', fontSize:18, color:'var(--text)', letterSpacing:'-0.01em' }}>Trace</span>
      </button>

      <div style={{ display:'flex', gap:32, alignItems:'center' }}>
        {['about','privacy'].map(p => (
          <button key={p} onClick={() => setPage(p)} style={{
            background:'none', border:'none', cursor:'pointer',
            color: page === p ? 'var(--text)' : 'var(--muted)',
            fontSize:13, fontFamily:'DM Sans, sans-serif', fontWeight:400,
            letterSpacing:'0.02em', textTransform:'capitalize',
            transition:'color 0.2s', padding:'4px 0',
            borderBottom: page === p ? '1px solid var(--accent)' : '1px solid transparent',
          }}>{p}</button>
        ))}
      </div>
    </nav>
  );
}

export default Nav
