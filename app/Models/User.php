<?php

    namespace App\Models;

    use App\Notifications\ResetPasswordNotification;
    use App\Notifications\VerifyEmailNotification;
    use Illuminate\Auth\MustVerifyEmail;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;
    use Illuminate\Foundation\Auth\User as Authenticatable;
    use Illuminate\Notifications\Notifiable;

    class User extends Authenticatable implements \Illuminate\Contracts\Auth\MustVerifyEmail
    {
        use HasFactory, Notifiable, MustVerifyEmail;

        /**
         * The attributes that are mass assignable.
         *
         * @var array<int, string>
         */
        protected $fillable = [
            'name',
            'email',
            'password',
            'id_user_role'
        ];

        /**
         * The attributes that should be hidden for serialization.
         *
         * @var array<int, string>
         */
        protected $hidden = [
            'password',
            'remember_token',
        ];

        /**
         * Get the attributes that should be cast.
         *
         * @return array<string, string>
         */
        protected function casts(): array
        {
            return [
                'email_verified_at' => 'datetime',
                'password'          => 'hashed',
            ];
        }

        public function pratiche_request(): BelongsTo
        {
            return $this->belongsTo(RequestPratica::class, 'id_request_pratica');
        }

        public function aziende(): BelongsTo
        {
            return $this->belongsTo(Aziende::class, 'id_aziende');
        }

        public function sendPasswordResetNotification($token): void
        {
            $this->notify(new ResetPasswordNotification($token));
        }

    }
