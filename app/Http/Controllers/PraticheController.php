<?php

    namespace App\Http\Controllers;

    use App\Http\Requests\StorePraticheRequest;
    use App\Http\Requests\UpdatePraticheRequest;
    use App\Models\Pratiche;
    use Illuminate\Support\Facades\Auth;
    use Inertia\Inertia;
    use Inertia\Response;

    class PraticheController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         */
        public function index(): Response
        {
            $result = (new Pratiche)->index();
            return Inertia::render('Pratiche', [
                'data' => $result,
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
        public function store(StorePraticheRequest $request)
        {
            //
        }

        /**
         * Display the specified resource.
         */
        public function show(Pratiche $pratiche)
        {
            //
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Pratiche $pratiche)
        {
            //
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(UpdatePraticheRequest $request, Pratiche $pratiche)
        {
            //
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(Pratiche $pratiche)
        {
            //
        }
    }
