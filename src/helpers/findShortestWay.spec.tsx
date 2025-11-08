import findShortestWay from "./findShortestWay";

test('should find shortest way', () => {
    expect(findShortestWay('A', 'B')).toEqual(['A', 'B']);
    expect(findShortestWay('A', 'F')).toEqual(['A', 'C', 'F']);
})
