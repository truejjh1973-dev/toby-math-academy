const levels = [
  {
    title: 'Beginner',
    contests: ['Gauss', 'Pascal', 'AMC 8']
  },
  {
    title: 'Intermediate',
    contests: ['AMC 10', 'Cayley', 'Fermat']
  },
  {
    title: 'Advanced',
    contests: ['AIME', 'Euclid']
  }
]

export default function CompetitionPathPage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-6">Competition Path</h1>

      <p className="text-lg text-slate-600 mb-10">
        A structured roadmap for students preparing for math contests.
      </p>

      <div className="space-y-6">
        {levels.map((level) => (
          <div key={level.title} className="border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{level.title}</h2>

            <div className="flex flex-wrap gap-3">
              {level.contests.map((contest) => (
                <span
                  key={contest}
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-700"
                >
                  {contest}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
