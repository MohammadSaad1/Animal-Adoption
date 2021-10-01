import { Grid } from "@mui/material";
import { Component } from "react";
import { Animal } from "../../api/entities/Animal";
import { getAnimals } from "../../api/axios-functions/AnimalAxiosFunctions";
import { Operator } from "../../api/support/applyOptions";
import AnimalCard from "../../components/animal-card/AnimalCard";
import CenteredSpinner from "../../components/centered-spinner/CenteredSpinner";
import './AdoptPage.scss'

interface AdoptPageProps { }

interface AdoptPageState {
  animals: Animal[];
  isLoading: boolean
}

const filters = [{ key: 'status', value: 'Adopted', operator: Operator.notEq }]

class AdoptPage extends Component<AdoptPageProps, AdoptPageState> {
  constructor(props: AdoptPageProps) {
    super(props);
    this.state = {
      animals: [],
      isLoading: true
    };
  }

  componentDidMount() {
    getAnimals({ filters })
      .then((response) => {
        this.setState({ animals: response.data });
      })
      .finally(() => {
        this.setState({ isLoading: false })
      });
  }

  render() {
    const refetchAnimals = () => getAnimals({ filters }).then(response => this.setState({ animals: response.data }))

    return (
      <Grid container={true} justifyContent='center' alignContent='center'>
        <Grid className='adopt-page' container={true} direction="row" spacing={4}>
          {this.state.isLoading ? <CenteredSpinner /> : (
            this.state.animals.map((animal) => (
              <Grid item={true} xs={12} sm={6} md={4}>
                <AnimalCard animal={animal} refetch={refetchAnimals} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    );
  }
}

export default AdoptPage;
