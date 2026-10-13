const features = [
  { icon: "⚡", title: "Quick entry", text: "Log an expense in seconds with category and payment mode." },
  { icon: "📊", title: "Clear summaries", text: "See where your money goes by category at a glance." },
  { icon: "🎯", title: "Needs vs wants", text: "Tag every expense and spot what you can cut back." },
  { icon: "🤖", title: "AI budget plan", text: "Get a budget built from your own spending habits." },
];

export default function Landing() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-200">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-xl font-bold text-white">
            Spend<span className="text-emerald-400">Wise</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:text-emerald-300"
            >
              Login
            </a>
            <a
              href="/signup"
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden px-5 pb-24 pt-40 text-center">
        <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 animate-float rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block animate-fade-up rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Smart money tracking
          </span>

          <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-tight text-white [animation-delay:150ms] sm:text-6xl">
            Know where every rupee goes.{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Spend wiser.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-lg text-slate-400 [animation-delay:300ms]">
            Track expenses, understand your habits and get an AI-powered budget, all in one simple app.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col justify-center gap-4 [animation-delay:450ms] sm:flex-row">
            <a
              href="/signup"
              className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-8 py-3.5 font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-1"
            >
              Get Started Free
            </a>
            <a
              href="/login"
              className="rounded-xl border border-white/15 px-8 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/5"
            >
              Login
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="text-center text-3xl font-extrabold text-white">Everything you need</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-4 font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-6 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-slate-950">Ready to take control of your money?</h2>
          <a
            href="/signup"
            className="mt-8 inline-block rounded-xl bg-slate-950 px-8 py-3.5 font-bold text-white transition hover:-translate-y-1"
          >
            Create Free Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SpendWise. All rights reserved.
      </footer>
    </div>
  );
}

