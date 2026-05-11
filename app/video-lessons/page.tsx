const videos = [
  { title: 'Factoring Basics', series: '5-Minute Math', length: '7 min', color: 'bg-[#2b84d2]' },
  { title: 'Avoiding Algebra Mistakes', series: 'Common Mistakes', length: '9 min', color: 'bg-[#f2a13a]' },
  { title: 'AMC Geometry Tricks', series: 'Competition Tricks', length: '11 min', color: 'bg-[#5dbb63]' }
]

export default function VideoLessonsPage() {
  return (
    <main className="min-h-screen bg-white text-[#243044]">
      <header className="border-b border-[#d8e3ef] bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black text-[#2b84d2]">Toby Math Academy</a>
          <a href="/register" className="rounded-md bg-[#4fb26a] px-5 py-2.5 text-sm font-bold text-white">Join now</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <h1 className="text-5xl font-bold text-[#26364a]">Video Lessons</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5f7189]">Short explanations paired with practice skills, organized as a clean lesson list.</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="overflow-hidden rounded-md border border-[#d8e3ef] bg-white">
          {videos.map((video, index) => (
            <article key={video.title} className="grid gap-4 border-b border-[#d8e3ef] p-5 last:border-b-0 sm:grid-cols-[72px_1fr_120px_120px] sm:items-center">
              <span className={`grid h-14 w-14 place-items-center rounded-md text-xl font-black text-white ${video.color}`}>{index + 1}</span>
              <div>
                <h2 className="text-2xl font-bold text-[#26364a]">{video.title}</h2>
                <p className="mt-1 text-sm text-[#5f7189]">{video.series}</p>
              </div>
              <span className="rounded-md bg-[#f1f6fb] px-3 py-2 text-center text-sm font-bold text-[#51657c]">{video.length}</span>
              <a href="/register" className="rounded-md bg-[#eef7ff] px-3 py-2 text-center text-sm font-bold text-[#2b84d2]">Watch</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
