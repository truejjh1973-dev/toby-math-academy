const goals = ['BC School Math', 'AMC 8 or 10', 'Waterloo contests', 'Bilingual review']
const grades = ['Grade 8', 'Grade 9', 'Pre-Calc 10', 'Pre-Calc 11']

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#243044]">
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <div>
          <a href="/" className="font-black text-[#2587d8]">Toby Math Academy</a>
          <p className="mt-10 text-sm font-black uppercase tracking-[0.14em] text-[#49b86f]">Create your learning profile</p>
          <h1 className="mt-3 text-5xl font-black leading-tight text-[#1f2d40]">Start with the right grade, goal, and practice path.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#51657c]">This onboarding layout is designed for a future personalized dashboard: recommended skills, saved lessons, AMC practice, and mistake review.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Skill recommendations', 'Progress tracking', 'Mistake review', 'Video lessons'].map((item) => (
              <div key={item} className="ixl-card rounded-lg px-4 py-3 font-black text-[#51657c]">{item}</div>
            ))}
          </div>
        </div>

        <div className="ixl-card rounded-lg bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-black text-[#243044]">Create account</h2>
          <p className="mt-2 text-[#5f7189]">Save lessons and track your learning progress.</p>

          <form className="mt-7 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-[#51657c]">Email</span>
                <input type="email" className="w-full rounded-lg border border-[#c7dced] bg-[#fbfdff] px-4 py-3 font-bold focus:border-[#2587d8]" placeholder="student@email.com" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-black text-[#51657c]">Username</span>
                <input type="text" className="w-full rounded-lg border border-[#c7dced] bg-[#fbfdff] px-4 py-3 font-bold focus:border-[#2587d8]" placeholder="MathLearner123" />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-[#51657c]">Password</span>
              <input type="password" className="w-full rounded-lg border border-[#c7dced] bg-[#fbfdff] px-4 py-3 font-bold focus:border-[#2587d8]" placeholder="At least 8 characters" />
            </label>

            <div>
              <span className="mb-3 block text-sm font-black text-[#51657c]">Grade</span>
              <div className="grid gap-2 sm:grid-cols-4">
                {grades.map((grade) => <button key={grade} type="button" className="rounded-lg border border-[#c7dced] bg-white px-3 py-3 text-sm font-black text-[#51657c] hover:border-[#2587d8] hover:text-[#2587d8]">{grade}</button>)}
              </div>
            </div>

            <div>
              <span className="mb-3 block text-sm font-black text-[#51657c]">Learning goal</span>
              <div className="grid gap-2 sm:grid-cols-2">
                {goals.map((goal) => <button key={goal} type="button" className="rounded-lg border border-[#c7dced] bg-[#fbfdff] px-4 py-3 text-left text-sm font-black text-[#51657c] hover:border-[#49b86f] hover:text-[#247a43]">{goal}</button>)}
              </div>
            </div>

            <button className="w-full rounded-lg bg-[#49b86f] py-4 text-base font-black text-white shadow-sm hover:bg-[#3aa05d]">
              Create learning profile
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
