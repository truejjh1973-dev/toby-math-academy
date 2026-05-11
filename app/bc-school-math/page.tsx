const grades = [
  { title: 'Grade 8 Math', code: '8', count: '55 skills', color: 'bg-[#5dbb63]', topics: ['Linear Relations', 'Pythagorean Theorem', 'Probability', 'Integer operations', 'Surface area'] },
  { title: 'Grade 9 Math', code: '9', count: '64 skills', color: 'bg-[#2b84d2]', topics: ['Polynomials', 'Statistics', 'Linear Equations', 'Scale factors', 'Exponents'] },
  { title: 'Pre-Calculus 10', code: '10', count: '72 skills', color: 'bg-[#f2a13a]', topics: ['Factoring', 'Radicals', 'Trigonometry', 'Functions', 'Systems'] },
  { title: 'Pre-Calculus 11', code: '11', count: '68 skills', color: 'bg-[#7b65d8]', topics: ['Quadratics', 'Transformations', 'Sequences', 'Rational expressions', 'Sine law'] }
]

const domains = ['All', 'Number sense', 'Algebra', 'Geometry', 'Data', 'Functions']

export default function BCSchoolMathPage() {
  return (
    <main className="min-h-screen bg-white text-[#243044]">
      <header className="border-b border-[#d8e3ef] bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black text-[#2b84d2]">Toby Math Academy</a>
          <a href="/register" className="rounded-md bg-[#4fb26a] px-5 py-2.5 text-sm font-bold text-white">Join now</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="text-5xl font-bold text-[#26364a]">BC School Math</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5f7189]">A grade-by-grade skill list for BC students, organized like a practice catalogue instead of a marketing page.</p>

        <div className="mt-8 flex flex-wrap gap-2 border-b border-[#d8e3ef] pb-5">
          {domains.map((domain) => (
            <button key={domain} className="rounded-md border border-[#c7d6e6] bg-white px-4 py-2 text-sm font-bold text-[#51657c] hover:border-[#2b84d2] hover:text-[#2b84d2]">{domain}</button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="overflow-hidden rounded-md border border-[#d8e3ef] bg-white">
          {grades.map((grade) => (
            <article key={grade.title} className="border-b border-[#d8e3ef] last:border-b-0">
              <div className="grid gap-4 bg-[#f8fbff] p-5 sm:grid-cols-[70px_1fr_120px] sm:items-center">
                <span className={`grid h-14 w-14 place-items-center rounded-md text-xl font-black text-white ${grade.color}`}>{grade.code}</span>
                <div>
                  <h2 className="text-2xl font-bold text-[#26364a]">{grade.title}</h2>
                  <p className="mt-1 text-sm text-[#5f7189]">Curriculum-aligned school math practice</p>
                </div>
                <span className="rounded-md bg-white px-3 py-2 text-center text-sm font-bold text-[#2b84d2] ring-1 ring-[#d8e3ef]">{grade.count}</span>
              </div>
              <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
                {grade.topics.map((topic, index) => (
                  <a key={topic} href="/register" className="border-t border-[#d8e3ef] px-4 py-4 hover:bg-[#f8fbff] lg:border-r lg:last:border-r-0">
                    <span className="block font-bold text-[#26364a]">{topic}</span>
                    <span className="mt-1 block text-sm text-[#5f7189]">{index + 6} skills</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
