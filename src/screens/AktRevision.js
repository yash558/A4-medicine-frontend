import React from "react";
import Quiz from "../components/Quiz";
import HomeComponent from "./../components/HomeComponent";

const AktRevision = () => {
  return (
    <div className="mt-36">
      <HomeComponent
        title="PASS THE MRCGP AKT OCTOBER 23 EXAM"
        subtitle={`Please click on the subject topics below, to gain access to a wide range of RCGP AKT practice questions.`}
        bottomTitle="Practice 1500+ CKS/NICE-based RCGP AKT MCQs"
        countDown={true}
      />
      <Quiz />
    </div>
  );
};

export default AktRevision;
