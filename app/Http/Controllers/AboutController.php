<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('AboutUs');
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
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
            'message' => 'required',
        ], [
            'name.required' => 'Nama harus diisi!',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter!',
            'email.required' => 'Email harus diisi!',
            'email.email' => 'Harap masukkan email yang valid!',
            'message.required' => 'Pesan harus diisi!',
        ]);

        Mail::to('fishapp73@gmail.com')->send(new ContactMail(
            $validated['name'], 
            $validated['email'], 
            $validated['message']
        ));

        return Inertia::render('Contact', [
            'flash' => [
                'status' => 'Terima kasih! Email Anda telah berhasil dikirim.',
            ]
        ]);
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
