import React from "react";

const DemoQuiz = () => {
  return (
    <div className="h-[80vh] mt-[16%] w-[100%]">
      <iframe
        name="proprofs"
        id="proprofs"
        width="100%"
        height="100%"
        src="https://www.proprofs.com/quiz-school/ugc/story.php?title=demo-rcgp-akt-mcqs&id=3766335&ew=430"
        allow="camera *;microphone *;fullscreen;"
      ></iframe>
    </div>
  );
};

export default DemoQuiz;
