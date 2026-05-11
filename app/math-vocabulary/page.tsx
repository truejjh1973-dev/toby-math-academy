const vocabulary = [
  {
    english: 'Equation',
    chinese: '方程'
  },
  {
    english: 'Variable',
    chinese: '变量'
  },
  {
    english: 'Radius',
    chinese: '半径'
  },
  {
    english: 'Combinatorics',
    chinese: '组合数学'
  },
  {
    english: 'Number Theory',
    chinese: '数论'
  }
]

export default function MathVocabularyPage() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-6">
        English-Chinese Math Vocabulary
      </h1>

      <p className="text-lg text-slate-600 mb-10">
        Mathematical terminology for bilingual and newcomer students.
      </p>

      <div className="border rounded-2xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">English</th>
              <th className="text-left p-4">中文</th>
            </tr>
          </thead>

          <tbody>
            {vocabulary.map((word) => (
              <tr key={word.english} className="border-t">
                <td className="p-4">{word.english}</td>
                <td className="p-4">{word.chinese}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
