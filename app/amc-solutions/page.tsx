const problems = [
  { contest: 'AMC 10A', year: 2023, topic: 'Algebra', difficulty: 'Medium', score: 72, skills: ['Substitution', 'Equation structure'] },
  { contest: 'AMC 8', year: 2022, topic: 'Geometry', difficulty: 'Easy', score: 91, skills: ['Area', 'Symmetry'] },
  { contest: 'AMC 10B', year: 2024, topic: 'Number Theory', difficulty: 'Hard', score: 48, skills: ['Modular arithmetic', 'Divisibility'] }
]

const filters = ['All', 'Algebra', 'Geometry', 'Number Theory', 'Counting']

export default function AMCSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#243044]">
      <section className="border-b border-[#dbe7f3] bg-[#eaf7ff] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="font-black text-[#2587d8]">Toby Math Academy</a>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#2587d8]">AMC practice</p>
              <h1 className="mt-3 text-5xl font-black leading-tight text-[#1f2d40]">Classic problems with skill feedback.</h1>
              <p className="mt-4 text-lg leading-8 text-[#51657c]">A practice-library layout for step-by-step explanations, topic filters, difficulty tags, and future mastery scores.</p>
            </div>
            <div className="ixl-card rounded-lg p-5">
              <p className="text-sm font-black text-[#49b86f]">This week</p>
              <h2 className="mt-2 text-3xl font-black">12 problems solved</h2>
              <p className="mt-2 text-sm font-bold text-[#6c7e95]">Geometry accuracy is up 18%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => <button key={filter} className="rounded-lg border border-[#c7dced] bg-white px-4 py-2 text-sm font-black text-[#51657c] shadow-sm hover:border-[#2587d8] hover:text-[#2587d8]">{filter}</button>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-14 sm:px-8 md:grid-cols-3">
        {problems.map((problem) => (
          <article key={`${problem.contest}-${problem.year}`} className="ixl-card rounded-lg p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-[#2587d8]">{problem.contest} {problem.year}</p>
                <h2 className="mt-2 text-3xl font-black text-[#243044]">{problem.topic}</h2>
              </div>
              <span className="rounded-lg bg-[#fff4df] px-3 py-2 text-sm font-black text-[#a76312]">{problem.difficulty}</span>
            </div>
            <div className="mt-5 h-3 rounded-full bg-[#e8f2fb]"><div className="h-3 rounded-full bg-[#49b86f]" style={{ width: `${problem.score}%` }} /></div>
            <p className="mt-2 text-sm font-black text-[#6c7e95]">Readiness score {problem.score}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {problem.skills.map((skill) => <span key={skill} className="rounded-md bg-[#f0f7ff] px-3 py-2 text-xs font-black text-[#2587d8]">{skill}</span>)}
            </div>
            <a href="/register" className="mt-6 inline-flex rounded-lg bg-[#2587d8] px-5 py-3 text-sm font-black text-white">Start solution</a>
          </article>
        ))}
      </section>
    </main>
  )
}
