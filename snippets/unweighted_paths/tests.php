<?php

declare(strict_types=1);

require_once 'bfs_shortest_path.php';

// 1 usual
// 2 linear graphs
// 3 two ways, but one is shorter (fails atm)
// 4 no path
// 5 circled
$graph1 = [
	'A' => ['B', 'C'],
	'B' => ['A', 'D', 'E'],
	'C' => ['A', 'F'],
	'D' => ['B'],
	'E' => ['B', 'F'],
	'F' => ['C', 'E'],
];
// The shortest path is: A, C, F
// The total cost is: 3
$source1 = 'A';
$destination1 = 'F';

$actualPathMap1 = shortest_path_bfs($source1, $destination1, $graph1);
// $expectedPathMap = ...

$actualPath1 = return_reversed_path($actualPathMap1, $destination1);
$expectedPath1 = ['A', 'C', 'F'];

if ($actualPath1 === $expectedPath1) {
	echo 'Test one ' . PHP_EOL;
	print_shortest_path_bfs($actualPath1, $actualPathMap1, $destination1);
}

if ($actualPath1 !== $expectedPath1) {
	echo 'Expectation mismatch in Test 1'. PHP_EOL;
	exit(1);
}

$graph2 = [
	'A' => ['B'],
	'B' => ['A', 'C'],
	'C' => ['B', 'D'],
	'D' => ['C'],
];
$source2 = 'A';
$destination2 = 'D';

$actualPathMap2 = shortest_path_bfs($source2, $destination2, $graph2);
$expectedPath2 = ['A', 'B', 'C', 'D'];

$actualPath2 = return_reversed_path($actualPathMap2, $destination2);

if ($actualPath2 === $expectedPath2) {
	echo 'Test 2' . PHP_EOL;
	print_shortest_path_bfs($actualPath2, $actualPathMap2, $destination2);
}
if ($actualPath2 !== $expectedPath2) {
	echo 'Expectation mismatch in Test 2'. PHP_EOL;
	exit(1);
}

$graph3 = [
	'A' => ['B', 'C'],
	'B' => ['A', 'D'],
	'C' => ['A', 'D'],
	'D' => ['B', 'C', 'E'],
	'E' => ['D']
];

$source3 = 'A';
$destination3 = 'E';

$actualPathMap3 = shortest_path_bfs($source3, $destination3, $graph3);
$expectedPath3 = ['A', 'C', 'D', 'E'];

$actualPath3 = return_reversed_path($actualPathMap3, $destination3);

if ($actualPath3 === $expectedPath3) {
	echo 'Test 3' . PHP_EOL;
	print_shortest_path_bfs($actualPath3, $actualPathMap3, $destination3);
}
if ($actualPath3 !== $expectedPath3) {
	echo 'Expectation mismatch in Test 3'. PHP_EOL;
	// exit(1);
}

$graph4 = [
	'A' => ['B'],
	'B' => ['A'],
	'C' => ['D'],
	'D' => ['C'],
];
// No path exists between A and D
$source4 = 'A';
$destination4 = 'D';

$actualPathMap4 = shortest_path_bfs($source4, $destination4, $graph4);
$expectedPath4 = []; // no path

$actualPath4 = return_reversed_path($actualPathMap4, $destination4);

if ($actualPath4 === $expectedPath4) {
	echo PHP_EOL;
	echo 'Test 4 (no path)' . PHP_EOL;
	print_r($actualPath4);
}
if ($actualPath4 !== $expectedPath4) {
	echo 'Expectation mismatch in Test 4'. PHP_EOL;
	exit(1);
}

$graph5 = [
	'A' => ['B', 'D'],
	'B' => ['A', 'C'],
	'C' => ['B', 'D'],
	'D' => ['A', 'C'],
];
$source5 = 'A';
$destination5 = 'C';

$actualPathMap5 = shortest_path_bfs($source5, $destination5, $graph5);
$expectedPath5 = ['A', 'B', 'C'];

$actualPath5 = return_reversed_path($actualPathMap5, $destination5);

if($actualPath5 === $expectedPath5) {
	echo 'Test 5' . PHP_EOL;
	print_shortest_path_bfs($actualPath5, $actualPathMap5, $destination5);
}
if($actualPath5 !== $expectedPath5) {
	echo 'Expectation mismatch in Test 5';
	exit(1);
}