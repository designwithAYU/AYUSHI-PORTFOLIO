import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const NAV = [
  { id: "about", label: "About", n: "01" },
  { id: "skills", label: "Skills", n: "02" },
  { id: "projects", label: "Work", n: "03" },
  { id: "experience", label: "Experience", n: "04" },
  { id: "contact", label: "Contact", n: "05" },
];

const SKILLS = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Tools", items: ["VS Code", "Git", "Figma"] },
  { category: "Concepts", items: ["Responsive Design", "DOM Manipulation"] },
  { category: "Networking", items: ["Subnetting", "Routing"] },
];

const PROJECTS = [
  {
    no: "01",
    year: "2025",
    title: "Zivara",
    subtitle: "Mental Wellness App",
    description:
      "A responsive frontend interface centered on calm, clarity, and care. Built with Flexbox & Grid, with attention paid to typographic rhythm and visual hierarchy.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    github: "#",
    demo: "#",
  },
  {
    no: "02",
    year: "2024",
    title: "Honeypot",
    subtitle: "Security Research",
    description:
      "A basic honeypot system that monitors and logs unauthorized access attempts — a hands-on study of network security fundamentals and intrusion detection.",
    tech: ["Networking", "Security", "Python"],
    github: "#",
    demo: "#",
  },
];

