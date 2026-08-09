import { profile } from '../data/projects'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div>
          <h3 className="footer-title">如果你对我的项目感兴趣</h3>
          <p className="footer-sub">正在寻找工作机会，欢迎进一步交流。</p>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="mono">{profile.phone}</span>
        </div>
      </div>
    </footer>
  )
}
