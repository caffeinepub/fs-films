import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  Briefcase,
  Cake,
  Camera,
  CheckCircle,
  ChevronDown,
  Film,
  Gem,
  Heart,
  Loader2,
  Mail,
  Menu,
  Mic,
  Phone,
  Smile,
  Sparkles,
  Star,
  Sun,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { EventType } from "./backend.d";
import { useSubmitInquiry } from "./hooks/useQueries";

// ─── Service Cards Data ──────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 1,
    name: "Weddings",
    icon: Gem,
    description: "Timeless bridal moments",
  },
  {
    id: 2,
    name: "Pre-Wedding",
    icon: Heart,
    description: "Your love story, beautifully told",
  },
  {
    id: 3,
    name: "Corporate Events",
    icon: Briefcase,
    description: "Professional excellence captured",
  },
  {
    id: 4,
    name: "Fashion Events",
    icon: Star,
    description: "Style and elegance immortalized",
  },
  {
    id: 5,
    name: "Parties",
    icon: Sparkles,
    description: "Every celebration remembered",
  },
  {
    id: 6,
    name: "Conferences",
    icon: Mic,
    description: "Impactful moments documented",
  },
  {
    id: 7,
    name: "Portrait",
    icon: User,
    description: "Your essence, perfectly framed",
  },
  {
    id: 8,
    name: "Outdoor Shoot",
    icon: Sun,
    description: "Nature as your canvas",
  },
  {
    id: 9,
    name: "Birthday",
    icon: Cake,
    description: "Milestones worth cherishing",
  },
  {
    id: 10,
    name: "Baby Shoot",
    icon: Smile,
    description: "Precious innocence preserved",
  },
  {
    id: 11,
    name: "Cinematic Shoots",
    icon: Film,
    description: "Cinematic artistry unleashed",
  },
  {
    id: 12,
    name: "Candid Shoots",
    icon: Camera,
    description: "Real emotions, raw beauty",
  },
];

const EVENT_TYPE_OPTIONS: { label: string; value: EventType }[] = [
  { label: "Weddings", value: EventType.weddings },
  { label: "Pre-Wedding", value: EventType.preWedding },
  { label: "Corporate Events", value: EventType.corporateEvents },
  { label: "Fashion Events", value: EventType.fashionEvents },
  { label: "Parties", value: EventType.parties },
  { label: "Conferences", value: EventType.conferences },
  { label: "Portrait", value: EventType.portrait },
  { label: "Outdoor Photo Shoot", value: EventType.outdoorPhotoShoot },
  { label: "Birthday", value: EventType.birthday },
  { label: "Baby Shoot", value: EventType.babyShoot },
  { label: "Cinematic Shoots", value: EventType.cinematicShoots },
  { label: "Candid Shoots", value: EventType.candidShoots },
];

