import sampleGraphs from "../constants/sampleGraphs";

export default function findShortestWay(from: string, to: string) {
    const vertices = Object.keys(sampleGraphs);
    if (!vertices.includes(from) || !vertices.includes(to)) {
        return;
    }

    const path = [];
    sampleGraphs[from as keyof typeof sampleGraphs].forEach(nextVertice => {
        if (!nextVertice) {
            return;
        }
    })
}
