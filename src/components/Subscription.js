import React from "react";
import PlanCard from "./PlanCard";
import { useStateContext } from "../context/StateContext";

const Subscription = () => {
  const {currentPlan, setCurrentPlan} = useStateContext();
  return (
    <div className="flex flex-col items-center bg-[#2e648b] p-1">
      <div className="mb-12 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-white">Pricing</h1>
        <p className="text-lg text-white">
          Unlocking Primary Care Education: Making it Accessible and Affordable
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-8 gap-10 xl:flex-row">
        <PlanCard
          color="#9DC08B"
          name="Free 1 week trial plan £0.00"
          price={0.0}
          features={[
            "Access the entire website",
            "See all the charts",
            "All Webinars",
            "Practice AKT MCQs",
          ]}
          onclick={() => setCurrentPlan("Free")}
          btnText="Start Free Trail"
          notRequired={[]}
        />
        <PlanCard
          //   color="#F9ACB3"
          color="#BC9C69"
          name="Monthly plan £4.99/month"
          price={4.99}
          features={[
            "See all charts",
            "All Webinars",
            "Cancel any time",
            "Members discount on books",
          ]}
          onclick={() => setCurrentPlan("bronze")}
          notRequired={["AKT MCQs"]}
          btnText="Start Bronze Plan"
        />
        <PlanCard
          color="#D3D3D3"
          //   color="#FCD033"
          name="AKT revision silver plan £9.99/month"
          price={9.99}
          features={[
            "See all charts",
            "All Webinars",
            "Cancel any time",
            "Members discount on books",
            "Practice AKT MCQs",
          ]}
          onclick={() => setCurrentPlan("silver")}
          btnText="Start Silver Plan"
          notRequired={[]}
        />
        <PlanCard
          //   color="#F1DDC4"
          color="#FFD700"
          name="AKT Super Bundle Gold £99.99"
          price={99.99}
          features={[
            "12 month access",
            "All Webinars",
            "All charts",
            "AKT MCQs",
            "Visual guidebook print copy",
          ]}
          onclick={() => setCurrentPlan("gold")}
          btnText="Start Gold Plan"
          notRequired={[]}
        />
      </div>
    </div>
  );
};

export default Subscription;
