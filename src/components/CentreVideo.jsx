import './CentreVideo.css'

export default function CentreVideo() {
  return (
    <section className="centre-video" aria-label="Introduction to Savitur Pranic Healing Centre">
      <div className="centre-video__inner">
        <div className="centre-video__frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/mh8tEfZ4ooo?rel=0"
            title="Introduction to Pranic Healing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="centre-video__credit">
          Video credit:{' '}
          <a
            href="https://www.youtube.com/@Globalpranichealing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pranic Healing – Institute for Inner Studies
          </a>
        </p>
      </div>
    </section>
  )
}
