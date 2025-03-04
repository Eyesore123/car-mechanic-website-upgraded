import React from 'react'
import Videoelement from '../assets/video1.mp4'

export default function VideoBackground() {
  return (
    <div className='video-bg h-auto w-full'>
      <div className='video-bg md:h-300 flex z--1 justify-center object-contain lg:scale-140 overflow-y md:mb-60 md:mt-60 bg-cyan-300'>
          <video
              autoPlay
              loop
              muted
              className='video-bg_video'
          >

          <source src={Videoelement} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
      </div>
    </div>
  )
}
