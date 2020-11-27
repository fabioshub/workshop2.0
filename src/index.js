import { Container } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Workshop from "./Workshop";
import "./componenten/setup/defaultStyles.css";

// var ajax = new XMLHttpRequest();
// ajax.open("GET", "workshop.html", false);
// ajax.send();
// document.body.innerHTML += ajax.responseText;
// const Code = eval(ajax.responseText);

ReactDOM.render(
  <Container>
    <Workshop />
  </Container>,
  document.getElementById("root")
);
