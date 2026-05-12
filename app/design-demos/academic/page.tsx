const grades = ['Grade 7–8', 'Grade 9', 'Pre-Calculus 10', 'Pre-Calculus 11–12']
const outcomes = [
  { value: '92%', label: 'homework accuracy' },
  { value: '4.8/5', label: 'lesson clarity' },
  { value: '3x', label: 'weekly practice' }
]

export default function AcademicDemoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-8 lg:px-10">
        <a href="/design-demos" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
            T
          </span>
          <span>
            <span className="block font-black">Toby Math Academy</span>
            <span className="text-sm font-medium text-slate-500">Academic demo</span>
          </span>
        </a>
        <div className="hidden gap-8 text-sm font-bold text-slate-600 md:flex">
          <a href="/bc-school-math">Curriculum</a>
          <a href="/video-lessons">Video Lessons</a>
          <a href="/amc-solutions">AMC Solutions</a>
        </div>
        <a href="/register" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
          Book Trial Class
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
            BC curriculum · AMC thinking · bilingual support
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
            A calm, structured path to stronger math.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">
            为家长和学生设计的可信赖数学学习界面：清晰课程路径、可衡量进度、短视频讲解和每周练习计划。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/bc-school-math" className="rounded-full bg-blue-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-600/25">
              Explore Curriculum
            </a>
            <a href="/design-demos" className="rounded-full border border-slate-300 px-7 py-4 font-black text-slate-700">
              View Other Styles
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-slate-100 p-5 shadow-2xl shadow-blue-950/10 ring-1 ring-slate-200">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-slate-400">Weekly Plan</p>
                <h2 className="mt-2 text-3xl font-black">Linear Systems Mastery</h2>
              </div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">On track</span>
            </div>
            <div className="mt-8 space-y-4">
              {['Concept notes', 'Guided examples', 'Homework feedback', 'Challenge problem'].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-20 sm:px-8 md:grid-cols-4 lg:px-10">
        {grades.map((grade) => (
          <div key={grade} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-black text-blue-600">Course</p>
            <h3 className="mt-2 text-2xl font-black">{grade}</h3>
            <p className="mt-4 text-slate-600">Structured lessons, practice sets, and progress reviews.</p>
          </div>
        ))}
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {outcomes.map((item) => (
            <div key={item.label} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-4xl font-black text-blue-600">{item.value}</p>
              <p className="mt-2 font-bold text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
