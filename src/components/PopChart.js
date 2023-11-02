import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PopChart = ({ visible, onClose, image, name }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-[1000]  overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm flex flex-row justify-center items-center"
    >
      <div className="bg-white w-[100%] mt-auto  object-fill p-8 rounded-xl flex flex-col ">
        <button
          className="bg-[--main-color] h-12 w-12 relative left-[97%] mb-4"
          onClick={onClose}
        >
        <FontAwesomeIcon icon={faClose} className="text-4xl text-white" />
        </button>
        <TransformWrapper
          initialScale={1}
          initialPositionX={1}
          initialPositionY={1}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment className="">
              <TransformComponent>
                <img
                  src={image}
                  alt={name}
                  className="w-screen h-full  items-center object-contain"
                  loading
                />
              </TransformComponent>
              <div className="tools flex items-center justify-center mt-4">
                <button
                  className="mx-2 bg-[--main-color] h-12 text-xl w-24 text-white "
                  onClick={() => zoomIn()}
                >
                  Zoom In
                </button>
                <button
                  className="mx-2 bg-[--main-color] h-12 text-xl w-24 text-white "
                  onClick={() => zoomOut()}
                >
                  Zoom Out
                </button>
                <button
                  className="mx-2 bg-[--main-color] h-12 text-xl w-24 text-white "
                  onClick={() => resetTransform()}
                >
                  Normal
                </button>
                <button
                  className="mx-2 bg-[--main-color] h-12 text-xl w-24 text-white"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default PopChart;
