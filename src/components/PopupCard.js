import React from "react";

const PopupCard = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-[1000] overflow-y bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-8 gap-2 rounded-xl w-[80%] md:w-[50%]  flex flex-row">
        <h5 className="text-[10px] md:text-xl text-[--main-color] text-justify font-sans">
          - At A4Medicine, we are committed to empowering primary care
          clinicians on their path to exam success and safe practice. We
          understand the challenges that GP trainees face while preparing for
          the RCGP AKT exam, and we're here to help you overcome them. <br />{" "}
          <br />
          What sets A4Medicine apart is our comprehensive study material,
          carefully designed to simplify complex concepts. We offer a unique
          blend of charts, webinars, and resources that cater specifically to
          the theory part of the exam. Our charts provide visually appealing and
          concise summaries, making it easier for candidates to grasp essential
          information effectively. <br /> <br />
          In addition to our study material, we provide an extensive collection
          of MCQs tailored to the RCGP AKT exam format. By practicing these MCQs
          after studying the relevant material on our website, you will develop
          a solid foundation of knowledge and be well-prepared to tackle the
          exam confidently. Our MCQs cover a wide range of topics and are
          designed to enhance your understanding, critical thinking skills, and
          exam technique. <br /> <br />
          Prepare with us and unlock your full potential on the path to exam
          success and safe practice.
        </h5>
        <button className="text-xl md:text-2xl font-bold" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
