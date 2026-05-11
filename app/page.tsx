const gradeRows = [
  { code: '8', name: 'Grade 8', description: 'Linear relations, geometry, probability, and number fluency.', math: '55 skills', videos: '18 videos', color: 'bg-[#5dbb63]' },
  { code: '9', name: 'Grade 9', description: 'Polynomials, statistics, equations, scale, and exponents.', math: '64 skills', videos: '22 videos', color: 'bg-[#2b84d2]' },
  { code: '10', name: 'Pre-Calculus 10', description: 'Factoring, radicals, functions, systems, and trigonometry.', math: '72 skills', videos: '26 videos', color: 'bg-[#f2a13a]' },
  { code: '11', name: 'Pre-Calculus 11', description: 'Quadratics, transformations, sequences, rational expressions, and sine law.', math: '68 skills', videos: '24 videos', color: 'bg-[#7b65d8]' }
]

const featureBlocks = [
  { title: 'Comprehensive curriculum', text: 'BC school math, contest prep, videos, and bilingual vocabulary.', icon: '✓', color: 'text-[#2b84d2]' },
  { title: 'Trusted by families', text: 'Clear progress, simple practice goals, and parent-friendly learning paths.', icon: '★', color: 'text-[#5dbb63]' },
  { title: 'Practice that adapts', text: 'Future diagnostics can recommend the next lesson, problem, or review skill.', icon: '↗', color: 'text-[#f2a13a]' }
]

const quickLinks = ['Membership', 'Math', 'AMC Solutions', 'Videos', 'Vocabulary', 'Dashboard']

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#243044]">
      <header className="border-b border-[#d8e3ef] bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="Toby Math Academy home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#2b84d2] text-xl font-black text-white">T</span>
            <span className="text-xl font-black text-[#2b84d2]">Toby Math Academy</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-bold text-[#51657c] md:flex">
            <a href="/bc-school-math" className="hover:text-[#2b84d2]">Math</a>
            <a href="/competition-path" className="hover:text-[#2b84d2]">Competition</a>
            <a href="/amc-solutions" className="hover:text-[#2b84d2]">AMC</a>
            <a href="/video-lessons" className="hover:text-[#2b84d2]">Videos</a>
            <a href="/math-vocabulary" className="hover:text-[#2b84d2]">Vocabulary</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="/register" className="hidden text-sm font-bold text-[#2b84d2] sm:inline-flex">Sign in</a>
            <a href="/register" className="rounded-md bg-[#4fb26a] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#429a59]">Join now</a>
          </div>
        </nav>
      </header>

      <section className="bg-white px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#26364a] sm:text-6xl">
              Personalized math practice for school, contests, and confidence.
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5f7189]">
              Build a clear IXL-style learning experience around grade skills, short videos, AMC practice, bilingual vocabulary, and simple progress tracking.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/register" className="rounded-md bg-[#4fb26a] px-7 py-3.5 text-center text-base font-bold text-white hover:bg-[#429a59]">Become a member</a>
              <a href="/bc-school-math" className="rounded-md border border-[#b9cde1] bg-white px-7 py-3.5 text-center text-base font-bold text-[#2b84d2] hover:border-[#2b84d2]">Explore math skills</a>
            </div>
          </div>

          <div className="ixl-panel rounded-md p-5">
            <div className="rounded-md bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-md bg-[#e7f5ff] text-3xl font-black text-[#2b84d2]">82</div>
                <div>
                  <p className="text-sm font-bold text-[#5f7189]">SmartScore preview</p>
                  <h2 className="text-2xl font-bold text-[#26364a]">Factoring readiness</h2>
                </div>
              </div>
              <div className="mt-5 h-3 rounded-full bg-[#e8eef5]"><div className="h-3 w-4/5 rounded-full bg-[#4fb26a]" /></div>
              <p className="mt-3 text-sm font-bold text-[#5f7189]">Next: practice common factoring patterns</p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {['Math', 'AMC', 'Words'].map((item) => (
                <div key={item} className="rounded-md bg-white px-3 py-4 text-sm font-bold text-[#51657c] shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8e3ef] bg-[#f5f9fd] px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {featureBlocks.map((feature) => (
            <article key={feature.title} className="flex gap-4 rounded-md bg-white p-5 shadow-sm ring-1 ring-[#d8e3ef]">
              <span className={`text-3xl font-black ${feature.color}`}>{feature.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-[#26364a]">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#5f7189]">{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-bold text-[#26364a]">Math by grade</h2>
            <p className="mt-2 text-[#5f7189]">Choose a course to see skills, videos, and practice sets.</p>
          </div>
          <a href="/bc-school-math" className="font-bold text-[#2b84d2]">See all skills</a>
        </div>

        <div className="overflow-hidden rounded-md border border-[#d8e3ef] bg-white">
          {gradeRows.map((grade) => (
            <a key={grade.name} href="/bc-school-math" className="grid gap-4 border-b border-[#d8e3ef] p-5 last:border-b-0 hover:bg-[#f8fbff] sm:grid-cols-[72px_1fr_130px_130px] sm:items-center">
              <span className={`grid h-14 w-14 place-items-center rounded-md text-xl font-black text-white ${grade.color}`}>{grade.code}</span>
              <span>
                <span className="block text-xl font-bold text-[#26364a]">{grade.name}</span>
                <span className="mt-1 block text-sm text-[#5f7189]">{grade.description}</span>
              </span>
              <span className="rounded-md bg-[#eef7ff] px-3 py-2 text-center text-sm font-bold text-[#2b84d2]">{grade.math}</span>
              <span className="rounded-md bg-[#f2fbf4] px-3 py-2 text-center text-sm font-bold text-[#4b9e60]">{grade.videos}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d8e3ef] bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm font-bold text-[#5f7189]">
          <span>Toby Math Academy</span>
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link) => <span key={link}>{link}</span>)}
          </div>
        </div>
      </footer>
    </main>
  )
}
