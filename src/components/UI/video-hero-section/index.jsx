import React from "react";

const VideoHeroSection = () => {

    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
      }
    }, []);

  return (
    <div data-scroll data-scroll-speed="-5" id="page1">
     
      <div class="bottom-page1 absolute">
        <h1>
          Experience Real <br /> Estate Agility
        </h1>
        <div class="bottom-page1-inner">
          <h4>
            Create a digital twin of your existing building <br /> and release
            the potential of Web3.
          </h4>
          <button>LEARN MORE</button>
        </div>
      </div>
      <video
        src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        ref={videoRef}
      ></video>
    </div>
  );
};

export default VideoHeroSection;
