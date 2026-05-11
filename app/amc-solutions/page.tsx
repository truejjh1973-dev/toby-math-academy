const problems = [
  { contest: 'AMC 10A', year: 2023, topic: 'Algebra', difficulty: 'Medium', score: 72, skills: ['Substitution', 'Equation structure'] },
  { contest: 'AMC 8', year: 2022, topic: 'Geometry', difficulty: 'Easy', score: 91, skills: ['Area', 'Symmetry'] },
  { contest: 'AMC 10B', year: 2024, topic: 'Number Theory', difficulty: 'Hard', score: 48, skills: ['Modular arithmetic', 'Divisibility'] }
]

const filters = ['All', 'Algebra', 'Geometry', 'Number Theory', 'Counting']

export default function AMCSolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#243044]">
      <header className="border-b border-[#d8e3ef] bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black text-[#2b84d2]">Toby Math Academy</a>
          <a href="/register" className="rounded-md bg-[#4fb26a] px-5 py-2.5 text-sm font-bold text-white">Join now</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="text-5xl font-bold text-[#26364a]">AMC Solutions</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5f7189]">Practice-library style cards with topic filters, difficulty, skills, and a simple readiness score.</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {filters.map((filter) => <button key={filter} className="rounded-md border border-[#c7d6e6] bg-white px-4 py-2 text-sm font-bold text-[#51657c] hover:border-[#2b84d2] hover:text-[#2b84d2]">{filter}</button>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="overflow-hidden rounded-md border border-[#d8e3ef] bg-white">
          {problems.map((problem) => (
            <article key={`${problem.contest}-${problem.year}`} className="grid gap-4 border-b border-[#d8e3ef] p-5 last:border-b-0 lg:grid-cols-[1fr_180px_160px] lg:items-center">
              <div>
                <p className="text-sm font-bold text-[#2b84d2]">{problem.contest} {problem.year}</p>
                <h2 className="mt-1 text-2xl font-bold text-[#26364a]">{problem.topic}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {problem.skills.map((skill) => <span key={skill} className="rounded-md bg-[#f1f6fb] px-3 py-2 text-sm font-bold text-[#51657c]">{skill}</span>)}
                </div>
              </div>
              <span className="rounded-md bg-[#fff6e6] px-3 py-2 text-center text-sm font-bold text-[#a76312]">{problem.difficulty}</span>
              <div>
                <div className="h-3 rounded-full bg-[#e8eef5]"><div className="h-3 rounded-full bg-[#4fb26a]" style={{ width: `${problem.score}%` }} /></div>
                <p className="mt-2 text-center text-sm font-bold text-[#5f7189]">Score {problem.score}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
