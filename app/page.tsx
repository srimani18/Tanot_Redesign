'use client';

import { useState } from 'react';

type Service = { number: string; title: string; description: string; link: string; icon: string; featured?: boolean };
type FAQ = { question: string; answer: string };

const services: Service[] = [
  { number: '01 / CORE', title: 'Authority & link building', description: 'Earn relevant, editorial backlinks that strengthen authority and support rankings that matter to your business.', link: 'Explore link building', icon: '↗', featured: true },
  { number: '02', title: 'Technical SEO', description: 'Remove crawl, indexing, structure, and performance barriers so search engines and people can find their way.', link: 'Explore technical SEO', icon: '⌘' },
  { number: '03', title: 'AI search visibility', description: 'Prepare useful, structured content for discovery across search experiences powered by AI.', link: 'Explore AI SEO', icon: '✳' },
  { number: '04', title: 'Local SEO', description: 'Improve local discovery, trust, and conversion with a consistent presence across the places customers search.', link: 'Explore local SEO', icon: '◎' },
  { number: '05', title: 'SaaS SEO', description: 'Connect product-led search intent with comparison pages, solution content, and qualified pipeline.', link: 'Explore SaaS SEO', icon: '▦' },
  { number: '06', title: 'Content strategy', description: 'Build topical depth with content that answers real questions and supports decisions at every stage.', link: 'Explore content', icon: '✎' },
];

const faqs: FAQ[] = [
  { question: 'How soon can SEO start producing results?', answer: 'Timelines depend on your starting point, market, and the work required. Many campaigns need several months to show meaningful movement; we’ll set realistic milestones after reviewing your site.' },
  { question: 'How do you measure success?', answer: 'We agree on measures connected to your goals—such as qualified organic leads, commercial keyword visibility, conversions, and pipeline contribution—alongside useful diagnostic metrics.' },
  { question: 'Can you work with our in-house team or agency?', answer: 'Yes. Scope and collaboration can be shaped around your existing team, workflows, approval process, and reporting needs.' },
  { question: 'What makes your link building approach different?', answer: 'The focus is relevance, editorial quality, clear approvals, and transparent reporting—not simply maximizing link volume.' },
];

const steps = [
  { number: '01', title: 'Understand the opportunity', description: 'We learn your market, commercial goals, current performance, and the constraints holding growth back.' },
  { number: '02', title: 'Build the right plan', description: 'We prioritize the highest-impact work, define success measures, and agree on a realistic roadmap.' },
  { number: '03', title: 'Execute, learn, improve', description: 'We deliver transparently, share progress in plain language, and refine the plan as evidence comes in.' },
];

const articles = [
  { label: 'Link building · 7 min read', title: 'What high-quality link building should look like in 2026', art: <>Earn<br />authority.</> },
  { label: 'AI SEO · 6 min read', title: 'How to build content that answers—and earns trust', art: <>Be found<br />in AI search.</> },
  { label: 'Strategy · 5 min read', title: 'Moving from SEO reporting to meaningful business impact', art: <>Measure<br />what matters.</> },
];

function Arrow({ children = '↗' }: { children?: React.ReactNode }) {
  return <span aria-hidden="true">{children}</span>;
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a aria-label="Tanot Solutions home" className="brand" href="#top">
      <span className="brand-mark">t.</span>
      <span className={footer ? 'footer-brand-name' : undefined}>tanot<span className="brand-light">solutions</span></span>
    </a>
  );
}

