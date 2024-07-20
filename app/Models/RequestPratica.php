<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    class RequestPratica extends Model
    {
        protected $fillable = [
            'type_richiesta',
            'volore_richiesta'
        ];

        public function aziende(): BelongsTo
        {
            return $this->belongsTo(Aziende::class, 'id_aziende');
        }

        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class, 'id_user');
        }
    }
