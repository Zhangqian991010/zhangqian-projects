import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import Lightbox from '../components/Lightbox'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [zoom, setZoom] = useState(null)

  if (!project) {
    return (
      <section className="container notfound">
        <h2>项目不存在</h2>
        <Link to="/">返回项目列表</Link>
      </section>
    )
  }

  const others = projects.filter((p) => p.id !== id)

  return (
    <article className="detail" style={{ '--acc': project.accent, '--acc2': project.accent2 }}>
      <section className="detail-hero">
        <div className="detail-hero-bg" aria-hidden="true">
          <img src={project.hero} alt="" />
        </div>
        <div className="container">
          <p className="mono detail-hero-kicker">
            <span>{project.index} / {project.en}</span>
            <span>{project.period}</span>
          </p>
          <h1 className="detail-hero-title">{project.title}</h1>
          {project.role && <p className="detail-hero-role">{project.role}</p>}
          <div className="detail-hero-tags">
            {project.tags.map((t) => <span key={t} className="tag tag--light">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="container detail-metrics">
        {project.metrics.map((m) => (
          <div className="metric" key={m.label}>
            <span className="metric-value mono">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </section>

      <section className="container detail-section">
        <span className="mono sec-label">OVERVIEW</span>
        <h2 className="detail-section-title">项目概览</h2>
        <div className="detail-prose">
          {project.intro.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </section>

      <section className="container detail-section">
        <span className="mono sec-label">MY WORK</span>
        <h2 className="detail-section-title">我做了什么</h2>
        <div className="story-list">
          {project.story.map((s, i) => (
            <div className="story" key={i}>
              <div className={`story-body ${i % 2 === 1 ? 'story-body--right' : ''}`}>
                <span className="mono story-no">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="story-title">{s.title}</h3>
                <p className="story-text">{s.text}</p>
              </div>
              <figure className="story-media story-media--auto" onClick={() => setZoom(s)}>
                <img src={s.img} alt={s.caption} loading="lazy" />
                <figcaption className="mono">{s.caption}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <section className="container detail-section">
        <span className="mono sec-label">SHOWCASE</span>
        <h2 className="detail-section-title">成果展示</h2>
        <div className="showcase-grid">
          {project.gallery.map((g) => (
            <figure className="showcase-item" key={g.src} onClick={() => setZoom(g)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <figcaption className="mono">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container detail-section">
        <span className="mono sec-label">LEARNING</span>
        <h2 className="detail-section-title">我的思考</h2>
        <div className="learning-list">
          {project.learning.map((l, i) => (
            <div className="learning" key={i}>
              <span className="mono learning-mark">✦</span>
              <p>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {project.docs.length > 0 && (
        <section className="container detail-section">
          <span className="mono sec-label">DOWNLOADS</span>
          <h2 className="detail-section-title">项目资料</h2>
          <div className="docs-grid">
            {project.docs.map((d) => (
              <a className="doc-card" href={d.file} download key={d.file}>
                <span className="doc-icon mono">⬇</span>
                <span className="doc-name">{d.name}</span>
                <span className="mono doc-type">下载</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="container detail-section">
        <span className="mono sec-label">OTHER PROJECTS</span>
        <h2 className="detail-section-title">其他项目</h2>
        <div className="other-grid">
          {others.map((p) => (
            <Link to={`/project/${p.id}`} className="other-card" key={p.id} style={{ '--acc': p.accent }}>
              <span className="mono other-index">{p.index}</span>
              <div>
                <h3>{p.title}</h3>
                <p className="mono">{p.company} · {p.period}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Lightbox image={zoom} onClose={() => setZoom(null)} />
    </article>
  )
}
