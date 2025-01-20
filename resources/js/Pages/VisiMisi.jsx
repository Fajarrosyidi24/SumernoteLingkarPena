import React from 'react'
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import '../../../public/css/style.css/'
import Footer from '@/Components/Footer';

function VisiMisi() {
    return (
        <div>
            <>
                <Head title='Visi&Misi' />
                <Navbar />
                <section id="visi-misi" className="py-6 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-4">Visi dan Misi Kami</h2>

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
                                    "Mewujudkan generasi pelajar yang berkarakter, kreatif, dan berintegritas, serta mampu berkontribusi positif bagi agama, bangsa, dan masyarakat."
                                </p>
                            </div>
                        </div>

                        {/* Bagian Misi */}
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="fw-bold">Misi Kami</h3>
                                <ul>
                                    <li>Membangun pelajar yang berwawasan keislaman dan kebangsaan.</li>
                                    <li>Menyediakan wadah untuk pengembangan kreativitas, literasi, dan keterampilan.</li>
                                    <li>Mendorong budaya belajar yang inovatif dan berbasis kolaborasi.</li>
                                    <li>Menghadirkan komunitas yang mendukung pertumbuhan intelektual dan spiritual.</li>
                                    <li>Memperkuat jaringan pelajar untuk berbagi ilmu, pengalaman, dan inspirasi.</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-4">
                                <img
                                    src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                                    alt="Misi Kami"
                                    className="img-fluid rounded-3 shadow-sm"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        </div>
    )
}

export default VisiMisi
