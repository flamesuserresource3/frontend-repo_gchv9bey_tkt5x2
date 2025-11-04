export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
        <div>
          <p className="text-white font-semibold">NeoTumblr</p>
          <p className="mt-2 text-sm">Premium gaming tumblers designed for endurance, comfort, and style.</p>
        </div>
        <div>
          <p className="text-white font-semibold">Support</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a className="hover:text-white transition" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-white transition" href="#">Warranty</a></li>
            <li><a className="hover:text-white transition" href="#">FAQs</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Contact</p>
          <p className="mt-2 text-sm">Email: support@neotumblr.co</p>
          <p className="text-sm">Mon–Fri, 9am–5pm</p>
        </div>
      </div>
      <div className="text-center text-xs text-white/50 pb-8">© {new Date().getFullYear()} NeoTumblr. All rights reserved.</div>
    </footer>
  );
}
