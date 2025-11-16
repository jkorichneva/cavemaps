import findShortestWay from "./findShortestWay";

test('should find shortest way', () => {
    expect(findShortestWay('A', 'B')).toEqual({resultPath: ['A', 'B'], cost: 2});
    expect(findShortestWay('A', 'F')).toEqual({ resultPath: ['A', 'C', 'F'], cost: 2});
    expect(findShortestWay('A', 'E')).toEqual({ resultPath: ['A', 'B', 'E'], cost: 3});
})
