const demos = [
  {
    href: '/design-demos/academic',
    eyebrow: 'Style 01',
    title: '学院可信风',
    description: '适合面向家长与中学生的正式辅导品牌，强调课程体系、学习结果和可信赖感。',
    accent: 'bg-blue-600',
    card: 'bg-white text-slate-950 ring-slate-200'
  },
  {
    href: '/design-demos/playful',
    eyebrow: 'Style 02',
    title: '趣味探索风',
    description: '适合低龄学生和启蒙课程，用游戏化任务、徽章和高饱和色彩降低数学距离感。',
    accent: 'bg-pink-500',
    card: 'bg-[#fff7cc] text-slate-950 ring-orange-200'
  },
  {
    href: '/design-demos/contest',
    eyebrow: 'Style 03',
    title: '竞赛冲刺风',
    description: '适合 AMC、Waterloo 与高阶训练，突出训练节奏、数据反馈和冲刺氛围。',
    accent: 'bg-emerald-400',
    card: 'bg-slate-950 text-white ring-white/10'
  }
]

export default function DesignDemosPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ed] px-6 py-10 text-slate-950 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur lg:p-10">
          <a href="/" className="text-sm font-bold text-blue-600">
            ← 返回首页
          </a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-600">
                Demo Gallery
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                独立演示界面
              </h1>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              这里把三套设计拆成可单独打开的完整页面。你可以分别进入每个演示界面，像浏览真实网站一样查看导航、Hero、课程模块、数据卡片和行动按钮。
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {demos.map((demo) => (
            <a
              key={demo.href}
              href={demo.href}
              className={`${demo.card} group rounded-[2rem] p-6 shadow-xl ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className={`h-3 w-24 rounded-full ${demo.accent}`} />
              <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] opacity-70">
                {demo.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-black">{demo.title}</h2>
              <p className="mt-4 min-h-24 text-base leading-7 opacity-75">
                {demo.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-sm group-hover:gap-4">
                打开独立演示 <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
