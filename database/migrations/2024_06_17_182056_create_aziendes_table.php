<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration {
        /**
         * Run the migrations.
         */
        public function up(): void
        {
            Schema::create('aziendes', function (Blueprint $table) {
                $table->id()->autoIncrement()->unique();
                $table->string('correlation_id');
                $table->string('id_company_received');
                $table->string('country');
                $table->string('reg_no');
                $table->string('vat_no');
                $table->string('safe_no');
                $table->string('name');
                $table->string('address_complete');
                $table->string('address_simple');
                $table->string('city');
                $table->string('postal_code');
                $table->string('province');
                $table->string('house_number');
                $table->string('type_azienda');
                $table->string('phone_number');
                $table->string('activity_code');
                $table->string('credit_rating_value');
                $table->string('credit_rating_description');
                $table->string('credit_rating_limit_value');
                $table->string('credit_rating_limit_currency');
                $table->string('credit_rating_provider_value');
                $table->dateTime('created_at');
                $table->dateTime('updated_at')->nullable();
            });
        }

        /**
         * Reverse the migrations.
         */
        public function down(): void
        {
            Schema::dropIfExists('aziendes');
        }
    };