// ─── Container animation variants ───────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ─── Nav Component ───────────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gold-dark/30 bg-film-black/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex flex-col items-start gap-0 group focus-visible:outline-none"
          >
            <span className="font-display font-bold text-xl md:text-2xl gradient-text-gold tracking-wide leading-none">
              Fs__filmss
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-body">
              Photography & Videography
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Home", id: "hero", ocid: "nav.home.link" },
              { label: "Services", id: "services", ocid: "nav.services.link" },
              { label: "Book Now", id: "booking", ocid: "nav.booknow.link" },
              { label: "Contact", id: "contact", ocid: "nav.contact.link" },
            ].map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={link.ocid}
                onClick={() => scrollTo(link.id)}
                className="relative px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-gold transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-300" />
              </button>
            ))}
            <Button
              onClick={() => scrollTo("booking")}
              size="sm"
              className="ml-3 gradient-gold text-film-black font-semibold hover:opacity-90 shadow-gold-sm transition-all duration-200 font-body"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-muted-foreground hover:text-gold transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-film-black/95 border-t border-gold-dark/20 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {[
                { label: "Home", id: "hero", ocid: "nav.home.link" },
                {
                  label: "Services",
                  id: "services",
                  ocid: "nav.services.link",
                },
                { label: "Book Now", id: "booking", ocid: "nav.booknow.link" },
                { label: "Contact", id: "contact", ocid: "nav.contact.link" },
              ].map((link) => (
                <button
                  type="button"
                  key={link.id}
                  data-ocid={link.ocid}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-4 py-3 text-base font-body text-muted-foreground hover:text-gold transition-colors duration-150 rounded hover:bg-film-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-film-black/70 via-film-black/50 to-film-black/90" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, oklch(0.06 0.003 50 / 0.7) 100%)",
        }}
      />

      {/* Decorative gold lines */}
      <div
        className="absolute top-1/4 left-0 right-0 h-px opacity-20"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.78 0.14 75), transparent)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-0 right-0 h-px opacity-20"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.78 0.14 75), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <div className="h-px w-12 bg-gold opacity-70" />
            <span className="text-xs tracking-[0.35em] uppercase font-body text-gold font-medium">
              Professional Studio
            </span>
            <div className="h-px w-12 bg-gold opacity-70" />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight"
          >
            <span className="gradient-text-gold">Fs__filmss</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-display italic text-xl sm:text-2xl md:text-3xl text-foreground/90 tracking-wide"
          >
            Professional Photography & Videography
          </motion.p>

          {/* Divider */}
          <motion.div variants={itemVariants} className="gold-divider w-48" />

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base sm:text-lg text-muted-foreground tracking-[0.15em] uppercase"
          >
            Creating Memories & Winning Hearts
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button
              data-ocid="hero.primary_button"
              onClick={scrollToBooking}
              size="lg"
              className="gradient-gold text-film-black font-bold text-base px-10 py-6 shadow-gold hover:opacity-90 hover:scale-105 active:scale-100 transition-all duration-200 font-body tracking-wide"
            >
              Book Now
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="lg"
              variant="outline"
              className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold text-base px-10 py-6 font-body tracking-wide transition-all duration-200"
            >
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/50"
      >
        <span className="text-xs tracking-widest font-body uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Services Section ────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-film-dark noise-texture"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gold opacity-70" />
            <span className="text-xs tracking-[0.35em] uppercase font-body text-gold font-medium">
              What We Offer
            </span>
            <div className="h-px w-12 bg-gold opacity-70" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl gradient-text-gold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground font-body text-lg max-w-xl mx-auto"
          >
            From intimate portraits to grand weddings — we capture every story
            with artistry and passion.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                data-ocid={`services.item.${service.id}`}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 cursor-default overflow-hidden hover:border-gold/40 hover:shadow-gold transition-all duration-300"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, oklch(0.78 0.14 75 / 0.06), transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <Icon size={22} className="text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Highlight Banner ─────────────────────────────────────────────────────────

function HighlightBanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-gold opacity-90" />
      <div className="absolute inset-0 noise-texture" />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.08 0.005 50) 0px, oklch(0.08 0.005 50) 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-film-black/40" />
            <span className="text-xs tracking-[0.3em] uppercase font-body text-film-black/70 font-medium">
              Now Accepting Bookings
            </span>
            <div className="h-px w-10 bg-film-black/40" />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-film-black leading-tight">
            Available for All Marriage &<br className="hidden sm:block" /> Party
            Function Bookings
          </h2>

          <p className="font-body text-film-black/75 text-base md:text-lg max-w-xl">
            Let us be part of your most cherished moments. Reach out today to
            reserve your date.
          </p>

          <Button
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            size="lg"
            className="bg-film-black text-gold hover:bg-film-mid hover:text-gold border border-film-black font-bold text-base px-10 py-6 font-body tracking-wide transition-all duration-200 shadow-cinematic"
          >
            Enquire Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Booking & Contact Section ────────────────────────────────────────────────

function BookingContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "" as EventType | "",
    message: "",
  });

  const { mutate, isPending, isSuccess, isError, reset } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.eventType) return;
    mutate(
      {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        eventType: formState.eventType as EventType,
        message: formState.message,
      },
      {
        onSuccess: () => {
          setFormState({
            name: "",
            phone: "",
            email: "",
            eventType: "",
            message: "",
          });
          toast.success("Enquiry submitted! We'll be in touch soon.");
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  return (
    <section
      id="booking"
      className="section-padding bg-film-black noise-texture"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gold opacity-70" />
            <span className="text-xs tracking-[0.35em] uppercase font-body text-gold font-medium">
              Let's Connect
            </span>
            <div className="h-px w-12 bg-gold opacity-70" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl gradient-text-gold mb-4"
          >
            Book a Session
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground font-body text-lg max-w-xl mx-auto"
          >
            Ready to create something beautiful together? Fill out the form or
            reach out directly.
          </motion.p>
        </motion.div>

        <div
          id="contact"
          className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start"
        >
          {/* Contact Info Card */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px gradient-gold" />

            <div className="flex flex-col gap-8">
              {/* Brand message */}
              <div>
                <h3 className="font-display font-bold text-3xl gradient-text-gold mb-3">
                  Fs__filmss
                </h3>
                <p className="font-display italic text-xl text-foreground/80 mb-4">
                  "Creating Memories & Winning Hearts"
                </p>
                <div className="gold-divider w-full mb-4" />
                <p className="font-body text-muted-foreground leading-relaxed">
                  We are a passionate photography and videography studio
                  dedicated to immortalizing your most precious moments. From
                  grand weddings to intimate portraits — we bring artistry,
                  emotion, and excellence to every frame.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-4">
                <h4 className="font-display font-semibold text-lg text-gold">
                  Get In Touch
                </h4>

                <a
                  data-ocid="contact.phone1"
                  href="tel:9696059316"
                  className="flex items-center gap-4 p-4 rounded-lg bg-film-mid/60 border border-border/40 hover:border-gold/40 hover:bg-film-mid transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-all duration-200">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground font-body mb-0.5">
                      Phone 1
                    </p>
                    <p className="font-body font-semibold text-foreground group-hover:text-gold transition-colors">
                      9696059316
                    </p>
                  </div>
                </a>

                <a
                  data-ocid="contact.phone2"
                  href="tel:9305051353"
                  className="flex items-center gap-4 p-4 rounded-lg bg-film-mid/60 border border-border/40 hover:border-gold/40 hover:bg-film-mid transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-all duration-200">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground font-body mb-0.5">
                      Phone 2
                    </p>
                    <p className="font-body font-semibold text-foreground group-hover:text-gold transition-colors">
                      9305051353
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-film-mid/60 border border-border/40">
                  <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground font-body mb-0.5">
                      Email
                    </p>
                    <p className="font-body text-muted-foreground italic">
                      Contact us for email details
                    </p>
                  </div>
                </div>
              </div>

              {/* Services quick list */}
              <div>
                <h4 className="font-display font-semibold text-lg text-gold mb-3">
                  Specialising In
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Weddings",
                    "Pre-Wedding",
                    "Corporate",
                    "Fashion",
                    "Portraits",
                    "Candid",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body px-3 py-1.5 rounded-full border border-gold/30 text-gold/80 bg-gold/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15 }}
            className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px gradient-gold" />

            <h3 className="font-display font-bold text-2xl text-foreground mb-2">
              Send an Enquiry
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-8">
              Tell us about your event and we'll get back to you promptly.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  data-ocid="booking.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center gap-5 py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-foreground mb-2">
                      Enquiry Submitted!
                    </h4>
                    <p className="font-body text-muted-foreground">
                      Thank you for reaching out. We'll contact you shortly to
                      discuss your requirements.
                    </p>
                  </div>
                  <Button
                    onClick={reset}
                    variant="outline"
                    className="border-gold/40 text-gold hover:bg-gold/10 font-body"
                  >
                    Submit Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm text-muted-foreground"
                    >
                      Full Name <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="name"
                      data-ocid="booking.name.input"
                      required
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-film-mid/60 border-border/60 focus:border-gold/60 focus:ring-gold/30 font-body text-foreground placeholder:text-muted-foreground/50 h-11"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="phone"
                      className="font-body text-sm text-muted-foreground"
                    >
                      Phone Number <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="phone"
                      data-ocid="booking.phone.input"
                      required
                      type="tel"
                      placeholder="Your phone number"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="bg-film-mid/60 border-border/60 focus:border-gold/60 focus:ring-gold/30 font-body text-foreground placeholder:text-muted-foreground/50 h-11"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm text-muted-foreground"
                    >
                      Email Address <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="email"
                      data-ocid="booking.email.input"
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, email: e.target.value }))
                      }
                      className="bg-film-mid/60 border-border/60 focus:border-gold/60 focus:ring-gold/30 font-body text-foreground placeholder:text-muted-foreground/50 h-11"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="eventType"
                      className="font-body text-sm text-muted-foreground"
                    >
                      Event Type <span className="text-gold">*</span>
                    </Label>
                    <Select
                      required
                      value={formState.eventType}
                      onValueChange={(v) =>
                        setFormState((p) => ({
                          ...p,
                          eventType: v as EventType,
                        }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="booking.eventtype.select"
                        className="bg-film-mid/60 border-border/60 focus:border-gold/60 focus:ring-gold/30 font-body text-foreground h-11"
                      >
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border/60 font-body">
                        {EVENT_TYPE_OPTIONS.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value}
                            className="focus:bg-gold/10 focus:text-gold"
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="message"
                      className="font-body text-sm text-muted-foreground"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="booking.message.textarea"
                      placeholder="Tell us about your event — date, location, style preferences..."
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, message: e.target.value }))
                      }
                      className="bg-film-mid/60 border-border/60 focus:border-gold/60 focus:ring-gold/30 font-body text-foreground placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  {/* Error state */}
                  <AnimatePresence>
                    {isError && (
                      <motion.div
                        data-ocid="booking.error_state"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/30"
                      >
                        <AlertCircle
                          size={16}
                          className="text-destructive flex-shrink-0"
                        />
                        <p className="text-sm font-body text-destructive">
                          Something went wrong. Please try again.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <Button
                    data-ocid="booking.submit_button"
                    type="submit"
                    disabled={isPending || !formState.eventType}
                    size="lg"
                    className="gradient-gold text-film-black font-bold text-base h-12 shadow-gold hover:opacity-90 hover:scale-[1.02] active:scale-100 transition-all duration-200 font-body tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 mt-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        <span data-ocid="booking.loading_state">
                          Submitting...
                        </span>
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-film-black border-t border-border/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-3xl gradient-text-gold mb-1">
              Fs__filmss
            </h3>
            <p className="font-display italic text-muted-foreground text-lg">
              Creating Memories & Winning Hearts
            </p>
          </div>

          {/* Divider */}
          <div className="gold-divider w-48" />

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "Services", "Book Now", "Contact"].map((link) => {
              const id = link.toLowerCase().replace(" ", "");
              return (
                <button
                  type="button"
                  key={link}
                  onClick={() =>
                    document
                      .getElementById(
                        id === "booknow"
                          ? "booking"
                          : id === "home"
                            ? "hero"
                            : id,
                      )
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm font-body text-muted-foreground hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {link}
                </button>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs font-body text-muted-foreground/60">
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HighlightBanner />
        <BookingContactSection />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.11 0.008 50)",
            border: "1px solid oklch(0.22 0.015 60)",
            color: "oklch(0.96 0.015 90)",
          },
        }}
      />
    </div>
  );
}
