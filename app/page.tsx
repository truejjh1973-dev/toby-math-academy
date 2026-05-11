const grades = [
  { name: 'Grade 8', summary: '55 skills', color: 'bg-[#e7f7ee] text-[#247a43]', skills: ['Linear relations', 'Pythagorean theorem', 'Probability'] },
  { name: 'Grade 9', summary: '64 skills', color: 'bg-[#eaf4ff] text-[#236fae]', skills: ['Polynomials', 'Statistics', 'Linear equations'] },
  { name: 'Pre-Calc 10', summary: '72 skills', color: 'bg-[#fff4df] text-[#a76312]', skills: ['Factoring', 'Radicals', 'Trigonometry'] },
  { name: 'Pre-Calc 11', summary: '68 skills', color: 'bg-[#f0edff] text-[#5a48b8]', skills: ['Quadratics', 'Transformations', 'Sequences'] }
]

const features = [
  { title: 'Comprehensive curriculum', text: 'BC school math, contest preparation, bilingual vocabulary, and video lessons in one place.', accent: 'border-[#4aa3df]' },
  { title: 'Personalized practice', text: 'Students choose a grade, build skill fluency, and track what is mastered, familiar, or still new.', accent: 'border-[#50b96f]' },
  { title: 'Step-by-step support', text: 'Classic examples can be taught through hints, worked solutions, common traps, and similar drills.', accent: 'border-[#f2a33b]' }
]

const stats = ['BC curriculum', 'AMC practice', 'Video lessons', 'Bilingual terms']

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#243044]">
      <header className="border-b border-[#dbe7f3] bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="Toby Math Academy home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#2587d8] text-xl font-black text-white shadow-sm">T</span>
            <span>
              <span className="block text-lg font-black leading-5 text-[#243044]">Toby Math Academy</span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#6c7e95]">Personalized math practice</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-extrabold text-[#51657c] md:flex">
            <a href="/bc-school-math" className="hover:text-[#2587d8]">Math</a>
            <a href="/competition-path" className="hover:text-[#2587d8]">Competition</a>
            <a href="/amc-solutions" className="hover:text-[#2587d8]">Solutions</a>
            <a href="/video-lessons" className="hover:text-[#2587d8]">Videos</a>
            <a href="/math-vocabulary" className="hover:text-[#2587d8]">Vocabulary</a>
          </div>

          <a href="/register" className="rounded-lg bg-[#49b86f] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#3aa05d]">
            Join now
          </a>
        </nav>
      </header>

      <section className="ixl-soft-grid border-b border-[#dbe7f3] bg-[#eaf7ff]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
          <div>
            <p className="mb-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-black text-[#2587d8] shadow-sm ring-1 ring-[#dbe7f3]">
              Math practice for school and contests
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-[#1f2d40] sm:text-6xl">
              Personalized math learning that feels clear, bright, and doable.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#51657c]">
              Build Toby Math Academy around grade-level skills, instant practice, AMC problem solving, bilingual vocabulary, and progress students can actually see.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/bc-school-math" className="rounded-lg bg-[#2587d8] px-6 py-4 text-center text-base font-black text-white shadow-sm hover:bg-[#1f73bb]">
                Start practicing
              </a>
              <a href="/amc-solutions" className="rounded-lg border border-[#b9d5ec] bg-white px-6 py-4 text-center text-base font-black text-[#2587d8] shadow-sm hover:border-[#2587d8]">
                Try AMC problems
              </a>
            </div>
          </div>

          <div className="ixl-card overflow-hidden rounded-lg">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-white p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#6c7e95]">Recommended</p>
                    <h2 className="mt-1 text-2xl font-black">Today&apos;s skills</h2>
                  </div>
                  <span className="rounded-lg bg-[#e7f7ee] px-3 py-2 text-sm font-black text-[#247a43]">82 score</span>
                </div>
                <div className="space-y-3">
                  {grades.slice(0, 3).map((grade) => (
                    <a key={grade.name} href="/bc-school-math" className="grid grid-cols-[52px_1fr] gap-3 rounded-lg border border-[#dbe7f3] bg-[#fbfdff] p-3 hover:border-[#2587d8]">
                      <span className={`grid h-12 w-12 place-items-center rounded-lg text-sm font-black ${grade.color}`}>{grade.name.replace('Grade ', 'G')}</span>
                      <span>
                        <span className="block font-black text-[#243044]">{grade.skills[0]}</span>
                        <span className="mt-1 block text-sm font-bold text-[#6c7e95]">{grade.summary} available</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#fff8e8] p-5 sm:p-6">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
                  alt="Students working on math practice together"
                  className="h-48 w-full rounded-lg object-cover shadow-sm"
                />
                <div className="mt-5 rounded-lg bg-white p-4 shadow-sm ring-1 ring-[#f1d8a9]">
                  <p className="text-sm font-black text-[#a76312]">Diagnostic preview</p>
                  <h3 className="mt-2 text-2xl font-black">Find the right starting point</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6c5a3a]">Quick checks can recommend school lessons, AMC drills, and vocabulary review.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item} className="ixl-card rounded-lg px-5 py-4 text-center text-sm font-black text-[#51657c]">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#2587d8]">Browse by grade</p>
            <h2 className="mt-2 text-4xl font-black text-[#1f2d40]">Math skills from school to contest prep</h2>
          </div>
          <a href="/register" className="font-black text-[#2587d8] hover:text-[#1f73bb]">Create a free account</a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {grades.map((grade) => (
            <article key={grade.name} className="ixl-card rounded-lg p-5 transition hover:-translate-y-1 hover:border-[#2587d8] hover:shadow-lg">
              <span className={`inline-flex rounded-lg px-3 py-2 text-sm font-black ${grade.color}`}>{grade.name}</span>
              <h3 className="mt-4 text-2xl font-black text-[#243044]">{grade.summary}</h3>
              <ul className="mt-4 space-y-2 text-sm font-bold text-[#5f7189]">
                {grade.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              <a href="/bc-school-math" className="mt-5 inline-flex rounded-lg bg-[#f0f7ff] px-4 py-2 text-sm font-black text-[#2587d8]">View skills</a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dbe7f3] bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className={`rounded-lg border-l-8 ${feature.accent} bg-[#fbfdff] p-6 shadow-sm ring-1 ring-[#dbe7f3]`}>
              <h3 className="text-2xl font-black text-[#243044]">{feature.title}</h3>
              <p className="mt-3 leading-7 text-[#5f7189]">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
