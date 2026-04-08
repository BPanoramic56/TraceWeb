const screens = [
  {
    bg: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#6366f1', label: 'Dashboard',
    items: [
      { w:'60%', h:10, top:18, left:18, opacity:1 },
      { w:'40%', h:8,  top:36, left:18, opacity:0.5 },
      { w:'85%', h:56, top:60, left:'7.5%', opacity:1, card:true, accent:'#6366f1' },
      { w:'38%', h:44, top:130, left:18,   opacity:1, card:true, accent:'#22d3ee' },
      { w:'38%', h:44, top:130, right:18,  opacity:1, card:true, accent:'#a78bfa' },
    ]
  },
  {
    bg: 'linear-gradient(145deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    accent: '#22d3ee', label: 'Analytics',
    items: [
      { w:'55%', h:10,  top:18,  left:18,   opacity:1 },
      { w:'80%', h:100, top:44,  left:'10%', opacity:1, card:true, accent:'#22d3ee', chart:true },
      { w:'80%', h:36,  top:158, left:'10%', opacity:1, card:true, accent:'#6366f1' },
      { w:'80%', h:36,  top:204, left:'10%', opacity:1, card:true, accent:'#f59e0b' },
    ]
  },
  {
    bg: 'linear-gradient(145deg, #1a0533 0%, #2d1b69 50%, #11052c 100%)',
    accent: '#a78bfa', label: 'Routes',
    items: [
      { w:'45%', h:10,  top:18, left:18,   opacity:1 },
      { w:'85%', h:180, top:44, left:'7.5%', opacity:1, card:true, accent:'#a78bfa', list:true },
    ]
  }
];

function PhoneMockup({ screen = 0 }) {
  const s = screens[screen];
  return (
    <div style={{
      width:220, height:460, borderRadius:38,
      background:'#111',
      border:'2px solid rgba(255,255,255,0.12)',
      boxShadow:`0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px ${s.accent}22`,
      position:'relative', overflow:'hidden', flexShrink:0,
    }}>
      <div style={{ position:'absolute', inset:2, borderRadius:36, background:s.bg, overflow:'hidden' }}>
        {/* Status bar */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 18px 6px', fontSize:9, color:'rgba(255,255,255,0.6)' }}>
          <span>9:41</span>
          <div style={{ display:'flex', gap:4, alignItems:'center' }}>
            <div style={{ width:12, height:6, border:'1px solid rgba(255,255,255,0.5)', borderRadius:2, position:'relative' }}>
              <div style={{ position:'absolute', inset:'1px', right:'3px', background:'rgba(255,255,255,0.7)', borderRadius:1 }}/>
            </div>
          </div>
        </div>
        {s.items.map((item, i) => (
          <div key={i} style={{
            position:'absolute',
            width:item.w, height:item.h,
            top:item.top,
            left:item.left !== undefined ? item.left : 'auto',
            right:item.right !== undefined ? item.right : 'auto',
            borderRadius:item.card ? 14 : 6,
            background:item.card
              ? 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
              : `rgba(255,255,255,${item.opacity * 0.7})`,
            border:item.card ? '1px solid rgba(255,255,255,0.08)' : 'none',
            overflow:'hidden',
          }}>
            {item.card && item.accent && (
              <div style={{ position:'absolute', top:10, left:10, width:28, height:28, borderRadius:8, background:`${item.accent}33`, border:`1px solid ${item.accent}55` }}/>
            )}
            {item.chart && (
              <div style={{ position:'absolute', bottom:10, left:10, right:10, display:'flex', alignItems:'flex-end', gap:4, height:50 }}>
                {[0.4,0.7,0.5,0.9,0.6,0.8,1,0.7].map((h, j) => (
                  <div key={j} style={{ flex:1, borderRadius:'3px 3px 0 0', height:`${h*100}%`, background: j===6 ? s.accent : `${s.accent}44` }}/>
                ))}
              </div>
            )}
            {item.list && (
              <div style={{ padding:'44px 14px 14px', display:'flex', flexDirection:'column', gap:10 }}>
                {[1,2,3,4].map(j => (
                  <div key={j} style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:28, height:28, borderRadius:8, background:'rgba(255,255,255,0.08)', flexShrink:0 }}/>
                    <div style={{ flex:1 }}>
                      <div style={{ height:7, background:'rgba(255,255,255,0.4)', borderRadius:4, width:`${60+j*10}%`, marginBottom:4 }}/>
                      <div style={{ height:5, background:'rgba(255,255,255,0.15)', borderRadius:4, width:'50%' }}/>
                    </div>
                    <div style={{ width:16, height:16, borderRadius:4, background:'rgba(255,255,255,0.05)' }}/>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Notch */}
      <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:90, height:28, background:'#111', borderRadius:'0 0 20px 20px', zIndex:10 }}/>
      {/* Home indicator */}
      <div style={{ position:'absolute', bottom:8, left:'50%', transform:'translateX(-50%)', width:80, height:4, borderRadius:2, background:'rgba(255,255,255,0.25)', zIndex:10 }}/>
    </div>
  );
}

export default PhoneMockup