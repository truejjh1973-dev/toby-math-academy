const academicStats = [
  { value: '7–12', label: 'BC grade levels' },
  { value: 'AMC', label: 'contest coaching' },
  { value: '2 languages', label: 'English + 中文 terms' }
]

const playfulTopics = [
  'Algebra Lab',
  'Geometry Quest',
  'Probability Games',
  'Word Problem Studio'
]

const contestMilestones = [
  'Diagnostic problem set',
  'Strategy mini lesson',
  'Timed contest drill',
  'Reflection + next goal'
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f3ed] text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur md:flex md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
              Toby Math Academy
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
              三种个人数学教育网站首页设计方案
            </h1>
          </div>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 md:text-right">
            从可信赖的学院风、适合低龄学生的趣味风，到面向竞赛冲刺的高端深色风格，展示同一个品牌的三种视觉表达。
          </p>
        </div>

        <div className="space-y-10">
          <section className="overflow-hidden rounded-[2.25rem] bg-white shadow-2xl shadow-blue-950/10 ring-1 ring-slate-200">
            <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5 lg:px-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
                  T
                </div>
                <div>
                  <p className="font-bold">Toby Math Academy</p>
                  <p className="text-sm text-slate-500">BC Curriculum · AMC Prep</p>
                </div>
              </div>
              <div className="hidden gap-8 text-sm font-semibold text-slate-600 md:flex">
                <a href="/bc-school-math">School Math</a>
                <a href="/competition-path">Competition Path</a>
                <a href="/video-lessons">Videos</a>
              </div>
              <a
                href="/register"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"
              >
                Book Trial
              </a>
            </nav>

            <div className="grid gap-8 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-14">
              <div className="flex flex-col justify-center">
                <span className="mb-5 w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                  Style 01 · 学院可信风
                </span>
                <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                  Build strong math foundations with a clear weekly plan.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  适合家长导向的个人教育品牌：大量留白、蓝白配色、清晰课程结构，传达专业、稳定、可信赖。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/25" href="/bc-school-math">
                    Explore Lessons
                  </a>
                  <a className="rounded-full border border-slate-300 px-6 py-3 font-bold text-slate-700" href="/amc-solutions">
                    View AMC Solutions
                  </a>
                </div>
                <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                  {academicStats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-2xl font-black text-blue-600">{stat.value}</p>
                      <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[2rem] bg-gradient-to-br from-blue-50 to-slate-100 p-5">
                <div className="absolute right-8 top-8 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-blue-700 shadow-xl">
                  92% homework accuracy
                </div>
                <div className="mt-16 rounded-[1.5rem] bg-white p-6 shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">This week</p>
                  <h3 className="mt-2 text-2xl font-black">Linear Systems Mastery</h3>
                  <div className="mt-6 space-y-4">
                    {['Concept notes', 'Guided examples', 'Challenge problem'].map((item, index) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-black text-blue-700">
                          {index + 1}
                        </span>
                        <span className="font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2.25rem] bg-[#fff7cc] p-6 shadow-2xl shadow-orange-900/10 ring-1 ring-orange-200 lg:p-10">
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-pink-300/60 blur-2xl" />
            <div className="absolute bottom-10 left-1/2 h-44 w-44 rounded-full bg-cyan-300/50 blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] bg-white p-6 shadow-xl rotate-[-1deg]">
                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-orange-700">
                  Style 02 · 趣味探索风
                </span>
                <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                  Math feels like a colorful adventure.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  适合小学高年级到初中学生：使用明亮色块、卡通感卡片、游戏化学习路径，让数学更亲切、更有参与感。
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {playfulTopics.map((topic) => (
                    <div key={topic} className="rounded-3xl border-2 border-slate-900 bg-white p-4 font-black shadow-[5px_5px_0_#0f172a]">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[420px] rounded-[2rem] border-2 border-slate-950 bg-cyan-100 p-6 shadow-[10px_10px_0_#0f172a]">
                <div className="flex justify-between gap-4">
                  <div className="rounded-3xl bg-white p-5 shadow-lg">
                    <p className="text-sm font-black text-pink-600">TODAY&apos;S QUEST</p>
                    <h3 className="mt-2 text-3xl font-black">Solve the Polygon Puzzle</h3>
                  </div>
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-950 bg-pink-400 text-4xl font-black text-white">
                    π
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {['Watch', 'Practice', 'Win badge'].map((step) => (
                    <div key={step} className="rounded-[1.5rem] bg-white p-5 text-center font-black shadow-md">
                      {step}
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] bg-slate-950 p-5 text-white">
                  <p className="text-sm font-bold text-cyan-200">Student dashboard preview</p>
                  <div className="mt-4 h-4 rounded-full bg-white/20">
                    <div className="h-4 w-3/4 rounded-full bg-lime-300" />
                  </div>
                  <p className="mt-3 font-black">75% of this week&apos;s mission completed</p>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2.25rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/30">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
              <div className="p-6 lg:p-10">
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
                  Style 03 · 竞赛冲刺风
                </span>
                <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                  Train like a contest problem solver.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  适合AMC、Waterloo等竞赛方向：深色背景、荧光强调、数据化进度和训练流程，营造专注、高阶、目标感强的体验。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a className="rounded-full bg-emerald-400 px-6 py-3 font-black text-slate-950" href="/competition-path">
                    Start Training Path
                  </a>
                  <a className="rounded-full border border-white/20 px-6 py-3 font-black text-white" href="/math-vocabulary">
                    Math Vocabulary
                  </a>
                </div>
                <div className="mt-10 grid gap-4">
                  {contestMilestones.map((milestone, index) => (
                    <div key={milestone} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                      <span className="text-emerald-300">0{index + 1}</span>
                      <p className="font-bold">{milestone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[radial-gradient(circle_at_top,#10b98133,transparent_45%),linear-gradient(135deg,#111827,#020617)] p-6 lg:p-10">
                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
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
                  <div className="mt-6 rounded-3xl bg-black/30 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-bold">Number Theory Sprint</p>
                      <p className="text-emerald-300">Level 4</p>
                    </div>
                    <div className="mt-5 space-y-3">
                      {[88, 64, 46].map((width, index) => (
                        <div key={width} className="h-3 rounded-full bg-white/10">
                          <div
                            className="h-3 rounded-full bg-emerald-400"
                            style={{ width: `${width - index * 4}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-5">
                    <p className="text-sm font-bold text-emerald-200">Next recommended lesson</p>
                    <h3 className="mt-2 text-2xl font-black">Modular Arithmetic Patterns</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
