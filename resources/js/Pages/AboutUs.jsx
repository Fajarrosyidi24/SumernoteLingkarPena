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
                                src="/img/1_20240212_220236_0000-removebg-preview (1).png"
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
                                src="/img/C01.png"
                                alt="Misi Kami"
                                className="img-fluid rounded-3 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Bagian Komunitas */}
                    <div className="row mb-5">
                        <div className="col-md-4 mb-4">
                            <img
                                src="/img/Simpel retro media logo.png"
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

                    {/* Kontak dengan Ikon WhatsApp dan Instagram */}
                    <div className="text-center mt-5">
                        <h4>Hubungi Kami</h4>
                        <div className="d-flex justify-content-center">
                            <a href="https://wa.me/+6285749731625" target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                            <a href="https://www.instagram.com/pelajarnu_glenmore" target="_blank" rel="noopener noreferrer" className="btn btn-danger mx-2">
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
