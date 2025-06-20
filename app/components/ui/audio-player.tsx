'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Đặt currentTime khi metadata đã load
    const handleLoadedMetadata = () => {
      audio.currentTime = 10;
      audio.play().catch(() => {
        setIsPlaying(false); // Nếu bị chặn, đổi icon về play-off
        // Khi user click, phát lại audio
        const resumeAudio = () => {
          audio.play().then(() => setIsPlaying(true));
          window.removeEventListener('click', resumeAudio);
        };
        window.addEventListener('click', resumeAudio);
      });
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/media/CamOnNha.mp3"
        autoPlay
        loop
      />
      <div 
        className="fixed bottom-4 left-4 z-50 cursor-pointer hover:opacity-80 transition-opacity audio-control"
        onClick={togglePlay}
      >
        <div className="playerIcon">
            <Image
            src={isPlaying ? '/media/play-on.svg' : '/media/play-off.svg'}
            alt="music control"
            width={25}
            height={27}
            />
        </div>
      </div>
    </>
  );
}; 