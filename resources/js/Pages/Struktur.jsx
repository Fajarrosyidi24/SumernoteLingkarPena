import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import '../../../public/css/style.css';
import Footer from '@/Components/Footer';

function Struktur() {
    const ipnu = [
        { jabatan: 'Ketua', nama: 'Ahmad Rizky' },
        { jabatan: 'Wakil Ketua', nama: 'Muhammad Arif' },
        { jabatan: 'Sekretaris', nama: 'Siti Nurhaliza' },
        { jabatan: 'Bendahara', nama: 'Fikri Alamsyah' },
    ];

    const ippnu = [
        { jabatan: 'Ketua', nama: 'Aisyah Putri' },
        { jabatan: 'Wakil Ketua', nama: 'Siti Aminah' },
        { jabatan: 'Sekretaris', nama: 'Nabila Zahra' },
        { jabatan: 'Bendahara', nama: 'Rizka Amelia' },
    ];

    return (
        <div>
            <>
                <Head title="Struktur" />
                <Navbar />
                <section id="struktur-organisasi" className="py-6 bg-light">
                    <div className="container">
                        {/* Sub-Bagian IPNU */}
                        <div className="mb-5">
                            <h3 className="fw-bold text-center mb-4">Struktur Organisasi IPNU</h3>
                            <div className="row">
                                {ipnu.map((item, index) => (
                                    <div key={index} className="col-md-6 mb-4">
                                        <div className="card bg-transparent shadow-sm" style={{ border: 'none', backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px' }}>
                                            <div className="card-body text-center">
                                                <h5 className="fw-bold">{item.jabatan}</h5>
                                                <p>{item.nama}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sub-Bagian IPPNU */}
                        <div>
                            <h3 className="fw-bold text-center mb-4">Struktur Organisasi IPPNU</h3>
                            <div className="row">
                                {ippnu.map((item, index) => (
                                    <div key={index} className="col-md-6 mb-4">
                                        <div className="card bg-transparent shadow-sm" style={{ border: 'none', backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px' }}>
                                            <div className="card-body text-center">
                                                <h5 className="fw-bold">{item.jabatan}</h5>
                                                <p>{item.nama}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        </div>
    )
}

export default Struktur
