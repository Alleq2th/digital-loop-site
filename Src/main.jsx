import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Sphere, Torus, Environment } from '@react-three/drei';
import { ArrowUpRight, ArrowRight, Menu, X, Workflow, Bot, Network, GraduationCap, Check, Zap, Layers3, Sparkles, Mail, MoveUpRight } from 'lucide-react';
import './styles.css';

function Core() {
  const group = useRef();
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
    }
  });
  return <group ref={group}>
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.22}>
      <mesh>
        <icosahedronGeometry args={[1.08, 1]} />
        <MeshTransmissionMaterial backside samples={4} resolution={256} transmission={0.92} thickness={0.8} roughness={0.16} chromaticAberration={0.08} anisotropy={0.25} color="#8abfff" />
      </mesh>
      <mesh scale={0.64}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#1d66d9" emissive="#1457c4" emissiveIntensity={1.3} metalness={0.65} roughness={0.22} />
      </mesh>
      <Torus args={[1.55, 0.012, 12, 180]} rotation={[0.8, 0.1, 0.3]}>
        <meshStandardMaterial color="#69dfff" emissive="#2c9dff" emissiveIntensity={2.1} />
      </Torus>
      <Torus args={[1.78, 0.009, 12, 180]} rotation={[1.15, 0.7, -0.55]}>
        <meshStandardMaterial color="#6e9fff" emissive="#286eff" emissiveIntensity={1.8} />
      </Torus>
      {[[1.55,0.18,0.2],[-1.3,0.65,0.4],[0.1,-1.55,0.2],[0.9,1.15,-0.5]].map((p,i)=><Sphere key={i} position={p} args={[0.09,24,24]}><meshStandardMaterial color="#d4f7ff" emissive="#4acfff" emissiveIntensity={2.4}/></Sphere>)}
    </Float>
  </group>;
}
function HeroVisual() {
  return <div className="hero-art">
    <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
    <div className="art-label label-a"><span className="pulse-dot"/> WORKFLOW ENGINE <b>ACTIVE</b></div>
    <div className="art-label label-b">INTELLIGENCE <span>01 / 04</span></div>
    <Canvas camera={{position:[0,0,5.3],fov:42}} dpr={[1,1.5]}>
      <ambientLight intensity={1.25}/><pointLight position={[4,3,4]} intensity={35} color="#4c9dff"/><pointLight position={[-3,-2,2]} intensity={18} color="#47e3ff"/>
      <Core/><Environment preset="city"/>
    </Canvas>
    <div className="art-caption"><span>FIG. 01</span> A connected system. Built around your business.</div>
  </div>;
}
const services = [
  {n:'01', icon:Workflow, title:'AI & workflow automation', desc:'Remove repetitive work and connect the steps that keep your business moving.', tags:['Process automation','Smart workflows','Task orchestration']},
  {n:'02', icon:Bot, title:'Custom AI assistants & tools', desc:'Purpose-built AI experiences that help teams find answers, create faster and act with clarity.', tags:['AI assistants','Knowledge tools','Internal copilots']},
  {n:'03', icon:Network, title:'Business systems & integrations', desc:'Bring disconnected platforms and information into a more dependable operating system.', tags:['API integrations','Dashboards','Data connections']},
  {n:'04', icon:GraduationCap, title:'AI training & consulting', desc:'Give people the confidence and practical knowledge to use AI responsibly at work.', tags:['Team training','AI strategy','Workflow discovery']}
];
const demos = [
  {id:'01',type:'CONCEPT DEMONSTRATION',name:'Intelligent Operations Hub',desc:'A central workspace concept for tracking requests, workflows and operational activity.',visual:'hub',stack:'React · Workflow logic · Dashboard UI'},
  {id:'02',type:'CONCEPT DEMONSTRATION',name:'AI Knowledge Assistant',desc:'A focused assistant concept that helps a team search internal knowledge and get useful answers.',visual:'assistant',stack:'LLM integration · Retrieval · Chat interface'},
  {id:'03',type:'CONCEPT DEMONSTRATION',name:'Automated Lead Journey',desc:'A connected journey that captures an enquiry, organises the information and triggers the next step.',visual:'journey',stack:'Forms · Automation · Integrations'}
];
function DemoVisual({kind}) {
 if(kind==='hub') return <div className="mini-dashboard"><div className="mini-top"><i/><i/><i/><span>OPERATIONS / OVERVIEW</span></div><div className="mini-kpis"><b>24<small>ACTIVE FLOWS</small></b><b>08<small>OPEN REQUESTS</small></b><b>96%<small>HEALTH</small></b></div><div className="mini-bars">{[55,78,44,88,64,95,72].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div><div className="mini-line"/></div>;
 if(kind==='assistant') return <div className="assistant-ui"><div className="assistant-orb"><Sparkles size={28}/></div><span>KNOWLEDGE ASSISTANT</span><b>What can I help you find?</b><div className="fake-input">Ask a question about your workspace <ArrowUpRight size={14}/></div><div className="suggestions"><i>Project updates</i><i>Team processes</i></div></div>;
 return <div className="flow-ui"><div className="flow-node"><Mail/><b>New enquiry</b><small>FORM SUBMITTED</small></div><div className="flow-connector"/><div className="flow-node active"><Zap/><b>Qualify lead</b><small>AI PROCESSING</small></div><div className="flow-connector"/><div className="flow-node"><Check/><b>Notify team</b><small>NEXT ACTION</small></div></div>;
}
function App() {
 const [menu,setMenu]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>24);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[]);
 const close=()=>setMenu(false);
 return <div className="site-shell">
  <header className={`nav ${scrolled?'nav-solid':''}`}>
   <a href="#top" className="wordmark" onClick={close}><span className="mark"><i/><i/><i/></span><span>DIGITAL<span className="word-light">LOOP</span></span></a>
   <nav className={menu?'nav-links open':'nav-links'}><a href="#services" onClick={close}>Services</a><a href="#approach" onClick={close}>Approach</a><a href="#work" onClick={close}>Demonstrations</a><a href="#about" onClick={close}>About</a><a className="nav-contact" href="#contact" onClick={close}>Let's talk <ArrowUpRight size={15}/></a></nav>
   <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
  </header>
  <main id="top">
   <section className="hero section-wrap">
    <div className="hero-copy">
     <div className="eyebrow"><span className="eyebrow-line"/> INTELLIGENT BUSINESS SYSTEMS</div>
     <h1>Turn manual work into <em>intelligent</em> systems.</h1>
     <p className="hero-sub">We design and build AI-powered systems that help businesses eliminate repetitive work, streamline operations and scale with confidence.</p>
     <div className="hero-actions"><a className="btn btn-primary" href="#contact">Start a conversation <ArrowUpRight size={17}/></a><a className="text-link" href="#services">Explore our services <ArrowRight size={16}/></a></div>
     <div className="hero-proof"><span><i/> AI AUTOMATION</span><span><i/> CUSTOM SYSTEMS</span><span><i/> BUSINESS TRANSFORMATION</span></div>
    </div>
    <HeroVisual/>
    <div className="hero-bottom"><span>INDEPENDENT THINKING. INTELLIGENT EXECUTION.</span><a href="#problem">SCROLL TO EXPLORE <span>↓</span></a></div>
   </section>
   <section className="problem section-wrap" id="problem">
    <div className="section-kicker">01 / THE OPPORTUNITY</div>
    <div className="problem-grid"><div><h2>Your business shouldn't have to work <em>this hard.</em></h2></div><div className="problem-copy"><p>Too much time disappears into repetitive tasks, disconnected tools and processes that depend on someone remembering every next step.</p><p>Those small inefficiencies add up. We help turn scattered work into connected systems that give people more room to focus on what matters.</p><a className="inline-link" href="#services">A smarter way to work <ArrowUpRight size={16}/></a></div></div>
    <div className="disconnect-visual"><div className="disconnected"><span className="float-card card-one"><i className="tiny-icon">✳</i> MANUAL TASKS <b>Repeated</b></span><span className="float-card card-two"><i className="tiny-icon">▤</i> SPREADSHEETS <b>Scattered</b></span><span className="float-card card-three"><i className="tiny-icon">↗</i> FOLLOW-UPS <b>Delayed</b></span><span className="float-card card-four"><i className="tiny-icon">◈</i> DATA <b>Disconnected</b></span></div><div className="connect-line"><span/><span/><span/><span/></div><div className="connected-core"><div className="core-ring"><Layers3 size={36}/></div><b>ONE CONNECTED SYSTEM</b><small>LESS FRICTION. MORE MOMENTUM.</small></div><div className="visual-note">FROM FRAGMENTED WORK <ArrowRight size={13}/> CONNECTED OPERATIONS</div></div>
   </section>
   <section className="services section-wrap" id="services">
    <div className="section-kicker">02 / WHAT WE DO</div><div className="section-heading"><h2>Practical intelligence.<br/><em>Built into the work.</em></h2><p>Technology should solve real problems. We focus on useful systems that fit the way your business actually operates.</p></div>
    <div className="service-list">{services.map(s=><article className="service-row" key={s.n}><span className="service-num">{s.n}</span><div className="service-icon"><s.icon size={23}/></div><div className="service-main"><h3>{s.title}</h3><p>{s.desc}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div></div><a href="#contact" className="round-arrow" aria-label={`Enquire about ${s.title}`}><ArrowUpRight/></a></article>)}</div>
   </section>
   <section className="approach section-wrap" id="approach">
    <div className="section-kicker">03 / HOW WE WORK</div><div className="approach-head"><h2>From messy process<br/>to <em>meaningful progress.</em></h2><p>Good automation starts with understanding the work, not rushing to add another tool.</p></div>
    <div className="steps">{[['01','Discover','Understand the people, process and problem.'],['02','Design','Map a practical solution around the real workflow.'],['03','Build','Develop, connect and test the system.'],['04','Deploy','Put it into use with a clear handover.'],['05','Improve','Refine the experience as needs evolve.']].map(([n,t,d])=><div className="step" key={n}><span>{n}</span><div className="step-dot"/><h3>{t}</h3><p>{d}</p></div>)}</div>
   </section>
   <section className="work section-wrap" id="work">
    <div className="section-kicker">04 / SELECTED CONCEPTS</div><div className="section-heading"><h2>See what intelligent<br/><em>systems can look like.</em></h2><p>These are concept demonstrations created to show possible solutions and the quality of execution—not claims of completed client deployments.</p></div>
    <div className="demo-grid">{demos.map(d=><article className="demo-card" key={d.id}><div className={`demo-visual ${d.visual}`}><DemoVisual kind={d.visual}/><span className="demo-id">{d.id} / CONCEPT</span></div><div className="demo-info"><span className="demo-type">{d.type}</span><h3>{d.name}</h3><p>{d.desc}</p><small>{d.stack}</small></div></article>)}</div>
   </section>
   <section className="about section-wrap" id="about"><div className="about-panel"><div className="section-kicker">05 / THE DIGITAL LOOP MINDSET</div><div className="about-grid"><h2>Less busywork.<br/><em>More possibility.</em></h2><div><p>Digital Loop is built around a simple belief: the best technology makes work feel clearer, easier and more human.</p><p>We bring together automation, thoughtful product design and practical AI to help teams move from scattered processes to systems they can rely on.</p><div className="about-points"><span><Check size={15}/> Built around real workflows</span><span><Check size={15}/> Designed for people, not hype</span><span><Check size={15}/> Focused on useful outcomes</span></div></div></div></div></section>
   <section className="contact section-wrap" id="contact"><div className="section-kicker">06 / START A CONVERSATION</div><div className="contact-grid"><div><h2>Have a process<br/>worth <em>improving?</em></h2><p>Tell us what is slowing your team down. Let's explore what a smarter system could look like.</p></div><form className="contact-form" onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);const subject=encodeURIComponent('Digital Loop enquiry — '+data.get('interest'));const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nInterested in: ${data.get('interest')}\n\nChallenge:\n${data.get('challenge')}`);window.location.href=`mailto:hello@digital-loop.example?subject=${subject}&body=${body}`;}}><div className="form-row"><label>Your name<input name="name" required placeholder="Full name"/></label><label>Business email<input name="email" type="email" required placeholder="you@company.com"/></label></div><label>What are you interested in?<select name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>AI & workflow automation</option><option>Custom AI assistants & tools</option><option>Business systems & integrations</option><option>AI training & consulting</option><option>Not sure yet</option></select></label><label>What would you like to improve?<textarea name="challenge" required rows="4" placeholder="Briefly describe the process, challenge or idea..."/></label><label className="company-label">Company (optional)<input name="company" placeholder="Company name"/></label><button className="btn btn-primary submit-btn" type="submit">Send enquiry <ArrowUpRight size={17}/></button><small className="form-note">The email recipient is a setup placeholder and must be replaced before launch.</small></form></div></section>
  </main>
  <footer className="footer section-wrap"><a href="#top" className="wordmark"><span className="mark"><i/><i/><i/></span><span>DIGITAL<span className="word-light">LOOP</span></span></a><span>INTELLIGENT BUSINESS SYSTEMS</span><a href="#top" className="back-top">BACK TO TOP ↑</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Digital Loop. Built for better ways of working.</span><span>DESIGN · AUTOMATION · INTELLIGENCE</span></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
