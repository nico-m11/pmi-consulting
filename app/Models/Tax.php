<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    class Tax extends Model
    {
        use HasFactory;

        protected $fillable = [
            'id',
            'type',

            'column_24_800_2000',
            'column_24_2000_7999',
            'column_24_8000_20000',
            'column_24_20000_40000',
            'column_24_40001_80000',
            'column_24_80001_120000',
            'column_24_120001_160000',
            'column_24_160001_240000',

            'column_30_800_2000',
            'column_30_2000_7999',
            'column_30_8000_20000',
            'column_30_20000_40000',
            'column_30_40001_80000',
            'column_30_80001_120000',
            'column_30_120001_160000',
            'column_30_160001_240000',

            'column_36_800_2000',
            'column_36_2000_7999',
            'column_36_8000_20000',
            'column_36_20000_40000',
            'column_36_40001_80000',
            'column_36_80001_120000',
            'column_36_120001_160000',
            'column_36_160001_240000',


            'column_48_800_2000',
            'column_48_2000_7999',
            'column_48_8000_20000',
            'column_48_20000_40000',
            'column_48_40001_80000',
            'column_48_80001_120000',
            'column_48_120001_160000',
            'column_48_160001_240000',

            'column_60_800_2000',
            'column_60_2000_7999',
            'column_60_8000_20000',
            'column_60_20000_40000',
            'column_60_40001_80000',
            'column_60_80001_120000',
            'column_60_120001_160000',
            'column_60_160001_240000',

            'column_72_800_2000',
            'column_72_2000_7999',
            'column_72_8000_20000',
            'column_72_20000_40000',
            'column_72_40001_80000',
            'column_72_80001_120000',
            'column_72_120001_160000',
            'column_72_160001_240000'
        ];

        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class, 'id_user');
        }
    }
