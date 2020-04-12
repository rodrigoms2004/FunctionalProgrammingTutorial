<?php declare(strict_types=1);

$people = [
    ['id' => 1, 'name' => 'Robison', 'age' => 38, 'married' => true, 'race' => 'caucasian'],
    ['id' => 2, 'name' => 'Toshiba', 'age' => 23, 'married' => false, 'race' => 'asian'],
    ['id' => 3, 'name' => 'Cintia', 'age' => 53, 'married' => true, 'race' => 'black'],
    ['id' => 4, 'name' => 'Monica', 'age' => 34, 'married' => false, 'race' => 'latin'],
    ['id' => 5, 'name' => 'Joana', 'age' => 19, 'married' => false, 'race' => 'caucasian'],
];

$ages = array_map(fn($person) => $person['age'], $people);
//print_r($ages);

$more_people = array_map(function ($person) {
    unset($person['race']);
    $person['main_lang'] = 'English';
    return $person;
}, $people);
//print_r($more_people);

$married = array_filter($more_people, fn($person) => $person['married']);
//print_r($married);

$more_people2 = array_map(fn($person) => array_merge($person, ['wage' => 1000]), $more_people);
//print_r($more_people2);

$married_people_wage = array_map(
    fn($person) => array_merge($person, ['wage' => $person['wage'] + 500]),
    array_filter($more_people2, fn($person) => $person['married']),
);
//print_r($married_people_wage);

$more_people3 = array_map(function ($person) use ($married_people_wage) {
    $married = array_values(array_filter($married_people_wage, fn($married) => $married['id'] === $person['id']))[0] ?? [];
    return array_merge($person, $married);
}, $more_people2);
//print_r($more_people3);

$total_wage = array_reduce(array_map(fn($person) => $person['wage'], $more_people3), fn($total, $wage) => $total + $wage, 0);
//echo $total_wage;

$total_wage2 = array_sum(array_column($more_people3, 'wage'));
//echo $total_wage2;

$single = fn($person) => !$person['married'];
$underage = fn($age) => fn($person) => $person['age'] < $age;
$bump_wage = fn($by) => fn($person) => array_merge($person, ['wage' => $person['wage'] + $by]);

$singles = array_filter($more_people3, $single);
$young_singles = array_filter($singles, $underage(25));
$wage_young_singles = array_map($bump_wage(200), $young_singles);
$sum_wage_young_singles = array_sum(array_column($wage_young_singles, 'wage'));
echo $sum_wage_young_singles;