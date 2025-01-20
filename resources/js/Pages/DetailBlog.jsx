import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import '../../../public/css/style.css';
import Footer from '@/Components/Footer';

function DetailBlog({ artikel, url }) {
    return (
        <div>
            <Head title={`Detail Blog - ${artikel.title}`} />
            <Navbar />
            <section id="detailblog" className="py-6 container col-xxl-10 d-flex justify-content-center m-6">
                <div className="card col-xxl-10">
                    <p className="mb-4 m-3">
                        <a href="/" className="text-decoration-none text-dark mt-5">Beranda</a> / Blog / {artikel.title}
                    </p>
                    <h3 className="fw-bold display-4 m-3">{artikel.title}</h3>
                    <div className="blog-info m-3">
                        {/* Nama Penulis */}
                        <div className="blog-author">
                            <strong>Penulis:</strong> {artikel.user?.name || 'anonim'}
                        </div>

                        {/* Tanggal Dipublikasikan */}
                        <div className="blog-published">
                            <strong>Tanggal Dipublikasikan:</strong>{' '}
                            {new Date(artikel.created_at).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </div>

                        {/* Tanggal Terakhir Diedit */}
                        {artikel.updated_at && (
                            <div className="blog-updated">
                                <strong>Terakhir Diedit:</strong>{' '}
                                {new Date(artikel.updated_at).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </div>
                        )}
                    </div>

                    <div className='m-3'>

                        <div
                            dangerouslySetInnerHTML={{ __html: artikel.content }}
                        ></div>

                        <div className="mt-5 mb-3">
                            <h5><strong>Share this Article:</strong></h5>
                            <div>
                                {/* Tombol Share ke Facebook */}
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn me-2 btn-info"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                {/* Tombol Share ke Twitter */}
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
                                        artikel.title
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-scondary me-2"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>

                                {/* Tombol Share ke WhatsApp */}
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(artikel.title)}%20${encodeURIComponent(url)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success"
                                >
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default DetailBlog;
