<?php declare(strict_types=1);

function imperative_foreach()
{
    $arr = [1, 2, 3, 4, 5, 6];
    $result = 0;

    foreach ($arr as $value) {
        $result += $value;
    }

    echo $result;
}

function declarative_reduce()
{
    $arr = [1, 2, 3, 4, 5, 6];
    $result = array_reduce($arr, fn($result, $value) => $result + $value);
    echo $result;
}

declarative_reduce();