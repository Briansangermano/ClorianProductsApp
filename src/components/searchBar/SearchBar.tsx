
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import { setSearchTerm, setSortOption } from '../../redux/actions'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { withStyles, Theme } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './SearchBar.css';

const styles = (theme: Theme) => ({
    textField: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            marginRight: 3,
            width: 400,
        },
    },
    select: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: '10px',
        },
        [theme.breakpoints.up('sm')]: {
            width: 300,
        },
    },
    buttom: {
        [theme.breakpoints.down('xs')]: {
            width: '60%',
            marginTop: '15px',
        },
    },
});

interface SearchBarProps {
    classes?: any
}

export const SearchBar: React.FC<SearchBarProps> = ({ classes }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const deleteText = () => {
        setText('');
        setSelectedValue('')
    };

    const handleSearch = (searchText: string) => {
        setText(searchText)
        dispatch(setSearchTerm(searchText));
    };

    const handleSortOptionChange = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value as string)
        dispatch(setSortOption(event.target.value as string));
    };

    const deleteFilter = () => {
        dispatch(setSearchTerm(''))
        dispatch(setSortOption('NA'));
        deleteText()
    }

    return (
        <div className='search-container'>
            <TextField
                onChange={e => handleSearch(e.target.value)}
                className={classes && classes.textField}
                id="outlined-basic"
                value={text}
                label="Search"
                variant="outlined"
            />
            <FormControl className={classes && classes.select}>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    label="Age"
                    onChange={handleSortOptionChange}
                >
                    <MenuItem value={'NA'}>Name Ascending</MenuItem>
                    <MenuItem value={'ND'}>Name Descending</MenuItem>
                    <MenuItem value={'DA'}>Description Ascending</MenuItem>
                    <MenuItem value={'DD'}>Description Descending</MenuItem>
                </Select>
            </FormControl>
            <Button
                className={classes && classes.buttom}
                sx={{ background: '#4894abd9', ':hover': { background: '#4A556C' } }}
                onClick={deleteFilter}
                variant="contained"
                endIcon={<ClearIcon />}
            >
                Delete Filter
            </Button>
        </div>
    );
};

export default withWidth()(withStyles(styles)(SearchBar));
