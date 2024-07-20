<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;

    class RequestPraticaController extends Controller
    {
        /**
         * Display a listing of the resource.
         */
        public function index()
        {
            //
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
         *
         * @param string $financingType
         * @param string $request_type
         *
         * @return int
         */
        public static function store(
            string $financingType,
            string $request_type
        ): int {
            DB::table('request_praticas')->insert([
                'type_richiesta'   => $financingType,
                'volore_richiesta' => $request_type,
                'created_at'       => now()
            ]);

            return DB::getPdo()->lastInsertId();
        }

        /**
         * Display the specified resource.
         */
        public function show(string $id)
        {
            //
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(string $id)
        {
            //
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(Request $request, string $id)
        {
            //
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(string $id)
        {
            //
        }
    }
