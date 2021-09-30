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

interface AppBarProps extends RouteComponentProps { }

class AppBar extends Component<AppBarProps> {
  render() {
    return (
      <Grid className="app-bar">
        <AppBarComponent className="app-bar__component" position="relative">
          <Toolbar variant="dense">
            <Box className='app-bar__component-title'>
              <Typography variant='inherit'>
                IMPEROZOO
              </Typography>
            </Box>
            <Tabs value={this.props.location.pathname}>
              <Tab
                className='app-bar__component-tab'
                component={Link}
                to='/'
                value="/"
                label="Adopt a pet"
              />
              <Tab
                className='app-bar__component-tab'
                component={Link}
                label="Adminstration"
                value="/adminstration"
                to="/adminstration"
              />
            </Tabs>
          </Toolbar>
        </AppBarComponent>
        <Grid className="app-bar__children">{this.props.children}</Grid>
      </Grid>
    );
  }
}

export default withRouter(AppBar);
