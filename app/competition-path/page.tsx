const levels = [
  { title: 'Beginner', fit: 'Grade 6-8', color: 'bg-[#5dbb63]', contests: ['Gauss', 'Pascal', 'AMC 8'], skills: ['Arithmetic strategy', 'Basic geometry', 'Pattern spotting'] },
  { title: 'Intermediate', fit: 'Grade 8-10', color: 'bg-[#2b84d2]', contests: ['AMC 10', 'Cayley', 'Fermat'], skills: ['Algebra fluency', 'Counting methods', 'Angle chasing'] },
  { title: 'Advanced', fit: 'Grade 10-12', color: 'bg-[#f2a13a]', contests: ['AIME', 'Euclid'], skills: ['Proof thinking', 'Modular arithmetic', 'Functional equations'] }
]

export default function CompetitionPathPage() {
  return (
    <main className="min-h-screen bg-white text-[#243044]">
      <header className="border-b border-[#d8e3ef] bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black text-[#2b84d2]">Toby Math Academy</a>
          <a href="/register" className="rounded-md bg-[#4fb26a] px-5 py-2.5 text-sm font-bold text-white">Join now</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="text-5xl font-bold text-[#26364a]">Competition Path</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5f7189]">A clean route from school confidence to contest readiness, with each level broken into practical skills.</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="overflow-hidden rounded-md border border-[#d8e3ef] bg-white">
          {levels.map((level, index) => (
            <article key={level.title} className="grid gap-4 border-b border-[#d8e3ef] p-5 last:border-b-0 lg:grid-cols-[72px_1fr_220px] lg:items-center">
              <span className={`grid h-14 w-14 place-items-center rounded-md text-xl font-black text-white ${level.color}`}>{index + 1}</span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold text-[#26364a]">{level.title}</h2>
                  <span className="rounded-md bg-[#f1f6fb] px-3 py-1.5 text-sm font-bold text-[#5f7189]">{level.fit}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {level.skills.map((skill) => <span key={skill} className="rounded-md border border-[#d8e3ef] px-3 py-2 text-sm font-bold text-[#51657c]">{skill}</span>)}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {level.contests.map((contest) => <span key={contest} className="rounded-md bg-[#eef7ff] px-3 py-2 text-sm font-bold text-[#2b84d2]">{contest}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
