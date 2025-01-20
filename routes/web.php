<?php

use Inertia\Inertia;
use App\Models\Artikel;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\KaryaController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StrukturController;
use App\Http\Controllers\VisiMisiController;

Route::get('/', function () {
    $artikels = Artikel::with('user')->paginate(12);
    return Inertia::render('Welcome', [
        'artikels' => $artikels,]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'is_verifikasi_email'])->name('dashboard');

Route::middleware('auth', 'is_verifikasi_email')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('Blog')->group(function () {
        Route::prefix('karya-pelajar')->group(function () {
            Route::get('index', [KaryaController::class, 'index'])->name('Karya.index');
        });
        Route::prefix('Berita')->group(function () {
            Route::get('index', [KaryaController::class, 'berita'])->name('berita.index');
        });
        Route::prefix('Opini')->group(function () {
            Route::get('index', [KaryaController::class, 'opini'])->name('opini.index');
        });
        Route::prefix('Esai')->group(function () {
            Route::get('index', [KaryaController::class, 'esai'])->name('esai.index');
        });
        Route::get('/artikels/index', [ArtikelController::class, 'index'])->name('Blog.index.admin');
        Route::get('/artikels/create', [ArtikelController::class, 'create'])->name('artikels.create');
        Route::post('/artikels', [ArtikelController::class, 'store'])->name('artikels.store');
        Route::get('/artikels/{id}', [ArtikelController::class, 'show'])->name('artikels.show');
        Route::get('/artikels/{id}/edit', [ArtikelController::class, 'edit'])->name('artikels.edit');
        Route::post('/artikels/update/{id}', [ArtikelController::class, 'update'])->name('artikels.update');
        Route::delete('/artikels/{id}', [ArtikelController::class, 'destroy'])->name('artikels.destroy');
    });
});

Route::get('/detail/blog/{id}', [BlogController::class, 'show'])->name('DetailBlog');
Route::get('/about-us', [AboutController::class, 'index'])->name('about');
Route::get('/visi-misi', [VisiMisiController::class, 'index'])->name('visi-misi');
Route::get('/struktur-organisasi', [StrukturController::class, 'index'])->name('struktur-organisasi');
Route::get('/contact', function () {
    return inertia('Contact');
})->name('contact');
Route::post('/contact/submit', [AboutController::class, 'store'])->name('contact.submit');

require __DIR__ . '/auth.php';
