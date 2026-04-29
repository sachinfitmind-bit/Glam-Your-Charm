import { Instagram, Heart, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const instagramPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop", likes: "1.2k", comments: "45" },
  { id: 2, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop", likes: "856", comments: "21" },
  { id: 3, image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop", likes: "2.4k", comments: "112" },
  { id: 4, image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=600&auto=format&fit=crop", likes: "934", comments: "38" },
];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-brand-dark text-brand-light border-y border-brand-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4 text-brand-gold">
              <Instagram size={28} />
              <span className="font-serif text-xl tracking-widest uppercase">@GlamYourCharm</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Follow Our Journey</h2>
            <p className="text-brand-light/70 font-light text-sm leading-relaxed">
              Join our community of jewelry lovers. Share your style with #GlamYourCharm to be featured on our page.
            </p>
          </div>
          <a
            href="#"
            className="inline-block border border-brand-gold text-brand-gold px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 rounded-sm whitespace-nowrap"
          >
            Follow Us
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square block overflow-hidden bg-white/5 rounded-sm"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Heart size={20} className="fill-white" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} className="fill-white" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
