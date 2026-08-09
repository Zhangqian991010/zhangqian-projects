import { Link } from 'react-router-dom'
import { profile } from '../data/projects'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-name">{profile.name}</span>
          <em className="mono">{profile.enName} · PROJECTS</em>
        </Link>
        <nav className="nav-links">
          <Link to="/">全部项目</Link>
          <a href="#contact">联系</a>
        </nav>
      </div>
    </header>
  )
}
