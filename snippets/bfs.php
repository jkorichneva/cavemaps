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

function bfs(array $graph): void
{
    $queue = [];
    $visited = [];
    $queue[] = 'A';
    while (!empty($queue)) {

        echo 'Current Queue: ' . PHP_EOL;
        var_dump($queue);
        $currentNode = array_shift($queue);

        foreach ($graph[$currentNode] as $neighbor) {
            if (!array_key_exists($neighbor, $visited)) {
                $visited[$neighbor] = true;
                echo 'Visited Node: ' . $neighbor . PHP_EOL;
                $queue[] = $neighbor;
            }
        }
    }
    echo 'Visits ' . PHP_EOL;
    var_dump($visited);
}

bfs($graph);
