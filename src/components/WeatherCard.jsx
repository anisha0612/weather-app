import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import cloudy from "../images/cloudy.svg";
import sunny from "../images/day.svg";
import rainy from "../images/rainy.svg";
import snowy from "../images/snowy.svg";
import thunder from "../images/thunder.svg";
import weather from "../images/weather.svg";

const useStyles = makeStyles({
  card: {
    padding: "1rem",
    width: "50%",
    height: "auto",
    margin: "0 auto",
    boxShadow: "10px 10px 11px 1px rgba(194,190,194,0.9)",
  },
  center: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
  },
  padding: {
    padding: "1em 0",
  },
  desc: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  paddingRt: {
    paddingRight: "1em",
  },
});

const iconDisplay = (status) => {
  switch (status) {
    case "Clouds":
      return cloudy;
    case "Clear":
      return sunny;
    case "rains":
      return rainy;
    case "Thunder":
      return thunder;
    case "Snow":
      return snowy;
    default:
      return weather;
  }
};

const WeatherCard = (props) => {
  const classes = useStyles();
  if (props.displayCard) {
    if (props.weather.currTemp) {
      return (
        <div className={classes.center}>
          <Card className={classes.card} variant="outlined">
            <CardHeader
              className={classes.title}
              title={props.city}
              subheader={props.country}
            />
            <CardContent>
              <Typography>Temp : {props.weather.currTemp}&#8457;</Typography>
              <img src={iconDisplay(props.weather.main)} alt="icon" />
              <Grid container>
                <Grid className={classes.padding} item xs={12}>
                  {props.weather.main}
                </Grid>
                <Grid className={classes.desc} item xs={12}>
                  {props.weather.desc}
                </Grid>
                <Grid className={classes.padding} item xs={12} sm={6}>
                  <Icon className="fas fa-temperature-low" />{" "}
                  {props.weather.minTemp}&#8457;
                </Grid>
                <Grid className={classes.padding} item xs={12} sm={6}>
                  <Icon className="fas fa-temperature-high" />{" "}
                  {props.weather.maxTemp}&#8457;
                </Grid>
                <Grid className={classes.padding} item xs={12} sm={6}>
                  <Icon className="fas fa-wind" /> {props.weather.wind.deg}
                  &#176;
                </Grid>
                <Grid className={classes.padding} item xs={12} sm={6}>
                  <Icon className="fas fa-wind" /> {props.weather.wind.speed}m/s
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      );
    } else {
      return (
        <div>
          <Card className={classes.card}>
            <Typography>
              {" "}
              City Entered is Incorrect. Please check and try again!{" "}
            </Typography>
          </Card>
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};

export default WeatherCard;
