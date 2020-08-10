import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  textField: {
    textAlign: "center",
    marginTop: "4em",
    marginBottom: "4em",
    marginLeft: "4em",
  },
  search: {
    padding: "1em",
    "&:hover": {
      fontSize: "1.2em",
      background: "none",
    },
  },
  notchedOutline: {},
  focused: {
    "& $notchedOutline": {
      borderColor: "yellow",
    },
  },
});

const SearchBox = ({ handleChange, handleClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.textField}>
      <TextField
        type="search"
        placeholder="Enter city,state,country"
        variant="outlined"
        onKeyUp={handleChange}
      />
      <Button className={classes.search} onClick={handleClick}>
        <Icon className="fas fa-search" />
      </Button>
    </div>
  );
};

export default SearchBox;
