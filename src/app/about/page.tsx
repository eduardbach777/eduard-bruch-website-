"use client";

import Link from "next/link";

const FACTS = [
  ["Role", "Independent software developer"],
  ["Based", "Hamburg, Germany"],
  ["Platforms", "Native iOS & macOS"],
  ["Live apps", "6, shipped solo"],
];

const PRINCIPLES = [
  ["Small & fast", "Focused apps that do one thing exceptionally — no bloat, no subscriptions you'll regret."],
  ["Private by default", "No ads, no tracking SDKs, no data games. The app works for you, not on you."],
  ["End to end", "Product, code, design, App Store, and the multilingual guides — one person, the whole stack."],
  ["Made to last", "Software worth keeping, maintained and improved long after launch."],
];

export default function AboutPage() {
  return (
    <div className="acabout">
      <section className="head">
        <div className="wrapx">
          <div className="grid">
            <div className="frame">
              <video autoPlay muted loop playsInline><source src="/videos/angel-about.mp4" type="video/mp4" /></video>
              <span className="plq">Angel · Winged Victory</span>
            </div>
            <div className="intro">
              <div className="kick">About</div>
              <h1 className="serif">Eduard Bruch</h1>
              <p className="lead">An independent software developer in Hamburg — building native iOS &amp; macOS apps, and the writing that helps people find them.</p>
              <div className="facts">
                {FACTS.map(([k, v]) => (
                  <div className="fact" key={k}><span className="fk">{k}</span><span className="fv">{v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="body">
        <div className="wrapx narrow">
          <p>I design, build and ship the whole thing — product, code, the App Store listing, and the multilingual guides that bring people in. Six apps are live and earning, read by tens of thousands of people a month, all run by one person.</p>
          <p>I care about <b>small, fast, private</b> software that respects the people who use it. Tools you reach for every day and never think about — because they just work.</p>
          <p>That idea has a name now: <b>Angel Company</b> — a guardian for the software you rely on. Same person, same care; a home for everything I build next.</p>

          <div className="principles">
            {PRINCIPLES.map(([h, p]) => (
              <div className="pr" key={h}><h3 className="serif">{h}</h3><p>{p}</p></div>
            ))}
          </div>

          <div className="cta">
            <Link className="btnx g" href="/#work">See the work</Link>
            <Link className="btnx o" href="/contact">Get in touch</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .acabout { position: relative; }
        .serif { font-family: var(--font-fraunces); }
        .wrapx { max-width: 1180px; margin: 0 auto; padding: 0 40px; }
        .wrapx.narrow { max-width: 760px; }
        .head { padding: 150px 0 90px; }
        .grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 60px; align-items: center; }
        .frame { position: relative; border: 1px solid var(--ac-line); border-radius: 16px; overflow: hidden; background: #0d0d0f; aspect-ratio: 3/4; box-shadow: 0 40px 100px -40px rgba(0,0,0,0.9); }
        .frame video { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.04); }
        .plq { position: absolute; left: 18px; bottom: 16px; font-family: var(--font-geist-mono); font-size: 11px; letter-spacing: 0.1em; color: #0b0b0b; background: rgba(255,255,255,0.82); padding: 5px 10px; border-radius: 3px; }
        .kick { font-size: 12.5px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--ac-gold); font-weight: 600; margin-bottom: 22px; }
        h1 { font-family: var(--font-fraunces); font-weight: 500; font-size: clamp(44px, 6vw, 76px); letter-spacing: -0.02em; line-height: 1; }
        .lead { margin-top: 22px; font-size: 20px; color: var(--ac-fg); line-height: 1.6; max-width: 48ch; }
        .facts { margin-top: 34px; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--ac-line); border: 1px solid var(--ac-line); border-radius: 12px; overflow: hidden; }
        .fact { background: var(--ac-bg); padding: 18px 20px; display: flex; flex-direction: column; gap: 4px; }
        .fk { font-family: var(--font-geist-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ac-gold); }
        .fv { font-size: 15px; color: var(--ac-fg); }
        .body { padding: 20px 0 140px; }
        .body p { font-size: 19px; line-height: 1.8; color: var(--ac-mut); margin-bottom: 24px; }
        .body p b { color: var(--ac-fg); font-weight: 600; }
        .principles { margin: 56px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--ac-line); border: 1px solid var(--ac-line); border-radius: 14px; overflow: hidden; }
        .pr { background: var(--ac-bg); padding: 32px 30px; }
        .pr h3 { font-family: var(--font-fraunces); font-weight: 500; font-size: 22px; color: var(--ac-fg); margin-bottom: 10px; }
        .pr p { font-size: 15px; line-height: 1.6; color: var(--ac-soft); margin: 0; }
        .cta { margin-top: 40px; display: flex; gap: 14px; }
        .btnx { font-size: 14px; font-weight: 600; padding: 15px 30px; border-radius: 3px; transition: 0.25s; }
        .btnx.g { background: var(--ac-gold); color: #141007; }
        .btnx.g:hover { transform: translateY(-2px); background: #e0bd72; }
        .btnx.o { border: 1px solid var(--ac-line); color: #fff; background: rgba(255,255,255,0.04); }
        .btnx.o:hover { border-color: var(--ac-gold); color: var(--ac-gold); }
        @media (max-width: 860px) {
          .grid { grid-template-columns: 1fr; gap: 36px; }
          .frame { max-width: 360px; }
          .principles { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
