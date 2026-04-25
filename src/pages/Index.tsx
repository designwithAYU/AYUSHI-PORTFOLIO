import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Tools", items: ["VS Code", "Git (basic)", "Figma"] },
  { category: "Concepts", items: ["Responsive Design", "DOM Manipulation"] },
  { category: "Networking", items: ["Subnetting", "Routing"] },
];

const PROJECTS = [
  {
    title: "Zivara",
    subtitle: "Mental Wellness App",
    description:
      "A responsive frontend interface for a mental wellness experience, built with Flexbox & Grid and a strong focus on UI/UX and visual hierarchy.",
    tech: ["HTML", "CSS", "JavaScript", "Flexbox", "Grid"],
    github: "#",
    demo: "#",
  },
  {
    title: "Honeypot",
    subtitle: "Security-Based Project",
    description:
      "A basic honeypot system that monitors unauthorized access attempts, exploring network security fundamentals and intrusion detection.",
    tech: ["Networking", "Security", "Python"],
    github: "#",
    demo: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 400);
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
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:ayushi.110718@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-bold text-lg"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </span>
            Ayushi
          </button>

          <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className="text-foreground/70 hover:text-primary transition-smooth"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          <Button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft"
          >
            Hire Me
          </Button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-smooth"
            onClick={() => setNavOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {navOpen && (
          <div className="md:hidden glass border-t border-border">
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollTo(n.id)}
                    className="w-full text-left py-2 text-foreground/80 hover:text-primary"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-hero pt-24"
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 -left-10 w-72 h-72 rounded-full bg-primary-glow/40 blur-3xl animate-float" />

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <Badge className="mb-5 bg-secondary text-secondary-foreground border-0">
              <Heart className="w-3 h-3 mr-1.5" /> Welcome to my portfolio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-5">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ayushi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-3">
              Frontend Developer · Computer Science Student
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg">
              Building responsive and user-friendly web experiences with care for
              design, accessibility, and clean code.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => scrollTo("projects")}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft hover:shadow-glow transition-smooth"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="border-primary/40 hover:bg-primary/10 transition-smooth"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center animate-float">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full glass flex items-center justify-center text-7xl font-extrabold text-primary">
                  A
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 glass rounded-2xl p-4 shadow-soft">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me" eyebrow="Who I am">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              I'm a motivated computer science student with a strong foundation in{" "}
              <span className="text-primary font-semibold">frontend development</span>.
              I enjoy crafting interfaces that are clean, responsive, and easy to use.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Skilled in HTML, CSS, and JavaScript, I focus on usability and visual
              clarity. I'm a quick learner, always curious, and eager to contribute
              to real-world projects that make an impact.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="p-6 glass border-primary/20 shadow-soft">
              <h3 className="font-semibold mb-3 text-primary">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>🎓 B.Tech CSE Student</li>
                <li>💻 Frontend Focused</li>
                <li>📍 Ghaziabad, India</li>
                <li>✨ Open to opportunities</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" eyebrow="What I work with" tinted>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full bg-card/80 backdrop-blur border-primary/10 hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 transition-smooth">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-3">{s.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="bg-secondary/70 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" eyebrow="Things I've built">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="group p-7 h-full bg-card border-primary/10 hover:border-primary/40 hover:shadow-glow hover:-translate-y-2 transition-smooth overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth" />
                <div className="relative">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {p.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="border-primary/30">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-primary/40 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-1.5" /> Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                    >
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1.5" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" eyebrow="My journey" tinted>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-7 glass border-primary/20 shadow-soft max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft shrink-0">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Intern — SparkxYouth</h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Virtual Internship
                </p>
                <ul className="space-y-1.5 text-foreground/80 text-sm md:text-base">
                  <li>• Managed social media content</li>
                  <li>• Planned and scheduled posts</li>
                  <li>• Developed communication and teamwork skills</li>
                  <li>• Improved time management</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education" eyebrow="My foundation">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-7 border-primary/20 shadow-soft max-w-3xl bg-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft shrink-0">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                <p className="text-primary font-medium">
                  IMS Engineering College, Ghaziabad
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in Touch" eyebrow="Let's connect" tinted>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-foreground/80 mb-6">
              I'd love to hear about opportunities, collaborations, or just to chat.
              Reach out through any of these channels:
            </p>
            <ContactRow icon={<Phone className="w-5 h-5" />} label="Phone" value="+91 7505549628" href="tel:+917505549628" />
            <ContactRow icon={<Mail className="w-5 h-5" />} label="Email" value="ayushi.110718@gmail.com" href="mailto:ayushi.110718@gmail.com" />
            <ContactRow icon={<MapPin className="w-5 h-5" />} label="Location" value="Ghaziabad, India" />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl border border-primary/20 shadow-soft space-y-4"
          >
            <Input name="name" placeholder="Your name" className="bg-background/70" required />
            <Input name="email" type="email" placeholder="Your email" className="bg-background/70" required />
            <Textarea name="message" placeholder="Your message" rows={5} className="bg-background/70" required />
            <Button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ayushi. Crafted with{" "}
            <Heart className="inline w-3.5 h-3.5 text-primary fill-primary" /> in Ghaziabad.
          </p>
          <div className="flex gap-2">
            <Button asChild size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground rounded-full">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground rounded-full">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-smooth"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

const Section = ({
  id,
  title,
  eyebrow,
  children,
  tinted,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
  tinted?: boolean;
}) => (
  <section id={id} className={`py-20 md:py-28 ${tinted ? "bg-secondary/30" : ""}`}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold">
          {title.split(" ").map((w, i) => (
            <span key={i}>
              {i === title.split(" ").length - 1 ? (
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {w}
                </span>
              ) : (
                <>{w} </>
              )}
            </span>
          ))}
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mt-4" />
      </motion.div>
      {children}
    </div>
  </section>
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
    <Card className="p-4 glass border-primary/20 hover:border-primary/50 hover:-translate-y-0.5 transition-smooth flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </Card>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
};

export default Index;
