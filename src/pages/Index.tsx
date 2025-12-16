import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, MapPin, Phone, MessageCircle, Home, Building2, Landmark, ChevronDown, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import gallery1 from '@/assets/gallery-1.jpeg';
import gallery2 from '@/assets/gallery-2.jpeg';
import gallery3 from '@/assets/gallery-3.jpeg';
import gallery4 from '@/assets/gallery-4.jpeg';
import gallery5 from '@/assets/gallery-5.jpeg';

const reviews = [
  { name: "Mohammad Irfan", rating: 5, review: "Excellent service! Found our dream 3BHK flat. The team was professional and helpful throughout." },
  { name: "Ayesha Khan", rating: 5, review: "Acreage Homes made home buying so easy. The loan process was smooth and hassle-free." },
  { name: "Faisal Ahmed", rating: 5, review: "Best real estate experience in Delhi. Highly recommend for anyone looking for quality flats." },
  { name: "Zainab Fatima", rating: 4, review: "Great properties, transparent dealings. Very satisfied with our new 2BHK home." },
  { name: "Imran Siddiqui", rating: 5, review: "Professional team, beautiful properties. They helped us get an amazing loan deal too!" },
  { name: "Nadia Begum", rating: 5, review: "Outstanding service and support. Our 4BHK is absolutely perfect. Thank you Acreage Homes!" },
];

const properties = [
  { type: "2 BHK", desc: "Compact & Cozy", price: "₹50L and above", icon: Home },
  { type: "3 BHK", desc: "Perfect for Families", price: "₹80L and above", icon: Building2 },
  { type: "4 BHK", desc: "Luxury Living", price: "₹1Cr and above", icon: Landmark },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-card py-3' : 'py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-heading text-2xl font-bold text-gradient">Acreage Homes</a>
        <div className="hidden md:flex gap-8 items-center">
          {['Properties', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <a 
          href="https://wa.me/6005154478" 
          target="_blank"
          className="btn-primary text-sm px-6 py-3"
        >
          <MessageCircle className="inline-block w-4 h-4 mr-2" />
          WhatsApp
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={heroBg} 
          alt="Luxury Building"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-5 py-2.5 rounded-full glass-card text-primary text-sm font-medium mb-8 border border-primary/20">
            ★ 4.8/5 Rated Real Estate Services
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Find Your <span className="text-gradient">Dream Home</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-12"
        >
          Premium 2BHK, 3BHK & 4BHK flats in New Delhi with easy home loan options
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#properties" className="btn-primary">
            Explore Properties <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Properties = () => (
  <section id="properties" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          Our <span className="text-gradient">Properties</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Discover premium living spaces tailored to your lifestyle
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <motion.div 
            key={property.type}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="glass-card p-8 group cursor-pointer"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
            >
              <property.icon className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="font-heading text-3xl font-bold mb-2">{property.type}</h3>
            <p className="text-muted-foreground mb-4">{property.desc}</p>
            <p className="text-primary font-semibold text-xl">{property.price}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 glass-card p-8 md:p-12 text-center overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Landmark className="w-12 h-12 text-primary" />
            </motion.div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold">Home Loans Available</h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Easy financing options with competitive interest rates. We partner with leading banks to make your dream home affordable.
          </p>
          <a 
            href="https://wa.me/6005154478?text=Hi, I'm interested in home loan options" 
            target="_blank"
            className="btn-primary inline-flex"
          >
            Enquire About Loans
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-24 bg-secondary/30 overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          Property <span className="text-gradient">Gallery</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Take a virtual tour of our stunning properties
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <motion.img 
              src={img} 
              alt={`Property ${index + 1}`}
              className="w-full h-full object-cover aspect-square"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-foreground font-medium">View Property</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="text-6xl font-heading font-bold text-primary"
          >
            4.8
          </motion.span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star className="w-7 h-7 fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
        </div>
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-muted-foreground text-lg">Based on 500+ happy homeowners</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div 
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 cursor-pointer"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted'}`} />
              ))}
            </div>
            <p className="text-foreground/90 mb-4 leading-relaxed">"{review.review}"</p>
            <p className="text-primary font-semibold">{review.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps?q=28.487667,72.186750";

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Visit our office or reach out via WhatsApp for immediate assistance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
              >
                <MapPin className="w-7 h-7 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-3">Office Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Property Bearing No. 9, In Khasra No. 102/2 of Village Rajpur Khurd Khasra & No. 257 of Village Satbari - 110068, New Delhi
                </p>
                <p className="text-primary/80 text-sm mt-3 font-medium">
                  Landmarks: Before Made Easy School, Near Old CNG Pump Rajpur, Behind Police Chowki
                </p>
              </div>
            </div>

            <motion.a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between w-full p-5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <MapPin className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="font-semibold text-lg">View on Google Maps</span>
              </div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
              >
                <Phone className="w-7 h-7 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  Get instant responses on WhatsApp. We're here to help you find your perfect home.
                </p>
              </div>
            </div>

            <motion.a 
              href="https://wa.me/6005154478"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center gap-3 text-lg py-5"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.a>
            
            <p className="text-center text-muted-foreground mt-4">
              +91 6005154478
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 border-t border-border/30">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-heading text-4xl font-bold text-gradient mb-4">Acreage Homes</h3>
        <p className="text-muted-foreground mb-8 text-lg">Premium Real Estate Services in New Delhi</p>
        <div className="flex justify-center gap-8 mb-10">
          {['Properties', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">© 2024 Acreage Homes. All rights reserved.</p>
      </motion.div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Properties />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
