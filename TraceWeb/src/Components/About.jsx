// import { useState } from 'react'

function About({ setPage }) {
  const cards = [
    {
      title: 'What is Trace?',
      body: 'Trace was designed by an avid group of skiers with the goal of helping winter athletes understand what they do on the mountain. Trace tracks your movements and analyzes it, assisting by tracking and analyzing your skiing sessions.',
    },
    {
      title: 'Our Mission',
      body: 'We believe the best tools disappear into the background. Our mission is to build software that is fast, simple, and genuinely enjoyable to use — software that respects your attention.',
    },
    { title: 'Get in Touch', contact: true },
  ];

  return (
    <div style={{ minHeight:'100vh', paddingTop:60 }}>
      <div style={{ maxWidth:640, margin:'0 auto', padding:'clamp(60px,10vh,120px) clamp(20px,5vw,40px)' }}>

        <div className="animate-fade-up delay-1" style={{ marginBottom:12 }}>
          <span style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--accent)', fontWeight:500 }}>About</span>
        </div>

        <h1 className="animate-fade-up delay-2" style={{ fontFamily:'DM Serif Display, serif', fontSize:'clamp(32px,4vw,52px)', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:40 }}>
          Built for people<br/>
          <em style={{ fontStyle:'italic', color:'var(--accent-light)' }}>who love the mountain.</em>
        </h1>

        <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
          {cards.map((s, i) => (
            <div key={i} className={`animate-fade-up delay-${i+3}`} style={{ padding:'28px 32px', background:'rgba(255,255,255,0.025)', border:'1px solid var(--border)', borderRadius:18 }}>
              <h3 style={{ fontFamily:'DM Serif Display, serif', fontSize:18, marginBottom:12, color:'#e4e4e7' }}>{s.title}</h3>
              {s.body && <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:14 }}>{s.body}</p>}
              {s.contact && (
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  <a href="mailto:hello@trace.app" style={{ color:'var(--accent-light)', fontSize:14, textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>
                    <span style={{ width:28, height:28, borderRadius:8, background:'rgba(99,102,241,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent-light)' }}>
                      <Icons.Mail />
                    </span>
                    hello@trace.app
                  </a>
                  <a href="#" style={{ color:'#71717a', fontSize:13, textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>
                    <span style={{ width:28, height:28, borderRadius:8, background:'rgba(255,255,255,0.04)', display:'flex', alignItems:'center', justifyContent:'center', color:'#71717a' }}>
                      <Icons.Support />
                    </span>
                    Support Center
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop:48, borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:28 }}>
          <button onClick={() => setPage('home')} style={{ background:'none', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:'9px 18px', color:'#71717a', fontSize:13, cursor:'pointer', fontFamily:'DM Sans, sans-serif', transition:'color 0.2s, border-color 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.color='var(--text)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.25)'; }}
            onMouseOut={e => { e.currentTarget.style.color='#71717a'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; }}
          >← Back home</button>
        </div>
      </div>
    </div>
  );
}

export default About