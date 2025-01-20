import React from 'react';
import { Link, usePage } from '@inertiajs/react';


function Blog() {
    const { artikels, flash } = usePage().props;

    return (
        <div>
            <section id="blog" className="py-5 bg-light">
                <div className="container col-xxl-10">
                    <h2 className="dashboard-title text-center mb-5">BLOG</h2>
                    <div className="row">
                        {/* Kondisi jika tidak ada artikel */}
                        {artikels?.data?.length === 0 ? (
                            <div className="alert alert-info text-center">
                                Anda belum menginputkan artikel apapun.
                            </div>
                        ) : (
                            <>
                                {/* Tampilkan setiap artikel */}
                                {artikels.data.map((artikel) => (
                                    <div key={artikel.id} className="col-lg-4 col-md-6 mb-4">
                                        <Link
                                            href={route('DetailBlog', artikel.id)}
                                            className="text-decoration-none text-dark"
                                        >
                                            <article className="card shadow-sm h-100 border-0">
                                                <img
                                                    src={
                                                        artikel.thumbnail
                                                            ? `/storage/thumbnailarticle/${artikel.thumbnail}`
                                                            : 'https://via.placeholder.com/350x200?text=No+Image'
                                                    }
                                                    alt={artikel.title}
                                                    className="img-fluid card-img-top rounded-top"
                                                />
                                                <div className="card-body">
                                                    <h3 className="fw-bold text-center">{artikel.title}</h3>
                                                    <p className="text-center text-muted mb-2">
                                                        Penulis: {artikel.user?.name}
                                                    </p>
                                                    <p className="text-center text-muted mb-0">
                                                        Ditambahkan pada:{' '}
                                                        {new Date(artikel.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </article>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Navigasi Pagination */}
                    {artikels?.data?.length > 0 && (
                        <div className="mt-4 d-flex justify-content-center">
                            {/* Tombol First */}
                            {artikels.current_page > 1 && (
                                <Link href={`${artikels.path}?page=1`} className="btn btn-primary me-2">
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
                                    className={`btn ${
                                        page === artikels.current_page ? 'btn-primary' : 'btn-outline-primary'
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
                                <Link
                                    href={`${artikels.path}?page=${artikels.last_page}`}
                                    className="btn btn-outline-primary btn-sm"
                                >
                                    Last
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Blog;
