import React, { useEffect } from "react";
import Client from "./../components/Client";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import Specialist from "../components/Specialist";
import Feature from "../components/Feature/Feature";
import Subscription from "../components/Subscription";
import JoinFeature from "../components/JoinFeature";
import Countdown from "../components/Countdown";
import Chart from "../components/Chart";
import Stats from "../components/Stats";
import Book from "../components/Book";
import AktDemo from "../components/AktDemo";
import { useStateContext } from "../context/StateContext";
import NotificationPopup from "../components/Notification";

const Home = () => {
  const { show, setShow } = useStateContext();

  useEffect(() => {
    // Check if the notification was shown before and not cancelled
    const lastNotificationTime = localStorage.getItem("lastNotificationTime");
    const notificationCancelled = localStorage.getItem("notificationCancelled");
    const currentTime = new Date().getTime();

    if (
      !notificationCancelled &&
      (!lastNotificationTime ||
        currentTime - lastNotificationTime > 24 * 60 * 60 * 1000)
    ) {
      setShow(true);
    }
  }, []);

  return (
    <div className="mt-14">
    {show && <NotificationPopup />}
      <Hero />
      <Stats />
      <Feature />
      <JoinFeature />
      <Book />
      <Chart />
      <AktDemo />
      <Countdown />
      <Subscription />
      <Specialist />
      <Faq />
      <Client />
    </div>
  );
};

export default Home;
