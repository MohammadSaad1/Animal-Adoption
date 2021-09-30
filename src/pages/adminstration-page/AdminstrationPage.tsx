import { Grid } from '@mui/material';
import { Component } from 'react';
import { Animal } from '../../api/entities/Animal';
import { getAnimals } from '../../api/axios-functions/AnimalAxiosFunctions';
import AnimalTabel from '../../components/animal-tabel/AnimalTabel';

interface AdminstrationPageProps { }

interface AdminstrationPageState {
    animals: Animal[],
    isLoading: boolean
}

class AdminstrationPage extends Component<AdminstrationPageProps, AdminstrationPageState> {
    constructor(props: AdminstrationPageProps) {
        super(props);
        this.state = {
            animals: [],
            isLoading: true
        };
    }

    componentDidMount() {
        getAnimals()
            .then((response) => {
                this.setState({ animals: response.data });
            })
            .finally(() => {
                this.setState({ isLoading: false })
            });
    }

    render() {
        return (
            <Grid>
                <AnimalTabel animals={this.state.animals} />
            </Grid>
        );
    }
}

export default AdminstrationPage;