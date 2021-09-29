import { Component } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Animal } from "../../api/entities/Animal";
import "./AnimalCard.scss";

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
      <Grid className="animal-card" container={true} direction="column" justifyContent='space-between'>
        {/* Header section */}
        <Grid
          className={`animal-card__header ${animal.type.toLowerCase()}`}
          container={true}
          item={true}
          direction="row"
          justifyContent="flex-end"
        >
          <Grid item={true} xs={8}>
            <img className="animal-card__header-img" src={animal.photo} />
            <Typography variant='h6'>{animal.name}</Typography>
            <Typography>{animal.breed}</Typography>
          </Grid>
          <Grid
            item={true}
            xs={2}
            container={true}
            alignItems="flex-start"
            justifyContent="flex-end"
          >
            <img
              className="animal-card__header-logo"
              src={`./assets/${animal.type.toLowerCase()}-head.svg`}
            />
          </Grid>
        </Grid>

        {/* Bottom section */}
        <Grid container={true} item={true} xs={4} direction="row" justifySelf='flex-start'>
          {Object.keys(animal).map((attributeKey) => (
            <Grid item={true} xs={6}>
              <Typography variant='caption'>{attributeKey}</Typography>
              <Typography variant='body1'>{"sdas"}</Typography>
            </Grid>
          ))}
        </Grid>

        <Button variant='outlined'> Adopt me </Button>
      </Grid>
    );
  }
}

export default AnimalCard;
