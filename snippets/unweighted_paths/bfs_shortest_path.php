<?php

declare(strict_types=1);

$graph = [
    'A' => ['B', 'C'],
    'B' => ['A', 'D', 'E'],
    'C' => ['A', 'F'],
    'D' => ['B'],
    'E' => ['B', 'F'],
    'F' => ['C', 'E'],
];

function shortest_path_bfs(string $source, string $destination, array $graph): array
{
    $queue = [];
    $visited = [];

	$queue[] = [$source, null];

	$pathMap = [];

    while (!empty($queue)) {

        $dequeue = array_shift($queue);
		$currentNode = $dequeue[0];
		$parentNode = $dequeue[1] ?? null;

		foreach ($graph[$currentNode] as $neighbor) {
			// add the current path with cost to the map
			if (!array_key_exists($currentNode, $pathMap)) {
				$cost = $pathMap[$parentNode][1] ?? 0;
				$cost++;
				$pathMap[$currentNode][0] = $parentNode;
				$pathMap[$currentNode][1] = $cost;
			}

			// visited node
            if (!array_key_exists($neighbor, $visited)) {
                $visited[$neighbor] = true;
                $queue[] = [$neighbor, $currentNode, 1];
            }
        }
	    if ($currentNode === $destination) {
		    break;
	    }
    }

	if (!isset($pathMap[$destination])) {
		echo 'No path was found!';
		return [];
	}

	return $pathMap;
}

function return_reversed_path(array $pathMap, string $destination): array {
	$path = [];
	$node = $destination;

	while ($node !== null) {
		$path[] = $node;
		$node = $pathMap[$node][0];
	}

	return array_reverse($path);
}


function print_shortest_path_bfs(array $reversedPath, array $pathMap, $destination): void
{

	echo 'The shortest path is: ';
	echo implode(', ', $reversedPath) . PHP_EOL;
	echo 'The total cost is: ';
	echo $pathMap[$destination][1] . PHP_EOL;
}

$pathMap = shortest_path_bfs('A', 'F', $graph);
$reversedPath = return_reversed_path($pathMap, 'F');
print_shortest_path_bfs($reversedPath, $pathMap, 'F');