import React, { useState, useEffect } from "react";

import BookView from "./../components/BookView";
import Author from "../components/Author";
import VisualBook from "../components/VisualBook";
import BookSell from "../components/BookSell";
import BookUser from "../components/BookUser";
import BookIndex from "../components/BookIndex";
import AboutBook from "../components/AboutBook";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import BookComponent from "../components/BookComponent";
import API from "../api";
import Loading from "../components/Loading";

const VisualGuideBook = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const id = window.location.href.split("book/")[1];
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}book/${id}`);

      const dat = await response.json();

      if (dat.status === "success") {
        console.log(dat.data.points);
        setData(dat.data);
        setLoading(false);
        // console.log(dat?.data);
      } else {
        toast.error(dat.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log(data.points);

  return (
    <div className="mt-32">
      <Toaster/>
      {loading ? (
        <div className="h-screen  flex items-center justify-center">
          <Loading color="#0058AB" />
        </div>
      ) : (
        <div>
          <BookComponent
            image={data.image}
            title=""
            subtitle={data.name}
            image1={data.image}
          />
          <AboutBook image={data.image} desc={data ? data.description : ""} />
          <BookView
            price={data.price}
            link={data.paymentLink}
            video={data.video}
            
          />
          <BookIndex
            BookIndex1={data.indexImage ? data.indexImage[0] : ""}
            BookIndex2={data.indexImage ? data.indexImage[1] : ""}
            // BookIndex2={data.indexImage[1]}
          />
          <VisualBook
            title={data.title}
            link={data.paymentLink}
            price={data.price}
            image={data.image}
            VisualTopic={data.points ? data.points : []}
          />
          <BookSell
            link={data.paymentLink}
            price={data.price}
            image={data.image}
          />
          <BookUser />
          <Author />
        </div>
      )}
    </div>
  );
};

export default VisualGuideBook;
