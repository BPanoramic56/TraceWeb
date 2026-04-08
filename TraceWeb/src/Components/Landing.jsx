import { useState } from 'react'

function Landing({ setPage }) {
  const [activeScreen, setActiveScreen] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveScreen(s => (s+1) % screens.length), 3000);
    return () => clearInterval(t);
  }, []);

  const features = [
    { Icon: Icons.Bolt,     text: 'Lightning-fast interface with zero latency' },
    { Icon: Icons.Sparkle,  text: 'Clean, minimal design that gets out of your way' },
    { Icon: Icons.Mountain, text: 'Built exclusively for iOS — native and beautiful' },
  ];

  return (
    <div style={{ minHeight:'100vh', paddingTop:60 }}>
      <section style={{
        minHeight:'calc(100vh - 60px)',
        display:'flex', alignItems:'center',
        padding:'clamp(40px,8vh,100px) clamp(20px,5vw,80px)',
        position:'relative', overflow:'hidden',
      }}>
        {/* Glows */}
        <div style={{ position:'absolute', top:'10%', right:'5%', width:'50vw', height:'60vh', background:'radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:'10%', left:'5%', width:'30vw', height:'30vh', background:'radial-gradient(ellipse at center, rgba(129,140,248,0.06) 0%, transparent 70%)', pointerEvents:'none' }}/>

        <div style={{ display:'flex', alignItems:'center', gap:'clamp(40px,6vw,100px)', width:'100%', maxWidth:1100, margin:'0 auto', flexWrap:'wrap' }}>
          {/* Left */}
          <div style={{ flex:'1 1 340px', minWidth:0 }}>
            {/* Badge */}
            <div className="animate-fade-up delay-1" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:100, padding:'5px 14px', marginBottom:28 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--accent)', animation:'pulse-dot 2s ease-in-out infinite' }}/>
              <span style={{ fontSize:11, color:'var(--accent-light)', letterSpacing:'0.08em', textTransform:'uppercase', fontWeight:500 }}>Coming Soon to the App Store</span>
            </div>

            <h1 className="animate-fade-up delay-2" style={{ fontFamily:'DM Serif Display, serif', fontSize:'clamp(38px,5.5vw,72px)', lineHeight:1.05, letterSpacing:'-0.03em', color:'var(--text)', marginBottom:20 }}>
              When Stats<br/>
              <span style={{ background:'linear-gradient(90deg, #a78bfa, var(--accent-light), var(--accent))', backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'shimmer 6s linear infinite reverse' }}>
                Meet Snow.
              </span>
            </h1>

            <p className="animate-fade-up delay-3" style={{ fontSize:'clamp(15px,1.8vw,17px)', color:'var(--muted)', lineHeight:1.7, maxWidth:420, marginBottom:32 }}>
              Track, Analyze, Trace. Built exclusively for iPhone, designed around how you ski.
            </p>

            {/* Features */}
            <ul className="animate-fade-up delay-4" style={{ listStyle:'none', marginBottom:40, display:'flex', flexDirection:'column', gap:12 }}>
              {features.map(({ Icon, text }) => (
                <li key={text} style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ width:28, height:28, borderRadius:8, background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.2)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'var(--accent-light)' }}>
                    <Icon />
                  </span>
                  <span style={{ fontSize:14, color:'#d4d4d8' }}>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="animate-fade-up delay-5" style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              {/*ACTIVATED BUTTON - DON'T USE UNTIL APP IS IN THE STORE*/}
              {/*<button style={{ display:'flex', alignItems:'center', gap:10, background:'linear-gradient(135deg, var(--accent), var(--accent-light))', border:'none', borderRadius:14, padding:'14px 28px', color:'#fff', fontSize:14, fontWeight:500, cursor:'pointer', fontFamily:'DM Sans, sans-serif', boxShadow:'0 8px 30px rgba(99,102,241,0.4)', transition:'transform 0.2s, box-shadow 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(99,102,241,0.5)'; }}
                onMouseOut={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 30px rgba(99,102,241,0.4)'; }}
              >
                <Icons.Apple />
                Download on the App Store
              </button>*/}

              {/*DEACTIVATED BUTTON*/}
              <button style={{ display:'flex', alignItems:'center', gap:10, background:'linear-gradient(135deg, var(--deactivate), var(--deactivate))', border:'none', borderRadius:14, padding:'14px 28px', color:'#fff', fontSize:14, fontWeight:500, cursor:'default', fontFamily:'DM Sans, sans-serif'}}>
                <Icons.Apple />
                Download on the App Store (Coming Soon)
              </button>

              <button style={{ display:'flex', alignItems:'center', gap:8, background:'transparent', border:'1px solid rgba(255,255,255,0.12)', borderRadius:14, padding:'14px 24px', color:'var(--muted)', fontSize:13, fontWeight:400, cursor:'pointer', fontFamily:'DM Sans, sans-serif', transition:'color 0.2s, border-color 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.color='var(--text)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'; }}
                onMouseOut={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; }}
                onClick={() => setPage('about')}
              >
                See how it works →
              </button>
            </div>
          </div>

          {/* Right – phone */}
          <div className="animate-fade-in delay-3" style={{ flex:'0 0 auto', display:'flex', flexDirection:'column', alignItems:'center', gap:24 }}>
            <div className="animate-float">
              <PhoneMockup screen={activeScreen} />
            </div>
            {/* Dots */}
            <div style={{ display:'flex', gap:8 }}>
              {screens.map((_, i) => (
                <button key={i} onClick={() => setActiveScreen(i)} style={{ width:i===activeScreen ? 20 : 6, height:6, borderRadius:3, border:'none', background:i===activeScreen ? 'var(--accent)' : 'rgba(255,255,255,0.2)', cursor:'pointer', transition:'all 0.3s ease' }}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height:1, background:'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)', margin:'0 clamp(20px,5vw,80px)' }}/>

      <footer style={{ padding:'28px clamp(20px,5vw,80px)', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12, fontSize:12 }}>
        <span style={{ fontFamily:'DM Serif Display, serif', color:'#52525b' }}>Trace © {new Date().getFullYear()}</span>
        <div style={{ display:'flex', gap:24 }}>
          {['about','privacy'].map(p => (
            <button key={p} onClick={() => setPage(p)} style={{ background:'none', border:'none', cursor:'pointer', color:'#52525b', fontSize:12, textTransform:'capitalize', fontFamily:'DM Sans, sans-serif', transition:'color 0.2s' }}
              onMouseOver={e => e.currentTarget.style.color='var(--muted)'}
              onMouseOut={e => e.currentTarget.style.color='#52525b'}
            >{p}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Landing