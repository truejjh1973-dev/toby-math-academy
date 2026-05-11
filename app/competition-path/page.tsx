const levels = [
  { title: 'Beginner', fit: 'Grade 6-8', color: 'bg-[#e7f7ee] text-[#247a43]', contests: ['Gauss', 'Pascal', 'AMC 8'], skills: ['Arithmetic strategy', 'Basic geometry', 'Pattern spotting'] },
  { title: 'Intermediate', fit: 'Grade 8-10', color: 'bg-[#eaf4ff] text-[#236fae]', contests: ['AMC 10', 'Cayley', 'Fermat'], skills: ['Algebra fluency', 'Counting methods', 'Angle chasing'] },
  { title: 'Advanced', fit: 'Grade 10-12', color: 'bg-[#fff4df] text-[#a76312]', contests: ['AIME', 'Euclid'], skills: ['Proof thinking', 'Modular arithmetic', 'Functional equations'] }
]

export default function CompetitionPathPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#243044]">
      <section className="border-b border-[#dbe7f3] bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="font-black text-[#2587d8]">Toby Math Academy</a>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#f4a340]">Contest roadmap</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-[#1f2d40]">A skill-by-skill path from school confidence to contest readiness.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#51657c]">Inspired by IXL&apos;s clear progression model: students can see the contest, the level, the skills, and the next practice action.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {levels.map((level, index) => (
            <article key={level.title} className="ixl-card rounded-lg p-5">
              <div className="flex items-center justify-between">
                <span className={`rounded-lg px-3 py-2 text-sm font-black ${level.color}`}>{level.fit}</span>
                <span className="text-sm font-black text-[#6c7e95]">Step {index + 1}</span>
              </div>
              <h2 className="mt-5 text-3xl font-black text-[#243044]">{level.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {level.contests.map((contest) => <span key={contest} className="rounded-md bg-[#f0f7ff] px-3 py-2 text-sm font-black text-[#2587d8]">{contest}</span>)}
              </div>
              <div className="mt-6 space-y-2">
                {level.skills.map((skill) => (
                  <div key={skill} className="rounded-lg border border-[#dbe7f3] bg-[#fbfdff] px-4 py-3 font-bold text-[#51657c]">{skill}</div>
                ))}
              </div>
              <a href="/amc-solutions" className="mt-6 inline-flex rounded-lg bg-[#2587d8] px-5 py-3 text-sm font-black text-white">Practice this level</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
