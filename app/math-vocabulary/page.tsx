const vocabulary = [
  { english: 'Equation', chinese: '方程', topic: 'Algebra' },
  { english: 'Variable', chinese: '变量', topic: 'Algebra' },
  { english: 'Radius', chinese: '半径', topic: 'Geometry' },
  { english: 'Combinatorics', chinese: '组合数学', topic: 'Counting' },
  { english: 'Number Theory', chinese: '数论', topic: 'Contest Math' }
]

export default function MathVocabularyPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#243044]">
      <section className="border-b border-[#dbe7f3] bg-[#eaf7ff] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="font-black text-[#2587d8]">Toby Math Academy</a>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#2587d8]">Bilingual vocabulary</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-[#1f2d40]">English-Chinese math words students can actually use.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#51657c]">A cleaner card-based vocabulary page, ready for search, examples, pronunciation, and topic filters.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="ixl-card rounded-lg p-4">
          <input className="w-full rounded-lg border border-[#c7dced] bg-[#fbfdff] px-4 py-3 font-bold" placeholder="Search a term, topic, or Chinese translation" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-14 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {vocabulary.map((word) => (
          <article key={word.english} className="ixl-card rounded-lg p-5">
            <span className="rounded-lg bg-[#f0f7ff] px-3 py-2 text-xs font-black text-[#2587d8]">{word.topic}</span>
            <h2 className="mt-5 text-3xl font-black text-[#243044]">{word.english}</h2>
            <p className="mt-2 text-2xl font-black text-[#49b86f]">{word.chinese}</p>
            <p className="mt-4 text-sm leading-6 text-[#5f7189]">Add an example sentence and one quick practice question for this term.</p>
          </article>
        ))}
      </section>
    </main>
  )
}
