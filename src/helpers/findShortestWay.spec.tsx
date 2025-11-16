import findShortestWay from "./findShortestWay";
import { unweightedGraph } from "../constants/sampleGraphs";

test('should find shortest way', () => {
    expect(findShortestWay('D', 'B', unweightedGraph)).toEqual({resultPath: ['D', 'B'], cost: 1});
    expect(findShortestWay('D', 'A', unweightedGraph)).toEqual({resultPath: ['D', 'B', 'A'], cost: 2});
    expect(findShortestWay('A', 'B', unweightedGraph)).toEqual({resultPath: ['A', 'B'], cost: 1});
    expect(findShortestWay('A', 'F', unweightedGraph)).toEqual({ resultPath: ['A', 'C', 'F'], cost: 2});
    expect(findShortestWay('A', 'E', unweightedGraph)).toEqual({ resultPath: ['A', 'B', 'E'], cost: 2});
})
