const quests = ['Algebra Lab', 'Geometry Quest', 'Probability Arcade', 'Logic Puzzle Room']
const badges = ['π Explorer', 'Graph Hero', 'Fraction Ninja']

export default function PlayfulDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7cc] text-slate-950">
      <nav className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-8 lg:px-10">
        <a href="/design-demos" className="flex items-center gap-3">
          <span className="flex h-12 w-12 rotate-[-8deg] items-center justify-center rounded-2xl border-2 border-slate-950 bg-pink-400 text-xl font-black text-white shadow-[4px_4px_0_#0f172a]">
            π
          </span>
          <span>
            <span className="block font-black">Toby Math Quest</span>
            <span className="text-sm font-bold text-orange-700">Playful demo</span>
          </span>
        </a>
        <div className="hidden gap-4 md:flex">
          {['Missions', 'Badges', 'Practice'].map((item) => (
            <a key={item} href="/video-lessons" className="rounded-full border-2 border-slate-950 bg-white px-5 py-2 text-sm font-black shadow-[3px_3px_0_#0f172a]">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-18">
        <div className="absolute -right-16 top-4 h-72 w-72 rounded-full bg-pink-300/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-60 w-60 rounded-full bg-cyan-300/70 blur-3xl" />

        <div className="relative rounded-[2rem] border-2 border-slate-950 bg-white p-6 shadow-[10px_10px_0_#0f172a] lg:p-9">
          <p className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-orange-700">
            Today&apos;s student adventure
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-7xl">
            Make math feel like a game you want to finish.
          </h1>
          <p className="mt-6 text-xl leading-9 text-slate-600">
            通过任务、徽章、进度条和明亮色彩，让学生每次进入网站都知道“今天要挑战什么”。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/video-lessons" className="rounded-full border-2 border-slate-950 bg-pink-400 px-7 py-4 font-black text-white shadow-[5px_5px_0_#0f172a]">
              Start Today&apos;s Quest
            </a>
            <a href="/design-demos" className="rounded-full border-2 border-slate-950 bg-white px-7 py-4 font-black shadow-[5px_5px_0_#0f172a]">
              Other Styles
            </a>
          </div>
        </div>

        <div className="relative rounded-[2rem] border-2 border-slate-950 bg-cyan-100 p-6 shadow-[10px_10px_0_#0f172a]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <p className="text-sm font-black text-pink-600">MISSION CARD</p>
              <h2 className="mt-2 text-3xl font-black">Solve the Polygon Puzzle</h2>
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-950 bg-lime-300 text-4xl font-black">
              75%
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {quests.map((quest) => (
              <div key={quest} className="rounded-3xl border-2 border-slate-950 bg-white p-5 font-black shadow-[4px_4px_0_#0f172a]">
                {quest}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-slate-950 p-5 text-white">
            <p className="text-sm font-bold text-cyan-200">Weekly mission progress</p>
            <div className="mt-4 h-4 rounded-full bg-white/20">
              <div className="h-4 w-3/4 rounded-full bg-lime-300" />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
