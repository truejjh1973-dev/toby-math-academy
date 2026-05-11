const videos = [
  {
    title: 'Factoring Basics',
    series: '5-Minute Math'
  },
  {
    title: 'Avoiding Algebra Mistakes',
    series: 'Common Mistakes'
  },
  {
    title: 'AMC Geometry Tricks',
    series: 'Competition Tricks'
  }
]

export default function VideoLessonsPage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold mb-6">Video Lessons</h1>

      <p className="text-lg text-slate-600 mb-10">
        Watch short math videos taught by Toby.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.title} className="border rounded-2xl overflow-hidden shadow-sm">
            <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-500">
              Video Thumbnail
            </div>

            <div className="p-5">
              <p className="text-blue-600 text-sm font-medium mb-2">
                {video.series}
              </p>

              <h2 className="text-xl font-semibold">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
