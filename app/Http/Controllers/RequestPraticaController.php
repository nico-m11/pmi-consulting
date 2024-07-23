<?php

    namespace App\Http\Controllers;

    use App\Enum\RequestStatus\RequestPraticaStatus;
    use App\Models\Aziende;
    use App\Models\RequestPratica;
    use App\Models\User;
    use Illuminate\Database\Eloquent\Casts\Json;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    use Inertia\Inertia;
    use Inertia\Response;

    class RequestPraticaController extends Controller
    {
        /**
         * Display a listing of the resource.
         */
        public function index()
        {
            $aziende = RequestPratica::query();

            $sortField     = request("sort_field", 'created_at');
            $sortDirection = request("sort_direction", "desc");

            if (request("type_richiesta")) {
                $aziende->where("type_richiesta", "like", "%" . request("name") . "%");
            }


            $result = $aziende->orderBy($sortField, $sortDirection)
                              ->paginate(10)
                              ->onEachSide(1);

            return Inertia::render('RequestPratica', [
                'requestPratica' => Json::encode($result),
                'queryParams'    => request()->query() ?: null,
                'success'        => session('success'),
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
                'type_richiesta'         => $financingType,
                'volore_richiesta'       => $request_type,
                'status_request_pratica' => RequestPraticaStatus::richiesta_effettuata,
                'created_at'             => now()
            ]);

            return DB::getPdo()->lastInsertId();
        }

        /**
         * Display the specified resource.
         */
        public function show(int $id): Response
        {
            $request_pratica = RequestPratica::query()
                                             ->where('id', '=', $id)
                                             ->firstOrFail();

            $azienda_data = Aziende::where('id_request_pratica', '=', $id)
                                   ->firstOrFail();

            $user_data = User::where('id', '=', $azienda_data->id_user_insert)
                             ->firstOrFail();

            $result = [
                'request_pratica' => $request_pratica,
                'azienda_data'    => $azienda_data,
                'user_data'       => $user_data
            ];


            return Inertia::render('RequestPraticaShow', [
                'requestPratica' => $result,
            ]);
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
