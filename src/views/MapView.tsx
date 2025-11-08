import AutocompleteInput from '../components/AutocompleteInput/AutocompleteInput';
import {CaveMapsCanvas} from "../canvas/CaveMapsCanvas";

export default function MapView() {
    return (
        <div className="map-container">
            <AutocompleteInput />
            <CaveMapsCanvas />
        </div>
    )
}
