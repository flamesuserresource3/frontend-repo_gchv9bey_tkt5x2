import { ShoppingCart, Star, Shield, Rocket } from 'lucide-react';

const products = [
  {
    id: 'pixel-pro',
    name: 'Pixel Pro 40oz',
    price: 39.99,
    accent: 'from-violet-500 to-fuchsia-500',
    description: 'Iconic gamer gradient. Lock-lid + soft-grip handle.'
  },
  {
    id: 'neon-stealth',
    name: 'Neon Stealth 30oz',
    price: 34.99,
    accent: 'from-cyan-500 to-blue-600',
    description: 'Low-key matte with neon underglow vibes.'
  },
  {
    id: 'retro-arcade',
    name: 'Retro Arcade 24oz',
    price: 29.99,
    accent: 'from-amber-400 to-rose-500',
    description: '8-bit patterns. Throwback feels, modern build.'
  },
];

export default function ProductGrid() {
  return (
    <section className="relative bg-black">
      <div id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Tumblers</h2>
          <p className="mt-3 text-white/70">Engineered for long sessions. Designed for style.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              <div className={`h-40 w-full bg-gradient-to-br ${p.accent}`} />
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-white/70 mt-1">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white text-xl font-bold">${p.price.toFixed(2)}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 text-sm font-medium transition">
                    <ShoppingCart className="h-4 w-4" />
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />
            </div>
          ))}
        </div>
      </div>

      <div id="features" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Feature icon={<Shield className="h-6 w-6 text-emerald-400" />} title="Pro-Grade Build" desc="18/8 stainless steel, double-wall vacuum insulation, sweat-free exterior." />
            <Feature icon={<Star className="h-6 w-6 text-yellow-400" />} title="Keeps Temps 24h" desc="Ice-cold for up to 24h or piping hot for 12h. Boss level thermal lock." />
            <Feature icon={<Rocket className="h-6 w-6 text-sky-400" />} title="Spill-Proof Lids" desc="Flip-lock lid with straw-friendly port for fast sips mid-match." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 rounded-xl bg-white/5 border border-white/10 p-3">{icon}</div>
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-white/70 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}
