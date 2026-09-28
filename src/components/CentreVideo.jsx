import { useEffect, useRef } from 'react'
import './CentreVideo.css'

export default function CentreVideo() {
  const playerRef = useRef(null)

  useEffect(() => {
    const unmuteAfterInteraction = () => {
      playerRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        'https://www.youtube-nocookie.com',
      )
    }

    window.addEventListener('pointerdown', unmuteAfterInteraction, { once: true })
    window.addEventListener('keydown', unmuteAfterInteraction, { once: true })

    return () => {
      window.removeEventListener('pointerdown', unmuteAfterInteraction)
      window.removeEventListener('keydown', unmuteAfterInteraction)
    }
  }, [])

  return (
    <section className="centre-video" aria-label="Introduction to Savitur Pranic Healing Centre">
      <div className="centre-video__inner">
        <div className="centre-video__frame">
          <iframe
            ref={playerRef}
            src="https://www.youtube-nocookie.com/embed/olZhUc3WgCI?autoplay=1&mute=1&playsinline=1&rel=0&enablejsapi=1"
            title="Introduction to Savitur Pranic Healing Centre"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
