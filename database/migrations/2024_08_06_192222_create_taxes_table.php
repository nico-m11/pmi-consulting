<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //TODO aggiungere campi corretti
        Schema::create('taxes', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('type');

            $table->string('column_24_800_2000');
            $table->string('column_24_2000_7999');
            $table->string('column_24_8000_20000');
            $table->string('column_24_20000_40000');
            $table->string('column_24_40001_80000');
            $table->string('column_24_80001_120000');
            $table->string('column_24_120001_160000');
            $table->string('column_24_160001_240000');

            $table->string('column_30_800_2000');
            $table->string('column_30_2000_7999');
            $table->string('column_30_8000_20000');
            $table->string('column_30_20000_40000');
            $table->string('column_30_40001_80000');
            $table->string('column_30_80001_120000');
            $table->string('column_30_120001_160000');
            $table->string('column_30_160001_240000');

            $table->string('column_36_800_2000');
            $table->string('column_36_2000_7999');
            $table->string('column_36_8000_20000');
            $table->string('column_36_20000_40000');
            $table->string('column_36_40001_80000');
            $table->string('column_36_80001_120000');
            $table->string('column_36_120001_160000');
            $table->string('column_36_160001_240000');


            $table->string('column_48_800_2000');
            $table->string('column_48_2000_7999');
            $table->string('column_48_8000_20000');
            $table->string('column_48_20000_40000');
            $table->string('column_48_40001_80000');
            $table->string('column_48_80001_120000');
            $table->string('column_48_120001_160000');
            $table->string('column_48_160001_240000');

            $table->string('column_60_800_2000');
            $table->string('column_60_2000_7999');
            $table->string('column_60_8000_20000');
            $table->string('column_60_20000_40000');
            $table->string('column_60_40001_80000');
            $table->string('column_60_80001_120000');
            $table->string('column_60_120001_160000');
            $table->string('column_60_160001_240000');

            $table->string('column_72_800_2000');
            $table->string('column_72_2000_7999');
            $table->string('column_72_8000_20000');
            $table->string('column_72_20000_40000');
            $table->string('column_72_40001_80000');
            $table->string('column_72_80001_120000');
            $table->string('column_72_120001_160000');
            $table->string('column_72_160001_240000');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tax');
    }
};
