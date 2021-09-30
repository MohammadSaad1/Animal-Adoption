import { CircularProgress, Grid } from '@mui/material';
import { Component } from 'react';
import './CenteredSpinner.scss'

interface CenteredSpinnerProps {

}

interface CenteredSpinnerState {

}

class CenteredSpinner extends Component<CenteredSpinnerProps, CenteredSpinnerState> {
    constructor(props: CenteredSpinnerProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Grid className='centered-spinner' container={true} justifyContent='center'>
                <CircularProgress size='3rem' />
            </Grid>
        );
    }
}

export default CenteredSpinner;