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
        protected $fillable = [
            'id_request_pratica',
            'id_user_insert',
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
            'credit_rating_value',
            'credit_rating_description',
            'credit_rating_limit_value',
            'credit_rating_limit_currency',
            'credit_rating_provider_value',
            'created_at',
            'updated_at',
        ];


        public function pratiche_request(): BelongsTo
        {
            return $this->belongsTo(RequestPratica::class, 'id_request_pratica');
        }

        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class, 'id_user');
        }
    }
