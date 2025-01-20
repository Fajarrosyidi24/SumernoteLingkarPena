<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Artikel;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class KaryaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kategori = Kategori::where('slug', 'karya-pelajar')->first();
        $user = Auth::user();
        $artikels = Artikel::with('user')->where('user_id', $user->id)->where('kategori_id', $kategori->id)->paginate(12);
        return Inertia::render('Blog/Karya/index', [
            'artikels' => $artikels,
        ]);
    }

    public function berita()
    {
        $kategori = Kategori::where('slug', 'berita')->first();
        $user = Auth::user();
        $artikels = Artikel::with('user')->where('user_id', $user->id)->where('kategori_id', $kategori->id)->paginate(12);
        return Inertia::render('Blog/Berita/index', [
            'artikels' => $artikels,
        ]);
    }

    public function opini()
    {
        $kategori = Kategori::where('slug', 'opini')->first();
        $user = Auth::user();
        $artikels = Artikel::with('user')->where('user_id', $user->id)->where('kategori_id', $kategori->id)->paginate(12);
        return Inertia::render('Blog/Opini/index', [
            'artikels' => $artikels,
        ]);
    }

    public function esai()
    {
        $kategori = Kategori::where('slug', 'esai')->first();
        $user = Auth::user();
        $artikels = Artikel::with('user')->where('user_id', $user->id)->where('kategori_id', $kategori->id)->paginate(12);
        return Inertia::render('Blog/Esai/index', [
            'artikels' => $artikels,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
