import React from "react";
import HomeComponent from "../components/HomeComponent";
import { bgBook } from "../assets";
import BookView from "../components/BookView";
import Book from "../components/Book";
const Books = () => {
  return (
    <div>
      <HomeComponent
        image={bgBook}
        title="A4 Medicine = 1 topic, 1 page"
        subtitle="Visual Guidebook Of Basic And Essential
General Practice & Family Medicine!"
      />
      <BookView />
      <Book/>
    </div>
  );
};

export default Books;
