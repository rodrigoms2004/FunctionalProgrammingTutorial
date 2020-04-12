# Map<br>Filter<br>& Reduce<br>in PHP 🐘

Instructions and examples on how to use this simple functional programming constructs.

## Requirements

- [PHP](https://www.php.net/manual/en/install.php)

## Map
 
Imperative `foreach`:
 
```php
$arr = [1, 2, 3, 4, 5, 6];

foreach ($arr as $key => $value) {
    $arr[$key] = $value * $value;
}

print_r($arr);
```

**Result:**

```text
Array
(
    [0] => 1
    [1] => 4
    [2] => 9
    [3] => 16
    [4] => 25
    [5] => 36
)
```

Declarative `array_map`:

```php
$arr = [1, 2, 3, 4, 5, 6];

$arr = array_map(function ($value) {
    return $value * $value;
}, $arr);

print_r($arr);
```

using **Arrow Function:**

```php
$arr = [1, 2, 3, 4, 5, 6];

$arr = array_map(fn($value) => $value * $value, $arr);

print_r($arr);
```

as another function **(first-class & high-order principles):**

```php
$square = fn($value) => $value * $value;

$arr = [1, 2, 3, 4, 5, 6];

$arr = array_map($square, $arr);

print_r($arr);
```

## Filter

Let's filter the even numbers of an array.

Imperative `foreach`:

```php
$arr = [1, 2, 3, 4, 5, 6];
$even = [];

foreach ($arr as $value) {
    if ($value % 2 === 0) {
        $even[] = $value;
    }
}

print_r($even);
```

**Result:**

```text
Array
(
    [0] => 2
    [1] => 4
    [2] => 6
)
```

Declarative `array_filter`:

```php
$arr = [1, 2, 3, 4, 5, 6];
$even = array_filter($arr, fn($value) => $value % 2 === 0);
print_r($even);
```