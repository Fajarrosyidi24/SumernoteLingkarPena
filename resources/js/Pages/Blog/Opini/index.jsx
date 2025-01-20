import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage, Link, router } from '@inertiajs/react';
import '../../../../../public/css/app.css';

function Index() {
    const { artikels, flash } = usePage().props;

    return (
        <div>
            <Head title="Daftar Artikel Opini" />
            <AuthenticatedLayout>
                <div className="container mt-4">
                    <h1 className="mb-4">Daftar Artikel / Opini</h1>

                    {flash?.status && (
                        <div className="alert alert-success">
                            {flash.status}
                        </div>
                    )}

                    {/* Jika Tidak Ada Artikel */}
                    {artikels?.data?.length === 0 ? (
                        <div className="alert alert-info">
                            Anda belum menginputkan opini apapun.
                        </div>
                    ) : (
                        <>
                            {/* Daftar Artikel */}
                            <div className="row g-3">
                                {artikels.data.map((artikel) => (
                                    <div key={artikel.id} className="col-md-4">
                                        <div className="card shadow-sm">
                                            <img
                                                src={
                                                    artikel.thumbnail
                                                        ? `/storage/thumbnailarticle/${artikel.thumbnail}`
                                                        : 'https://via.placeholder.com/150?text=No+Image'
                                                }
                                                className="card-img-top"
                                                alt={artikel.title}
                                                style={{ height: '150px', objectFit: 'cover' }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-truncate">{artikel.title}</h5>
                                                <p className="card-text mb-1">
                                                    <small className="text-muted">
                                                        Penulis: {artikel.user?.name || 'Anonim'}
                                                    </small>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        <div className='m-auto'>Ditambahkan Pada : {new Date(artikel.created_at).toLocaleDateString()}</div>
                                                        <div className='m-auto'>Diedit Pada : {new Date(artikel.updated_at).toLocaleDateString()}</div>
                                                    </small>
                                                </p>

                                                {/* Tombol Aksi */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <Link
                                                        href={route('artikels.show', artikel.id)}
                                                        className="btn btn-success"
                                                        title="View"
                                                    >
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link
                                                        href={route('artikels.edit', artikel.id)}
                                                        className="btn btn-warning"
                                                        title="Edit"
                                                    >
                                                        <i className="bi bi-pencil"></i>
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => handleDelete(artikel.id)}
                                                        title="Delete"
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigasi Pagination */}
                            <div className="mt-4 d-flex justify-content-center">
                                {/* Tombol First */}
                                {artikels.current_page > 1 && (
                                    <Link href={`${artikels.path}?page=1`} className="btn btn-primary">
                                        First
                                    </Link>
                                )}

                                {/* Tombol Previous */}
                                {artikels.prev_page_url && (
                                    <Link href={artikels.prev_page_url} className="btn btn-secondary me-2">
                                        Previous
                                    </Link>
                                )}

                                {/* Tombol Nomor Halaman */}
                                {Array.from({ length: artikels.last_page }, (_, index) => index + 1).map((page) => (
                                    <Link
                                        key={page}
                                        href={`${artikels.path}?page=${page}`}
                                        className={`btn ${page === artikels.current_page ? 'btn-primary' : 'btn-outline-primary'
                                            } btn-sm me-2`}
                                    >
                                        {page}
                                    </Link>
                                ))}

                                {/* Tombol Next */}
                                {artikels.next_page_url && (
                                    <Link href={artikels.next_page_url} className="btn btn-secondary me-2">
                                        Next
                                    </Link>
                                )}

                                {/* Tombol Last */}
                                {artikels.current_page < artikels.last_page && (
                                    <Link href={`${artikels.path}?page=${artikels.last_page}`} className="btn btn-outline-primary btn-sm">
                                        Last
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </AuthenticatedLayout>
        </div>
    );
}

function handleDelete(id) {
    if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
        router.delete(route('artikels.destroy', id), {
            onSuccess: () => {
                alert('Artikel berhasil dihapus!');
            },
            onError: (errors) => {
                console.error(errors);
                alert('Gagal menghapus artikel.');
            },
        });
    }
}

export default Index;
