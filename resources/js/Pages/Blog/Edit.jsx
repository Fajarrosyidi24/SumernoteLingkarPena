import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import JoditEditor from 'jodit-react';

export default function Edit({ artikel, kategories }) {
    const { data, setData, post, processing, errors } = useForm({
        title: artikel.title,
        content: artikel.content,
        kategori_id: artikel.kategori_id,
        thumbnail: null,
    });

    const editor = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data); // Debugging
        post(route('artikels.update', artikel.id)); // Kirim data
    };

    return (
        <>
            <Head title="Edit Artikel" />
            <AuthenticatedLayout>
                <div className="container mt-4">
                    <h1 className="mb-4">Edit Artikel</h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        {/* Judul Artikel */}
                        <div className="mb-3">
                            <InputLabel htmlFor="title" value="Judul Artikel" />
                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title || ''}
                                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                onChange={(e) => setData((prevData) => ({
                                    ...prevData,
                                    title: e.target.value,
                                }))}
                                required
                            />
                            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                        </div>

                        {/* Kategori */}
                        <div className="mb-3">
                            <InputLabel htmlFor="kategori" value="Kategori" />
                            <select
                                id="kategori"
                                name="kategori_id"
                                className={`form-select ${errors.kategori_id ? 'is-invalid' : ''}`}
                                value={data.kategori_id || ''}
                                onChange={(e) => setData((prevData) => ({
                                    ...prevData,
                                    kategori_id: e.target.value,
                                }))}
                                required
                            >
                                <option value="">Pilih Kategori</option>
                                {kategories.map((kategori) => (
                                    <option key={kategori.id} value={kategori.id}>
                                        {kategori.name}
                                    </option>
                                ))}
                            </select>
                            {errors.kategori_id && <div className="invalid-feedback">{errors.kategori_id}</div>}
                        </div>

                        {/* Konten Artikel */}
                        <div className="mb-3">
                            <InputLabel htmlFor="content" value="Konten Artikel" />
                            <JoditEditor
                                ref={editor}
                                value={data.content || ''}
                                onBlur={(newContent) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        content: newContent,
                                    }))
                                }
                                className="form-control"
                                name="content"
                                required
                            />
                        </div>

                        {/* Thumbnail */}
                        <div className="mb-3">
                            <InputLabel htmlFor="thumbnail" value="Thumbnail" />
                            <input
                                type="file"
                                id="thumbnail"
                                name="thumbnail"
                                className={`form-control ${errors.thumbnail ? 'is-invalid' : ''}`}
                                onChange={(e) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        thumbnail: e.target.files[0],
                                    }))
                                }
                            />
                            {errors.thumbnail && <div className="invalid-feedback">{errors.thumbnail}</div>}
                        </div>

                        {/* Tombol */}
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success" disabled={processing}>
                                <i className="bi bi-check-circle me-1"></i> Simpan Perubahan
                            </button>
                            <a href={route('Blog.index.admin')} className="btn btn-secondary">
                                <i className="bi bi-arrow-left-circle me-1"></i> Kembali
                            </a>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
