import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 80,
    paddingTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

/**
 * @prop tekstKleur - rgb, {hex of Engelse naam}
 * @prop achtergrondKleur - rgb, {hex of Engelse naam}
 * @prop elevatie - nummer {0,1,2,3}
 * @prop icoon - Icoon
 * @prop tekst
 * @prop link - href. Zonder link wordt er ook geen link knop weergegeven
 * @description hiermee roep je een kaart op.
 *
 */
export default function MediaCard(props) {
  const { icoon: Icon } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={props.elevatie}>
      <CardActionArea>
        {Icon && <div className={classes.media}>{Icon}</div>}
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{ fontSize: "17px", fontWeight: "bold" }}
            component="h4"
          >
            {props.titel}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textAlign: "center", fontSize: "13px" }}
          >
            {props.tekst}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.link && (
          <Button size="small" color="primary" href={props.link}>
            Link
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
