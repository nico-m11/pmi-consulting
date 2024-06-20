<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Aziende extends Model
{
    use HasFactory;
    protected $fillable = ['name'];
    public function pratiche(): BelongsTo
    {
        return $this->belongsTo(Pratiche::class, 'id_pratica');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
