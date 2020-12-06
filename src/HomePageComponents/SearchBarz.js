import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import schools from "./schools"

export default function SearchBarz(prop) {

    const [value, setValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');

    return(
        <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if(newValue!==null) {
                        setValue(newValue.name)
                        prop.callBack(newValue.name)
                    }
                }}

                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-search"
                options={schools}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search for your School" variant="outlined" />}
            />
        </div>
    )

}
