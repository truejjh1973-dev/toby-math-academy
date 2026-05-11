const problems = [
  {
    contest: 'AMC 10A',
    year: 2023,
    topic: 'Algebra',
    difficulty: 'Medium'
  },
  {
    contest: 'AMC 8',
    year: 2022,
    topic: 'Geometry',
    difficulty: 'Easy'
  },
  {
    contest: 'AMC 10B',
    year: 2024,
    topic: 'Number Theory',
    difficulty: 'Hard'
  }
]

export default function AMCSolutionsPage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-6">AMC Solutions</h1>

      <p className="text-lg text-slate-600 mb-10">
        Step-by-step explanations of selected AMC problems.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <div key={index} className="border rounded-2xl p-6 shadow-sm">
            <p className="text-blue-600 font-medium mb-2">
              {problem.contest} {problem.year}
            </p>

            <h2 className="text-xl font-semibold mb-3">{problem.topic}</h2>

            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
              {problem.difficulty}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
