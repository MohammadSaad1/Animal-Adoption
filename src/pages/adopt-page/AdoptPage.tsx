import { Grid } from "@mui/material";
import { Component } from "react";
import { Animal } from "../../api/entities/Animal";
import { getAnimals } from "../../api/services/AnimalService";
import AnimalCard from "../../components/animal-card/AnimalCard";
import './AdoptPage.scss'

interface AdoptPageProps {}

interface AdoptPageState {
  animals: Animal[];
}

class AdoptPage extends Component<AdoptPageProps, AdoptPageState> {
  constructor(props: AdoptPageProps) {
    super(props);
    this.state = {
      animals: [],
    };
  }

  componentDidMount() {
    getAnimals().then((response) => {
      this.setState({ animals: response.data });
    });
  }

  render() {
    return (
      <Grid>
      <Grid className='adopt-page' container={true} direction="row" spacing={4}>
        {this.state.animals.map((animal) => (
          <Grid item={true} xs={12} sm={6} md={4}>
            <AnimalCard animal={animal} />
          </Grid>
        ))}
      </Grid>
      </Grid>
    );
  }
}

export default AdoptPage;
