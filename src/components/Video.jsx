import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Videoelement from '../assets/video1.mp4'

export default function VideoBackground() {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect (() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.95;
      }
  }, []);

  function togglePlayback() {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div id='video-bg' className='video-bg h-auto w-full'>
      <div className='video-bg md:h-200 lg:h-200 xl:h-300 lg:w-auto flex z--1 justify-center object-contain lg:scale-100 overflow-y md:mb-0 md:mt-0 lg:mb-10 lg:mt-0 md:bg-white'>
          <video
              ref={videoRef}
              autoPlay
              loop
              muted
              className='video-bg_video'
              id='video-bg_video'
              style={{ boxShadow: '0 -10px 10px rgba(255, 255, 255, 0.8)' }}
          >

          <source src={Videoelement} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <div className='pausebtn' onClick={togglePlayback}></div>
      </div>
    </div>
  )
}
