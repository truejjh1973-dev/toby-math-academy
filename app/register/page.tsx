const goals = ['BC School Math', 'AMC 8 or 10', 'Waterloo contests', 'Bilingual review']
const grades = ['Grade 8', 'Grade 9', 'Pre-Calc 10', 'Pre-Calc 11']

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white text-[#243044]">
      <header className="border-b border-[#d8e3ef] bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black text-[#2b84d2]">Toby Math Academy</a>
          <span className="text-sm font-bold text-[#5f7189]">Personalized math practice</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1 className="text-5xl font-bold leading-tight text-[#26364a]">Create your learning profile.</h1>
          <p className="mt-4 text-lg leading-8 text-[#5f7189]">Choose a grade and goal so the future dashboard can recommend practice skills, videos, and AMC problems.</p>
          <div className="mt-7 overflow-hidden rounded-md border border-[#d8e3ef] bg-white">
            {['Recommended skills', 'Progress tracking', 'Mistake review', 'Video lessons'].map((item) => (
              <div key={item} className="border-b border-[#d8e3ef] px-4 py-3 text-sm font-bold text-[#51657c] last:border-b-0">{item}</div>
            ))}
          </div>
        </div>

        <form className="rounded-md border border-[#d8e3ef] bg-[#f8fbff] p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#51657c]">Email</span>
              <input type="email" className="w-full rounded-md border border-[#c7d6e6] bg-white px-4 py-3 font-bold focus:border-[#2b84d2]" placeholder="student@email.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#51657c]">Username</span>
              <input type="text" className="w-full rounded-md border border-[#c7d6e6] bg-white px-4 py-3 font-bold focus:border-[#2b84d2]" placeholder="MathLearner123" />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-[#51657c]">Password</span>
            <input type="password" className="w-full rounded-md border border-[#c7d6e6] bg-white px-4 py-3 font-bold focus:border-[#2b84d2]" placeholder="At least 8 characters" />
          </label>

          <div className="mt-6">
            <span className="mb-3 block text-sm font-bold text-[#51657c]">Grade</span>
            <div className="grid gap-2 sm:grid-cols-4">
              {grades.map((grade) => <button key={grade} type="button" className="rounded-md border border-[#c7d6e6] bg-white px-3 py-3 text-sm font-bold text-[#51657c] hover:border-[#2b84d2] hover:text-[#2b84d2]">{grade}</button>)}
            </div>
          </div>

          <div className="mt-6">
            <span className="mb-3 block text-sm font-bold text-[#51657c]">Learning goal</span>
            <div className="grid gap-2 sm:grid-cols-2">
              {goals.map((goal) => <button key={goal} type="button" className="rounded-md border border-[#c7d6e6] bg-white px-4 py-3 text-left text-sm font-bold text-[#51657c] hover:border-[#4fb26a] hover:text-[#3f8f55]">{goal}</button>)}
            </div>
          </div>

          <button className="mt-7 w-full rounded-md bg-[#4fb26a] py-3.5 text-base font-bold text-white hover:bg-[#429a59]">
            Create account
          </button>
        </form>
      </section>
    </main>
  )
}
