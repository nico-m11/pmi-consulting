<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    class Pratiche extends Model
    {
        use HasFactory;
        protected $fillable = ['name'];

        public function aziende(): BelongsTo
        {
            return $this->belongsTo(Aziende::class, 'id_azienda');
        }

        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class, 'id_user');
        }
    }
