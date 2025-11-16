import { useEffect } from "react";
import mermaid from "mermaid";

export const CaveMapsCanvas = () => {
    const graph = `graph TD
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    E --> F`;

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true})
    }, []);

    return <pre className="mermaid">{graph}</pre>;
}
