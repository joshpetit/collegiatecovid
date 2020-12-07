import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBarz(prop) {
    return(
        <div>
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
                style={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Search for your School" variant="outlined" />}
            />
        </div>
    )

}
