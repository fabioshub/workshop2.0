import React from "react";

/**
 *
 * @prop achtergrondKleur - rgb, hex of Engelse naam
 * @prop padding - px
 * @prop randRadius - randRadius
 * @prop margin - px
 * @prop hoogte - px
 * @prop breedte - px
 * @prop xAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop yAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop wisselAssen - true of false
 *
 * @description hiermee roep je een navigatiebalk op.
 * Gebruik 'achtergrondkleur' om de achtergrond te veranderen. Voorbeeld achtergrondKleur='wit'
 *
 */
export default function Footer(props) {
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
        width: props.breedte || "100%",
        height: props.hoogte,
        padding: props.padding,
        margin: props.margin,
        backgroundColor: props.achtergrondKleur,
        borderRadius: props.randRadius
      }}
    >
      {props.children}
    </div>
  );
}
