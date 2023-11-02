import React from "react";
import HomeComponent from "./../components/HomeComponent";
import { Book1 } from "../assets";
import Author from "../components/Author";
import CancerBook from "../components/CancerBook";
import CancerBookView from "../components/CancerBookView";
import BookSell from "../components/BookSell";
import BookUser from "../components/BookUser";
import BookIndex2 from "./BookIndex2";

const CancerMedicineBook = () => {
  return (
    <div className="mt-14">
      <HomeComponent
        image={Book1}
        subtitle="Essentials Of Cancer Medicine In Primary Care"
      />
      <BookIndex2 />
      <CancerBookView />
      <CancerBook />
      <BookSell
        image={Book1}
        price={40}
        countDown={true}
        link={`https://zohosecurepay.eu/checkout/jndjcxzc-i6f6lxcfthwsf/ESSENTIALS-OF-CANCER-MEDICINE-IN-PRIMARY-CARE`}
      />
      <BookUser />
      <Author />
    </div>
  );
};

export default CancerMedicineBook;
