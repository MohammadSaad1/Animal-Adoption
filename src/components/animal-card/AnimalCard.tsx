import { Component } from "react";
import { Button, Grid, Typography } from "@mui/material";
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
            <img src={animal.photo} />
            <Typography>title</Typography>
            <Typography>subtitle</Typography>
          </Grid>
        </Grid>

        {/*  */}
        <Grid item={true} xs={4} direction="row">
          {Object.keys(animal).map((attributeKey) => (
            <Grid item={true} xs={6} alignContent="flex-start">
              <Typography>{attributeKey}</Typography>
              <Typography>{'sdas'}</Typography>
            </Grid>
          ))}
        </Grid>

        <Button> Adopt me </Button>
      </Grid>
    );
  }
}

export default AnimalCard;
