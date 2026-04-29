import { motion } from "motion/react";

const categories = [
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "necklaces",
    name: "Pendants",
    image: "https://images.unsplash.com/photo-1599643478514-4a4e09d501b1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "rings",
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "anti-tarnish",
    name: "Anti-Tarnish",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=800&auto=format&fit=crop",
  }
];

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4">Shop by Category</h2>
          <div className="w-16 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href={`#${category.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative overflow-hidden aspect-[3/4] cursor-pointer rounded-sm"
            >
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-500 z-10"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-serif text-xl md:text-2xl font-medium tracking-wide">
                  {category.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
