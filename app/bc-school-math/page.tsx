const grades = [
  {
    title: 'Grade 8 Math',
    topics: ['Linear Relations', 'Pythagorean Theorem', 'Probability']
  },
  {
    title: 'Grade 9 Math',
    topics: ['Polynomials', 'Statistics', 'Linear Equations']
  },
  {
    title: 'Pre-Calculus 10',
    topics: ['Factoring', 'Radicals', 'Trigonometry']
  },
  {
    title: 'Pre-Calculus 11',
    topics: ['Quadratics', 'Transformations', 'Sequences']
  }
]

export default function BCSchoolMathPage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-6">BC School Math</h1>

      <p className="text-lg text-slate-600 mb-10">
        Curriculum-aligned math lessons for BC students.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {grades.map((grade) => (
          <div key={grade.title} className="border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{grade.title}</h2>

            <ul className="space-y-2 text-slate-600">
              {grade.topics.map((topic) => (
                <li key={topic}>• {topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
