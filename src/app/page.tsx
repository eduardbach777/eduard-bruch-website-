"use client";

import { useEffect } from "react";
import Link from "next/link";

const WORK = [
  { id: "sounddial", n: "01", name: "SoundDial", tag: "Per-App Volume Mixer", plt: "macOS", href: "https://apps.apple.com/app/id6772792641", img: "/apps/sounddial.png", rev: false,
    p: "Independent volume for every app, from the menu bar — profiles, auto-ducking, per-app mute. The mixer macOS never shipped." },
  { id: "stash", n: "02", name: "Stash", tag: "Secret File Vault", plt: "iOS", href: "https://apps.apple.com/app/id6759873487", img: "/apps/stash-v2.png", rev: true,
    p: "An encrypted vault disguised as a calculator. Hide photos, videos & files behind Face ID, with intruder detection." },
  { id: "pulse", n: "03", name: "Pulse", tag: "System Monitor", plt: "macOS", href: "https://apps.apple.com/app/id6761375793", img: "/apps/pulse.png", rev: false,
    p: "CPU, memory, GPU, network, battery & temperature — live in your menu bar, with desktop widgets and clean themes." },
  { id: "doublecalc", n: "04", name: "Double Calculator", tag: "Tax & VAT", plt: "iOS", href: "https://apps.apple.com/app/id6760940001", img: "/apps/double-calculator.png", rev: true,
    p: "Dual-screen calculator with instant VAT/tax for 40+ countries, scientific mode and pinned results." },
  { id: "fisheye", n: "05", name: "Fisheye — WideEye", tag: "Camera", plt: "iOS", href: "https://apps.apple.com/app/id6760895260", img: "/apps/fisheye.png", rev: false,
    p: "Wide, warped, retro fisheye photos & video, straight from your phone — the lens look without the lens." },
];

