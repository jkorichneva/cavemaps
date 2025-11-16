import sampleGraphs from "../constants/sampleGraphs";
import {fireChangeForInputTimeIfValid} from "@testing-library/user-event/dist/keyboard/shared";

type DestinationMap = { [key: string]: { destination: string, cost: number} };

export default function findShortestWay(from: string, to: string): { resultPath: string[], cost: number} {
    const destinationMap: DestinationMap = {};
    const queue = [from];

    while (queue.length) {
        const current = queue.shift();
        console.log(`-----Starting with vertice ${current}-------`)
        if (!current) {
            break;
        }
        const neighbours = sampleGraphs[current as keyof typeof sampleGraphs];
        console.log('neighbours', neighbours);
        const pathExistsAlready = destinationMap[neighbours[0]] && destinationMap[neighbours[0]].destination === current;
        console.log('pathExistsAlready', pathExistsAlready);
        const firstNeighbour = pathExistsAlready
            ? neighbours[1] : neighbours[0];
        console.log(firstNeighbour);
        const firstNeighbourIsFrom = firstNeighbour === from || current === from;
        const previousStepKey = Object.keys(destinationMap).find(key  => destinationMap[key].destination === current);
        let previousStep = previousStepKey ? destinationMap[previousStepKey] : null;
        if (!previousStep) {
            previousStep = destinationMap[firstNeighbour];
        }
        console.log('previousStep', previousStep);
        const prevStepCost = previousStep ? previousStep.cost + 1 : 1;
        const cost = firstNeighbourIsFrom ? 1 : prevStepCost;
        console.log(cost);
        destinationMap[current] = { destination: firstNeighbour, cost };
        neighbours.forEach(neighbour => {
            if (!destinationMap[neighbour]) {
                queue.push(neighbour);
            }
        });
    }

    console.log(destinationMap);

    let current = to;
    const resultPath = [];
    while (current !== from) {
        resultPath.push(current);
        const prevStepKey = Object.keys(destinationMap).find(key  => destinationMap[key].destination === current && key === from);
        if (prevStepKey) {
            current = prevStepKey;
        } else {
            current = destinationMap[current].destination;
        }
    }
    resultPath.push(from);
    return { resultPath: resultPath.reverse(), cost: destinationMap[to].cost };
}
