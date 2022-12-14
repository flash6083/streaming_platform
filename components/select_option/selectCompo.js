import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import styles from './selectCompo.module.scss'

const SelectCompo = () => {
    const [age, setAge] = useState('')

    const handleChange = (event) => {
      setAge(event.target.value);

    };
    return ( 
        <div className={styles.selectWrapper}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, minWidth: 120}} size="small" error>
                    <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{color: 'white'}}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}
 
export default SelectCompo;