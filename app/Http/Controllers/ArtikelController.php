<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Artikel;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ArtikelController extends Controller
{
    public function create()
    {
        return Inertia::render('Blog/create');
    }

    public function store(Request $request)
    {
        $kategori = Kategori::where('slug', $request->input('kategori_id'))->first();
        $id = $kategori->id;
        Artikel::insert($request, $id);
        return redirect()->route('Blog.index.admin')->with('status', "Terimakasih, artikel anda dengan kategori $kategori->name telah di simpan");
    }

    public function index()
    {
        $user = Auth::user();
        $artikels = Artikel::with('user')->where('user_id', $user->id)->paginate(12);
        return Inertia::render('Blog/index', [
            'artikels' => $artikels,
        ]);
    }

    public function show($id)
    {
        $artikel = Artikel::findOrFail($id);
        return Inertia::render('Blog/Show', [
            'artikel' => $artikel,
        ]);
    }

    public function edit($id)
    {
        $artikel = Artikel::findOrFail($id);
        $kategories = Kategori::whereNotIn('name', ['Kegiatan Rutin', 'Event Khusus'])->get();
        return Inertia::render('Blog/Edit', [
            'artikel' => $artikel,
            'kategories' => $kategories
        ]);
    }

    public function update(Request $request, $id)
    {
        $artikel = Artikel::edit($request, $id);
        return redirect()->route('Blog.index.admin')->with('success', "Artikel dengan judul $artikel->name berhasil diperbarui!");
    }

    public function destroy($id){
        $artikel = Artikel::findOrFail($id);
        if ($artikel->thumbnail) {
            Storage::disk('public')->delete('thumbnailarticle/' . $artikel->thumbnail);
        }
        $artikel->delete();
        return redirect()->route('Blog.index.admin')->with('success', 'Artikel dan thumbnail berhasil dihapus');
    }

}
