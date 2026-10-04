import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Download,
  Smartphone,
  Server,
  Wrench,
  Cpu,
  ArrowLeft,
  Check,
  Quote,
  AlertTriangle,
  Lightbulb,
  Flag,
  Code,
  Wifi,
  BatteryFull,
  Home,
  Briefcase,
  User,
} from 'lucide-react';
import {
  SiFlutter,
  SiFirebase,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFigma,
} from 'react-icons/si';

function GithubMark({ size = 16, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function WhatsappMark({ size = 16, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 0C5.463 0 .116 5.335.114 11.892c-.001 2.096.548 4.142 1.595 5.945L0 24l6.335-1.652a11.9 11.9 0 005.703 1.453h.005c6.575 0 11.923-5.336 11.926-11.893.001-3.176-1.24-6.163-3.494-8.412A11.86 11.86 0 0012.04 0zm6.994 17.02c-.29.816-1.44 1.494-2.362 1.689-.63.132-1.452.238-4.22-.905-3.541-1.46-5.82-5.06-5.997-5.294-.169-.234-1.44-1.913-1.44-3.649s.905-2.59 1.226-2.945c.291-.32.637-.4.85-.4.212 0 .425.001.611.01.196.008.459-.074.718.55.29.7.985 2.417 1.07 2.593.084.176.14.38.028.614-.113.234-.169.38-.334.585-.169.205-.354.457-.505.614-.169.176-.345.37-.148.727.196.356.874 1.437 1.877 2.328 1.29 1.145 2.377 1.5 2.734 1.668.356.176.564.147.774-.088.211-.235.9-1.05 1.14-1.41.24-.36.48-.298.808-.176.328.117 2.084.98 2.44 1.157.356.176.593.264.68.41.086.147.086.847-.203 1.663z" />
    </svg>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${seen ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

function CountUp({ to, suffix = '' }) {
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return undefined;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1200, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function ScrollBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const v = h > 0 ? window.scrollY / h : 0;
      document.documentElement.style.setProperty('--sp', v);
      setP(v);
    };
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-ink" style={{ transform: `scaleX(${p})` }} />;
}

const MARQUEE_TEXT = 'Let’s connect and work together.';
const MARQUEE_ITEMS = Array(4).fill(MARQUEE_TEXT);

function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-signal flex-shrink-0 animate-spin-slow" fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 6.6 4.4 11.4 12 12-7.6.6-11.4 5.4-12 12-.6-6.6-4.4-11.4-12-12C7.6 11.4 11.4 6.6 12 0z" />
    </svg>
  );
}

function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="bg-ink text-paper border-y border-ink-border overflow-hidden group">
      <p className="sr-only">{MARQUEE_TEXT}</p>
      <div aria-hidden="true" className="flex w-max animate-marquee-text py-4 md:py-5 group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-5 md:gap-8 pr-5 md:pr-8 whitespace-nowrap">
            <span className={`font-display font-bold tracking-tight leading-none text-xl md:text-3xl ${i % 2 ? 'marquee-outline' : ''}`}>
              {t}
            </span>
            <Spark />
          </span>
        ))}
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: 'TaskPoint',
    tag: 'Mobile App',
    studio: 'Final Year Project',
    description:
      "A two-sided marketplace connecting service seekers with local workers — plumbers, electricians, and more — digitizing Pakistan's informal 'Chowk' hiring system. Bilingual, phone-verified, with a Flutter Web admin console sharing one Firebase backend.",
    tech: ['Flutter', 'Firebase', 'Firestore'],
    github: 'https://github.com/Bilal076/Taskpoint',
    image: '/projects/taskpoint.png',
    cardImage: '/projects/taskpoint-card.png',
    bg: '#eef3f1',
    imagePos: 'center',
  },
  {
    title: 'E-Commerce Platform',
    tag: 'Web App',
    studio: 'MERN Stack',
    description:
      'A consumer storefront with Stripe payments and proper state management, paired with an admin dashboard to track sales and manage inventory.',
    tech: ['React', 'Node.js', 'Stripe API'],
    github: 'https://github.com/Bilal076/Ecommerce-website',
    image: '/projects/ecommerce.png',
    cardImage: '/projects/ecommerce-card.png',
    bg: '#f4f5f7',
    imagePos: 'center',
  },
  {
    title: 'Language Learning App',
    tag: 'Mobile App',
    studio: 'Personal Project',
    description:
      'A multilingual learning platform with lessons, vocabulary, grammar and speaking practice, plus daily challenge streaks and progress tracking to keep learners consistent.',
    tech: ['Mobile', 'UI/UX'],
    github: 'https://github.com/Bilal076/Language-learning-app',
    image: '/projects/language-app.png',
    cardImage: '/projects/language-app-card.png',
    bg: '#eef3f1',
    imagePos: 'center',
  },
  {
    title: 'Face-Recognition Attendance System',
    tag: 'Web App',
    studio: 'Python & OpenCV',
    description:
      'A web-based attendance system built in Python with OpenCV. It detects faces with a Haar Cascade, matches them against stored ID photos, labels each person on screen, and logs attendance to a CSV with Pandas.',
    tech: ['Python', 'OpenCV', 'Pandas'],
    github: 'https://github.com/Bilal076/Attendance-system-using-open-cv',
    image: '/projects/attendance.png',
    cardImage: '/projects/attendance-card.png',
    bg: '#f4f5f7',
    imagePos: 'center',
  },
];

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const DETAILS = {
  'TaskPoint': {
    year: '2025 — 2026',
    overview: "TaskPoint digitizes Pakistan's informal 'Chowk' hiring system. Service seekers find local plumbers, electricians and other workers in one place, and workers get a steady way to be found and hired.",
    features: ['Two-sided marketplace for service seekers and local workers', 'Bilingual interface', 'Phone-verified sign-in', 'Flutter Web admin console on the same Firebase backend', 'Firestore data models with security rules'],
    stack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Flutter Web'],
    problem: "In Pakistan, hiring a plumber or electrician usually means standing at an informal labour 'Chowk' or asking around — there's no record of who's reliable, no way to verify a worker, and no easy way for workers to be found outside their immediate area.",
    solution: 'TaskPoint rebuilds that system as a bilingual, phone-verified two-sided app: seekers post or browse jobs, workers get discovered beyond their usual Chowk, and a Flutter Web admin console shares one Firebase backend to manage users and disputes.',
    challenges: ['Modeling a two-sided marketplace (seekers, workers, jobs) cleanly in Firestore without duplicating data', 'Writing security rules that keep each side\'s data private while still allowing matching', 'Designing a bilingual UI that reads naturally in both English and Urdu'],
  },
  'E-Commerce Platform': {
    year: '2024',
    overview: 'A full MERN-stack store: a customer-facing storefront with secure Stripe checkout, and a separate admin dashboard for running the business.',
    features: ['Storefront with product browsing and cart', 'Stripe payments', 'Client-side state management', 'Admin dashboard to track sales', 'Inventory management'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    problem: 'Small storefronts often bolt payments and inventory tracking on as an afterthought, which leaves owners with no real view of stock or sales and customers with a checkout flow that breaks under edge cases.',
    solution: 'Built a storefront and an admin dashboard against the same MongoDB data, with Stripe handling payments end to end and client-side state keeping cart and order status in sync without extra round-trips.',
    challenges: ['Keeping cart and inventory state consistent between the storefront and the admin dashboard', 'Handling Stripe webhooks and failed/partial payments correctly', 'Structuring MongoDB schemas so sales reporting stayed fast as data grew'],
  },
  'Language Learning App': {
    year: '2025',
    overview: 'A multilingual learning platform. Users pick a language such as Mandarin, English, Russian, Spanish or Urdu, work through lessons, and stay motivated with daily challenges, progress tracking and achievements.',
    features: ['Choose from multiple languages, including Mandarin, English, Russian, Spanish and Urdu', 'Lessons, vocabulary, grammar and speaking practice', 'Daily challenge streaks to build a habit', 'Progress charts and an achievement board'],
    stack: ['Mobile', 'UI/UX'],
    problem: 'Most casual learners drop language apps within a few weeks because there\'s no sense of progress and lessons feel repetitive across skill types (reading, vocab, speaking).',
    solution: 'Designed a lesson structure that mixes vocabulary, grammar and speaking practice per unit, backed by daily streaks and a visible progress/achievement board to give learners a reason to come back.',
    challenges: ['Designing a lesson-difficulty curve that works across five very different languages', 'Keeping the streak/achievement system motivating without feeling gimmicky', 'Structuring UI flows that stay simple across reading, listening and speaking exercises'],
  },
  'Face-Recognition Attendance System': {
    year: '2024',
    overview: 'A Python attendance system that replaces manual roll calls. It detects a face, extracts its features, matches them against stored ID photos, and records who was present.',
    features: ['Face detection with an OpenCV Haar Cascade', 'Feature extraction with dlib, matched against stored ID photos', 'On-screen match visualization with the person\'s name', 'Timestamped attendance log exported to CSV', 'Web-based interface'],
    stack: ['Python', 'OpenCV', 'dlib', 'Pandas'],
    problem: 'Manual roll calls are slow and easy to game (marking a friend present). Existing attendance hardware is often too expensive for a classroom or small office to justify.',
    solution: 'A web-based system where a webcam feed is run through an OpenCV Haar Cascade for face detection, features are matched against stored ID photos with dlib, and each timestamped match is logged to CSV with Pandas for easy reporting.',
    challenges: ['Keeping face matching accurate under different lighting and camera angles', 'Avoiding false positives between similar-looking faces', 'Getting detection fast enough to run smoothly in a browser-facing interface'],
  },
};

function Cursor() {
  const ring = useRef(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let x = 0, y = 0, rx = 0, ry = 0, raf;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      ring.current.dataset.on = '1';
      ring.current.dataset.hover = e.target.closest('a,button') ? '1' : '0';
      ring.current.dataset.label = e.target.closest('[data-cursor]')?.dataset.cursor || '';
    };
    const loop = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}

function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
  };
  return (
    <span ref={ref} onMouseMove={move} onMouseLeave={() => { ref.current.style.transform = ''; }} className="inline-block transition-transform duration-200 ease-out">
      {children}
    </span>
  );
}

