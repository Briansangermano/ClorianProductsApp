import React, { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './SelectQuantity.css';

interface SelectQuantityProps {
    quantity: Number;
    setQuantity: (value: any) => void;
}

const SelectQuantity: React.FC<SelectQuantityProps> = ({ quantity, setQuantity }) => {
    const isDeletedQuantity = useSelector((state: RootState) => state.isDeletedQuantity);

    useEffect(() => {
        if (isDeletedQuantity) {
            setQuantity(0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDeletedQuantity]);

    const handleChange = (event: SelectChangeEvent) => {
        setQuantity(Number(event.target.value));
    };

    return (
        <FormControl size="small" sx={{ minWidth: 70 }}>
            <Select
                value={quantity.toString()}
                onChange={handleChange}
                sx={{ height: 32 }}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectQuantity;
