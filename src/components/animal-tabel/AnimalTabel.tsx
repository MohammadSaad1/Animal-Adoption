import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { Animal, Status } from '../../api/entities/Animal';
import { deleteAnimal, getAnimals, partialUpdateAnimal } from '../../api/axios-functions/AnimalAxiosFunctions';
import './AnimalTabel.scss'

interface AnimalTabelProps {
    animals: Animal[]
    refetch: () => void
}

const cells = ['Name', 'Type', 'Breed', 'Age', 'Status']

class AnimalTabel extends React.Component<AnimalTabelProps> {
    render() {
        const getHeadCells = () => (
            cells.map(cell => <TableCell className='table-container__table-cell' align='left'>{cell}</TableCell>)
        )

        const getBodyRows = () => (
            this.props.animals.map(animal => <TableRow> {getBodyCells(animal)} </TableRow>)
        )

        const handleAdoption = (id: number) => () => {
            partialUpdateAnimal(id, { status: 'Adopted' }).then(() => this.props.refetch())
        }

        const handleDeletion = (id: number) => () => {
            deleteAnimal(id).then(() => this.props.refetch())
        }

        const getButtonCell = (animal: Animal) => (
            <TableCell align='right'>
                <button
                    className='table-container__table-button'
                    onClick={handleAdoption(animal.id)}
                    disabled={animal.status !== 'Booked'}>
                    Adopt
                </button>
                <button
                    className='table-container__table-button'
                    onClick={handleDeletion(animal.id)}>
                    Delete
                </button>
            </TableCell>
        )

        const getBodyCells = (animal: Animal) => {
            const bodyCells = cells.map(cell => (
                <TableCell align='left'>
                    {animal[cell.toLocaleLowerCase() as keyof typeof animal]}
                </TableCell>
            ))

            bodyCells.push(getButtonCell(animal))

            return bodyCells
        }

        return (
            <TableContainer className='table-container'>
                <Table>
                    <TableHead className='table-container__table-head' >
                        <TableRow>
                            {getHeadCells()}
                            <TableCell align='right' />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getBodyRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default AnimalTabel
