import { Link } from 'react-router-dom'
import { projects, profile } from '../data/projects'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-body">
          <p className="mono hero-kicker">PROJECT PORTFOLIO · 2024 — 2026</p>
          <h1 className="hero-title">项目作品集</h1>
          <p className="hero-sub">
            {profile.school} · 五个独立项目，从玩家社群运营到国企高管访谈，从图书校对到招聘数据分析，再到一个人从零运营起来的内容账号。
          </p>
          <div className="hero-meta mono">
            <span>{profile.name}</span>
            <span>·</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>·</span>
            <span>{profile.phone}</span>
          </div>
        </div>
      </section>

      <section className="container index">
        <div className="index-head">
          <span className="mono sec-label">SELECTED PROJECTS</span>
          <h2 className="index-title">五个项目，五种角色</h2>
          <p className="index-sub">
            每个项目都可以单独分享：点进项目页，能看到完整的背景、过程、成果与我的思考。
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <Link to={`/project/${p.id}`} className="project-card" key={p.id} style={{ '--acc': p.accent, '--acc2': p.accent2 }}>
              <div className="project-card-media">
                <img src={p.hero} alt={p.title} loading="lazy" />
                <span className="project-card-index mono">{p.index}</span>
                <span className="project-card-shade" aria-hidden="true" />
              </div>
              <div className="project-card-body">
                <span className="mono project-card-company">{p.company} · {p.period}</span>
                <h3 className="project-card-title">{p.title}</h3>
                {p.role && <p className="project-card-role">{p.role}</p>}
                <p className="project-card-summary">{p.summary}</p>
                <div className="project-card-tags">
                  {p.tags.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <span className="project-card-link mono">查看项目 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
