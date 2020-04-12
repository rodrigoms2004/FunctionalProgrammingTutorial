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

## Reduce

Let's sum all numbers of an array.

Imperative `foreach`:

```php
$arr = [1, 2, 3, 4, 5, 6];
$result = 0;

foreach ($arr as $value) {
    $result += $value;
}

echo $result;
```

**Result:**

```text
21
```

Declarative `array_reduce`:

```php
$arr = [1, 2, 3, 4, 5, 6];
$result = array_reduce($arr, fn($result, $value) => $result + $value);
echo $result;
```

*(actually there is already a handy function for that called [`array_sum`](https://www.php.net/manual/en/function.array-sum.php), but for demonstrations purposes we implemented one by ourselves)*

## Putting all together

Given an array of arrays:

```php
$people = [
    ['id' => 1, 'name' => 'Robison', 'age' => 38, 'married' => true, 'race' => 'caucasian'],
    ['id' => 2, 'name' => 'Toshiba', 'age' => 23, 'married' => false, 'race' => 'asian'],
    ['id' => 3, 'name' => 'Cintia', 'age' => 53, 'married' => true, 'race' => 'black'],
    ['id' => 4, 'name' => 'Monica', 'age' => 34, 'married' => false, 'race' => 'latin'],
    ['id' => 5, 'name' => 'Joana', 'age' => 19, 'married' => false, 'race' => 'caucasian'],
];
```

#### An array of ages

```php
$ages = array_map(fn($person) => $person['age'], $people);

print_r($ages);
```

**Result:**

```text
Array
(
    [0] => 38
    [1] => 23
    [2] => 53
    [3] => 34
    [4] => 19
)
```

*(there is already [`array_column`](https://www.php.net/manual/en/function.array-column.php) for that, but for demonstration purposes we implemented one by ourselves)*

#### Replacing a key-value by another pair:

```php
$more_people = array_map(function ($person) {
    unset($person['race']);
    $person['main_lang'] = 'English';
    return $person;
}, $people);

print_r($more_people);
```

**Result:**

```text
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => Robison
            [age] => 38
            [married] => 1
            [main_lang] => English
        )

    [1] => Array
        (
            [id] => 2
            [name] => Toshiba
            [age] => 23
            [married] =>
            [main_lang] => English
        )

    [2] => Array
        (
            [id] => 3
            [name] => Cintia
            [age] => 53
            [married] => 1
            [main_lang] => English
        )

    [3] => Array
        (
            [id] => 4
            [name] => Monica
            [age] => 34
            [married] =>
            [main_lang] => English
        )

    [4] => Array
        (
            [id] => 5
            [name] => Joana
            [age] => 19
            [married] =>
            [main_lang] => English
        )
)
```

#### Filtering only married people

Where `'married' => true`:

```php
$married = array_filter($more_people, fn($person) => $person['married']);

print_r($married);
```

**Result:**

```text
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => Robison
            [age] => 38
            [married] => 1
            [main_lang] => English
        )

    [2] => Array
        (
            [id] => 3
            [name] => Cintia
            [age] => 53
            [married] => 1
            [main_lang] => English
        )

)
```

#### Add another key

Add the key `wage` with `1000` monetary units:

```php
$more_people2 = array_map(fn($person) => array_merge($person, ['wage' => 1000]), $more_people);

print_r($more_people2);
```

**Result:**

```text
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => Robison
            [age] => 38
            [married] => 1
            [main_lang] => English
            [wage] => 1000
        )

    [1] => Array
        (
            [id] => 2
            [name] => Toshiba
            [age] => 23
            [married] =>
            [main_lang] => English
            [wage] => 1000
        )

    [2] => Array
        (
            [id] => 3
            [name] => Cintia
            [age] => 53
            [married] => 1
            [main_lang] => English
            [wage] => 1000
        )

    [3] => Array
        (
            [id] => 4
            [name] => Monica
            [age] => 34
            [married] =>
            [main_lang] => English
            [wage] => 1000
        )

    [4] => Array
        (
            [id] => 5
            [name] => Joana
            [age] => 19
            [married] =>
            [main_lang] => English
            [wage] => 1000
        )

)
```

Add more 500 monetary units to married people:

```php
$married_people_wage = array_map(
    fn($person) => array_merge($person, ['wage' => $person['wage'] + 500]),
    array_filter($more_people2, fn($person) => $person['married']),
);

print_r($married_people_wage);
```

**Result:**

```text
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => Robison
            [age] => 38
            [married] => 1
            [main_lang] => English
            [wage] => 1500
        )

    [2] => Array
        (
            [id] => 3
            [name] => Cintia
            [age] => 53
            [married] => 1
            [main_lang] => English
            [wage] => 1500
        )

)
```

#### Join arrays

Update values from `$more_people2` using the new values from `$married_people_wage`, store it in `$more_people3`:

```php
$more_people3 = array_map(function ($person) use ($married_people_wage) {
    $married = array_values(array_filter($married_people_wage, fn($married) => $married['id'] === $person['id']))[0] ?? [];
    return array_merge($person, $married);
}, $more_people2);

print_r($more_people3);
```

**Result:**

```text
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => Robison
            [age] => 38
            [married] => 1
            [main_lang] => English
            [wage] => 1500
        )

    [1] => Array
        (
            [id] => 2
            [name] => Toshiba
            [age] => 23
            [married] =>
            [main_lang] => English
            [wage] => 1000
        )

    [2] => Array
        (
            [id] => 3
            [name] => Cintia
            [age] => 53
            [married] => 1
            [main_lang] => English
            [wage] => 1500
        )

    [3] => Array
        (
            [id] => 4
            [name] => Monica
            [age] => 34
            [married] =>
            [main_lang] => English
            [wage] => 1000
        )

    [4] => Array
        (
            [id] => 5
            [name] => Joana
            [age] => 19
            [married] =>
            [main_lang] => English
            [wage] => 1000
        )
)
```

#### Sum wages

Sum the wage of all people:

```php
$total_wage = array_reduce(array_map(fn($person) => $person['wage'], $more_people3), fn ($total, $wage) => $total + $wage, 0);

echo $total_wage;
```

**Result:**

```text
6000
```

*(or as explained before, we are implementing ourselves for demonstration purposes, but we could use [`array_column`](https://www.php.net/manual/en/function.array-column.php) and [`array_sum`](https://www.php.net/manual/en/function.array-sum.php): `$total_wage2 = array_sum(array_column($more_people3, 'wage'))`)*

Increase in `200` monetary units the wage of people under 25 years old and single, summing all wages:

```php
$single = fn($person) => !$person['married'];
$underage = fn($age) => fn($person) => $person['age'] < $age;
$bump_wage = fn($by) => fn($person) => array_merge($person, ['wage' => $person['wage'] + $by]);

$singles = array_filter($more_people3, $single);
$young_singles = array_filter($singles, $underage(25));
$wage_young_singles = array_map($bump_wage(200), $young_singles);
$sum_wage_young_singles = array_sum(array_column($wage_young_singles, 'wage'));

echo $sum_wage_young_singles;
```

**Result:**

```text
2400
```

## Footnotes

- ⚠ Yes, as you probably noticed, `array_map` expects the callback first while `array_filter` and `array_reduce` expects the array first, then the callback.
- [Checkout other useful functions that can be called over arrays.](https://www.php.net/manual/en/ref.array.php)