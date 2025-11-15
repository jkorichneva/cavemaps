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

function shortest_path_bfs(string $source, string $destination, array $graph): void
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

			if (!array_key_exists($currentNode, $pathMap)) {
				// if a neighbor was already visited, use the cost from the path map
				$cost = $pathMap[$parentNode][1] ?? 0;
				$cost++;
				$pathMap[$currentNode][0] = $neighbor;
				$pathMap[$currentNode][1] = $cost;
			}

			// visited node
            if (!array_key_exists($neighbor, $visited)) {
                $visited[$neighbor] = true;
                $queue[] = [$neighbor, $currentNode, 1];
            }
        }
    }
	echo 'Path and Costs Map ' . PHP_EOL;
	print_r($pathMap);

}


shortest_path_bfs('A', 'F', $graph);
