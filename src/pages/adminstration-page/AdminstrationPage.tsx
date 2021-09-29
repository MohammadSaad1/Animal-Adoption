import { Grid } from '@mui/material';
import { Component } from 'react';
import { getAnimals } from '../../api/services/AnimalService';

interface AdminstrationPageProps {
    
}
 
interface AdminstrationPageState {
    
}
 
class AdminstrationPage extends Component<AdminstrationPageProps, AdminstrationPageState> {
    constructor(props: AdminstrationPageProps) {
        super(props);
        this.state = {};
    }

    render() { 
        return ( 
            <Grid>
                AdminstrationPage
            </Grid>
         );
    }
}
 
export default AdminstrationPage;