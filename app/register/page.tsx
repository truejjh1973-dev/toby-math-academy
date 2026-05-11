export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 border">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>

        <p className="text-slate-600 mb-8">
          Join Toby Math Academy to save lessons and track your progress.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-xl px-4 py-3"
              placeholder="student@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full border rounded-xl px-4 py-3"
              placeholder="MathLearner123"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded-xl px-4 py-3"
              placeholder="********"
            />
          </div>

          <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-medium">
            Create Account
          </button>
        </form>
      </div>
    </main>
  )
}
