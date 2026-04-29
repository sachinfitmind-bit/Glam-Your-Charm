import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely stunning jewelry! The AD stone earrings look exactly like real diamonds. I wore them to my cousin's wedding and received so many compliments.",
    date: "1 week ago"
  },
  {
    id: 2,
    name: "Ananya Desai",
    location: "Bangalore",
    rating: 5,
    text: "The quality of the anti-tarnish rings is unbelievable for the price. I've been wearing mine daily for months and it still shines like new. Highly recommend!",
    date: "3 weeks ago"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Beautiful packaging and super fast delivery. The Victorian necklace set I bought is so royal and elegant. It's my go-to store for imitation jewellery now.",
    date: "1 month ago"
  }
];

export function CustomerReviews() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4">What Our Clients Say</h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-dark/70 max-w-2xl mx-auto font-light">
            Don't just take our word for it—hear from our beautiful customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-brand-dark/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/20" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-brand-dark/80 text-sm font-light leading-relaxed mb-6 h-24">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-brand-dark/10 pt-4 mt-auto">
                <div>
                  <h4 className="font-serif font-semibold text-brand-dark">{review.name}</h4>
                  <p className="text-xs text-brand-dark/50">{review.location}</p>
                </div>
                <span className="text-xs text-brand-dark/40">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
