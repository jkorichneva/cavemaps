import { useEffect, useState } from "react";
import mermaid from "mermaid";
import {Graph} from "../types/graph";

export const CaveMapsCanvas = ({ graph }: { graph: Graph}) => {
    const [graphParsed] = useState(parseGraph(graph));
    function parseGraph(graph: { [key: string]: string[] }) {
        let resultGraph = `graph TD \n`;
        Object.keys(graph).forEach((key: string) => {
            graph[key].forEach((value: string) => {
                resultGraph += `  ${key} --- ${value}\n`;
            })
        })
        return resultGraph;
    }

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true})
    }, []);

    return <pre className="mermaid">{graphParsed}</pre>;
}
