<?php

    namespace App\Http\Controllers;

    use App\Http\Requests\StorePraticheRequest;
    use App\Http\Requests\UpdatePraticheRequest;
    use App\Models\Pratiche;
    use Illuminate\Database\Eloquent\Casts\Json;
    use Inertia\Inertia;
    use Inertia\Response;
    use Inertia\ResponseFactory;

    class PraticheController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         */
        public function index(): Response
        {
            $pratiche = Pratiche::all();

            return Inertia::render('Pratiche', [
                'pratiche' => Json::encode($pratiche),

            ]);
        }

        /**
         * Show the form for creating a new resource.
         */
        public function create(): Response|ResponseFactory
        {
            return inertia("PraticheCreate");
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
        public function show(Pratiche $pratiche): Response
        {
            return Inertia::render('PraticheShow', [
                'pratiche' => $pratiche
            ]);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Pratiche $pratiche)
        {
            return Inertia::render('PraticheEdit', [
                'pratiche' => $pratiche
            ]);
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
