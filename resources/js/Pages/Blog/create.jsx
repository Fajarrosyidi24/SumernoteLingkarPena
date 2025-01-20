import React, { useRef, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import '../../../../public/css/app.css';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import JoditEditor from 'jodit-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '', // Pastikan konten diinisialisasi di sini
        kategori_id: '',
        thumbnail: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('artikels.store'));
    };

    const editor = useRef(null);

    return (
        <>
            <Head title="Buat Artikel Baru" />
            <AuthenticatedLayout>
                <div className="container mt-4">
                    <h1 className="mb-4">Buat Artikel Baru</h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                            <InputLabel htmlFor="title" className="form-label" value="Judul Artikel" />
                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                autoComplete="off"
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <InputLabel htmlFor="kategori" className="form-label" value="Kategori" />
                            <select
                                id="kategori"
                                name="kategori_id"
                                className={`form-select ${errors.kategori_id ? 'is-invalid' : ''}`}
                                value={data.kategori_id}
                                onChange={(e) => setData('kategori_id', e.target.value)}
                                required
                            >
                                <option value="">Pilih Kategori</option>
                                <option value="berita">Berita</option>
                                <option value="opini">Opini</option>
                                <option value="esai">Esai</option>
                                <option value="karya-pelajar">Karya Pelajar</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <InputLabel htmlFor="content" className="form-label" value="Konten Artikel" />
                            <JoditEditor
                                ref={editor}
                                value={data.content}
                                onBlur={(newContent) => setData('content', newContent)} // Update useForm dengan konten baru
                                className="form-control"
                                name="content"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <InputLabel htmlFor="thumbnail" className="form-label" value="Thumbnail" />
                            <input
                                type="file"
                                id="thumbnail"
                                name="thumbnail"
                                className={`form-control ${errors.thumbnail ? 'is-invalid' : ''}`}
                                onChange={(e) => setData('thumbnail', e.target.files[0])}
                                required
                            />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success" disabled={processing}>
                                <i className="bi bi-check-circle me-1"></i> Simpan Artikel
                            </button>
                            <a href="#" className="btn btn-secondary">
                                <i className="bi bi-arrow-left-circle me-1"></i> Kembali
                            </a>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
