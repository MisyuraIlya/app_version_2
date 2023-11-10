import React from 'react'

const GalaxtVideo = () => {
  return (
    <div>
      <div
        className="pre-showcase"
        dangerouslySetInnerHTML={{
          __html: `
		<video
			id="showcase"
			preload="preload"
			loop
			muted
			autoplay
			playsInline
			webkit-playsInline
			x-webkit-airplay="allow"
			poster="https://ctb2b.co.il/src/img/poster.jpg"
			className="video-background">
			{window.innerWidth > 1200 ?
				<source src="https://digitrade.com.ua/ceremonitea/src/img/video.mp4" type="video/mp4" /> :
				<source src="https://digitrade.com.ua/ceremonitea/src/img/video.webm" type="video/webm" />	}
			</video>
			`,
        }}
      ></div>
    </div>
  )
}

export default GalaxtVideo
