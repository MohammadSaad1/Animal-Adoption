import {
  Grid,
  Typography,
  Box,
  Toolbar,
  Tab,
  Tabs,
  AppBar as AppBarComponent,
} from "@mui/material";
import { Component } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./AppBar.scss";

interface AppBarProps extends RouteComponentProps {}

interface AppBarState {}

class AppBar extends Component<AppBarProps, AppBarState> {
  constructor(props: AppBarProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid className="app-bar">
        <AppBarComponent className="app-bar__component" position="relative">
          <Toolbar variant="dense">
            <Typography>IMPEROZOO</Typography>
            <Tabs value={this.props.location.pathname}>
              <Link to="/">
                <Tab color="white" label="Adopt an animal" value={0} />
              </Link>
              <Link to="/adminstration">
                <Tab
                  color="white"
                  label="Adminstration"
                  value="/adminstration"
                />
              </Link>
            </Tabs>
          </Toolbar>
        </AppBarComponent>
        <Grid className="app-bar__children">{this.props.children}</Grid>
      </Grid>
    );
  }
}

export default withRouter(AppBar);
