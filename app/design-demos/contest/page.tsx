const trainingSteps = [
  'Diagnostic problem set',
  'Strategy mini lesson',
  'Timed contest drill',
  'Error log reflection'
]
const topics = ['Number Theory', 'Geometry', 'Combinatorics', 'Algebra']

export default function ContestDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-8 lg:px-10">
        <a href="/design-demos" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-black text-slate-950">
            Σ
          </span>
          <span>
            <span className="block font-black">Toby Contest Lab</span>
            <span className="text-sm font-medium text-emerald-300">Contest demo</span>
          </span>
        </a>
        <div className="hidden gap-8 text-sm font-bold text-slate-300 md:flex">
          <a href="/competition-path">Roadmap</a>
          <a href="/amc-solutions">Solutions</a>
          <a href="/math-vocabulary">Vocabulary</a>
        </div>
        <a href="/register" className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950">
          Join Training
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-20">
        <div>
          <p className="w-fit rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
            AMC · Waterloo · AIME foundations
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
            Train like a contest problem solver.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
            用冲刺式视觉语言呈现竞赛训练：数据面板、限时练习、错题复盘和下一步推荐，让学生保持目标感。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/competition-path" className="rounded-full bg-emerald-400 px-7 py-4 font-black text-slate-950">
              Start Training Path
            </a>
            <a href="/design-demos" className="rounded-full border border-white/20 px-7 py-4 font-black text-white">
              View Other Styles
            </a>
          </div>

          <div className="mt-10 grid gap-4">
            {trainingSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                <span className="font-mono text-emerald-300">0{index + 1}</span>
                <p className="font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#10b98133,transparent_45%),linear-gradient(135deg,#111827,#020617)] p-6 shadow-2xl shadow-black/40">
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-emerald-300">Performance Board</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-black/30 p-5">
              <p className="text-sm text-slate-400">Accuracy</p>
              <p className="mt-2 text-4xl font-black">86%</p>
            </div>
            <div className="rounded-3xl bg-black/30 p-5">
              <p className="text-sm text-slate-400">Avg. time</p>
              <p className="mt-2 text-4xl font-black">4:12</p>
            </div>
          </div>

          <div className="mt-6 space-y-4 rounded-3xl bg-black/30 p-5">
            {topics.map((topic, index) => (
              <div key={topic}>
                <div className="flex justify-between text-sm font-bold">
                  <span>{topic}</span>
                  <span className="text-emerald-300">{88 - index * 9}%</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-white/10">
                  <div className="h-3 rounded-full bg-emerald-400" style={{ width: `${88 - index * 9}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-5">
            <p className="text-sm font-bold text-emerald-200">Next recommended lesson</p>
            <h2 className="mt-2 text-2xl font-black">Modular Arithmetic Patterns</h2>
          </div>
        </div>
      </section>
    </main>
  )
}
