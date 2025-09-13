import React from "react";
import ReactDOM from "react-dom";

const VideoPopup = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
            <div className=" bg-primary rounded-lg shadow-lg relative w-[90%] max-w-3xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2"
              >
                <img src="/menu-close-icon.png" />
              </button>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/tp0p__autn0?si=OL0xaACQiZS_An1g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default VideoPopup;
