import { ShoppingCart, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Gamepad2 className="h-6 w-6 text-violet-400" />
          <span className="font-semibold tracking-tight">NeoTumblr</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 text-sm font-medium transition">
          <ShoppingCart className="h-4 w-4" />
          Cart
        </button>
      </div>
    </header>
  );
}
