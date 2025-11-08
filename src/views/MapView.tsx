import AutocompleteInput from '../components/AutocompleteInput/AutocompleteInput';
import {CaveMapsCanvas} from "../canvas/CaveMapsCanvas";
import AdjacencyTable from "../table/AdjacencyTable/AdjacencyTable";

export default function MapView() {
    return (
        <div className="map-container">
            <AutocompleteInput />
            <CaveMapsCanvas />
            <AdjacencyTable />
        </div>
    )
}
