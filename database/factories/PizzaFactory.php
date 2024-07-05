<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class PizzaFactory extends Factory
{
    public function definition(): array
    {
        $toppingChoices = [
            'Pepperoni',
            'Mushrooms',
            'Onions',
            'Sausage',
            'Bacon',
            'Extra cheese',
            'Black olives',
            'Green peppers',
            'Pineapple',
            'Spinach',
            'Tomatoes',
            'Garlic',
        ];

        $toppings = [];

        for ($i = 1; $i <= rand(1,4) ; $i++) { 
            $toppings[] = Arr::random($toppingChoices);
        }

        $toppings = array_unique($toppings);

        return [
            'id' => rand(11111, 99999),
            'user_id' => rand(1, 10),
            'size' => Arr::random(['Small', 'Medium', 'Large', 'Extra-Large']),
            'crust' =>  Arr::random(['Normal', 'Thin', 'Garlic']),
            'toppings' => $toppings,
            'status' => Arr::random(['Ordered', 'Prepping', 'Baking', 'Checking', 'Ready']),
        ];
    }
}