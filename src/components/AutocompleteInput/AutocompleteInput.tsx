import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import './AutocompleteInput.css';
import {Graph} from "../../types/graph";
import {useState, useEffect} from "react";

export default function AutocompleteInput({ graph, calculateWay }: { graph: Graph, calculateWay: (from: string, to:string) => void }) {
    const [autocomplete, setAutocomplete] = useState<{ label: string; id: string }[]>([]);
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');

    useEffect(() => {
        setAutocomplete(Object.keys(graph).map(vertice => ({ label: `Cave ${vertice}`, id: vertice })));
    }, [graph]);

    return (
        <div className="autocomplete-form">
            <Autocomplete
                disablePortal
                options={autocomplete}
                sx={{ width: 300 }}
                onChange={(_event, value) => setFrom(value?.id || '')}
                renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
                disablePortal
                options={autocomplete}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="To" />}
                onChange={(_event, value) => setTo(value?.id || '')}
            />
            <Button onClick={() => calculateWay(from, to)}>
                Calculate
            </Button>
        </div>
    );
}
