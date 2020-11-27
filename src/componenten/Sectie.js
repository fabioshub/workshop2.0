import React from "react";

/**
 * @prop margin - px
 * @prop xAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop yAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop wisselAssen - true of false
 * @description hiermee roep je een sectie op. Het is handig om je website op te delen in secties.
 */
export default function Sectie(props) {
  let xAsUitlijnen;
  let yAsUitlijnen;
  let wisselAssen;

  if (props.wisselAssen === true) wisselAssen = "column";
  if (props.xAsUitlijnen === "begin") xAsUitlijnen = "flex-start";
  if (props.xAsUitlijnen === "midden") xAsUitlijnen = "center";
  if (props.xAsUitlijnen === "eind") xAsUitlijnen = "flex-end";
  if (props.yAsUitlijnen === "begin") yAsUitlijnen = "flex-start";
  if (props.yAsUitlijnen === "midden") yAsUitlijnen = "center";
  if (props.yAsUitlijnen === "eind") yAsUitlijnen = "flex-end";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: wisselAssen || "row",
        justifyContent: xAsUitlijnen,
        alignItems: yAsUitlijnen,
        margin: props.margin || "50px 0",
        width: "100%"
      }}
    >
      {props.children}
    </div>
  );
}
