import { Grid } from "@material-ui/core";
import React from "react";

/**
 * @prop margin - px
 * @prop spacing - nummer
 * @description hiermee roep je een grid op. Hierin moeten gridvlakken
 */
export default function Tekst(props) {
  return (
    <Grid
      container
      spacing={props.spacing || 2}
      style={{
        margin: props.margin
      }}
    >
      {props.children}
    </Grid>
  );
}
