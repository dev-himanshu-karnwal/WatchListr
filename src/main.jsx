import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["too bad", "bad", "average", "good", "excellent"]}
    />
    <StarRating maxRating={10} color={"green"} size={50} defaultRating={5} /> */}
    <App />
  </React.StrictMode>
);
