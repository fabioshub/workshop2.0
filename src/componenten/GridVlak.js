import { Grid } from "@material-ui/core";
import React from "react";

/**
 * @prop standaardBreedte - nummer {1 tot 12}
 * @prop breedteKleinBeeld - nummer {1 tot 12}
 * @prop breedteMiddelGrootBeeld - nummer {1 tot 12}
 * @prop hoogte - px
 * @prop padding - px
 * @prop achtergrondKleur - rgb, hex of Engelse naam
 *
 * @description Hiermee roep je een grid vlak op. In een grid vlak kan je content stoppen zoals tekst.
 * Een gridvlak heeft een maximale breedte in eenheden van 1 tot 12.
 * Dit betekent dat twee gridvlakken naast elkaar met een breedte van 12 onder elkaar komen,
 * en twee gridvlakken met een breedte van 6 naast elkaar.
 * Dit omdat 12 de maximale breedte is en 6 twee keer 12 past, dus passen ze naast elkaar.
 * 3 gridvlakken met een breedte van 4 passen dus ook naast elkaar, enz.
 *
 *
 * @prop xAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop yAsUitlijnen - tekstwaarde {begin, midden, eind}
 * @prop wisselAssen - true of false
 *
 * @description Met de xAsUitlijnen en yAsUitlijnen kun je de content die je in een gridvlak stopt centreren.
 */
export default function GridVlak(props) {
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
    <Grid
      item
      xs={props.breedteKleinBeeld || props.standaardBreedte || 6}
      md={props.breedteMiddelGrootBeeld || props.standaardBreedte || 6}
      style={{
        display: "flex",
        flexDirection: wisselAssen || "row",
        justifyContent: xAsUitlijnen,
        alignItems: yAsUitlijnen,
        padding: props.padding,
        backgroundColor: props.achtergrondKleur,
        height: props.hoogte
      }}
    >
      {props.children}
    </Grid>
  );
}
