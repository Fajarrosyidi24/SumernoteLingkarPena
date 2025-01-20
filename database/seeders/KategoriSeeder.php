<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kategoris')->insert([
            [
                'name' => 'Karya Pelajar',
                'slug' => 'karya-pelajar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Berita',
                'slug' => 'berita',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Opini',
                'slug' => 'opini',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Esai',
                'slug' => 'esai',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kegiatan Rutin',
                'slug' => 'kegiatan-rutin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Event Khusus',
                'slug' => 'event-khusus',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
