import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/mainpage.css";
// import "react-slideshow-image/dist/styles.css";
import "react-multi-carousel/lib/styles.css";

import WebFont from 'webfontloader';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

WebFont.load({
  google: {
    families: ['Josefin Sans:300,400,700', 'sans-serif']
  }
});
WebFont.load({
  google: {
    families: ['Libre Barcode 39 Text:300,400,700', 'cursive']
  }
});
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
