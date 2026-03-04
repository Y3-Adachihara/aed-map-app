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
        Schema::create('aed_locations', function (Blueprint $table) {
            $table->id();
            
            $table->string('facility_name');    // 施設名
            $table->string('city_name')->nullable();    // 市町村名
            $table->string('address')->nullable(); // 住所

            $table->decimal('latitude', 10, 7); // 緯度
            $table->decimal('longitude', 10, 7); // 経度

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aed_locations');
    }
};