function useHashProject() {
  const get = () => {
    const m = window.location.hash.match(/^#project\/(.+)$/);
    return m ? m[1] : null;
  };
  const [id, setId] = useState(get);
  useEffect(() => {
    const f = () => setId(get());
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return id;
}

function Tilt({ href, className = '', children }) {
  const ref = useRef(null);
  const move = (e) => {
    if (e.pointerType === 'touch') return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
  };
  const leave = () => { ref.current.style.transform = ''; };
  return (
    <a ref={ref} href={href} data-cursor="View" onPointerMove={move} onPointerLeave={leave} className={`transition-[transform,border-color] duration-200 ease-out ${className}`}>
      {children}
    </a>
  );
}

function Words({ text }) {
  const [ref, seen] = useInView();
  return (
    <span ref={ref}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span className={`inline-block transition-transform duration-700 ease-out ${seen ? 'translate-y-0' : 'translate-y-full'}`} style={{ transitionDelay: `${i * 90}ms` }}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}

function Gallery({ images, bg, alt }) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const nextImg = () => setI((v) => (v + 1) % images.length);
  return (
    <div className="animate-rise" style={{ animationDelay: '350ms' }}>
      <div className="relative rounded-2xl overflow-hidden flex justify-center" style={{ background: bg }}>
        <img key={i} src={images[i]} alt={`${alt} — screen ${i + 1}`} className="w-full h-auto max-h-[80vh] object-contain animate-zoom" />
        {images.length > 1 && (
          <>
            <button type="button" onClick={prev} aria-label="Previous screen"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-paper/90 border border-paper-border flex items-center justify-center hover:bg-paper transition-colors">
              <ArrowLeft size={16} />
            </button>
            <button type="button" onClick={nextImg} aria-label="Next screen"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-paper/90 border border-paper-border flex items-center justify-center hover:bg-paper transition-colors">
              <ArrowLeft size={16} className="rotate-180" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((img, n) => (
            <button key={img} type="button" onClick={() => setI(n)} aria-label={`Show screen ${n + 1}`}
              className={`h-2 rounded-full transition-all ${n === i ? 'w-6 bg-ink' : 'w-2 bg-paper-border hover:bg-muted'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

function CardLabel({ icon: Icon, children }) {
  return (
    <span className="label-hl flex w-fit items-center gap-2 rounded-md px-2.5 py-1 mb-4 font-heading font-extrabold text-[13px] uppercase tracking-wider text-ink">
      <Icon size={15} /> {children}
    </span>
  );
}

function ProjectDetail({ id }) {
  const ref = useRef(null);
  const idx = PROJECTS.findIndex((p) => slug(p.title) === id);
  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const k = (e) => { if (e.key === 'Escape') window.location.hash = 'work'; };
    window.addEventListener('keydown', k);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k); };
  }, []);
  if (idx < 0) return null;
  const p = PROJECTS[idx];
  const d = DETAILS[p.title];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <div ref={ref} className="fixed inset-0 z-[80] bg-paper overflow-y-auto animate-sheet" role="dialog" aria-label={p.title}>
      <div className="sticky top-0 z-10 bg-paper/90 backdrop-blur-md border-b border-paper-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Magnetic><a href="#work" className="group inline-flex items-center gap-2 text-sm font-medium">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to work
          </a></Magnetic>
          <span className="text-sm text-muted">{idx + 1} / {PROJECTS.length}</span>
        </div>
      </div>

      <div key={id} className="max-w-5xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-20">
        <p className="text-sm text-muted mb-3 animate-rise">0{idx + 1} — {p.tag}</p>
        <span className="inline-block overflow-hidden align-bottom">
          <h1 className="font-heading font-extrabold text-4xl md:text-7xl leading-[0.95] animate-slide-up pb-1">{p.title}</h1>
        </span>

        <div className="grid grid-cols-3 gap-4 border-y border-paper-border py-5 my-8 text-sm animate-rise" style={{ animationDelay: '250ms' }}>
          <div><p className="text-muted mb-1">Type</p><p className="font-medium">{p.tag}</p></div>
          <div><p className="text-muted mb-1">Year</p><p className="font-medium">{d.year}</p></div>
          <div><p className="text-muted mb-1">Context</p><p className="font-medium">{p.studio}</p></div>
        </div>

        <Gallery images={p.images || [p.image]} bg={p.bg} alt={p.title} />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 mt-12">
          <Reveal>
            <h2 className="font-heading font-extrabold text-xl mb-3">OVERVIEW</h2>
            <p className="text-muted leading-relaxed">{d.overview}</p>
          </Reveal>
          <div>
            <Reveal><h2 className="font-heading font-extrabold text-xl mb-3">WHAT IT DOES</h2></Reveal>
            <ul>
              {d.features.map((f, i) => (
                <Reveal key={f} delay={i * 90}>
                  <li className="flex items-start gap-3 py-3 border-b border-paper-border text-sm">
                    <Check size={16} className="mt-0.5 text-signal flex-shrink-0" /> {f}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {(d.problem || d.solution || d.challenges) && (
          <Reveal className="mt-14">
            <div className="grid md:grid-cols-3 gap-4">
              {d.problem && (
                <div className="border border-paper-border rounded-2xl bg-paper-100 p-5">
                  <CardLabel icon={Flag}>Problem</CardLabel>
                  <p className="text-sm text-muted leading-relaxed">{d.problem}</p>
                </div>
              )}
              {d.solution && (
                <div className="border border-paper-border rounded-2xl bg-paper-100 p-5">
                  <CardLabel icon={Lightbulb}>Solution</CardLabel>
                  <p className="text-sm text-muted leading-relaxed">{d.solution}</p>
                </div>
              )}
              {d.challenges && (
                <div className="border border-paper-border rounded-2xl bg-paper-100 p-5">
                  <CardLabel icon={AlertTriangle}>Challenges</CardLabel>
                  <ul className="flex flex-col gap-2">
                    {d.challenges.map((c) => (
                      <li key={c} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-paper-border flex-shrink-0" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        )}

        <Reveal className="mt-12">
          <h2 className="font-heading font-extrabold text-xl mb-4">STACK</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {d.stack.map((t, i) => (
              <span key={t} className="text-sm font-medium border border-paper-border bg-paper-100 rounded-full px-4 py-1.5 animate-rise" style={{ animationDelay: `${i * 80}ms` }}>{t}</span>
            ))}
          </div>
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-ink text-paper-100 text-sm font-medium px-6 py-3 rounded-full hover:bg-ink-800 transition-colors">
            <GithubMark size={15} /> View on GitHub
          </a>
        </Reveal>

        <a href={`#project/${slug(next.title)}`} className="group block mt-16 border-t border-paper-border pt-8">
          <p className="text-sm text-muted mb-2">Next project</p>
          <p className="flex items-center justify-between font-heading font-extrabold text-2xl md:text-4xl">
            {next.title}
            <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </p>
        </a>
      </div>
    </div>
  );
}

const SKILLS = [
  {
    key: 'mobile',
    title: 'MOBILE',
    icon: Smartphone,
    description: 'Building bilingual, production-shaped apps in Flutter — Firebase auth, Firestore data models, security rules and all.',
    items: ['Flutter', 'Dart', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Firestore'],
  },
  {
    key: 'web',
    title: 'WEB & BACKEND',
    icon: Server,
    description: 'React front ends backed by Node/Express APIs, MongoDB, and Socket.io for anything real-time.',
    items: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    key: 'tools',
    title: 'TOOLING',
    icon: Wrench,
    description: 'The everyday stack that keeps a project moving from idea to shipped.',
    items: ['Tailwind CSS', 'Git & GitHub', 'Google Cloud', 'Figma', 'Postman'],
  },
  {
    key: 'vision',
    title: 'PYTHON & VISION',
    icon: Cpu,
    description: 'Computer-vision work in Python: face detection and recognition with OpenCV, and data export with Pandas.',
    items: ['Python', 'OpenCV', 'Face Recognition', 'Pandas'],
  },
];

const JOURNEY = [
  {
    title: 'E-Commerce Platform',
    place: 'MERN stack project',
    date: '2024',
    detail: 'Built a storefront with Stripe payments and client-side state management, plus an admin dashboard for tracking sales and managing inventory.',
  },
  {
    title: 'Face-Recognition Attendance System',
    place: 'Python & OpenCV project',
    date: '2024',
    detail: 'Built a web-based attendance system that detects faces, matches them against known photos, and exports attendance records with Pandas.',
  },
  {
    title: 'Language Learning App',
    place: 'Mobile app project',
    date: '2025',
    detail: 'Designed and built a language learning app, from the lesson flow and interface to the logic behind it.',
  },
  {
    title: 'TaskPoint',
    place: 'Flagship project',
    date: '2025 — 2026',
    detail: 'Designed and built a bilingual labour-marketplace app end to end: mobile client, admin panel, and Firestore backend.',
  },
];

function Logo({ size = 36 }) {
  return (
    <a href="#top" aria-label="Muhammad Bilal, back to top" className="inline-flex flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:-rotate-3">
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#121212" />
        <path d="M39.62 38.37Q39.62 41.95 37.15 43.97Q34.69 46 30.24 46H16.38V18H29.81Q34.1 18 36.54 19.91Q38.98 21.81 38.98 25.27Q38.98 27.73 37.69 29.38Q36.4 31.03 34.26 31.62Q36.72 32.18 38.17 34.07Q39.62 35.95 39.62 38.37ZM24.17 29.12H28.1Q31.04 29.12 31.04 26.7Q31.04 24.2 28.1 24.2H24.17ZM31.63 37.26Q31.63 35.99 30.86 35.32Q30.09 34.64 28.66 34.64H24.17V39.72H28.7Q31.63 39.72 31.63 37.26Z" fill="#FAFAFA" />
        <circle cx="48" cy="44" r="5" fill="#1FAE5A" />
      </svg>
    </a>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-paper-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="hidden md:flex items-center border border-paper-border rounded-full px-3 py-1.5 text-sm text-muted">
            Available for new roles
          </div>
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink">
          <a href="#about" className="link-u">About</a>
          <a href="#work" className="link-u">Work</a>
          <a href="#skills" className="link-u">Skills</a>
          <a href="#journey" className="link-u">Journey</a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="/Muhammad-Bilal-CV.pdf"
            download="Muhammad-Bilal-CV.pdf"
            className="group inline-flex items-center gap-1.5 border border-paper-border text-ink text-sm font-medium px-4 py-2.5 rounded-full hover:border-ink transition-colors"
          >
            <Download size={15} className="transition-transform group-hover:translate-y-0.5" /> CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-ink text-paper-100 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-ink-800 transition-colors"
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>

        <button className="md:hidden text-ink" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-paper-border bg-paper-100 px-5 py-4 flex flex-col gap-4 text-ink">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#journey" onClick={() => setOpen(false)}>Journey</a>
          <a href="/Muhammad-Bilal-CV.pdf" download="Muhammad-Bilal-CV.pdf" onClick={() => setOpen(false)} className="flex items-center justify-center gap-1.5 border border-paper-border rounded-full px-4 py-2 font-medium">
            <Download size={15} /> CV
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-ink text-paper-100 rounded-full px-4 py-2 text-center font-medium">
            Let's talk
          </a>
        </div>
      )}
    </nav>
  );
}

const STAGE_W = 500;
const STAGE_H = 520;
const RING = { cx: 250, cy: 296, rx: 200, ry: 58, tilt: -7 };
const TILE_W = 66;
const TILE_H = 74;

const ORBIT = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'React', icon: SiReact, color: '#0EA5C9' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFA000' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#A259FF' },
];

const SCREEN_CHIPS = [
  { name: 'Flutter', icon: SiFlutter, color: '#54C5F8' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#6CC24A' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
];

const SCREEN_GRID = ['Flutter', 'React', 'Node.js', 'Firebase', 'MongoDB', 'Git'].map(
  (n) => ORBIT.find((o) => o.name === n),
);

function orbitPos(theta) {
  const x = RING.rx * Math.cos(theta);
  const y = RING.ry * Math.sin(theta);
  const t = (RING.tilt * Math.PI) / 180;
  return {
    X: RING.cx + x * Math.cos(t) - y * Math.sin(t),
    Y: RING.cy + x * Math.sin(t) + y * Math.cos(t),
    front: Math.sin(theta) > 0,
    depth: (Math.sin(theta) + 1) / 2,
  };
}

function Ring({ front }) {
  const sweep = front ? 0 : 1;
  const d = `M ${-RING.rx} 0 A ${RING.rx} ${RING.ry} 0 0 ${sweep} ${RING.rx} 0`;
  const id = front ? 'ring-front' : 'ring-back';
  return (
    <svg
      viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
      className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
      style={{ zIndex: front ? 28 : 5 }}
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#60A5FA" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <g transform={`translate(${RING.cx} ${RING.cy}) rotate(${RING.tilt})`}>
        <path d={d} fill="none" stroke={`url(#${id})`} strokeWidth="10" opacity="0.4" filter={`url(#${id}-blur)`} />
        <path d={d} fill="none" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" opacity={front ? 1 : 0.5} />
      </g>
    </svg>
  );
}

function PhoneScreen() {
  return (
    <div className="relative h-full rounded-[2.1rem] overflow-hidden text-white" style={{ background: 'linear-gradient(180deg,#0b0e22 0%,#131839 100%)' }}>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-2.5 text-[9px] font-semibold z-10">
        <span>9:41</span>
        <span className="flex items-center gap-1"><Wifi size={10} /> <BatteryFull size={12} /></span>
      </div>
      <span className="absolute top-2 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-black rounded-full z-10" />

      <div className="relative pt-10 px-3.5">
        <div className="flex items-center justify-between animate-rise" style={{ animationDelay: '500ms' }}>
          <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#6366F1,#8B5CF6)' }}>
            <Code size={14} />
          </span>
          <img src="/profile.jpg" alt="" className="w-6 h-6 rounded-full object-cover object-top border border-white/20" />
        </div>

        <p className="mt-3 text-[15px] font-bold leading-tight animate-rise" style={{ animationDelay: '600ms' }}>Mobile App Developer</p>
        <p className="mt-1 text-[9px] leading-snug text-slate-400 max-w-[150px] animate-rise" style={{ animationDelay: '680ms' }}>
          Turning ideas into high-performance mobile apps
        </p>

        <div className="flex flex-wrap gap-1 mt-2.5 animate-rise" style={{ animationDelay: '760ms' }}>
          {SCREEN_CHIPS.map((c) => {
            const Icon = c.icon;
            return (
              <span key={c.name} className="flex items-center gap-1 rounded-full bg-white/[0.07] border border-white/10 px-1.5 py-[3px] text-[7.5px] font-medium text-slate-200">
                <Icon size={8} style={{ color: c.color }} /> {c.name}
              </span>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-3.5 mb-1.5 animate-rise" style={{ animationDelay: '840ms' }}>
          <span className="text-[10px] font-semibold">Recent Projects</span>
          <span className="text-[8px] text-indigo-300">View All</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-white/[0.06] border border-white/10 p-2 animate-rise" style={{ animationDelay: '920ms' }}>
          <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#6366F1,#A78BFA)' }}>
            <Wrench size={15} />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold leading-tight">TaskPoint</p>
            <p className="text-[8px] text-slate-400 leading-tight mt-0.5">Bilingual service marketplace</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3.5 mb-1.5 animate-rise" style={{ animationDelay: '1000ms' }}>
          <span className="text-[10px] font-semibold">Tech Stack</span>
          <span className="text-[8px] text-indigo-300">View All</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 animate-rise" style={{ animationDelay: '1080ms' }}>
          {SCREEN_GRID.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.name} className="flex flex-col items-center gap-1 rounded-lg bg-white/[0.06] border border-white/10 py-1.5">
                <Icon size={14} style={{ color: t.color === '#02569B' ? '#54C5F8' : t.color }} />
                <span className="text-[7px] text-slate-300">{t.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-white/10 bg-[#080b1c]/90 pt-2 pb-2.5">
        {[[Home, 'Home'], [Briefcase, 'Projects'], [Code, 'Code'], [User, 'Profile']].map(([Icon, label], i) => (
          <span key={label} className={`flex flex-col items-center gap-0.5 text-[7px] ${i === 0 ? 'text-indigo-300' : 'text-slate-500'}`}>
            <Icon size={13} /> {label}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.06] via-transparent to-transparent" />
    </div>
  );
}

function PhoneMockup() {
  const wrap = useRef(null);
  const tiles = useRef([]);
  const [fit, setFit] = useState({ scale: 1, left: 0 });

  useLayoutEffect(() => {
    const el = wrap.current;
    const measure = () => {
      const w = el.clientWidth;
      const scale = Math.min(1, w / STAGE_W);
      setFit({ scale, left: (w - STAGE_W * scale) / 2 });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const place = (phase) => {
      ORBIT.forEach((_, i) => {
        const el = tiles.current[i];
        if (!el) return;
        const p = orbitPos(phase + (i / ORBIT.length) * Math.PI * 2);
        const sc = 0.78 + 0.22 * p.depth;
        el.style.transform = `translate(${(p.X - TILE_W / 2).toFixed(1)}px, ${(p.Y - TILE_H / 2).toFixed(1)}px) scale(${sc.toFixed(3)})`;
        el.style.zIndex = p.front ? 30 : 6;
        el.style.opacity = (0.55 + 0.45 * p.depth).toFixed(2);
      });
    };
    let phase = 0.5;
    place(phase);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf;
    let last = performance.now();
    const tick = (t) => {
      phase += ((t - last) / 1000) * ((Math.PI * 2) / 26);
      last = t;
      place(phase);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrap} className="relative w-full select-none" style={{ height: STAGE_H * fit.scale }} aria-hidden="true">
      <div
        className="absolute top-0"
        style={{ left: fit.left, width: STAGE_W, height: STAGE_H, transform: `scale(${fit.scale})`, transformOrigin: 'top left' }}
      >
        <div className="pointer-events-none absolute left-[70px] top-[90px] w-[360px] h-[360px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.30), transparent 70%)' }} />
        <div className="pointer-events-none absolute left-[120px] bottom-[8px] w-[260px] h-[26px] rounded-full bg-indigo-500/25 blur-xl" />

        <Ring front={false} />

        <div className="absolute z-10" style={{ left: 135, top: 22, width: 230, height: 474, transform: 'perspective(1400px) rotateY(-16deg) rotateX(4deg) rotateZ(7deg)' }}>
          <div className="relative w-full h-full phone-enter" style={{ animationDelay: '250ms' }}>
            <span className="absolute -right-[3px] top-24 w-[3px] h-12 rounded-r bg-[#2a2d4a]" />
            <span className="absolute -left-[3px] top-20 w-[3px] h-8 rounded-l bg-[#2a2d4a]" />
            <span className="absolute -left-[3px] top-32 w-[3px] h-14 rounded-l bg-[#2a2d4a]" />
            <div
              className="w-full h-full rounded-[2.5rem] p-[6px] shadow-[0_40px_70px_rgba(30,27,75,0.45)]"
              style={{ background: 'linear-gradient(145deg,#5a5f80,#16172c 38%,#2d3050)' }}
            >
              <PhoneScreen />
            </div>
          </div>
        </div>

        <Ring front />

        {ORBIT.map((o, i) => {
          const Icon = o.icon;
          return (
            <div
              key={o.name}
              ref={(el) => { tiles.current[i] = el; }}
              className="absolute left-0 top-0 flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/90 backdrop-blur border border-white shadow-[0_14px_30px_rgba(60,64,140,0.22)] will-change-transform"
              style={{ width: TILE_W, height: TILE_H }}
            >
              <Icon size={28} style={{ color: o.color }} />
              <span className="text-[10px] font-semibold text-ink leading-none">{o.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-12 md:pt-20 pb-14 md:pb-24">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl animate-drift" style={{ background: 'rgba(31,174,90,0.14)' }} />
      <div className="pointer-events-none absolute -bottom-32 -left-20 w-[24rem] h-[24rem] rounded-full blur-3xl animate-drift-slow" style={{ background: 'rgba(120,160,255,0.16)' }} />
      <div className="relative max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
        <div>
          <div className="flex items-center gap-4 animate-rise" style={{ animationDelay: '100ms' }}>
            <img
              src="/profile.jpg"
              alt="Muhammad Bilal"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-paper-200 border border-paper-border object-cover object-top"
            />
            <div>
              <p className="font-display font-extrabold text-2xl md:text-3xl leading-none">Muhammad Bilal</p>
              <p className="text-muted text-sm mt-1.5">Software Engineer</p>
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-4xl md:text-[3.4rem] leading-[1.02] mt-7 mb-5">
            <span className="block overflow-hidden pb-1">
              <span className="block animate-slide-up" style={{ animationDelay: '200ms' }}>
                I build <span className="hl">mobile apps</span>, <span className="hl" style={{ '--d': '1.4s' }}>web products</span> and <span className="hl" style={{ '--d': '1.8s' }}>vision tools</span>.
              </span>
            </span>
          </h1>

          <p className="text-muted max-w-md leading-relaxed mb-7 animate-rise" style={{ animationDelay: '350ms' }}>
            Flutter, MERN and Python developer with four projects built, from a labour marketplace for Pakistan to a face-recognition attendance system.
          </p>

          <div className="flex flex-wrap gap-3 animate-rise" style={{ animationDelay: '450ms' }}>
            <a href="#work" className="group inline-flex items-center gap-1.5 bg-ink text-paper-100 text-sm font-medium px-6 py-3 rounded-full hover:bg-ink-800 transition-colors">
              See my work <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Magnetic><a href="#contact" className="inline-flex items-center text-sm font-medium px-6 py-3 rounded-full border border-ink hover:bg-ink hover:text-paper-100 transition-colors">
              Get in touch
            </a></Magnetic>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-paper-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-[1.1fr_1fr] gap-12">
        <p className="text-xl md:text-2xl font-display font-medium leading-snug text-ink">
          Over 2 years I've built four projects end to end, from a face-recognition
          attendance system in Python to TaskPoint, which took a hyper-local hiring
          system that runs informally across Pakistan and rebuilt it as a proper
          two-sided marketplace.
        </p>
        <p className="text-muted leading-relaxed">
          I like the parts of building software that don't show up in a demo: choosing
          how money should be stored so rounding errors can't happen, writing security
          rules that actually hold, and fixing the sixty small bugs that stand between
          "it runs" and "it works." Based in Gujranwala, Punjab, Pakistan.
        </p>
        <div className="md:col-span-2 grid grid-cols-3 gap-4 border-t border-paper-border pt-8">
          {[[2, '+', 'years of project experience'], [4, '', 'projects built'], [3, '', 'stacks: Flutter, MERN, Python']].map(([n, suf, label]) => (
            <div key={label}>
              <p className="font-display font-extrabold text-3xl md:text-5xl"><CountUp to={n} suffix={suf} /></p>
              <p className="text-muted text-xs md:text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Mobile App', 'Web App'];
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section id="work" className="relative border-t border-paper-border overflow-hidden">
      <div className="watermark absolute -top-4 left-0 w-full text-center text-[5rem] md:text-[9rem] whitespace-nowrap" style={{ transform: 'translateX(calc(var(--sp, 0) * -160px + 80px))' }}>
        PORTFOLIO
      </div>
      <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-16 pb-16 md:pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl">
            SELECTED WORK
          </h2>
          <div className="flex items-center gap-2 text-sm">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  filter === f ? 'bg-ink text-paper-100' : 'text-muted hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120} className="h-full">
            <Tilt
              href={`#project/${slug(project.title)}`}
              className="group block h-full border border-paper-border rounded-2xl overflow-hidden bg-paper-100 hover:border-ink relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden clip-reveal flex items-center justify-center" style={{ background: project.bg }}>
                <img src={project.cardImage || project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-3 left-3 bg-paper-100/90 backdrop-blur rounded-full px-3 py-1 text-xs font-medium">0{PROJECTS.indexOf(project) + 1}</span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-paper-200 rounded-full px-3 py-1">{project.tag}</span>
                  <span className="text-xs font-medium bg-paper-200 rounded-full px-3 py-1">{project.studio}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {DETAILS[project.title].stack.slice(0, 4).map((t) => (
                    <span key={t} className="text-[11px] text-muted border border-paper-border rounded-full px-2.5 py-0.5">{t}</span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  View details <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(360px circle at var(--mx) var(--my), rgba(31,174,90,0.14), transparent 60%)' }}
              />
            </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [active, setActive] = useState('mobile');

  return (
    <section id="skills" className="border-t border-paper-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl mb-8">
          SKILLS
        </h2>

        <div className="flex flex-col gap-3">
          {SKILLS.map((skill) => {
            const isActive = active === skill.key;
            const Icon = skill.icon;
            return (
              <div key={skill.key}>
                {isActive ? (
                  <div className="bg-ink-900 border border-ink-border rounded-2xl p-6 md:p-8 flex items-center justify-between gap-6 animate-rise">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className="text-paper-100" />
                        <h3 className="font-heading font-extrabold text-xl md:text-2xl text-paper-100">
                          {skill.title}
                        </h3>
                      </div>
                      <p className="text-sm text-paper-border max-w-md mb-4">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span key={item} style={{ animationDelay: `${(skill.items.indexOf(item) + 1) * 70}ms` }} className="text-xs font-medium border border-ink-border text-paper-100 rounded-full px-3 py-1 animate-rise">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      aria-label="Collapse"
                      onClick={() => setActive(null)}
                      className="flex-shrink-0 text-paper-100 hover:text-muted transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setActive(skill.key)}
                    className="w-full flex items-center justify-between py-5 border-b border-paper-border text-left group"
                  >
                    <span className="font-heading font-extrabold text-lg md:text-xl group-link-u">
                      {skill.title}
                    </span>
                    <ArrowUpRight size={18} className="text-muted group-hover:text-ink transition-colors" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const [ref, seen] = useInView(0.1);
  return (
    <section id="journey" className="border-t border-paper-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="relative bg-ink-900 border border-ink-border rounded-3xl px-6 md:px-10 py-10 md:py-12 overflow-hidden">
          <div className="watermark absolute -top-6 left-0 w-full text-center text-[4.5rem] md:text-[7rem] whitespace-nowrap" style={{ opacity: 0.08, color: '#FAFAFA' }}>
            JOURNEY
          </div>
          <div className="relative flex flex-wrap items-center justify-between gap-4 mb-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-paper-100">
              JOURNEY
            </h2>
            <span className="text-sm text-paper-border">2+ years of project experience</span>
          </div>

          <div ref={ref} className="relative pl-8 md:pl-10">
            <div className={`absolute left-[7px] top-2 bottom-2 w-px bg-ink-border origin-top transition-transform duration-[1400ms] ease-out ${seen ? 'scale-y-100' : 'scale-y-0'}`} />
            {JOURNEY.map((step, i) => (
              <Reveal key={step.title} delay={i * 180} className="relative pb-10 last:pb-0">
                <span className={`absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${i === JOURNEY.length - 1 ? 'bg-signal border-signal' : 'bg-ink-900 border-muted'}`} />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                  <p className="text-paper-100 font-heading font-bold text-lg">{step.title}</p>
                  <span className="text-sm text-paper-border font-medium">{step.date}</span>
                </div>
                <p className="text-muted text-sm mb-2">{step.place}</p>
                <p className="text-paper-border/80 text-sm leading-relaxed max-w-xl">{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote: "Bilal picked up the Flutter admin console quickly and kept the Firestore rules sane even as the marketplace side got more complex. Easy to hand a feature to and get back something that actually works.",
    name: 'Project Supervisor',
    role: 'Final Year Project — TaskPoint',
  },
  {
    quote: "We needed a storefront that didn't fall over at checkout. The Stripe integration and admin dashboard he built were straightforward to use and held up fine during testing.",
    name: 'Course Instructor',
    role: 'MERN Stack Coursework',
  },
  {
    quote: 'The attendance system did what it needed to — detected faces reliably in our test runs and the CSV logs made reporting simple. A solid, no-fuss piece of Python.',
    name: 'Lab Coordinator',
    role: 'Python & OpenCV Project',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-paper-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl mb-10">
          WHAT PEOPLE SAY
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="h-full">
              <div className="h-full border border-paper-border rounded-2xl bg-paper-100 p-6 flex flex-col">
                <Quote size={20} className="text-signal mb-4" />
                <p className="text-sm text-muted leading-relaxed flex-1">{t.quote}</p>
                <div className="mt-5 pt-4 border-t border-paper-border">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedinMark({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Messages are delivered to your inbox by Web3Forms. Set VITE_WEB3FORMS_KEY (see .env.example).
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';
const FIELD = 'w-full bg-paper-100 border border-paper-border rounded-xl px-4 py-3 text-sm outline-none focus:border-ink transition-colors placeholder:text-muted';

function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('botcheck')) return; // honeypot: bots fill hidden fields
    if (!WEB3FORMS_KEY) {
      setError("The form isn't connected yet. Add your Web3Forms access key (see .env.example).");
      setStatus('error');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New portfolio message from ${data.get('name')}`,
          from_name: 'Portfolio contact form',
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || 'Something went wrong.');
      form.reset();
      setStatus('success');
    } catch (err) {
      setError(err.message || 'Could not send your message. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-paper-border rounded-2xl bg-paper-100 px-6 py-12 text-center animate-pop">
        <span className="mx-auto mb-4 flex w-12 h-12 items-center justify-center rounded-full bg-signal text-white"><Check size={22} /></span>
        <p className="font-heading font-extrabold text-2xl mb-1">Message sent</p>
        <p className="text-muted text-sm mb-6">Thanks for reaching out. I'll get back to you soon.</p>
        <button onClick={() => setStatus('idle')} className="text-sm font-medium border border-paper-border rounded-full px-5 py-2 hover:border-ink transition-colors">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="text-left border border-paper-border rounded-2xl bg-paper-100 p-5 md:p-8 grid gap-4">
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <input name="name" type="text" required maxLength={80} autoComplete="name" placeholder="Your name" className={FIELD} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email
          <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder="you@example.com" className={FIELD} />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        Message
        <textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Tell me about your project or role..." className={`${FIELD} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p role="alert" className={`text-sm text-red-600 ${status === 'error' ? '' : 'hidden'}`}>{error}</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="ml-auto inline-flex items-center gap-2 bg-ink text-paper-100 text-sm font-medium px-7 py-3 rounded-full hover:bg-ink-800 transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? (<><span className="w-4 h-4 rounded-full border-2 border-paper-100/40 border-t-paper-100 animate-spin" /> Sending...</>) : (<>Send message <ArrowUpRight size={16} /></>)}
        </button>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-paper-border">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight mb-5">
          <Words text="HAVE A PROJECT IN MIND?" />
        </h2>
        <p className="text-muted max-w-md mx-auto mb-10">
          Looking for a Flutter developer or a MERN engineer? Send me a message and I'll get back to you.
        </p>

        <Reveal><ContactForm /></Reveal>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          <span className="flex items-center gap-2 border border-paper-border rounded-full pl-1.5 pr-4 py-1.5 text-sm font-medium">
            <img src="/profile.jpg" alt="" className="w-6 h-6 rounded-full object-cover bg-paper-200" />
            Muhammad Bilal
          </span>
          <a href="/Muhammad-Bilal-CV.pdf" download="Muhammad-Bilal-CV.pdf"
             className="flex items-center gap-2 border border-paper-border rounded-full px-4 py-2 text-sm font-medium hover:border-ink transition-colors">
            <Download size={15} /> CV
          </a>
          <a href="https://wa.me/923184614422" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 border border-paper-border rounded-full px-4 py-2 text-sm font-medium hover:border-ink transition-colors">
            <WhatsappMark size={15} /> WhatsApp
          </a>
          <a href="https://github.com/Bilal076" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 border border-paper-border rounded-full px-4 py-2 text-sm font-medium hover:border-ink transition-colors">
            <GithubMark size={15} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/muhammad-bilal047/" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 border border-paper-border rounded-full px-4 py-2 text-sm font-medium hover:border-ink transition-colors">
            <LinkedinMark size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-paper-border py-8 text-center text-sm text-muted">
      © {new Date().getFullYear()} Muhammad Bilal. Built with React & Tailwind CSS.
    </footer>
  );
}

function App() {
  const openId = useHashProject();
  useEffect(() => {
    document.title = 'Muhammad Bilal — Software Engineer';
  }, []);

  return (
    <div className="min-h-screen font-body bg-paper text-ink">
      <ScrollBar />
      <Cursor />
      <NavBar />
      <Hero />
      <Marquee />
      <About />
      <SelectedWork />
      <Skills />
      <Journey />
      <Testimonials />
      <Contact />
      <Footer />
      {openId && <ProjectDetail id={openId} />}
    </div>
  );
}

export default App;
