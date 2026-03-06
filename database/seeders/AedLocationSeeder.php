<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AedLocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 入れる前にデータをリセット
        DB::table('aed_locations')->truncate();

        $csvFile_path = database_path('seeders/shimada.csv');

        if(!file_exists($csvFile_path)) {
            echo 'CSVファイルが見つかりません: ' . $csvFile_path . '\n';
            return;
        }

        $csvFile = fopen($csvFile_path, 'r');

        fgetcsv($csvFile);
        
        while(($data = fgetcsv($csvFile)) !== false) {
            // $data[0]: 名称, $data[4]: 市区町村名, $data[6]: 住所, $data[7]: 緯度, $data[8]: 経度
            // 島田市役所：福祉課カウンター,"",福祉課カウンター,静岡県,島田市,"",島田市中央町1-1,34.836439,138.176044,"","","","","",""

            if (empty($data[7]) || empty($data[8])) {
                continue;
            }

            DB::table('aed_locations')->insert([
                'facility_name' => $data[0],
                'city_name' => $data[4],
                'address' => $data[6],
                'latitude' => $data[7],
                'longitude' => $data[8],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        fclose($csvFile);
    }
}
