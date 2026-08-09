export default function Lightbox({ image, onClose }) {
  if (!image) return null
  return (
    <div className="lightbox" onClick={onClose}>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.caption} />
        <figcaption>{image.caption}</figcaption>
      </figure>
      <button className="lightbox-close" onClick={onClose} aria-label="关闭">×</button>
    </div>
  )
}
