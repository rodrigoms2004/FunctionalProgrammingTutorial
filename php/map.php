<?php declare(strict_types=1);

function imperative_foreach()
{
    $arr = [1, 2, 3, 4, 5, 6];

    foreach ($arr as $key => $value) {
        $arr[$key] = $value * $value;
    }

    print_r($arr);
}

function declarative_map()
{
    $arr = [1, 2, 3, 4, 5, 6];

    $arr = array_map(function ($value) {
        return $value * $value;
    }, $arr);

    print_r($arr);
}

function using_arrow_function()
{
    $arr = [1, 2, 3, 4, 5, 6];

    $arr = array_map(fn($value) => $value * $value, $arr);

    print_r($arr);
}

function as_another_function()
{
    $square = fn($value) => $value * $value;

    $arr = [1, 2, 3, 4, 5, 6];

    $arr = array_map($square, $arr);

    print_r($arr);
}

as_another_function();