import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

/**
 *
 * @prop tekstKleur - rgb, {hex of Engelse naam}
 * @prop achtergrondKleur - rgb, {hex of Engelse naam}
 * @prop tekst - engelse tekstwaarde {star, add, etc.}
 * @prop link - url. Zonder link wordt er ook geen link knop weergegeven
 * @prop tekstGrootte - px
 * @prop padding - px
 * @prop margin - px
 * @description hiermee roep je een knop op.
 *
 */
export default function Knop(props) {
  return (
    <Button
      href={props.link}
      style={{
        fontSize: props.tekstGrootte,
        padding: props.padding,
        margin: props.margin,
        backgroundColor: props.achtergrondKleur,
        color: props.tekstKleur
      }}
    >
      {props.children}
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

/**
 *
 * @prop breedte - nummer {px, %}
 * @prop titel - engelse tekstwaarde {star, add, etc.}
 * @prop url - url. Foto van de knop
 * @description hiermee roep je een knop op.
 *
 */
export function FotoKnop(props) {
  const classes = useStyles();

  return (
    <ButtonBase
      focusRipple
      href={props.link}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: props.breedte || '100%'
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${props.url})`
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {props.titel}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  );
}
