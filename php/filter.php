<?php declare(strict_types=1);

function imperative_foreach()
{
    $arr = [1, 2, 3, 4, 5, 6];
    $even = [];

    foreach ($arr as $value) {
        if ($value % 2 === 0) {
            $even[] = $value;
        }
    }

    print_r($even);
}

function declarative_filter()
{
    $arr = [1, 2, 3, 4, 5, 6];
    $even = array_filter($arr, fn($value) => $value % 2 === 0);
    print_r($even);
}


declarative_filter();