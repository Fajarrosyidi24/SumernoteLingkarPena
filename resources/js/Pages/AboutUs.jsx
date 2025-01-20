import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import '../../../public/css/style.css/'
import Footer from '@/Components/Footer';
function AboutUs() {
    return (
        <>
            <Head title='About Us' />
            <Navbar />
            <section id="about-us" className="py-6 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Tentang Kami</h2>

                    {/* Bagian Visi */}
                    <div className="row mb-5">
                        <div className="col-md-4 mb-4">
                            <img
                                src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                                alt="Visi Kami"
                                className="img-fluid rounded-3 shadow-sm"
                            />
                        </div>
                        <div className="col-md-8">
                            <h3 className="fw-bold">Visi Kami</h3>
                            <p>
                                Membentuk generasi muda yang berilmu, beriman, dan berakhlakul karimah melalui pengembangan potensi pelajar yang kreatif, inovatif, dan berwawasan keislaman. Kami percaya bahwa pelajar adalah agen perubahan yang mampu memberikan kontribusi positif bagi masyarakat.
                            </p>
                        </div>
                    </div>

                    {/* Bagian Misi */}
                    <div className="row mb-5">
                        <div className="col-md-8">
                            <h3 className="fw-bold">Misi Kami</h3>
                            <p>
                                Memberikan wadah bagi pelajar untuk mengembangkan potensi di berbagai bidang, seperti pendidikan, sosial, seni, dan budaya. Kami juga berkomitmen untuk membangun komunitas yang mendukung, di mana pelajar dapat berbagi ide, inspirasi, dan kreativitas mereka.
                            </p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img
                                src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                                alt="Misi Kami"
                                className="img-fluid rounded-3 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Bagian Komunitas */}
                    <div className="row mb-5">
                        <div className="col-md-4 mb-4">
                            <img
                                src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                                alt="Lingkar Pena Pelajar"
                                className="img-fluid rounded-3 shadow-sm"
                            />
                        </div>
                        <div className="col-md-8">
                            <h3 className="fw-bold">Komunitas Kami</h3>
                            <p>
                                Selain berfokus pada pengembangan pelajar, kami juga memiliki <strong>Lingkar Pena Pelajar</strong>, sebuah wadah untuk menyalurkan kreativitas dalam bentuk tulisan seperti artikel, berita, opini, dan esai. Komunitas ini bertujuan untuk meningkatkan budaya literasi sekaligus membangun jaringan pelajar yang saling mendukung dan menginspirasi.
                            </p>
                        </div>
                    </div>

                    {/* Struktur Organisasi */}
                    <div className="row mb-5">
                        <h3 className="text-center mb-4">Struktur Organisasi</h3>
                        <div id="orgCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner text-center">
                                <div className="carousel-item active">
                                    <img
                                        src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                                        className="d-inline-block"
                                        alt="Struktur 1"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                                        className="d-inline-block"
                                        alt="Struktur 2"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                                        className="d-inline-block"
                                        alt="Struktur 3"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Tombol Navigasi */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#orgCarousel"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                    style={{ color: 'black', fontSize: '24px' }}
                                >
                                    <i className="bi bi-arrow-left-circle"></i>
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#orgCarousel"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                    style={{ color: 'black', fontSize: '24px' }}
                                >
                                    <i className="bi bi-arrow-right-circle"></i>
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    {/* Kontak dengan Ikon WhatsApp dan Instagram */}
                    <div className="text-center mt-5">
                        <h4>Hubungi Kami</h4>
                        <div className="d-flex justify-content-center">
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-danger mx-2">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default AboutUs;
