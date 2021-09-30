import { Component } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Animal } from "../../api/entities/Animal";
import "./AnimalCard.scss";
import { partialUpdateAnimal } from "../../api/services/AnimalService";

interface AnimalCardProps {
  animal: Animal;
}

interface AnimalCardState { }

const defaultAttributes = ['sex', 'status', 'age', 'note']
const specificAttributes: { [key: string]: string[] } = {
  cat: [...defaultAttributes, 'meowsPerDay', 'fluffynessLevel'],
  dog: [...defaultAttributes, 'tailLength', 'goodBoy']
}

const handleAdoption = (id: number) => () => {
  partialUpdateAnimal(id, { status: 'Adopted' })
}

class AnimalCard extends Component<AnimalCardProps, AnimalCardState> {
  render() {
    const { animal } = this.props;

    const getMappedAnimalAttributes = () => (
      specificAttributes[animal.type.toLocaleLowerCase()].map((attributeKey) => {
        const currentAttributes = animal[attributeKey as keyof typeof animal];

        return (
          <Grid item={true} xs={6}>
            <Typography variant='caption'>{attributeKey}</Typography>
            <Typography variant='body1'>{currentAttributes}</Typography>
          </Grid>
        )
      })
    )

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
        <Grid container={true} item={true} direction="row" justifySelf='flex-start'>
          {getMappedAnimalAttributes()}
        </Grid>

        <Button disabled={animal.status !== 'Booked'} variant='outlined' onClick={handleAdoption(animal.id)}>
          Adopt me
        </Button>
      </Grid>
    );
  }
}

export default AnimalCard;
