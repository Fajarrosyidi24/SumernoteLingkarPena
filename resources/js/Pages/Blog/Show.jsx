import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

function Show({ artikel }) {
    return (
        <AuthenticatedLayout>
            <Head title={artikel.title} />
            <div className="container mt-4">
                {/* Judul Artikel */}
                <h1>{artikel.title}</h1>

                {/* Informasi Penulis dan Tanggal */}
                <p className="card-text">
                    <small className="text-muted">
                        Penulis: {artikel.user?.name || 'Anonim'}
                    </small>
                </p>
                <p className="card-text">
                    <small className="text-muted">
                        Tanggal: {new Date(artikel.created_at).toLocaleDateString()}
                    </small>
                </p>

                {/* Gambar Artikel */}
                <div className="card mb-4">
                    <img
                        src={`/storage/thumbnailarticle/${artikel.thumbnail}`}
                        className="card-img-top"
                        alt={artikel.title}
                        style={{
                            height: '300px',
                            objectFit: 'cover',
                            borderTopLeftRadius: '0.25rem',
                            borderTopRightRadius: '0.25rem',
                        }}
                    />
                    <div className="card-body">
                        {/* Konten Artikel */}
                        <div
                            dangerouslySetInnerHTML={{ __html: artikel.content }}
                        ></div>
                    </div>
                </div>

                {/* Tombol Edit dan Kembali */}
                <div className="d-flex justify-content-between">
                    <Link
                        href={route('artikels.edit', artikel.id)}
                        className="btn btn-warning btn-sm"
                        title="Edit"
                    >
                        <i className="bi bi-pencil"></i> Edit
                    </Link>

                    <Link
                        href={route('Blog.index.admin')}
                        className="btn btn-secondary btn-sm"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Show;
