import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import autocompleteMock from "../../constants/autocompleteMock";

export default function AutocompleteInput() {
    return (
        <Autocomplete
            disablePortal
            options={autocompleteMock}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Cave" />}
        />
    );
}
