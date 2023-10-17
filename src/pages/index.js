import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

const home = () => {
  useEffect(() => {
    // Load the YouTube IFrame Player API code asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Ensure the API is loaded before creating the player
    window.onYouTubeIframeAPIReady = createYouTubePlayer;

    // Cleanup when the component unmounts
    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  // This function creates a YouTube player when the API code downloads
  const createYouTubePlayer = () => {
    new window.YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  // The API will call this function when the video player is ready
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  // The API calls this function when the player's state changes
  // The function indicates that when playing a video (state=1),
  // the player should play for six seconds and then stop.
  let done = false;
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  };

  const stopVideo = (player) => {
    player.target.stopVideo();
  };

  return (
    <div>
      {/* The <iframe> (and video player) will replace this <div> tag. */}
      <div id="player"></div>
      {/* Use the react-youtube component */}
      {/* Note: This component will be replaced by the YouTube IFrame API */}
      <YouTube videoId="M7lc1UVf-VE" opts={{ height: '390', width: '640' }} />
    </div>
  );
};

export default home;
