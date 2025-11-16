import {Graph} from "../types/graph";

type DestinationMap = { [key: string]: { destination?: string, cost?: number } };

export default function findShortestWay(from: string, to: string, graph: Graph): {
    resultPath: string[],
    cost: number
} {
    const destinationMap: DestinationMap = {
        [from]: { destination: undefined, cost: undefined },
    };
    const queue: (string | undefined)[][] = [[from, undefined]];
    const visited: string[] = [];

    while (queue.length) {
        const currentPair = queue.shift();
        if (!currentPair) {
            break;
        }
        const currentVertice = currentPair[0];
        const parentVertice = currentPair[1];
        if (!currentVertice) {
            break;
        }
        const neighbours = graph[currentVertice as keyof typeof graph];
        neighbours.forEach(neighbour => {
            if (currentVertice !== from && !destinationMap[currentVertice]) {
                let cost = (parentVertice && destinationMap[parentVertice]?.cost
                    ? destinationMap[parentVertice]?.cost : 0) as number;
                cost++;
                destinationMap[currentVertice] = { destination: parentVertice, cost};
            }

            if (!visited.includes(neighbour)) {
                visited.push(neighbour);
                queue.push([neighbour, currentVertice]);
            }
        });

        if (currentVertice === to) {
            break;
        }
    }

    let current = to;
    const resultPath = [];
    while (current !== from) {
        resultPath.push(current);
        current = destinationMap[current].destination as string;
    }
    resultPath.push(from);
    return {resultPath: resultPath.reverse(), cost: destinationMap[to].cost as number};
}
