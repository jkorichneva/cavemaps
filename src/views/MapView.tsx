import AutocompleteInput from '../components/AutocompleteInput/AutocompleteInput';
import {CaveMapsCanvas} from "../canvas/CaveMapsCanvas";
import AdjacencyTable from "../table/AdjacencyTable/AdjacencyTable";
import { unweightedGraph } from "../constants/sampleGraphs";
import {useState} from "react";
import findShortestWay from "../helpers/findShortestWay";

export default function MapView() {
    const [path, setPath] = useState<string[]>([]);
    const [cost, setCost] = useState<number>(0);

    function calculateWay(from: string, to: string) {
        const { resultPath, cost } = findShortestWay(from, to, unweightedGraph);
        setPath(resultPath);
        setCost(cost);
    }

    return (
        <div className="map-container">
            <AutocompleteInput graph={unweightedGraph} calculateWay={calculateWay} />
            <div className="map-main">
                <CaveMapsCanvas graph={unweightedGraph} />
                <AdjacencyTable graph={unweightedGraph} />
            </div>
            {
                path.join(' -> ')
            }
            <br/>
            { `Cost: ${cost}` }
        </div>
    )
}
