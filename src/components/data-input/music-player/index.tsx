import { createRef, useState } from 'react';

import song from '../../../assets/audio/its-a-sin.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = createRef<HTMLAudioElement>();

  const playSong = () => {
    if (!isPlaying && audioRef && audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    if (isPlaying && audioRef && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resetSong = () => {
    if (isPlaying && audioRef && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='-z-10 flex items-center gap-0.5 rounded-[8px] bg-black p-1'>
      <label className="relative flex h-[40px] w-[80px] cursor-pointer flex-col items-center justify-center rounded-l-[2px] border-t border-gray-700 bg-gradient-to-b from-gray-800 to-gray-850 p-2 shadow-button transition-all duration-100 before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-full before:w-[103%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[8px] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-transparent before:transition-all before:duration-100 before:content-[''] has-[:checked]:border-t-0 has-[:checked]:bg-gradient-to-b has-[:checked]:from-gray-900 has-[:checked]:to-gray-900 has-[:checked]:shadow-none has-[:checked]:before:bg-gradient-to-b has-[:checked]:before:from-transparent has-[:checked]:before:via-blue-200/25 has-[:checked]:before:to-transparent">
        <input
          value='value-1'
          name='value-radio'
          id='value-1'
          type='radio'
          className='peer hidden'
          onClick={() => playSong()}
        />
        <span className='text-shadow-button text-[15px] font-extrabold uppercase leading-[12px] text-black transition-all duration-100 peer-checked:text-blue-200 peer-checked:text-glow'>
          Play
        </span>
      </label>

      <label className="relative flex h-[40px] w-[80px] cursor-pointer flex-col items-center justify-center border-t border-gray-700 bg-gradient-to-b from-gray-800 to-gray-850 p-2 shadow-button transition-all duration-100 before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-full before:w-[103%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[8px] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-transparent before:transition-all before:duration-100 before:content-[''] has-[:checked]:border-t-0 has-[:checked]:bg-gradient-to-b has-[:checked]:from-gray-900 has-[:checked]:to-gray-900 has-[:checked]:shadow-none has-[:checked]:before:bg-gradient-to-b has-[:checked]:before:from-transparent has-[:checked]:before:via-blue-200/25 has-[:checked]:before:to-transparent">
        <input
          value='value-1'
          name='value-radio'
          id='value-1'
          type='radio'
          className='peer hidden'
          onClick={() => pauseSong()}
        />
        <span className='text-shadow-button text-[15px] font-extrabold uppercase leading-[12px] text-black transition-all duration-100 peer-checked:text-blue-200 peer-checked:text-glow'>
          Pause
        </span>
      </label>

      <label className="relative flex h-[40px] w-[80px] cursor-pointer flex-col items-center justify-center rounded-r-[2px] border-t border-gray-700 bg-gradient-to-b from-gray-800 to-gray-850 p-2 shadow-button transition-all duration-100 before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-full before:w-[103%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[8px] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-transparent before:transition-all before:duration-100 before:content-[''] has-[:checked]:border-t-0 has-[:checked]:bg-gradient-to-b has-[:checked]:from-gray-900 has-[:checked]:to-gray-900 has-[:checked]:shadow-none has-[:checked]:before:bg-gradient-to-b has-[:checked]:before:from-transparent has-[:checked]:before:via-blue-200/25 has-[:checked]:before:to-transparent">
        <input
          value='value-1'
          name='value-radio'
          id='value-1'
          type='radio'
          className='peer hidden'
          onClick={() => resetSong()}
        />
        <span className='text-shadow-button text-[15px] font-extrabold uppercase leading-[12px] text-black transition-all duration-100 peer-checked:text-blue-200 peer-checked:text-glow'>
          Reset
        </span>
      </label>
      <audio ref={audioRef} src={song} preload='auto' />
    </div>
  );
};

export default MusicPlayer;
