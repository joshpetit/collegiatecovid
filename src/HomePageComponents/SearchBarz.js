import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBarz(prop) {
    return(
            <Autocomplete
                onChange={(e, newValue) => {
                    if(newValue!==null) {
                        prop.callBack(newValue.name)
                        console.log(newValue.name)
                    }
                }}
                id="controllable-search"
                options={prop.schools}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Search for your School" variant="outlined" />}
            />
    )

}
