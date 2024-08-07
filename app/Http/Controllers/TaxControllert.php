<?php

    namespace App\Http\Controllers;

    use App\Http\Requests\StoreTaxRequest;
    use App\Http\Requests\UpdateTaxRequest;
    use App\Models\Tax;
    use Illuminate\Support\Collection;
    use Illuminate\Support\Facades\DB;
    use Inertia\Inertia;

    /*
     *     usa npm install react-papaparse --save
     */

    class TaxControllert extends Controller
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
            return inertia("InsertTax");
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreTaxRequest $request)
        {
            $get        = $request->getContent();
            $get_decode = json_decode($get);

            $csv_prepare = $get_decode->documents->data;

            $employmentType = $get_decode->employmentType;


            $column_24_800_2000      = $csv_prepare[1][1];
            $column_24_2000_7999     = $csv_prepare[1][2];
            $column_24_8000_20000    = $csv_prepare[1][3];
            $column_24_20000_40000   = $csv_prepare[1][4];
            $column_24_40001_80000   = $csv_prepare[1][5];
            $column_24_80001_120000  = $csv_prepare[1][6];
            $column_24_120001_160000 = $csv_prepare[1][7];
            $column_24_160001_240000 = $csv_prepare[1][8];

            $column_30_800_2000      = $csv_prepare[2][1];
            $column_30_2000_7999     = $csv_prepare[2][2];
            $column_30_8000_20000    = $csv_prepare[2][3];
            $column_30_20000_40000   = $csv_prepare[2][4];
            $column_30_40001_80000   = $csv_prepare[2][5];
            $column_30_80001_120000  = $csv_prepare[2][6];
            $column_30_120001_160000 = $csv_prepare[2][7];
            $column_30_160001_240000 = $csv_prepare[2][8];

            $column_36_800_2000      = $csv_prepare[3][1];
            $column_36_2000_7999     = $csv_prepare[3][2];
            $column_36_8000_20000    = $csv_prepare[3][3];
            $column_36_20000_40000   = $csv_prepare[3][4];
            $column_36_40001_80000   = $csv_prepare[3][5];
            $column_36_80001_120000  = $csv_prepare[3][6];
            $column_36_120001_160000 = $csv_prepare[3][7];
            $column_36_160001_240000 = $csv_prepare[3][8];

            $column_48_800_2000      = $csv_prepare[4][1];
            $column_48_2000_7999     = $csv_prepare[4][2];
            $column_48_8000_20000    = $csv_prepare[4][3];
            $column_48_20000_40000   = $csv_prepare[4][4];
            $column_48_40001_80000   = $csv_prepare[4][5];
            $column_48_80001_120000  = $csv_prepare[4][6];
            $column_48_120001_160000 = $csv_prepare[4][7];
            $column_48_160001_240000 = $csv_prepare[4][8];


            $column_60_800_2000      = $csv_prepare[5][1];
            $column_60_2000_7999     = $csv_prepare[5][2];
            $column_60_8000_20000    = $csv_prepare[5][3];
            $column_60_20000_40000   = $csv_prepare[5][4];
            $column_60_40001_80000   = $csv_prepare[5][5];
            $column_60_80001_120000  = $csv_prepare[5][6];
            $column_60_120001_160000 = $csv_prepare[5][7];
            $column_60_160001_240000 = $csv_prepare[5][8];

            $column_72_800_2000      = $csv_prepare[6][1];
            $column_72_2000_7999     = $csv_prepare[6][2];
            $column_72_8000_20000    = $csv_prepare[6][3];
            $column_72_20000_40000   = $csv_prepare[6][4];
            $column_72_40001_80000   = $csv_prepare[6][5];
            $column_72_80001_120000  = $csv_prepare[6][6];
            $column_72_120001_160000 = $csv_prepare[6][7];
            $column_72_160001_240000 = $csv_prepare[6][8];


            DB::table('tax')
              ->where('type', $employmentType)
              ->update([
                  'type' => $employmentType,

                  'column_24_800_2000'      => $column_24_800_2000,
                  'column_24_2000_7999'     => $column_24_2000_7999,
                  'column_24_8000_20000'    => $column_24_8000_20000,
                  'column_24_20000_40000'   => $column_24_20000_40000,
                  'column_24_40001_80000'   => $column_24_40001_80000,
                  'column_24_80001_120000'  => $column_24_80001_120000,
                  'column_24_120001_160000' => $column_24_120001_160000,
                  'column_24_160001_240000' => $column_24_160001_240000,

                  'column_30_800_2000'      => $column_30_800_2000,
                  'column_30_2000_7999'     => $column_30_2000_7999,
                  'column_30_8000_20000'    => $column_30_8000_20000,
                  'column_30_20000_40000'   => $column_30_20000_40000,
                  'column_30_40001_80000'   => $column_30_40001_80000,
                  'column_30_80001_120000'  => $column_30_80001_120000,
                  'column_30_120001_160000' => $column_30_120001_160000,
                  'column_30_160001_240000' => $column_30_160001_240000,

                  'column_36_800_2000'      => $column_36_800_2000,
                  'column_36_2000_7999'     => $column_36_2000_7999,
                  'column_36_8000_20000'    => $column_36_8000_20000,
                  'column_36_20000_40000'   => $column_36_20000_40000,
                  'column_36_40001_80000'   => $column_36_40001_80000,
                  'column_36_80001_120000'  => $column_36_80001_120000,
                  'column_36_120001_160000' => $column_36_120001_160000,
                  'column_36_160001_240000' => $column_36_160001_240000,


                  'column_48_800_2000'      => $column_48_800_2000,
                  'column_48_2000_7999'     => $column_48_2000_7999,
                  'column_48_8000_20000'    => $column_48_8000_20000,
                  'column_48_20000_40000'   => $column_48_20000_40000,
                  'column_48_40001_80000'   => $column_48_40001_80000,
                  'column_48_80001_120000'  => $column_48_80001_120000,
                  'column_48_120001_160000' => $column_48_120001_160000,
                  'column_48_160001_240000' => $column_48_160001_240000,

                  'column_60_800_2000'      => $column_60_800_2000,
                  'column_60_2000_7999'     => $column_60_2000_7999,
                  'column_60_8000_20000'    => $column_60_8000_20000,
                  'column_60_20000_40000'   => $column_60_20000_40000,
                  'column_60_40001_80000'   => $column_60_40001_80000,
                  'column_60_80001_120000'  => $column_60_80001_120000,
                  'column_60_120001_160000' => $column_60_120001_160000,
                  'column_60_160001_240000' => $column_60_160001_240000,

                  'column_72_800_2000'      => $column_72_800_2000,
                  'column_72_2000_7999'     => $column_72_2000_7999,
                  'column_72_8000_20000'    => $column_72_8000_20000,
                  'column_72_20000_40000'   => $column_72_20000_40000,
                  'column_72_40001_80000'   => $column_72_40001_80000,
                  'column_72_80001_120000'  => $column_72_80001_120000,
                  'column_72_120001_160000' => $column_72_120001_160000,
                  'column_72_160001_240000' => $column_72_160001_240000
              ]);

            return Inertia::render(
                'InsertTax',
            );
        }

        /**
         * Display the specified resource.
         */
        public function show(Tax $tax)
        {
            //
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Tax $tax)
        {
            //
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateTaxRequest $request, Tax $tax)
        {
            //
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(Tax $tax)
        {
            //
        }
    }
