import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getCollegesNames } from '../data/db'

export default function SearchBarz(prop) {

    return(
        <div>
            <Autocomplete
                onSelect={(newValue) => {
                    if(newValue!==null) {
                        prop.callBack(newValue.target.value)
                        console.log(newValue.target.value)
                    }
                }}

                id="controllable-search"
                options={prop.school}
                getOptionLabel={(option) => option.name}
                style={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Search for your School" variant="outlined" />}
            />
        </div>
    )

}
