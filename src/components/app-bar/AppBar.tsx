import {
  Grid,
  Typography,
  Box,
  Toolbar,
  AppBar as AppBarComponent,
} from "@mui/material";
import * as React from "react";

interface AppBarProps {}

interface AppBarState {}

class AppBar extends React.Component<AppBarProps, AppBarState> {
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
          </Toolbar>
        </AppBarComponent>
        <Box mt={2}>{this.props.children}</Box>
      </Grid>
    );
  }
}

export default AppBar;
