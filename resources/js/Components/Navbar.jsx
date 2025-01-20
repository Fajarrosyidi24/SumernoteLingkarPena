import React from 'react';
import { Link } from '@inertiajs/react';

function Navbar() {
    // Fungsi untuk mengecek apakah link aktif berdasarkan URL link
    const isActive = (link) => {
        // Bandingkan pathname saat ini dengan link yang diberikan
        return window.location.pathname === link ? 'nav-link active' : 'nav-link';
    };

    return (
        <div>
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container col-xxl-10">
                        <a className="navbar-brand" href="#">
                            <div className="navbar-content">
                                <div className="navbar-logo-left">
                                    <img
                                        src="/img/Simpel_retro_media_logo__2_-removebg-preview.png"
                                        alt="Logo"
                                        height={50}
                                    />
                                </div>
                                <div className="navbar-info">
                                    <img
                                        src="/img/Simpel_retro_media_logo__1_-removebg-preview.png"
                                        alt="Logo"
                                        height={20}
                                    />
                                    <span className="title">Lingkar Pena Pelajar</span>
                                    <span className="subtitle">Media Pelajar NU Glenmore</span>
                                </div>
                            </div>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={isActive('/')} aria-current="page" href={route('welcome')}>Beranda</Link>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a
                                        className={`nav-link dropdown-toggle ${window.location.pathname.startsWith('/about') ||
                                            window.location.pathname.startsWith('/visi-misi') ||
                                            window.location.pathname.startsWith('/struktur-organisasi')
                                            ? 'active'
                                            : ''
                                            }`}
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Profile
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href={route('about')}>Tentang Kami</Link></li>
                                        <li><Link className="dropdown-item" href={route('visi-misi')}>Visi & Misi</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href={route('struktur-organisasi')}>Struktur Organisasi</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Article
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Karya Pelajar</a></li>
                                        <li><a className="dropdown-item" href="#">Berita</a></li>
                                        <li><a className="dropdown-item" href="#">Opini</a></li>
                                        <li><a className="dropdown-item" href="#">Esai</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Program & Kegiatan
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Kegiatan Rutin</a></li>
                                        <li><a className="dropdown-item" href="#">Event Khusus</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className={isActive('/contact')} aria-current="page" href={route('contact')}>Kontak Kami</Link>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}

export default Navbar
