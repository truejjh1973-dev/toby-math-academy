const grades = [
  { title: 'Grade 8 Math', code: '8', count: '55 skills', color: 'bg-[#e7f7ee] text-[#247a43]', topics: ['Linear Relations', 'Pythagorean Theorem', 'Probability', 'Integer operations', 'Surface area'] },
  { title: 'Grade 9 Math', code: '9', count: '64 skills', color: 'bg-[#eaf4ff] text-[#236fae]', topics: ['Polynomials', 'Statistics', 'Linear Equations', 'Scale factors', 'Exponents'] },
  { title: 'Pre-Calculus 10', code: '10', count: '72 skills', color: 'bg-[#fff4df] text-[#a76312]', topics: ['Factoring', 'Radicals', 'Trigonometry', 'Functions', 'Systems'] },
  { title: 'Pre-Calculus 11', code: '11', count: '68 skills', color: 'bg-[#f0edff] text-[#5a48b8]', topics: ['Quadratics', 'Transformations', 'Sequences', 'Rational expressions', 'Sine law'] }
]

const domains = ['Number sense', 'Algebra', 'Geometry', 'Data', 'Functions', 'Contest links']

export default function BCSchoolMathPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#243044]">
      <section className="border-b border-[#dbe7f3] bg-[#eaf7ff] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="font-black text-[#2587d8]">Toby Math Academy</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#2587d8]">BC curriculum</p>
              <h1 className="mt-3 text-5xl font-black leading-tight text-[#1f2d40]">Choose a grade. Build one skill at a time.</h1>
              <p className="mt-4 text-lg leading-8 text-[#51657c]">A clearer IXL-style skill map for school math, with quick practice entry points and future progress tracking.</p>
            </div>
            <div className="ixl-card rounded-lg p-5">
              <p className="text-sm font-black text-[#49b86f]">Recommended next</p>
              <h2 className="mt-2 text-2xl font-black">Pre-Calculus 10: Factoring</h2>
              <div className="mt-4 h-3 rounded-full bg-[#e8f2fb]"><div className="h-3 w-2/3 rounded-full bg-[#49b86f]" /></div>
              <p className="mt-3 text-sm font-bold text-[#5f7189]">8 of 12 prerequisite skills ready</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-wrap gap-3">
          {domains.map((domain) => (
            <button key={domain} className="rounded-lg border border-[#c7dced] bg-white px-4 py-2 text-sm font-black text-[#51657c] shadow-sm hover:border-[#2587d8] hover:text-[#2587d8]">{domain}</button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-14 sm:px-8 md:grid-cols-2">
        {grades.map((grade) => (
          <article key={grade.title} className="ixl-card rounded-lg p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className={`grid h-14 w-14 place-items-center rounded-lg text-xl font-black ${grade.color}`}>{grade.code}</span>
                <div>
                  <h2 className="text-2xl font-black text-[#243044]">{grade.title}</h2>
                  <p className="mt-1 text-sm font-black text-[#6c7e95]">{grade.count}</p>
                </div>
              </div>
              <a href="/register" className="rounded-lg bg-[#49b86f] px-4 py-2 text-sm font-black text-white">Practice</a>
            </div>

            <div className="mt-5 grid gap-2">
              {grade.topics.map((topic, index) => (
                <div key={topic} className="flex items-center justify-between rounded-lg border border-[#dbe7f3] bg-[#fbfdff] px-4 py-3">
                  <span className="font-bold text-[#243044]">{topic}</span>
                  <span className="rounded-md bg-white px-2 py-1 text-xs font-black text-[#6c7e95] ring-1 ring-[#dbe7f3]">{index + 6} skills</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
