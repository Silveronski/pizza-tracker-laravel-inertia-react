<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaController extends Controller
{
    public function index() 
    {
        $pizzas = Pizza::all();
        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas
        ]);
        // 'Pizzas/All' - we render the react page component called 'All'
        // 'pizzas' => $pizzas - we pass in pizza props to the component
    }

    public function edit(Pizza $pizza) 
    {
        return Inertia::render('Pizzas/Edit', [
            'pizza' => $pizza
        ]);
    }

    public function update(Pizza $pizza, Request $request) 
    {
        $pizza->update([
            'status' => $request->status,
        ]);
    }
}
