import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { Animal } from "../../api/entities/Animal";

interface AnimalCardProps {
  animal: Animal;
}

interface AnimalCardState {}

class AnimalCard extends Component<AnimalCardProps, AnimalCardState> {
  constructor(props: AnimalCardProps) {
    super(props);
    //   this.state = {  };
  }
  render() {
    const { animal } = this.props;

    return (
      <Grid container={true} direction="column">
        {/*  */}
        <Grid container={true} item={true} direction="row">
          {/*  */}
          <Grid item={true} xs={4}>
            <img />
            <Typography>title</Typography>
            <Typography>subtitle</Typography>
          </Grid>
        </Grid>

        {/*  */}
        <Grid item={true} xs={4} direction="row">
          {Object.keys(animal).map((attributeKey) => (
            <Grid xs={6}>
                <Typography>{attributeKey}</Typography>
                <Typography>hello</Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container={true} item={true}></Grid>
      </Grid>

    );
  }
}

export default AnimalCard;
