// Hero.tsx
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] flex items-center justify-center text-white pt-16">
      {/* Content wrapper */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Club Name */}
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-sky-300">WeCode</span>
        </h1>

        {/* Quote */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          "Where creativity meets code — empowering students to innovate, collaborate, and shape the future."
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
           <a
            href="https://discord.gg/dk25zDfk"
            className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-full shadow hover:bg-sky-400 transition"
          >
            Join Discord
          </a>
          <a
            href="#contact"
            
            className="px-6 py-3 bg-white text-[#1e3a8a] font-semibold rounded-full shadow hover:brightness-105 transition"
          >
            Learn More
          </a>
          
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Circles */}
        <div className="absolute w-72 h-72 bg-sky-400/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>
    </section>
  );
}
