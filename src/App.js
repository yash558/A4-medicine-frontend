import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Medical from "./screens/Medical";
import Signup from "./components/Signup";
import ChartDetail from "./components/ChartDetail";
import AktRevision from "./screens/AktRevision";
import ChartSubtopic from "./components/ChartSubtopic";
import QuizDetail from "./components/QuizDetail";
import Test from "./components/Test";
import UserProfile from "./screens/UserProfile";
import SubscriptionPlan from "./components/SubscriptionPlan";
import ChartMainDetail from "./components/ChartMainDetail";
import Books from "./screens/Books";
import CancerMedicineBook from "./screens/CancerMedicineBook";
import VisualGuideBook from "./screens/VisualGuideBook";

import DemoQuiz from "./components/Demoquiz";
import WebinarView from "./components/WebinarView";
import Panelists from "./screens/Panelists";
import PanelistCard from "./components/PanelistCard";
import SubscriptionTaken from "./components/Subscriptiontaken";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import CustomerSupportPage from "./screens/CustomerSupportPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SearchPage from "./components/SearchPage";
import ErrorPage from "./components/ErrorPage";
import { useEffect } from "react";
import PastWebinars from "./screens/PastWebinars";

function App() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="">
      <GoToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/chart" element={<Medical />} />
        <Route path="/demoquiz" element={<DemoQuiz />} />
        <Route path="/cancer-medicine-book" element={<CancerMedicineBook />} />
        <Route path="/book/:id" element={<VisualGuideBook />} />
        <Route
          path="/books"
          element={token ? <Books /> : <SubscriptionTaken />}
        />
        <Route path="/quiz" element={<AktRevision />} />
        <Route path="/pannellist" element={<Panelists />} />
        <Route path="/pannellist/:id" element={<PanelistCard />} />
        <Route path="/webinar/past" element={<PastWebinars />} />
        <Route
          path="/webinar/:id"
          element={token ? <WebinarView /> : <SubscriptionTaken />}
        />
        <Route path="/subscription" element={<SubscriptionTaken />} />
        <Route path="/section/latest/:id" element={<ChartMainDetail />} />
        <Route path="/chart/:id" element={<ChartSubtopic />} />
        <Route
          path="/quiz/:id"
          element={token ? <QuizDetail /> : <SubscriptionTaken />}
        />
        <Route
          path="/chartMain/:id"
          element={token ? <ChartMainDetail /> : <SubscriptionTaken />}
        />
        <Route
          path="/chart/details/:id"
          element={token ? <ChartDetail /> : <SubscriptionTaken />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route
          path="/userprofile"
          element={token ? <UserProfile /> : <Login />}
        />
        <Route
          path="/subscriptionPlan"
          element={token ? <SubscriptionPlan /> : <Login />}
        />
        <Route path="/customersupport" element={<CustomerSupportPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
