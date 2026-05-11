const learningTracks = [
  {
    title: 'BC School Math',
    level: 'Grade 8-11',
    progress: '68%',
    accent: 'bg-emerald-500',
    topics: ['Linear relations', 'Factoring', 'Trigonometry']
  },
  {
    title: 'AMC Competition',
    level: 'AMC 8-10',
    progress: '42%',
    accent: 'bg-blue-500',
    topics: ['Geometry tricks', 'Number theory', 'Counting']
  },
  {
    title: 'Video Lessons',
    level: '5-12 min',
    progress: '31%',
    accent: 'bg-amber-500',
    topics: ['Common mistakes', 'One problem three ways', 'Review drills']
  }
]

const weeklyPlan = [
  { day: 'Mon', task: 'Quadratics warm-up', status: 'Done' },
  { day: 'Wed', task: 'AMC geometry set', status: 'Next' },
  { day: 'Fri', task: 'Mistake-book review', status: 'Open' }
]

const problemCards = [
  { label: 'AMC 10A', topic: 'Geometry', difficulty: 'Medium', time: '8 min' },
  { label: 'Pre-Calc 10', topic: 'Factoring', difficulty: 'Core', time: '6 min' },
  { label: 'Waterloo', topic: 'Counting', difficulty: 'Challenge', time: '10 min' }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] text-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Toby Math Academy home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-lg font-black text-white shadow-sm">
            T
          </span>
          <span>
            <span className="block text-base font-black leading-5">Toby Math</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Academy</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
          <a href="/bc-school-math" className="transition hover:text-slate-950">Courses</a>
          <a href="/competition-path" className="transition hover:text-slate-950">Competition</a>
          <a href="/amc-solutions" className="transition hover:text-slate-950">Solutions</a>
          <a href="/video-lessons" className="transition hover:text-slate-950">Videos</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="/register" className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font800 text-slate-700 transition hover:border-slate-950 hover:text-slate-950 sm:inline-flex">
            Sign in
          </a>
          <a href="/register" className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-slate-800">
            Start free
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20 lg:pt-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            BC Math, AMC training, and bilingual problem solving
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            A calmer way to build serious math confidence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-650 sm:text-xl">
            Toby Math Academy turns school math, contest prep, classic examples, and short video lessons into one guided learning workspace for middle and high school students.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/register" className="rounded-lg bg-[#1967d2] px-6 py-4 text-center text-base font-black text-white shadow-sm transition hover:bg-[#1557b0]">
              Create student account
            </a>
            <a href="/amc-solutions" className="rounded-lg border border-slate-300 bg-white px-6 py-4 text-center text-base font-black text-slate-900 shadow-sm transition hover:border-slate-950">
              Explore classic problems
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-y border-slate-300 py-5">
            <div>
              <p className="text-3xl font-black">7-12</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">Grade range</p>
            </div>
            <div>
              <p className="text-3xl font-black">3</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">Learning paths</p>
            </div>
            <div>
              <p className="text-3xl font-black">Bilingual</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">English and Chinese</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning together in a classroom"
              className="h-56 w-full object-cover sm:h-72"
            />
            <div className="grid gap-0 md:grid-cols-[1fr_0.78fr]">
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Today</p>
                    <h2 className="mt-1 text-2xl font-black">Student dashboard</h2>
                  </div>
                  <span className="rounded-lg bg-emerald-100 px-3 py-2 text-sm font-black text-emerald-800">68% ready</span>
                </div>

                <div className="space-y-3">
                  {weeklyPlan.map((item) => (
                    <div key={item.day} className="grid grid-cols-[44px_1fr_72px] items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
                      <span className="text-sm font-black text-slate-500">{item.day}</span>
                      <span className="text-sm font-bold text-slate-850">{item.task}</span>
                      <span className="rounded-md bg-white px-2 py-1 text-center text-xs font-black text-slate-600 ring-1 ring-slate-200">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 bg-[#12233f] p-5 text-white md:border-l md:border-t-0 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-200">Next lesson</p>
                <h3 className="mt-3 text-2xl font-black leading-tight">Factoring quadratics without guessing</h3>
                <p className="mt-4 text-sm leading-6 text-blue-100">A 9-minute lesson with two examples, one common trap, and a short check.</p>
                <div className="mt-6 h-2 rounded-full bg-white/20">
                  <div className="h-2 w-2/3 rounded-full bg-amber-400" />
                </div>
                <p className="mt-3 text-sm font-bold text-blue-100">2 of 3 steps complete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-300 bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">Choose a path</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Learning tracks with visible progress</h2>
            </div>
            <a href="/competition-path" className="text-sm font-black text-blue-700 hover:text-blue-900">View full roadmap</a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {learningTracks.map((track) => (
              <article key={track.title} className="rounded-lg border border-slate-250 bg-[#fbfaf7] p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-slate-500">{track.level}</p>
                    <h3 className="mt-2 text-2xl font-black">{track.title}</h3>
                  </div>
                  <span className={`h-4 w-4 rounded-full ${track.accent}`} />
                </div>
                <div className="mt-6 h-2 rounded-full bg-slate-200">
                  <div className={`h-2 rounded-full ${track.accent}`} style={{ width: track.progress }} />
                </div>
                <p className="mt-3 text-sm font-black text-slate-600">{track.progress} concept map completed</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {track.topics.map((topic) => (
                    <span key={topic} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Practice room</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Classic examples become a daily routine.</h2>
          <p className="mt-4 text-base leading-7 text-slate-650">Students can move from hint to full solution, tag mistakes, and connect every problem back to a lesson.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {problemCards.map((problem) => (
            <article key={`${problem.label}-${problem.topic}`} className="rounded-lg border border-slate-300 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-blue-700">{problem.label}</p>
              <h3 className="mt-3 text-2xl font-black">{problem.topic}</h3>
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm font-bold text-slate-600">
                <span>{problem.difficulty}</span>
                <span>{problem.time}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
