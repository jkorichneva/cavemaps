import AutocompleteInput from '../components/AutocompleteInput/AutocompleteInput';
import {CaveMapsCanvas} from "../canvas/CaveMapsCanvas";
import AdjacencyTable from "../table/AdjacencyTable/AdjacencyTable";

export default function MapView() {
    return (
        <div className="map-container">
            <AutocompleteInput />
            <div className="map-main">
                <CaveMapsCanvas />
                <AdjacencyTable />
            </div>
        </div>
    )
}
