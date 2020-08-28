import React, { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface IPropsPLayer {
  src: string
  stopPlay: boolean | null
}

export const Player = (props: IPropsPLayer): JSX.Element => {
  const playerRef = useRef<any>(null);

  if(playerRef.current !== null && props.stopPlay ) {
    playerRef.current.audio.current.pause();
  }

  return <AudioPlayer
    ref={playerRef}
    src={props.src}
    layout='horizontal-reverse'
    showJumpControls = {false}
    autoPlayAfterSrcChange= {false}
    customAdditionalControls={[]}
  />
};