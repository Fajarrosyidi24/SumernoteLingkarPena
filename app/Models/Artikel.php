<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Artikel extends Model
{
    use HasFactory;
    protected $table = 'artikels';
    protected $fillable = [
        'title',
        'content',
        'thumbnail',
        'kategori_id',
        'user_id',
    ];
    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'kategori_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public static function insert($request, $id)
    {
        $fotoFile = $request->file('thumbnail');
        $namaFileUnik = Str::uuid() . '_' . time() . '_' . $fotoFile->getClientOriginalName();
        $fotoPath = $fotoFile->storeAs('public/thumbnailarticle', $namaFileUnik);
        return self::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'thumbnail' => $namaFileUnik,
            'kategori_id' => $id,
            'user_id' => Auth::user()->id,
        ]);
    }

    public static function edit($request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255', // Tambahkan required jika wajib diisi
            'content' => 'required|string',
            'kategori_id' => 'required|exists:kategoris,id',
            'thumbnail' => 'nullable|file|mimes:jpg,jpeg,png|max:2048', // Validasi file dan ukuran maksimal (2MB)
        ]);

        $artikel = self::findOrFail($id);

        $artikel->title = $validated['title'];
        $artikel->content = $validated['content'];
        $artikel->kategori_id = $validated['kategori_id'];

        if ($request->hasFile('thumbnail')) {
            if ($artikel->thumbnail) {
                Storage::delete('public/thumbnailarticle/' . $artikel->thumbnail);
            }
            $fotoFile = $request->file('thumbnail');
            $namaFileUnik = Str::uuid() . '_' . time() . '_' . $fotoFile->getClientOriginalName();
            $fotoPath = $fotoFile->storeAs('public/thumbnailarticle', $namaFileUnik);
            $artikel->thumbnail = $namaFileUnik;
        }

        $artikel->save();
        return $artikel;
    }
}
