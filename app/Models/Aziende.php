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
    class Aziende extends Model
    {
        use HasFactory;

        protected $fillable = [
            'correlation_id',
            'id_company_received',
            'country',
            'reg_no',
            'vat_no',
            'safe_no',
            'name',
            'address_complete',
            'address_simple',
            'city',
            'postal_code',
            'province',
            'house_number',
            'type_azienda',
            'phone_number',
            'activityCode',
            'created_at',
            'updated_at'
        ];



        public function pratiche(): BelongsTo
        {
            return $this->belongsTo(Pratiche::class, 'id_pratica');
        }

        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class, 'id_user');
        }
    }