function PerformanceDashboard() {
  return (
    <div className="hero-art" role="img" aria-label="Illustrative SEO performance dashboard showing sample growth metrics">
      <div className="art-grid" />
      <div className="float-card float-a"><small>Organic traffic</small><strong>+186% <span className="green-arrow">↗</span></strong></div>
      <div className="dashboard">
        <div className="dash-head"><span>Organic performance</span><span className="live">● LIVE CONCEPT</span></div>
        <div className="dash-sub">Illustrative 6-month growth snapshot</div>
        <div className="chart">
          <svg aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 340 130">
            <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#b6e95d" stopOpacity=".42" /><stop offset="1" stopColor="#b6e95d" stopOpacity="0" /></linearGradient></defs>
            <path d="M0 112 C24 108 31 98 53 103 S86 92 104 95 S132 71 156 82 S186 63 207 69 S240 42 260 52 S294 24 340 10 L340 130 L0 130Z" fill="url(#chartFill)" />
            <path d="M0 112 C24 108 31 98 53 103 S86 92 104 95 S132 71 156 82 S186 63 207 69 S240 42 260 52 S294 24 340 10" fill="none" stroke="#6e9b2e" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
        <div className="dash-metrics">
          <div className="dash-metric"><strong>+186%</strong><span>Organic sessions</span></div>
          <div className="dash-metric"><strong>2.4×</strong><span>Qualified leads</span></div>
          <div className="dash-metric"><strong>6 mo.</strong><span>Sample period</span></div>
        </div>
      </div>
      <div className="float-card float-b"><span className="float-icon">↗</span><span><strong>Momentum, measured</strong><small>Strategy connected to outcomes</small></span></div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className="topline">Growth should be measurable. <b>Let’s make your next move count →</b></div>
      <header className="wrap nav">
        <Brand />
        <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="menu-btn" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? '×' : '☰'}</button>
        <nav aria-label="Main navigation" className={`navlinks${menuOpen ? ' show' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a><a href="#results" onClick={closeMenu}>Case studies</a><a href="#approach" onClick={closeMenu}>Our approach</a><a href="#insights" onClick={closeMenu}>Insights</a>
        </nav>
        <a className="btn btn-dark nav-cta" href="#contact">Book a strategy call <Arrow /></a>
      </header>
    </>
  );
}

function FAQList() {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const toggle = (index: number) => setOpenItems((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openItems.includes(index);
        return <div className={`faq-item${isOpen ? ' open' : ''}`} key={faq.question}>
          <button className="faq-question" aria-expanded={isOpen} onClick={() => toggle(index)}><span>{faq.question}</span><span aria-hidden="true">+</span></button>
          {isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>;
      })}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">SEO that moves business forward</div>
              <h1>Turn search visibility into <em>real growth.</em></h1>
              <p className="lead">We help ambitious brands earn authority, attract high-intent customers, and turn organic search into a dependable growth channel.</p>
              <div className="hero-actions"><a className="btn btn-dark" href="#contact">Get your growth plan <Arrow /></a><a className="btn btn-outline" href="#results">Explore client results <Arrow>→</Arrow></a></div>
              <div className="micro-proof"><div className="avatars"><span className="avatar">TS</span><span className="avatar">MK</span><span className="avatar">JW</span><span className="avatar">RK</span></div><span><strong>Built on long-term partnerships</strong><br />Clear strategy. Transparent execution.</span></div>
            </div>
            <PerformanceDashboard />
          </div>
        </section>

        <section className="wrap logo-strip" aria-label="Partner logo placeholders"><div className="logo-label">A growth partner for teams with ambition</div><div className="logos"><span className="wordmark">northstar</span><span className="wordmark">Vertex®</span><span className="wordmark">NEXORA</span><span className="wordmark">brightpath</span><span className="wordmark">CIRCUIT</span><span className="wordmark">&amp; other bold teams</span></div><p className="notice centered">Illustrative partner wordmarks for layout testing — replace with approved client logos before launch.</p></section>

        <section className="section"><div className="wrap"><div className="stats"><div className="stat"><strong>5,000 <span className="stat-plus">+</span></strong><span>Links delivered</span></div><div className="stat"><strong>98 <span className="stat-plus">%</span></strong><span>Client satisfaction</span></div><div className="stat"><strong>11 <span className="stat-plus">+</span></strong><span>Years of SEO experience</span></div><div className="stat"><strong>150 <span className="stat-plus">+</span></strong><span>Brands supported</span></div></div></div></section>

        <section className="section section-white" id="services"><div className="wrap"><div className="section-head"><div><div className="eyebrow">What we do</div><h2>Focused expertise.<br />Built around your growth.</h2></div><p>From earning authority to improving technical foundations, every service has a clear role in moving the right metrics.</p></div><div className="services-grid">{services.map((service) => <article className={`service${service.featured ? ' featured' : ''}`} key={service.number}><div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-num">{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><a className="text-link" href="#contact">{service.link} <Arrow /></a></article>)}</div></div></section>

        <section className="section section-dark" id="results"><div className="wrap results-grid"><div className="results-copy"><div className="eyebrow eyebrow-lime">Outcomes over optics</div><h2>Make the numbers mean something.</h2><p>Good SEO isn’t a dashboard full of vanity metrics. It’s the right visibility, in the right market, creating business opportunities you can measure.</p><a className="btn btn-lime" href="#contact">Talk through your goals <Arrow /></a></div><div className="case-grid"><article className="case"><div><div className="case-label">Organic growth · sample result</div><h3>100 → 6,800</h3><p>Monthly organic visitors over an 8-month period</p></div><span className="case-arrow">↗</span></article><article className="case"><div className="case-label">Authority</div><h3>DR 1 → 41</h3><p>Stronger domain authority</p></article><article className="case"><div className="case-label">Search visibility</div><h3>20 → 983</h3><p>Keywords in top 10 positions</p></article></div></div><div className="wrap"><p className="notice dark-notice">Performance figures are illustrative examples from the design reference; verify evidence and permissions before production use.</p></div></section>

        <section className="section" id="approach"><div className="wrap"><div className="section-head"><div><div className="eyebrow">A clear process</div><h2>Know what happens next.</h2></div><p>No black box. A collaborative process that makes priorities, progress, and next steps visible from day one.</p></div><div className="process-grid">{steps.map((step) => <article className="step" key={step.number}><div className="step-number">{step.number}</div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>

        <section className="section section-white"><div className="wrap why-grid"><div className="why-intro"><div className="eyebrow">Why Tanot</div><h2>A partner invested in the outcome.</h2><p>Expertise matters. So do accountability, communication, and a plan that connects the work to your business.</p><a className="text-link" href="#contact">Meet your growth partner <Arrow /></a></div><div className="why-list"><article className="why-item"><div className="why-symbol">↗</div><div><h3>Commercially minded</h3><p>Priorities tied to qualified demand, pipeline, and revenue—not traffic for traffic’s sake.</p></div></article><article className="why-item"><div className="why-symbol">✓</div><div><h3>Transparent by design</h3><p>Clear approvals, understandable reporting, and visibility into what’s being done and why.</p></div></article><article className="why-item"><div className="why-symbol">◎</div><div><h3>Quality before shortcuts</h3><p>Sustainable practices and relevant placements that protect long-term brand credibility.</p></div></article><article className="why-item"><div className="why-symbol">✳</div><div><h3>Built to adapt</h3><p>A strategy that evolves with your market, search behavior, and the evidence from your campaigns.</p></div></article></div></div></section>

        <section className="section"><div className="wrap"><div className="testimonial"><div><div className="quote-mark">“</div><p className="quote">“Professional, transparent, and results-driven throughout. We knew what was happening and could see the progress.”</p><div className="person"><div className="person-avatar">MK</div><div><strong>Client testimonial preview</strong><span>Replace with approved customer quote and attribution</span></div></div></div><div className="quote-result"><small>Example outcome from reference site</small><strong>100 → 6.8k</strong><p>Monthly organic visitors over 8 months. Add the verified case study and its methodology here.</p></div></div></div></section>

        <section className="section section-white"><div className="wrap faq-grid"><div><div className="eyebrow">Good questions</div><h2>Before we get started.</h2><p className="faq-intro">Clear answers to help you decide whether we’re the right partner for your next stage of growth.</p><a className="text-link" href="#contact">Still have a question? Talk to us <Arrow /></a></div><FAQList /></div></section>

        <section className="section" id="insights"><div className="wrap"><div className="section-head"><div><div className="eyebrow">Ideas worth sharing</div><h2>Useful thinking for smarter growth.</h2></div><a className="btn btn-outline" href="#contact">Explore all insights <Arrow /></a></div><div className="blog-grid">{articles.map((article) => <article className="blog-card" key={article.title}><div className="blog-art"><b>{article.art}</b></div><div className="blog-body"><div className="blog-meta">{article.label}</div><h3>{article.title}</h3><a className="text-link" href="#contact">Read insight <Arrow /></a></div></article>)}</div><p className="notice">Editorial cards are design placeholders; connect to approved live articles before launch.</p></div></section>

        <section className="cta" id="contact"><div className="wrap"><div className="cta-panel"><div className="cta-copy"><h2>Your next stage of growth starts with a conversation.</h2><p>Tell us where you want to go. We’ll help you identify a smart next step.</p></div><div className="cta-actions"><a className="btn btn-dark" href="mailto:hello@tanotsolutions.com?subject=SEO%20strategy%20conversation">Book a strategy call <Arrow /></a><a className="btn btn-outline" href="https://tanotsolutions.com/">Visit current website</a></div></div></div></section>
      </main>

      <footer><div className="wrap"><div className="footer-top"><div className="footer-brand"><Brand footer /><p>Search strategy, authority building, and content designed to support measurable business growth.</p></div><div className="footer-col"><h4>Explore</h4><a href="#services">Services</a><a href="#results">Case studies</a><a href="#approach">Our approach</a><a href="#insights">Insights</a></div><div className="footer-col"><h4>Expertise</h4><a href="#services">Link building</a><a href="#services">Technical SEO</a><a href="#services">AI SEO</a><a href="#services">Content strategy</a></div><div className="footer-col"><h4>Start a conversation</h4><a href="#contact">Book a strategy call ↗</a><a href="https://tanotsolutions.com/">tanotsolutions.com</a><p className="notice footer-notice">Contact details and booking link to be verified by the site owner.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tanot Solutions · Homepage redesign test concept</span><span><a href="#top">Back to top ↑</a><a href="#contact">Contact</a></span></div></div></footer>
    </>
  );
}
