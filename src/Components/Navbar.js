import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import FormComponent from "./FormComponent";
import Typicode from "./Typicode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Form" value="1" />
            <Tab label="Typicode" value="2" />
            {/* <Tab label="Item Three" value="3" /> */}
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <FormComponent></FormComponent>
        </TabPanel>
        <TabPanel value="2">
          <Typicode></Typicode>
        </TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </div>
  );
}

export default Navbar;
