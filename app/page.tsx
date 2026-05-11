export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="space-y-6">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Toby Math Academy
          </p>

          <h1 className="text-5xl font-bold leading-tight max-w-4xl">
            Learn Math Beyond the Classroom
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl">
            BC School Math • AMC Competition • Video Lessons • Real Problem Solving
          </p>

          <p className="text-lg text-slate-500 max-w-3xl">
            A student-led mathematics platform built by a Grade 10 student passionate about math competitions, problem solving, and teaching younger students.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium">
              Start Learning
            </button>

            <button className="px-6 py-3 rounded-xl border border-slate-300 font-medium">
              AMC Solutions
            </button>
          </div>
        </div>
      </section>

      <section className="px-8 pb-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">BC School Math</h2>
          <p className="text-slate-600">
            Structured lessons from Grade 7 to Pre-Calculus 12.
          </p>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Competition Path</h2>
          <p className="text-slate-600">
            Learn AMC, Waterloo contest strategies, and advanced mathematical thinking.
          </p>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Video Lessons</h2>
          <p className="text-slate-600">
            Watch short and clear explanations taught by Toby.
          </p>
        </div>
      </section>
    </main>
  )
}
