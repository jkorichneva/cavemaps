let unweighted_graph_adjacency_matrix = [
    // A, B, C, D, E, F
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0],
];

let weighted_graph_adjacency_matrix = [
    // A, B, C, D, E, F
    [0, 5, 4, 0, 0, 0],
    [5, 0, 0, 3, 10, 0],
    [4, 0, 0, 0, 0, -5],
    [0, 3, 0, 0, 0, 0],
    [0, 10, 0, 0, 0, 8],
    [0, 0, -5, 0, 8, 0],
];

// path: (A -> C - F)
// cost: 2
let unweighted_graph_adjacency_list = [
    [1, 2],       // A0
    [0, 3, 4],     // B1
    [0, 5],       // C2
    [1],         // D3
    [1, 5],       // E4
    [2, 4],       // F5
];

// todo change graph, that the path with the most vertices is the fastest one
//  path: (A -> B -> E -> F)
// cost: 3

// first the vertic, then the weight
let weighted_graph_adjacency_list = [
    [[1, 5], [2, 4]],               // A0
    [[0, 5], [3, 3], [4, 10]],      // B1
    [[0, 4], [5, -5]],              // C2
    [[1, 3]],                       // D3
    [[1, 10], [5, 8]],              // E4
    [[2, -5], [4, 8]],              // F5
];