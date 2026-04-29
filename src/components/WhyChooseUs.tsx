import { ShieldCheck, Truck, RotateCcw, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1} />,
    title: "Premium Quality",
    description: "Crafted with the finest materials and an eye for intricate detailing."
  },
  {
    icon: <Truck size={32} strokeWidth={1} />,
    title: "Free Shipping",
    description: "Enjoy free and insured delivery across India on all orders over ₹999."
  },
  {
    icon: <RotateCcw size={32} strokeWidth={1} />,
    title: "Easy Returns",
    description: "Hassle-free 7-day return policy for a seamless shopping experience."
  },
  {
    icon: <HeartHandshake size={32} strokeWidth={1} />,
    title: "Trusted by Many",
    description: "Thousands of happy customers love our imitation jewellery."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-light border-y border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-brand-gold mb-6 bg-white p-4 rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-dark/70 text-sm font-light leading-relaxed px-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
