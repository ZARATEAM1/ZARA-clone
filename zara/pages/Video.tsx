import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <>
    <style jsx>
        {`
        .background-video-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }
          
          .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          `}
    </style>
    <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
      <source src="/videos/vd1.mp4" type="video/mp4" />
      </video>
    </div>
    </>
  );
};

export default BackgroundVideo;
