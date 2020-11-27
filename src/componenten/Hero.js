import React from "react";

/**
 * @prop margin - px
 * @prop padding - px
 * @prop hoogte - hoogte
 * @prop randRadius - randRadius
 * @prop achtergrondKleur - rgb, hex of Engelse naam
 * @prop achtergrondAfbeelding - url
 * @prop xAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop yAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop wisselAssen - true of false
 *
 * @description hiermee roep je een hero op. Dit is een openings stuk content.
 * Met de xAsUitlijnen en yAsUitlijnen kun je de content die je in een gridvlak stopt centreren.
 */
export default function Tekst(props) {
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
        margin: props.margin,
        padding: props.padding,
        borderRadius: props.randRadius,
        height: props.hoogte,
        backgroundColor: props.achtergrondKleur,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize: "cover",
        backgroundImage: props.achtergrondAfbeelding
          ? `url(${props.achtergrondAfbeelding})`
          : undefined
      }}
    >
      {props.children}
    </div>
  );
}
