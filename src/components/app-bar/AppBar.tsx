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

interface AppBarProps extends RouteComponentProps {}

interface AppBarState {}

class AppBar extends Component<AppBarProps, AppBarState> {
  constructor(props: AppBarProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid>
        <AppBarComponent position="relative">
          <Toolbar variant="dense">
            <Typography>IMPEROZOO</Typography>
            <Tabs value={this.props.location.pathname}>
              <Link to='/'>
              <Tab color="white" label="Adopt an animal" value="/" />
              </Link>
              <Link to='/adminstration'>
              <Tab color="white" label="Adminstration" value="/adminstration" />
              </Link>
            </Tabs>
          </Toolbar>
        </AppBarComponent>
        <Box mt={2}>{this.props.children}</Box>
      </Grid>
    );
  }
}

export default withRouter(AppBar);
