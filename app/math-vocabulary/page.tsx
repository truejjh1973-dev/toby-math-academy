const vocabulary = [
  { english: 'Equation', chinese: '方程', topic: 'Algebra' },
  { english: 'Variable', chinese: '变量', topic: 'Algebra' },
  { english: 'Radius', chinese: '半径', topic: 'Geometry' },
  { english: 'Combinatorics', chinese: '组合数学', topic: 'Counting' },
  { english: 'Number Theory', chinese: '数论', topic: 'Contest Math' }
]

export default function MathVocabularyPage() {
  return (
    <main className="min-h-screen bg-white text-[#243044]">
      <header className="border-b border-[#d8e3ef] bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black text-[#2b84d2]">Toby Math Academy</a>
          <a href="/register" className="rounded-md bg-[#4fb26a] px-5 py-2.5 text-sm font-bold text-white">Join now</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="text-5xl font-bold text-[#26364a]">English-Chinese Math Vocabulary</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5f7189]">A searchable directory for bilingual and newcomer students.</p>
        <input className="mt-7 w-full rounded-md border border-[#c7d6e6] bg-white px-4 py-3 font-bold focus:border-[#2b84d2]" placeholder="Search a term, topic, or Chinese translation" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="overflow-hidden rounded-md border border-[#d8e3ef] bg-white">
          {vocabulary.map((word) => (
            <article key={word.english} className="grid gap-3 border-b border-[#d8e3ef] p-5 last:border-b-0 sm:grid-cols-[1fr_1fr_160px] sm:items-center">
              <h2 className="text-2xl font-bold text-[#26364a]">{word.english}</h2>
              <p className="text-2xl font-bold text-[#4b9e60]">{word.chinese}</p>
              <span className="rounded-md bg-[#eef7ff] px-3 py-2 text-center text-sm font-bold text-[#2b84d2]">{word.topic}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
