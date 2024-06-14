<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Pratiche extends Model
    {
        use HasFactory;

        public function index(): array
        {
            $data = [
                [
                    'A' => 'paco',
                    'B' => 'ccocs',
                    'C' => 'dsjkda',
                    'D' => 'dnsjk',
                    'N' => 'nicola'
                ],
                [
                    'C' => 'nsjdks',
                    'B' => 'nskdjha'
                ],
                [
                    'C' => 'nsjdbh',
                    'B' => 'mskjd'
                ],
            ];

            return $data;
        }
    }
