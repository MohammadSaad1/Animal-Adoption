import { Component } from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
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
          <Grid
            className='animal-card__bottom-attribute'
            item={true}
            xs={6}
            container={true}
            direction='column'
            justifyItems='center'
            alignItems='flex-start'>
            <Typography className='animal-card__bottom-attribute-text' variant='inherit'>
              {attributeKey.toUpperCase()}
            </Typography>
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
            <Box className="animal-card__header-text-container">
              <Typography className="animal-card__header-text" variant='h6'>
                {animal.name}
              </Typography>
            </Box>
            <Typography className="animal-card__header-text" variant='subtitle2'>
              {animal.breed}
            </Typography>
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
        <Grid className='animal-card__bottom' container={true} item={true} direction="row" justifySelf='flex-start'>
          {getMappedAnimalAttributes()}
        </Grid>
        
        <button
          className='animal-card-button'
          disabled={animal.status !== 'Booked'}
          onClick={handleAdoption(animal.id)}>
          Adopt me
        </button>
      </Grid >
    );
  }
}

export default AnimalCard;
