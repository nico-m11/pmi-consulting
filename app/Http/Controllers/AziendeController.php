<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAziendeRequest;
use App\Http\Requests\UpdateAziendeRequest;
use App\Models\Aziende;
use Illuminate\Database\Eloquent\Casts\Json;
use Inertia\Inertia;
use Inertia\Response;

class AziendeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $aziende = Aziende::all();
        return Inertia::render('Aziende', [
            'aziende' => Json::encode($aziende),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAziendeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Aziende $aziende)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Aziende $aziende)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAziendeRequest $request, Aziende $aziende)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aziende $aziende)
    {
        //
    }
}
