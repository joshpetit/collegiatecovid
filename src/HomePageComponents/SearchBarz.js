import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/AutoComplete';

export default function SearchBarz() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={schools}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search for your School" variant="outlined" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const schools = [
    { name: 'Duke'},
    { name: 'UIUC'},
    { name: 'Stanford'},
    { name: 'Harvard'},
    { name: 'Amherst'},
    { name: 'BeiDa'},
    { name: 'Dukie'},
];