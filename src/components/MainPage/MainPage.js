import React, { useState } from "react";
import Counter from "../Counter";
import Message from "../Message/Message";
import Theme from "../Theme/Theme";
import "./MainPage.css";

export default function MainPage() {
  const [count, setState] = useState(0);

  return (
    <>
      <div className="BG p-2">
        <div className="table-dark main-title">
          <h1>Main Page</h1>
        </div>
        <Message message="Welcome!" desc="How is your day?" />
        {/* დარწმუნებული არ ვარ როგორ ვქნა ისე რომ ერთდროულად მოხდეს ამ ორის აფდეითი */}
        <Counter onChange={setState} />
        <Theme counterValue={count} />
      </div>
    </>
  );
}
