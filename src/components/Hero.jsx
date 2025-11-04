import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/nnNYb3ZFbRxKghMM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
          Pro Gaming Tumblers
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          Keep your fuel ice-cold or lava-hot while you grind ranked. Double-wall steel, spill-proof lids, and bold gamer designs.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#products" className="inline-flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 text-sm md:text-base font-semibold transition">
            Shop Now
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm md:text-base font-medium transition">
            Why NeoTumblr?
          </a>
        </div>
      </div>
    </section>
  );
}
