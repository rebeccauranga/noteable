import React from "react";
import ReactDOM from "react-dom";

import App from "@client/components/app";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
