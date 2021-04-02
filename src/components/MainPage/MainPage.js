import React from "react";
import Counter from "../Counter";
import Message from "../Message/Message";
import Theme from "../Theme/Theme";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div className="BG p-2">
        <div className="table-dark main-title">
          <h1>Main Page</h1>
        </div>
        <Message message="Welcome!" desc="How is your day?" />
        <Counter />
        <Theme />
      </div>
    </>
  );
}