const TICKER = [
  "Frontend Developer",
  "Computer Science Student",
  "UI Enthusiast",
  "Open to Opportunities",
  "Based in Ghaziabad",
];

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Please complete every field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:ayushi.110718@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background text-ink overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
      />

      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
          scrolled ? "glass border-b border-border/60" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-5 px-6 lg:px-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-125 transition-smooth" />
            <span className="font-serif-display text-xl font-medium tracking-tight">
              Ayushi<span className="text-primary">.</span>
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-8 font-mono-tech text-[11px] uppercase tracking-[0.18em]">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className="group inline-flex items-baseline gap-1.5 text-ink/60 hover:text-primary transition-smooth"
                >
                  <span className="text-primary/50 group-hover:text-primary">{n.n}</span>
                  <span>{n.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <a
            href="mailto:ayushi.110718@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-ink hover:text-primary transition-smooth"
          >
            Let's talk <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            className="md:hidden p-2 -mr-2 rounded-md hover:bg-blush transition-smooth"
            onClick={() => setNavOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {navOpen && (
          <div className="md:hidden glass border-t border-border">
            <ul className="container mx-auto px-6 py-6 flex flex-col gap-4 font-mono-tech text-xs uppercase tracking-[0.18em]">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollTo(n.id)}
                    className="w-full text-left flex items-baseline gap-3 text-ink/80 hover:text-primary"
                  >
                    <span className="text-primary/50">{n.n}</span> {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 noise overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-20 right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-blush blur-3xl opacity-70 -z-10" />
        <div className="absolute bottom-0 left-[-15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blush-deep blur-3xl opacity-50 -z-10" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          {/* Top meta row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-12 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-ink/60"
          >
            <span>Portfolio / 2025</span>
            <span className="hidden sm:inline">Ghaziabad, India · 28.66°N 77.45°E</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Title */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-9"
            >
              <h1 className="font-serif-display text-[15vw] md:text-[10vw] lg:text-[9rem] leading-[0.92] font-medium tracking-tighter">
                Ayushi
                <span className="inline-block align-top text-primary">.</span>
              </h1>
              <h2 className="font-serif-display italic text-3xl md:text-5xl lg:text-6xl text-ink/70 mt-2 leading-tight">
                a frontend storyteller<span className="text-primary not-italic">,</span>
                <br className="hidden sm:block" />
                <span className="ml-0 sm:ml-12">crafting calm interfaces.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:col-span-3 lg:pl-6 lg:border-l border-border space-y-5"
            >
              <p className="text-sm text-ink/70 leading-relaxed">
                Computer Science student building responsive, user-friendly web
                experiences with care for design, accessibility, and clean code.
              </p>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => scrollTo("projects")}
                  className="group justify-between rounded-none bg-ink text-background hover:bg-primary text-xs font-mono-tech uppercase tracking-[0.2em] h-12"
                >
                  View Work
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-smooth" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo("contact")}
                  className="group justify-between rounded-none border-ink/20 hover:border-primary hover:text-primary text-xs font-mono-tech uppercase tracking-[0.2em] h-12 bg-transparent"
                >
                  Contact
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-smooth" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-20 border-y border-border bg-background/50 overflow-hidden">
          <div className="flex marquee whitespace-nowrap py-4">
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span
                key={i}
                className="font-serif-display italic text-2xl md:text-3xl text-ink/80 px-8 inline-flex items-center gap-8"
              >
                {t}
                <Sparkle className="w-5 h-5 text-primary fill-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" no="01" label="About">
        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:col-start-2"
          >
            <p className="font-serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-ink">
              I'm a motivated{" "}
              <span className="italic text-primary">computer science</span> student
              with a strong foundation in frontend development — drawn to{" "}
              <span className="italic">clean design</span>, real usability, and
              interfaces that respect the people who use them.
            </p>
            <p className="mt-8 text-ink/70 leading-relaxed max-w-2xl">
              I work primarily with HTML, CSS, and JavaScript, and I'm a quick
              learner who's eager to contribute to real-world projects. I care
              about typography, hierarchy, and the small details that make a
              product feel considered.
            </p>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3 space-y-5 font-mono-tech text-[11px] uppercase tracking-[0.18em]"
          >
            <FactRow k="Role" v="Frontend Dev" />
            <FactRow k="Studying" v="B.Tech CSE" />
            <FactRow k="Location" v="Ghaziabad, IN" />
            <FactRow k="Status" v="Open to work" highlight />
          </motion.aside>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" no="02" label="Skills" tinted>
        <div className="divide-y divide-border border-y border-border">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group grid grid-cols-12 gap-4 py-6 md:py-8 hover:bg-background/60 transition-smooth px-2 md:px-4"
            >
              <span className="col-span-2 md:col-span-1 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-ink/40 pt-1.5">
                0{i + 1}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-serif-display text-2xl md:text-3xl text-ink group-hover:text-primary transition-smooth">
                {s.category}
              </h3>
              <div className="col-span-12 md:col-span-7 flex flex-wrap gap-2 items-center">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono-tech text-xs uppercase tracking-[0.14em] px-3 py-1.5 border border-ink/15 rounded-full bg-background hover:border-primary hover:text-primary transition-smooth"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" no="03" label="Selected Work">
        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Visual */}
              <div className="lg:col-span-7 group relative">
                <div className="aspect-[4/3] relative overflow-hidden bg-blush rounded-sm">
                  <div className="absolute inset-0 bg-gradient-blush" />
                  <div className="absolute inset-0 noise opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif-display text-[18vw] lg:text-[10rem] leading-none text-primary/20 group-hover:text-primary/40 group-hover:scale-110 transition-smooth duration-700">
                      {p.no}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="font-serif-display text-2xl md:text-3xl text-ink">
                      {p.title}
                    </span>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-ink/60">
                      {p.year}
                    </span>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-ink/50">
                  <span>{p.no}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span>{p.subtitle}</span>
                </div>
                <h3 className="font-serif-display text-4xl md:text-5xl tracking-tight">
                  {p.title}
                </h3>
                <p className="text-ink/70 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-tech text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 border border-ink/15 text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase tracking-[0.2em] border-b border-ink/30 pb-1 hover:border-primary hover:text-primary transition-smooth"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-smooth" />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase tracking-[0.2em] border-b border-ink/30 pb-1 hover:border-primary hover:text-primary transition-smooth"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-smooth" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE + EDUCATION */}
      <Section id="experience" no="04" label="Experience & Education" tinted>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-primary mb-4">
              — Experience
            </p>
            <div className="border-l-2 border-primary/30 pl-6 space-y-2">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="font-serif-display text-2xl md:text-3xl">
                  SparkxYouth
                </h3>
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-ink/60">
                  Intern · Virtual
                </span>
              </div>
              <ul className="text-ink/70 leading-relaxed space-y-1.5 pt-2">
                <li>— Managed social media content & scheduling</li>
                <li>— Planned and executed weekly post calendars</li>
                <li>— Built communication and teamwork muscle</li>
                <li>— Refined time management under deadlines</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-primary mb-4">
              — Education
            </p>
            <div className="border-l-2 border-primary/30 pl-6 space-y-2">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="font-serif-display text-2xl md:text-3xl">
                  B.Tech, Computer Science
                </h3>
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-ink/60">
                  Ongoing
                </span>
              </div>
              <p className="text-ink/70 leading-relaxed pt-2">
                IMS Engineering College, Ghaziabad
              </p>
              <p className="text-ink/60 text-sm leading-relaxed">
                Coursework spans web development, data structures, networking
                (subnetting & routing), and computer systems fundamentals.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" no="05" label="Contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-serif-display italic text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mx-auto">
            Have a project in mind, or just want to say hi?{" "}
            <span className="text-primary not-italic">Let's talk.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-3">
            <ContactRow icon={<Mail className="w-4 h-4" />} label="Email" value="ayushi.110718@gmail.com" href="mailto:ayushi.110718@gmail.com" />
            <ContactRow icon={<Phone className="w-4 h-4" />} label="Phone" value="+91 75055 49628" href="tel:+917505549628" />
            <ContactRow icon={<MapPin className="w-4 h-4" />} label="Location" value="Ghaziabad, India" />
            <div className="pt-4 flex gap-3">
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="https://github.com" label="GitHub">
                <Github className="w-4 h-4" />
              </SocialLink>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-5"
          >
            <FormField label="01 / Your name">
              <Input name="name" placeholder="Jane Doe" required className="rounded-none border-0 border-b border-ink/20 focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent text-lg h-12" />
            </FormField>
            <FormField label="02 / Email">
              <Input name="email" type="email" placeholder="jane@studio.com" required className="rounded-none border-0 border-b border-ink/20 focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent text-lg h-12" />
            </FormField>
            <FormField label="03 / Message">
              <Textarea name="message" rows={4} placeholder="Tell me a little about your idea…" required className="rounded-none border-0 border-b border-ink/20 focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent text-base resize-none" />
            </FormField>
            <Button
              type="submit"
              className="group w-full md:w-auto rounded-none bg-ink text-background hover:bg-primary px-8 h-14 font-mono-tech text-xs uppercase tracking-[0.2em] inline-flex items-center gap-3 mt-4"
            >
              Send Message
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-smooth" />
            </Button>
          </motion.form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-ink text-background relative overflow-hidden">
        <div className="absolute inset-0 noise opacity-30" />
        <div className="container mx-auto px-6 lg:px-12 py-16 relative">
          <div className="font-serif-display text-[18vw] md:text-[14vw] lg:text-[10rem] leading-[0.9] tracking-tighter">
            Ayushi<span className="text-primary">.</span>
          </div>
          <div className="mt-10 pt-6 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-background/60">
            <span>© {new Date().getFullYear()} Ayushi — All rights reserved</span>
            <span>Designed & built with care · Ghaziabad, IN</span>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-ink text-background shadow-soft hover:bg-primary flex items-center justify-center hover:scale-110 transition-smooth"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

/* ---------- helpers ---------- */

const Section = ({
  id,
  no,
  label,
  children,
  tinted,
}: {
  id: string;
  no: string;
  label: string;
  children: React.ReactNode;
  tinted?: boolean;
}) => (
  <section id={id} className={`relative py-24 md:py-36 ${tinted ? "bg-blush/40" : ""}`}>
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-baseline gap-4 mb-12 md:mb-20"
      >
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-primary">
          {no}
        </span>
        <span className="h-px flex-1 bg-ink/15" />
        <h2 className="font-serif-display text-2xl md:text-3xl tracking-tight">
          {label}
        </h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const FactRow = ({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) => (
  <div className="flex items-center justify-between border-b border-border pb-3">
    <span className="text-ink/40">{k}</span>
    <span className={`${highlight ? "text-primary" : "text-ink"} inline-flex items-center gap-1.5`}>
      {highlight && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
      {v}
    </span>
  </div>
);

const ContactRow = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const inner = (
    <div className="group flex items-center justify-between py-4 border-b border-ink/15 hover:border-primary transition-smooth">
      <div className="flex items-center gap-4">
        <span className="w-8 h-8 rounded-full bg-blush flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
          {icon}
        </span>
        <div>
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-ink/50">
            {label}
          </p>
          <p className="text-ink group-hover:text-primary transition-smooth">{value}</p>
        </div>
      </div>
      {href && (
        <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-primary group-hover:rotate-45 transition-smooth" />
      )}
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="group inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.2em] border border-ink/15 hover:border-primary hover:text-primary px-4 py-2.5 transition-smooth"
  >
    {children}
    {label}
    <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-smooth" />
  </a>
);

const FormField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-ink/50 block mb-1">
      {label}
    </label>
    {children}
  </div>
);

export default Index;