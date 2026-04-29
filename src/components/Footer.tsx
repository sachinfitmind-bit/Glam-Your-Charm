import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <a href="/" className="font-serif text-3xl font-semibold tracking-wide text-white block">
              GlamYourCharm<span className="text-brand-gold">.</span>
            </a>
            <p className="text-sm font-light leading-relaxed max-w-sm">
              Your trusted destination for premium imitation jewellery. Discover 
              timeless elegance and modern charm in every piece we offer.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Instagram size={20} />
                hello welcome
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-serif text-lg font-medium mb-6 uppercase tracking-wider text-sm">Policies</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white font-serif text-lg font-medium mb-6 uppercase tracking-wider text-sm">Get In Touch</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span>123 Jewellery Fashion Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>support@glamyourcharm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} GlamYourCharm. All rights reserved.
          </p>
          
          {/* Payment Methods */}
          <div className="flex items-center gap-4 text-sm bg-white/5 py-2 px-4 rounded-full">
            <span className="font-medium tracking-wide text-white">Accepted Payments:</span>
            <div className="flex gap-3 items-center">
              {/* Payment Text Placeholders since we don't have SVGs, we'll use styled text buttons that look like badges */}
              <span className="font-bold text-xs bg-white text-indigo-800 px-2 py-0.5 rounded">Paytm</span>
              <span className="font-bold text-xs bg-purple-700 text-white px-2 py-0.5 rounded">PhonePe</span>
              <span className="font-bold text-xs bg-white text-gray-800 px-2 py-0.5 rounded">
                <span className="text-blue-500">G</span>Pay
              </span>
              <span className="font-bold text-xs bg-green-600 text-white px-2 py-0.5 rounded">UPI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