const GUIDES = [
  { k: "sounddial", h: "Mac audio, fixed", href: "/sounddial/blog", p: "FaceTime too quiet, per-app volume, late-night movie audio — the top traffic driver.", c: "50+ articles" },
  { k: "stash", h: "iPhone privacy", href: "/vault/blog", p: "Hiding photos, secret vaults, Face ID vs passcode — practical, ranking guides.", c: "30+ articles" },
];

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    const onScroll = () => {
      const y = window.scrollY;
      const portal = document.querySelector(".ac-portal") as HTMLElement | null;
      const ht = document.querySelector(".ac-htext") as HTMLElement | null;
      if (portal && ht && y < 1000) {
        portal.style.transform = `scale(${1 + y / 4200})`;
        ht.style.transform = `translateY(${y * 0.26}px)`;
        ht.style.opacity = String(Math.max(0, 1 - y / 600));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="achome">
      {/* HERO */}
      <header className="ac-hero">
        <div className="ac-portal">
          <video className="mir" autoPlay muted loop playsInline><source src="/videos/angel-hero.mp4" type="video/mp4" /></video>
          <video autoPlay muted loop playsInline><source src="/videos/angel-hero.mp4" type="video/mp4" /></video>
        </div>
        <div className="ac-seam" /><div className="ac-vign" />
        <div className="ac-htext">
          <div className="eye">Independent software · Hamburg</div>
          <h1 className="serif">Made <em>to last.</em></h1>
          <p className="sub">A one-person studio crafting native iOS &amp; macOS apps people trust — watched over from first pixel to ship.</p>
          <div className="cta">
            <Link className="btnx g" href="#work">See the work</Link>
            <Link className="btnx o" href="/contact">Get in touch</Link>
          </div>
        </div>
        <div className="down">scroll ↓</div>
      </header>

      {/* MARQUEE */}
      <div className="ac-strip"><div className="run">
        {["SoundDial","Stash","Pulse","Double Calculator","Fisheye","Warden","SoundDial","Stash","Pulse","Double Calculator","Fisheye","Warden"].map((n, i) => (
          <span key={i}><b>{n}</b><span className="sep"> ✦ </span></span>
        ))}
      </div></div>

      {/* ABOUT */}
      <section id="about"><div className="wrapx">
        <div className="ac-about">
          <div className="frame rv">
            <video autoPlay muted loop playsInline><source src="/videos/angel-about.mp4" type="video/mp4" /></video>
            <span className="plq">Angel · Winged Victory</span>
          </div>
          <div className="bio rv">
            <div className="kick">About</div>
            <h2 className="serif">One person, in Hamburg — <em>building software that lasts.</em></h2>
            <p>I&apos;m <b>Eduard Bruch</b>, an independent software developer. I design, build and ship native iOS &amp; macOS apps end to end — the product, the code, the App Store listing, and the multilingual guides that help people find them.</p>
            <p>Six apps are <b>live and earning</b>, read by tens of thousands of people a month — all run solo. I build small, fast, private tools that look after the people who use them.</p>
            <p>That idea has a name now: <b>Angel Company</b> — a guardian for the software you rely on.</p>
            <div className="sign"><span className="g serif">✦</span> Eduard Bruch — Angel Company</div>
          </div>
        </div>
      </div></section>

      {/* WORK */}
      <section id="work"><div className="wrapx">
        <div className="rule rv"><h2 className="serif">Selected work</h2><span className="m">Six apps · live on the App Store</span></div>
        <div className="work">
          {WORK.map((a) => (
            <a key={a.id} id={a.id} className={`item rv${a.rev ? " rev" : ""}`} href={a.href} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="media"><img src={a.img} alt={a.name} /></div>
              <div className="info">
                <div className="top"><span className="idx">{a.n}</span><span className="plt">{a.plt}</span></div>
                <h3 className="serif">{a.name}</h3><div className="tag">{a.tag}</div>
                <p>{a.p}</p><span className="go">App Store →</span>
              </div>
            </a>
          ))}
          <Link id="warden" className="item rev rv" href="/warden/privacy">
            <div className="media wardenbg"><span className="serif" style={{ fontSize: 96, color: "var(--ac-gold)" }}>✦</span></div>
            <div className="info">
              <div className="top"><span className="idx">06</span><span className="plt">iOS · Android · soon</span></div>
              <h3 className="serif">Warden</h3><div className="tag">Family Location &amp; Safety</div>
              <p>A guardian for your family — one shared map, place alerts for home &amp; school, check-in and an SOS button. Privacy-first.</p>
              <span className="go">Learn more →</span>
            </div>
          </Link>
        </div>
      </div></section>

      {/* GUIDES */}
      <section id="guides"><div className="wrapx">
        <div className="rule rv"><h2 className="serif">Guides</h2><span className="m">Indexed in 30+ languages</span></div>
        <div className="g3">
          {GUIDES.map((g) => (
            <Link key={g.k} className="gc rv" href={g.href}>
              <div className="gk">{g.k}</div><h4 className="serif">{g.h}</h4><p>{g.p}</p><div className="gcount">{g.c} →</div>
            </Link>
          ))}
        </div>
      </div></section>

      <style jsx>{`
        .achome { position: relative; }
        .serif { font-family: var(--font-fraunces); }
        .wrapx { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        section { padding: 140px 0; position: relative; }
        .rv { opacity: 0; transform: translateY(24px); transition: opacity 0.9s cubic-bezier(0.2,0.7,0.2,1), transform 0.9s cubic-bezier(0.2,0.7,0.2,1); }
        :global(.rv.in) { opacity: 1 !important; transform: none !important; }
        .ac-hero { position: relative; height: 100vh; min-height: 780px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .ac-portal { position: absolute; inset: 0; z-index: 1; display: flex; align-items: flex-end; justify-content: center; }
        .ac-portal video { height: 104%; width: 48%; object-fit: cover; object-position: right bottom; filter: invert(1) contrast(1.12) brightness(1.05); }
        .ac-portal video.mir { transform: scaleX(-1); }
        .ac-seam { position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 360px; height: 100%; z-index: 2; pointer-events: none; background: radial-gradient(closest-side at 50% 44%, rgba(212,173,94,0.18), transparent 66%); }
        .ac-vign { position: absolute; inset: 0; z-index: 3; pointer-events: none; background: radial-gradient(120% 82% at 50% 42%, transparent 34%, #050506 86%); }
        .ac-htext { position: relative; z-index: 4; text-align: center; padding: 60px 24px 0; max-width: 900px; }
        .ac-htext::before { content: ""; position: absolute; inset: -40px -80px; z-index: -1; background: radial-gradient(closest-side, rgba(5,5,6,0.72), transparent 78%); }
        .eye { font-size: 12.5px; letter-spacing: 0.34em; text-transform: uppercase; color: var(--ac-gold); font-weight: 600; margin-bottom: 26px; }
        h1 { font-family: var(--font-fraunces); font-weight: 500; font-size: clamp(56px, 11vw, 150px); line-height: 0.92; letter-spacing: -0.02em; text-shadow: 0 6px 50px rgba(0,0,0,0.6); }
        h1 em { font-style: italic; }
        .sub { margin-top: 26px; font-size: 19px; color: var(--ac-fg); max-width: 40ch; margin-inline: auto; line-height: 1.6; }
        .cta { margin-top: 38px; display: inline-flex; gap: 14px; }
        .btnx { font-size: 14px; font-weight: 600; padding: 15px 30px; border-radius: 3px; transition: 0.25s; }
        .btnx.g { background: var(--ac-gold); color: #141007; }
        .btnx.g:hover { transform: translateY(-2px); background: #e0bd72; }
        .btnx.o { border: 1px solid var(--ac-line); color: #fff; background: rgba(255,255,255,0.04); }
        .btnx.o:hover { border-color: var(--ac-gold); color: var(--ac-gold); }
        .down { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); z-index: 5; font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--ac-soft); font-family: var(--font-geist-mono); }
        .ac-strip { border-block: 1px solid var(--ac-line); padding: 22px 0; overflow: hidden; white-space: nowrap; background: #08080a; }
        .run { display: inline-block; animation: run 34s linear infinite; font-family: var(--font-fraunces); font-size: 22px; color: var(--ac-soft); }
        .run b { color: var(--ac-gold); font-weight: 500; }
        .run .sep { margin: 0 22px; }
        @keyframes run { to { transform: translateX(-50%); } }
        .ac-about { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 64px; align-items: center; }
        .frame { position: relative; border: 1px solid var(--ac-line); border-radius: 16px; overflow: hidden; background: #0d0d0f; aspect-ratio: 3/4; box-shadow: 0 40px 100px -40px rgba(0,0,0,0.9); }
        .frame video { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.04); }
        .plq { position: absolute; left: 18px; bottom: 16px; font-family: var(--font-geist-mono); font-size: 11px; letter-spacing: 0.1em; color: #0b0b0b; background: rgba(255,255,255,0.82); padding: 5px 10px; border-radius: 3px; }
        .bio .kick { font-size: 12.5px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--ac-gold); font-weight: 600; margin-bottom: 22px; }
        .bio h2 { font-family: var(--font-fraunces); font-weight: 500; font-size: clamp(30px, 3.6vw, 46px); line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 26px; }
        .bio h2 em { font-style: italic; }
        .bio p { color: var(--ac-mut); font-size: 17px; line-height: 1.75; margin-bottom: 20px; max-width: 52ch; }
        .bio p b { color: var(--ac-fg); font-weight: 600; }
        .sign { margin-top: 30px; display: flex; align-items: center; gap: 12px; font-family: var(--font-fraunces); font-size: 20px; }
        .sign .g { color: var(--ac-gold); }
        .rule { display: flex; align-items: baseline; justify-content: space-between; border-top: 1px solid var(--ac-line); padding-top: 26px; margin-bottom: 60px; }
        .rule h2 { font-family: var(--font-fraunces); font-weight: 500; font-size: clamp(32px, 4vw, 52px); }
        .rule .m { font-size: 12.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ac-soft); font-weight: 500; }
        .work { display: flex; flex-direction: column; gap: 24px; }
        .item { display: grid; grid-template-columns: 1.05fr 0.95fr; align-items: stretch; border: 1px solid var(--ac-line); border-radius: 12px; overflow: hidden; background: #0b0b0d; transition: 0.35s; color: inherit; }
        .item:hover { border-color: var(--ac-goldsoft); transform: translateY(-3px); }
        .media { min-height: 400px; display: flex; align-items: center; justify-content: center; padding: 30px; overflow: hidden; background: radial-gradient(130% 130% at 50% 0%, rgba(255,255,255,0.06), #09090b 72%); }
        .media img { max-width: 100%; max-height: 360px; width: auto; object-fit: contain; border-radius: 12px; box-shadow: 0 26px 70px -26px rgba(0,0,0,0.9); transition: 0.5s; }
        .item:hover .media img { transform: translateY(-5px); }
        .wardenbg { background: radial-gradient(120% 120% at 60% 20%, rgba(212,173,94,0.16), #09090b 62%); }
        .item.rev .media { order: 2; }
        .item.rev .info { order: 1; }
        .info { padding: 48px 52px; display: flex; flex-direction: column; justify-content: center; }
        .info .top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .idx { font-family: var(--font-geist-mono); font-size: 13px; color: var(--ac-gold); font-weight: 500; }
        .plt { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ac-gold); border: 1px solid var(--ac-goldsoft); padding: 5px 11px; border-radius: 3px; font-weight: 500; }
        .info h3 { font-family: var(--font-fraunces); font-weight: 500; font-size: 38px; margin-bottom: 6px; }
        .info .tag { font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ac-soft); margin-bottom: 20px; font-weight: 500; }
        .info p { color: var(--ac-mut); font-size: 16px; line-height: 1.65; max-width: 44ch; }
        .info .go { margin-top: 28px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase; color: #fff; font-weight: 600; border-bottom: 2px solid var(--ac-gold); padding-bottom: 5px; align-self: flex-start; }
        .g3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .gc { border: 1px solid var(--ac-line); border-radius: 12px; padding: 38px 32px; transition: 0.3s; color: inherit; }
        .gc:hover { background: #0b0b0d; border-color: var(--ac-goldsoft); }
        .gk { font-family: var(--font-geist-mono); font-size: 12px; color: var(--ac-gold); margin-bottom: 18px; font-weight: 500; }
        .gc h4 { font-family: var(--font-fraunces); font-weight: 500; font-size: 24px; margin-bottom: 10px; }
        .gc p { font-size: 15px; color: var(--ac-mut); line-height: 1.6; }
        .gcount { margin-top: 22px; font-size: 13px; color: var(--ac-soft); font-weight: 500; }
        @media (max-width: 900px) {
          .ac-portal video { width: 76%; }
          .ac-about { grid-template-columns: 1fr; gap: 36px; }
          .frame { max-width: 360px; }
          .item, .item.rev { grid-template-columns: 1fr; }
          .item .media { order: 0 !important; min-height: 280px; }
          .item .info { order: 0 !important; padding: 34px; }
          .g3 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
