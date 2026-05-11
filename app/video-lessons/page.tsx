const videos = [
  { title: 'Factoring Basics', series: '5-Minute Math', length: '7 min', color: 'bg-[#eaf4ff] text-[#236fae]' },
  { title: 'Avoiding Algebra Mistakes', series: 'Common Mistakes', length: '9 min', color: 'bg-[#fff4df] text-[#a76312]' },
  { title: 'AMC Geometry Tricks', series: 'Competition Tricks', length: '11 min', color: 'bg-[#e7f7ee] text-[#247a43]' }
]

export default function VideoLessonsPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#243044]">
      <section className="border-b border-[#dbe7f3] bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <a href="/" className="font-black text-[#2587d8]">Toby Math Academy</a>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#7967d8]">Video lessons</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-[#1f2d40]">Short explanations paired with practice skills.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#51657c]">A video library layout that feels more like a course catalog: series, duration, topic, and a clear next action.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 md:grid-cols-3">
        {videos.map((video, index) => (
          <article key={video.title} className="ixl-card overflow-hidden rounded-lg">
            <div className="grid h-48 place-items-center bg-[#eaf7ff] px-5 text-center">
              <div className="grid h-24 w-24 place-items-center rounded-lg bg-white text-3xl font-black text-[#2587d8] shadow-sm ring-1 ring-[#dbe7f3]">{index + 1}</div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <span className={`rounded-lg px-3 py-2 text-xs font-black ${video.color}`}>{video.series}</span>
                <span className="text-sm font-black text-[#6c7e95]">{video.length}</span>
              </div>
              <h2 className="mt-4 text-2xl font-black text-[#243044]">{video.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5f7189]">Watch, answer a quick check, then continue to a matching practice skill.</p>
              <a href="/register" className="mt-5 inline-flex rounded-lg bg-[#2587d8] px-5 py-3 text-sm font-black text-white">Watch lesson</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
