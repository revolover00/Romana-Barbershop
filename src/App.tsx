import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Phone, 
  Scissors, 
  Sparkles, 
  Layers, 
  Smile, 
  Zap, 
  Droplet, 
  Sun, 
  Palette, 
  Quote, 
  Gamepad2, 
  MapPin, 
  PhoneCall,
  Menu,
  X
} from 'lucide-react';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  key?: React.Key;
}

const Reveal = ({ children, direction = 'up', delay = 0 }: RevealProps) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      scale: direction === 'scale' ? 0.94 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Barbers', href: '#barbers' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Hours & Location', href: '#location' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-deep)] text-[var(--color-text-light)] font-sans antialiased">
      {/* Header & Navigation */}
      <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] py-6 ${isScrolled ? 'bg-[rgba(18,18,18,0.95)] backdrop-blur-md py-4 border-b border-[rgba(201,168,76,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : ''}`}>
        <div className="container flex items-center justify-between mx-auto px-8 max-w-[1200px]">
          <a href="#" className="font-display text-[1.6rem] font-bold tracking-[0.15em] text-[var(--color-text-light)] no-underline uppercase flex flex-col">
            <span className="flex items-center">ROMANA<span className="text-[var(--color-gold)]">.</span></span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--color-text-muted)] -mt-0.5">Barbershop</span>
          </a>

          <button 
            className="md:hidden w-11 h-11 flex items-center justify-center text-[var(--color-text-light)] z-[1100]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`fixed md:relative top-20 md:top-0 left-0 w-full md:w-auto h-[calc(100vh-80px)] md:h-auto bg-[var(--color-bg-deep)] md:bg-transparent flex flex-col md:flex-row items-center p-16 md:p-0 gap-12 md:gap-10 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-120%] opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[var(--color-text-light)] no-underline text-[0.85rem] font-medium tracking-[0.08em] uppercase transition-all duration-400 hover:text-[var(--color-gold)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[1px] after:bg-[var(--color-gold)] after:transition-all after:duration-400 hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking" 
              className="text-[var(--color-gold)] no-underline text-[0.85rem] font-medium tracking-[0.08em] uppercase transition-all duration-400 hover:text-[var(--color-gold-bright)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Cut
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-[100px] relative overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(201,168,76,0.08)_0%,rgba(18,18,18,1)_70%)] [background:linear-gradient(rgba(0,0,0,0.61),rgba(0,0,0,0.5))]">
        <div className="absolute right-[-8%] bottom-[10%] font-display font-bold text-[20vw] text-[rgba(245,242,235,0.015)] tracking-[0.1em] leading-[0.8] pointer-events-none select-none z-0">ROMANA</div>
        
        <div className="container mx-auto px-8 max-w-[1200px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-center w-full relative z-[2]">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.25)] text-[var(--color-gold)] text-[0.75rem] font-semibold tracking-[0.1em] uppercase mb-8">
              <Star size={14} fill="currentColor" />
              <span>4.8/5 Rating — 496 Phoenix Reviews</span>
            </div>
            <h1 className="text-[3rem] sm:text-[4.5rem] font-bold leading-[1.1] mb-6 uppercase tracking-[-0.01em]">
              Romana
              <span className="block italic font-normal font-display normal-case text-[var(--color-gold)] mt-1">Barbershop</span>
            </h1>
            <p className="text-[1.25rem] text-[var(--color-text-muted)] mb-12 max-w-[550px] border-l-2 border-[var(--color-gold)] pl-6">
              "Where Every Cut Tells a Story" — A community-driven, premium grooming haven in Phoenix. Grab a cue, relax in English or Spanish, and experience unmatched hospitality.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="tel:(480)754-9418" className="btn btn-primary">
                <Phone size={16} className="mr-2" />
                Book Appointment
              </a>
              <a href="#services" className="btn btn-secondary">
                View Services
              </a>
            </div>
          </Reveal>

          <div className="hidden md:flex justify-center items-center relative z-[1]">
            <Reveal direction="scale" delay={0.3}>
              <div className="bg-[var(--color-bg-card)] border border-[rgba(201,168,76,0.2)] p-12 w-[320px] h-[380px] flex flex-col justify-between items-center text-center relative shadow-[0_20px_40px_rgba(0,0,0,0.4)] rotate-2 transition-all duration-400 hover:rotate-0 hover:scale-[1.02] hover:border-[var(--color-gold)] hover:shadow-[0_30px_60px_rgba(201,168,76,0.08)] after:content-[''] after:absolute after:top-2.5 after:bottom-2.5 after:left-2.5 after:right-2.5 after:border after:border-dashed after:border-[rgba(201,168,76,0.15)] after:pointer-events-none">
                <div className="w-[70px] h-[70px] border border-[var(--color-gold)] rounded-full flex items-center justify-center text-[var(--color-gold)]">
                  <Scissors size={32} />
                </div>
                <div>
                  <h3 className="text-[1.3rem] uppercase tracking-[0.1em] mt-4">Community Vibe</h3>
                  <p className="text-[0.8rem] text-[var(--color-text-muted)] leading-[1.5]">A relaxed yet lively atmosphere, multilingual support, and a slate pool table in the waiting area.</p>
                </div>
                <div className="font-display italic text-[1.1rem] text-[var(--color-gold)]">EST. 2015</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[var(--color-bg-deep)] border-b border-[rgba(245,242,235,0.05)] relative">
        <div className="container mx-auto px-8 max-w-[1200px] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          <div className="relative">
            <span className="absolute top-[-40px] left-[-30px] font-display font-bold text-[18rem] text-[rgba(201,168,76,0.03)] leading-[0.8] pointer-events-none select-none z-0">R</span>
            <div className="relative z-[1] max-w-full">
              <Reveal direction="left">
                <span className="text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4 block">Our Legacy</span>
                <h2 className="text-[3.2rem] uppercase tracking-[-0.01em] text-[var(--color-gold)]">The Romana</h2>
                <h2 className="text-[3.2rem] italic font-normal font-display normal-case mb-8">Experience</h2>
                <p className="text-[1.2rem] text-[var(--color-text-light)] mb-8 leading-[1.8]">
                  At Romana Barbershop, we believe a haircut is more than just a routine chore—it's a ritual, a conversation, and a direct expression of your identity. We have cultivated a vibrant, community-oriented bilingual space.
                </p>
                <p className="text-[var(--color-text-muted)] mb-8 leading-[1.7]">
                  Whether you are stepping up to our premium slate pool table in the waiting area, chatting in English or Spanish, or relaxing in the hands of our master craftsmen, Romana is a place to slow down, connect, and elevate your personal care routine. We are proud to serve a diverse, lively Phoenix clientele.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                  <div className="border-t border-[rgba(201,168,76,0.3)] pt-6">
                    <h4 className="font-sans text-[1.1rem] uppercase tracking-[0.05em] mb-2 text-[var(--color-gold)]">Bi-Lingual Shop</h4>
                    <p className="text-[0.85rem]">Enjoy conversations fluently in English & Spanish. Everyone is welcome.</p>
                  </div>
                  <div className="border-t border-[rgba(201,168,76,0.3)] pt-6">
                    <h4 className="font-sans text-[1.1rem] uppercase tracking-[0.05em] mb-2 text-[var(--color-gold)]">Lounge & Vibe</h4>
                    <p className="text-[0.85rem]">Premium slate pool table in the lounge. Relax and unwind while you wait.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="bg-[var(--color-bg-card)] border border-[rgba(245,242,235,0.05)] p-12 relative shadow-[-15px_15px_40px_rgba(0,0,0,0.4)] after:content-[''] after:absolute after:top-[-15px] after:right-[-15px] after:w-full after:height-full after:border after:border-[var(--color-gold)] after:z-[-1] after:pointer-events-none">
              <Quote size={48} className="text-[var(--color-gold)] opacity-15 mb-6" />
              <h3 className="font-display text-[1.7rem] leading-[1.5] font-italic italic mb-8">
                "We didn't set out to build just another shop in Phoenix. We wanted to build a cultural landmark that bridges quality with community."
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 px-5 py-3 bg-[#1a2e1d] border border-[rgba(76,175,80,0.2)] text-[#a5d6a7] text-[0.8rem] font-medium uppercase tracking-[0.05em]">
                  <Gamepad2 size={16} className="text-[var(--color-gold)]" />
                  <span>Slate Pool table open</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#171717] border-b border-[rgba(245,242,235,0.05)]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="text-center mb-20 relative">
            <Reveal direction="up">
              <span className="text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4 block">Core Offerings</span>
              <h2 className="text-[3.2rem] uppercase tracking-[-0.01em]">Grooming & Cuts</h2>
              <p className="max-w-[600px] mx-auto mt-4">Pristine razor lines, custom fades, and top-shelf styling. Tailor your selection with our master craftsmen.</p>
              <div className="w-[60px] h-[0.5rem] mt-6 mx-auto bg-[var(--color-gold)]" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Reveal key={service.name} direction="up" delay={index * 0.1}>
                <div className={`bg-[var(--color-bg-card)] border border-[rgba(245,242,235,0.03)] p-10 h-full min-h-[250px] flex flex-col justify-between transition-all duration-400 hover:translate-y-[-5px] hover:border-[var(--color-gold)] hover:shadow-[0_15px_35px_var(--color-gold-glow)] group ${index % 3 === 0 ? 'border-l-4 border-l-[var(--color-gold)]' : ''} ${index % 3 === 1 ? 'lg:translate-y-6 lg:hover:translate-y-4' : ''}`}>
                  <div className="flex items-center justify-between mb-8">
                    <service.icon size={32} className="text-[var(--color-gold)] transition-all duration-400 group-hover:text-[var(--color-gold-bright)] group-hover:scale-110" />
                    <span className="font-display text-[rgba(201,168,76,0.15)] text-[2rem] font-bold">{service.num}</span>
                  </div>
                  <div>
                    <h3 className="text-[1.4rem] mb-3 tracking-[0.02em] uppercase">{service.name}</h3>
                    <p className="text-[0.9rem] text-[var(--color-text-muted)] leading-[1.5]">{service.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="py-32 bg-[var(--color-bg-deep)] border-b border-[rgba(245,242,235,0.05)]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="text-center mb-20 relative">
            <Reveal direction="up">
              <span className="text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4 block">Master Craftsmen</span>
              <h2 className="text-[3.2rem] uppercase tracking-[-0.01em]">The Barbers</h2>
              <p className="max-w-[600px] mx-auto mt-4">Pioneers of neat alignments and clean fades. Book with your favorite specialist.</p>
              <div className="w-[60px] h-[0.5rem] mt-6 mx-auto bg-[var(--color-gold)]" />
            </Reveal>
          </div>

          <div className="flex flex-wrap justify-center gap-16 mt-12">
            {[
              { 
                name: 'Larry', 
                title: 'Fade Specialist', 
                bio: 'Larry is famous throughout Phoenix for his high skin fades, tapers, and surgically precise line-ups. Combining classical razor practices with modern styles, his details are legendary.',
                color: 'var(--color-mint-bright)'
              },
              { 
                name: 'Gio', 
                title: 'Style Architect', 
                bio: 'Gio brings deep detail to customized classic haircuts, clean beard sculpting, and customized hair designs. A master of shape and scissor work, he tailors every cut to the individual.',
                color: 'var(--color-mint-bright)'
              }
            ].map((barber, index) => (
              <Reveal key={barber.name} direction={index === 0 ? 'left' : 'right'} delay={index * 0.2}>
                <div className="bg-[var(--color-bg-card)] border border-[rgba(245,242,235,0.04)] p-12 text-center w-full max-w-[440px] relative transition-all duration-400 hover:border-[var(--color-gold)] hover:shadow-[0_20px_50px_var(--color-gold-glow)] hover:translate-y-[-8px] group after:content-[''] after:absolute after:top-[15px] after:left-[15px] after:right-[15px] after:bottom-[15px] after:border after:border-[rgba(201,168,76,0.08)] after:pointer-events-none after:transition-all after:duration-400 hover:after:border-[rgba(201,168,76,0.3)]">
                  <div className="w-[150px] h-[150px] rounded-full bg-[var(--color-bg-accent)] border-2 border-[var(--color-gold)] mx-auto mb-8 flex items-center justify-center overflow-hidden relative transition-all duration-400 group-hover:bg-[var(--color-bg-deep)] group-hover:shadow-[0_0_25px_rgba(201,168,76,0.3)] after:content-[''] after:absolute after:bottom-0 after:w-[110px] after:height-[110px] after:rounded-full after:bg-[var(--color-text-muted)] after:opacity-15 group-hover:after:bg-[var(--color-gold)] group-hover:after:opacity-35 transition-all duration-400">
                    <div className="relative z-[2] w-[85px] h-[85px] transition-all duration-400 group-hover:rotate-6">
                      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[var(--color-text-light)] group-hover:text-[var(--color-gold)]">
                        <path d="M50,15 C42,15 36,22 36,30 C36,32 37,34 38,36 C35,39 33,43 33,48 C33,55 38,60 44,62 C46,65 48,70 50,75 C52,70 54,65 56,62 C62,60 67,55 67,48 C67,43 65,39 62,36 C63,34 64,32 64,30 C64,22 58,15 50,15 Z" fill={barber.color} />
                        <path d="M40,50 L50,68 L60,50 C60,50 55,54 50,54 C45,54 40,50 40,50 Z" />
                        <path d="M30,85 C30,73 40,70 50,70 C60,70 70,73 70,85 L70,90 L30,90 Z" fill="#b0aaa0" opacity="0.4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[1.8rem] tracking-[0.05em] uppercase mb-2">{barber.name}</h3>
                  <span className="text-[0.8rem] font-bold uppercase tracking-[0.25em] text-[var(--color-gold)] mb-6 block">{barber.title}</span>
                  <p className="text-[0.95rem] leading-[1.6] text-[var(--color-text-muted)]">{barber.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-[#171717] border-b border-[rgba(245,242,235,0.05)]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="text-center mb-20 relative">
            <Reveal direction="up">
              <span className="text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4 block">Tested & Trusted</span>
              <h2 className="text-[3.2rem] uppercase tracking-[-0.01em]">Word On The Street</h2>
              <p className="max-w-[600px] mx-auto mt-4">Real feedback from real gentlemen who call Romana their home in Phoenix.</p>
              <div className="w-[60px] h-[0.5rem] mt-6 mx-auto bg-[var(--color-gold)]" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <Reveal key={review.author} direction="up" delay={index * 0.2}>
                <div className={`bg-[var(--color-bg-card)] border border-[rgba(245,242,235,0.03)] p-12 transition-all duration-400 hover:border-[var(--color-gold)] hover:bg-[var(--color-bg-accent)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] ${index === 1 ? 'lg:translate-y-[-2rem]' : ''} ${index === 2 ? 'lg:translate-y-[1.5rem]' : ''}`}>
                  <div className="text-[var(--color-gold)] text-[0.9rem] mb-6 tracking-[0.1em]">★ ★ ★ ★ ★</div>
                  <p className="font-display italic text-[1.15rem] leading-[1.6] text-[var(--color-text-light)] mb-8">"{review.quote}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[0.9rem] uppercase tracking-[0.05em]">{review.author}</span>
                    <span className="text-[0.75rem] text-[var(--color-gold)] italic">{review.location}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Map Section */}
      <section id="location" className="py-32 bg-[var(--color-bg-deep)] border-b border-[rgba(245,242,235,0.05)]">
        <div className="container mx-auto px-8 max-w-[1200px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 items-stretch">
          <Reveal direction="left">
            <div className="bg-[var(--color-bg-card)] border border-[rgba(201,168,76,0.15)] p-14 h-full flex flex-col justify-between relative after:content-[''] after:absolute after:top-2.5 after:bottom-2.5 after:left-2.5 after:right-2.5 after:border after:border-dashed after:border-[rgba(201,168,76,0.1)] after:pointer-events-none">
              <div>
                <span className="text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2 block">Join Us</span>
                <h3 className="text-[2rem] uppercase mb-4">Hours & Schedule</h3>
                <p className="text-[0.9rem] mb-8">Walk-ins are welcome, but bookings guarantee your timeframe.</p>
                
                <table className="w-full border-collapse mt-8">
                  <tbody>
                    <tr className="border-b border-[rgba(245,242,235,0.05)]">
                      <td className="py-5 text-[1rem] font-medium uppercase tracking-[0.05em]">Monday–Thursday</td>
                      <td className="py-5 text-right text-[var(--color-text-muted)]">10:00 AM – 6:00 PM</td>
                    </tr>
                    <tr className="border-b border-[rgba(245,242,235,0.05)]">
                      <td className="py-5 text-[1rem] font-medium uppercase tracking-[0.05em]">Friday–Saturday</td>
                      <td className="py-5 text-right text-[var(--color-text-muted)]">9:00 AM – 6:00 PM</td>
                    </tr>
                    <tr className="opacity-50">
                      <td className="py-5 text-[1rem] font-medium uppercase tracking-[0.05em]">Sunday</td>
                      <td className="py-5 text-right text-[var(--color-gold)] font-medium italic">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-12 border-t border-[rgba(245,242,235,0.05)] pt-8">
                <p className="text-[0.85rem] text-[var(--color-gold)] flex items-center gap-2">
                  <MapPin size={14} />
                  2822 N 32nd St, Phoenix, AZ 85008
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="relative h-full min-h-[450px] border border-[rgba(245,242,235,0.05)] shadow-[0_15px_35px_rgba(0,0,0,0.4)] group after:content-[''] after:absolute after:top-5 after:left-5 after:w-full after:height-full after:border-2 after:border-[var(--color-gold)] after:z-[-1] after:pointer-events-none">
              <iframe 
                className="w-full h-full border-none grayscale invert-[0.92] contrast-[1.1] transition-all duration-400 group-hover:grayscale-[0.5] group-hover:invert-0 group-hover:contrast-100"
                src="https://maps.google.com/maps?q=33.4796791,-112.0136413&z=17&output=embed" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Romana Barbershop Location Map">
              </iframe>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-40 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.1)_0%,rgba(18,18,18,1)_100%)] text-center">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <Reveal direction="scale">
            <div className="max-w-[800px] mx-auto border border-[rgba(201,168,76,0.2)] p-12 sm:p-20 bg-[rgba(25,25,25,0.8)] shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative after:content-[''] after:absolute after:top-4 after:bottom-4 after:left-4 after:right-4 after:border after:border-dashed after:border-[rgba(201,168,76,0.15)] after:pointer-events-none">
              <span className="text-[0.9rem] font-bold tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6 block">Step Into The Chair</span>
              <h2 className="text-[2.2rem] sm:text-[3.5rem] uppercase mb-8 leading-[1.2]">Ready For Your Cut?</h2>
              <p className="max-w-[600px] mx-auto mb-10 text-[var(--color-text-muted)]">
                Book clean skin fades, professional beard sculpting, or custom styling designs easily. Call our shop directly or tap down to dial ahead.
              </p>
              
              <a href="tel:(480)754-9418" className="font-display text-[2rem] sm:text-[3rem] font-bold text-[var(--color-text-light)] no-underline block mb-12 transition-all duration-400 hover:text-[var(--color-gold)] hover:tracking-[0.02em]">
                (480) 754-9418
              </a>
              
              <div className="flex flex-wrap justify-center gap-8">
                <a href="tel:(480)754-9418" className="btn btn-primary px-12 py-5">
                  <PhoneCall size={16} className="mr-2" />
                  Call Now to Book
                </a>
                <a href="#location" className="btn btn-secondary px-12 py-5">
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#0b0b0b] text-[var(--color-text-muted)] border-t border-[rgba(245,242,235,0.05)] text-[0.9rem]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-12">
            <div className="flex flex-col gap-6">
              <a href="#" className="font-display text-[1.8rem] tracking-[0.1em] text-[var(--color-text-light)] uppercase no-underline flex items-center">
                ROMANA<span className="text-[var(--color-gold)]">.</span>
              </a>
              <p className="max-w-[400px] text-[0.85rem]">
                Crafting stories, sharp fades, and pristine shapes for a diverse clientele across Phoenix. Community-driven and bilingual since 2015.
              </p>
              <div>
                <span className="text-[0.8rem] text-[var(--color-gold)] bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] px-4 py-1.5 inline-block tracking-[0.05em]">🇬🇧 English & 🇪🇸 Español Hablado</span>
              </div>
            </div>

            <div className="md:text-right flex flex-col gap-6">
              <div>
                <h4 className="text-[var(--color-gold)] text-[0.9rem] uppercase tracking-[0.1em] mb-2">Address</h4>
                <div className="flex items-center gap-2 justify-start md:justify-end">
                  <MapPin size={14} className="text-[var(--color-gold)]" />
                  <p className="text-[0.85rem]">2822 N 32nd St, Phoenix, AZ 85008</p>
                </div>
              </div>
              <div>
                <h4 className="text-[var(--color-gold)] text-[0.9rem] uppercase tracking-[0.1em] mb-2">Phone</h4>
                <div className="flex items-center gap-2 justify-start md:justify-end">
                  <Phone size={14} className="text-[var(--color-gold)]" />
                  <p className="text-[0.85rem]">(480) 754-9418</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[rgba(245,242,235,0.05)] flex flex-wrap justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Romana Barbershop. All rights reserved.</p>
            <p className="text-[0.75rem] tracking-[0.05em] text-[rgba(245,242,235,0.2)]">Est. 2015 — Premium Grooming Phoenix</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  { icon: Scissors, num: 'I', name: "Men's Haircut", desc: "Tailored trim, style design, customized neck cleaning, and precision scissor work." },
  { icon: Sparkles, num: 'II', name: "Women's Haircut", desc: "Modern framing cuts, specialized textures, trimming, and premium finish styled just for you." },
  { icon: Layers, num: 'III', name: "Skin Fade / Taper", desc: "Impeccable blending. High, mid, low, drop fades, or custom tapers tailored to hair flow." },
  { icon: Smile, num: 'IV', name: "Beard Shaping", desc: "Meticulous clipper shape, length reduction, volume control, and blended temple drops." },
  { icon: Zap, num: 'V', name: "Razor Line-Up", desc: "Ultra-precise boundary defining using professional hot gel shaving and straight razor care." },
  { icon: Droplet, num: 'VI', name: "Hot Towel Shave", desc: "Classic luxury. Lavender hot compression towel therapy, warm rich lather, and smooth razor shave." },
  { icon: Sun, num: 'VII', name: "Head Shave", desc: "Complete straight-razor smoothness paired with nourishing oils and cold towel compression." },
  { icon: Star, num: 'VIII', name: "Hair & Beard Pack", desc: "The master combo. Premium signature fade or haircut paired with complete beard details and styling." },
  { icon: Palette, num: 'IX', name: "Creative Design", desc: "Bespoke geometric paths, razor line custom graphics, and artistic modern hairline styles." },
];

const reviews = [
  { 
    quote: "The only place I go for my fade. Larry is a true artist with the razor, and the vibe with the pool table is unmatched in Phoenix.",
    author: "James T.",
    location: "Downtown Phoenix"
  },
  { 
    quote: "Gio's attention to detail on my beard sculpting was incredible. Best bilingual shop in the valley, felt right at home immediately.",
    author: "Carlos R.",
    location: "Scottsdale"
  },
  { 
    quote: "Cleanest skin fade I've ever had. Professional, sharp, and the music always hits right. Highly recommended for a premium experience.",
    author: "Mark S.",
    location: "Arcadia"
  }
];
