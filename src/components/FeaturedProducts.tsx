import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Victorian AD Stone Chandelier Earrings",
    price: "₹ 1,799",
    image: "https://images.unsplash.com/photo-1630018804924-f7b539a2fe1e?q=80&w=800&auto=format&fit=crop",
    category: "Earrings",
    isNew: true,
  },
  {
    id: 2,
    name: "Lakshmi Jadau Necklace Set",
    price: "₹ 4,599",
    image: "https://images.unsplash.com/photo-1599643478514-4a4e09d501b1?q=80&w=800&auto=format&fit=crop",
    category: "Pendants",
    isNew: false,
  },
  {
    id: 3,
    name: "Diamond-Finish Gold-Tone Bangles",
    price: "₹ 2,299",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
    category: "Bracelets",
    isNew: false,
  },
  {
    id: 4,
    name: "Minimalist Anti-Tarnish Ring",
    price: "₹ 999",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=800&auto=format&fit=crop",
    category: "Rings",
    isNew: true,
  },
  {
    id: 5,
    name: "Pearl Earchains with Golden Leaf Drops",
    price: "₹ 1,499",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800&auto=format&fit=crop",
    category: "Earrings",
    isNew: false,
  },
  {
    id: 6,
    name: "Antique Lakshmi Peacock Necklace",
    price: "₹ 5,199",
    image: "https://images.unsplash.com/photo-1589895045610-d017b2b0bf25?q=80&w=800&auto=format&fit=crop",
    category: "Necklaces",
    isNew: false,
  },
  {
    id: 7,
    name: "CZ Floral Teardrop Maang Tikka",
    price: "₹ 1,299",
    image: "https://images.unsplash.com/photo-1614944983059-e9eb45aae611?q=80&w=800&auto=format&fit=crop",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 8,
    name: "Anti-Tarnish Daily Wear Bracelet",
    price: "₹ 899",
    image: "https://images.unsplash.com/photo-1573408301145-b98c4af05b8a?q=80&w=800&auto=format&fit=crop",
    category: "Anti-Tarnish",
    isNew: false,
  }
];

export function FeaturedProducts() {
  return (
    <section id="featured" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4">Popular Collections</h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-dark/70 max-w-2xl mx-auto font-light">
            Discover our most loved pieces, carefully curated just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-light mb-4 rounded-sm">
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-white text-xs font-semibold tracking-wider px-3 py-1 uppercase shadow-sm">
                    New
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                />
                
                {/* Hover overlay with button */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-full bg-brand-dark text-white active:scale-95 py-3 text-sm tracking-wider uppercase font-medium hover:bg-brand-gold transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-brand-dark/60 font-semibold">
                  {product.category}
                </span>
                <h3 className="text-brand-dark font-medium leading-snug font-serif text-lg">
                  {product.name}
                </h3>
                <p className="text-brand-dark font-medium mt-auto pt-2">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#all-products"
            className="inline-block border border-brand-dark px-10 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-brand-dark hover:text-white transition-all duration-300 rounded-sm"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
