import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1588444650733-d0767b753cb8?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Jewellery Collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/80 uppercase tracking-[0.2em] text-sm md:text-md mb-6 block"
        >
          Timeless Elegance
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight font-light"
        >
          Discover Your <br />
          <span className="italic text-brand-gold">Perfect Charm</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/90 text-sm md:text-base font-light max-w-lg mb-10 leading-relaxed"
        >
          Explore our exclusive collection of premium imitation jewellery. 
          Crafted with precision, designed for you.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#featured"
            className="inline-block bg-white text-brand-dark px-10 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-sm"
          >
            Shop the Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
