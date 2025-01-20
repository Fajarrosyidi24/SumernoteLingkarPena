import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import '../../../public/css/style.css';
import Footer from '@/Components/Footer';

function DetailBlog() {
    return (
        <div>
            <Head title="Detail Blog" />
            <Navbar />
            <section id="detailblog" className="py-7 container col-xxl-10 d-flex justify-content-center">
                <div className="card col-xxl-10">
                    <p className="mb-4 m-3">
                        <a href="/" className="text-decoration-none text-dark mt-5">Beranda</a> / Blog / Judul Blog
                    </p>
                    <h3 className="fw-bold display-4 m-3">Judul Artikel</h3>
                    <p className="lead m-3">
                        <span><strong>Penulis:</strong> John Doe</span> &nbsp; | &nbsp;
                        <span><strong>Tanggal Dipublikasikan:</strong> 16 Januari 2025</span>
                    </p>

                    <div className="image-container mb-4 m-3">
                        <img
                            src="/img/harlahpn39-0c3ec569-96bd-44bd-a076-736dd7e5511f.jpg"
                            alt="Gambar Blog"
                            className="img-fluid rounded-6"
                        />
                    </div>
                    <div className='m-3'>
                    <p>
                        Daftar jadi Mitra GoCar, Yuk! Tidak memiliki mobil? Jangan khawatir, Anda kini
                        <strong> dapat menyewa mobil melalui Fleet Partner Gojek</strong> yang sudah tersedia di beberapa kota.
                    </p>
                    <p>Caranya:</p>
                    <ol>
                        <li>Download aplikasi GoPay</li>
                        <li>Upgrade GoPay account Anda menjadi GoPay+</li>
                        <li>Download Aplikasi Gojek Driver</li>
                        <li>Pilih “Mobil Driver”</li>
                        <li>Pilih “Sewa Mobil”</li>
                        <li>Lengkapi informasi yang dibutuhkan</li>
                        <li>Tunggu Fleet Partner kami untuk menghubungi Anda</li>
                    </ol>
                    <p>Atau:</p>
                    <ol>
                        <li>Hubungi Fleet Partner Anda</li>
                        <li>Lakukan pendaftaran sebagai mitra GoCar melalui Fleet Partner pilihan Anda</li>
                    </ol>

                    <h4 className="mt-4">Area Jabodetabek</h4>
                    <p><strong>PT Solusi Mobilitas Bangsa (GoFleet)</strong></p>
                    <p>Admin: +62 895-0106-2333</p>
                    <p>Alamat: <a href="https://maps.app.goo.gl/qDytAoi16ezSJsn66" target="_blank" rel="noopener noreferrer">https://maps.app.goo.gl/qDytAoi16ezSJsn66</a></p>

                    <h4 className="mt-4">Area Medan</h4>
                    <p><strong>CV Armada Makmur Transindo</strong></p>
                    <p>Rizal: +62 811-627-133</p>
                    <p>Alamat: <a href="https://maps.app.goo.gl/D9o6HwCv5gMeq2so6" target="_blank" rel="noopener noreferrer">https://maps.app.goo.gl/D9o6HwCv5gMeq2so6</a></p>

                    <h4 className="mt-4">Area Surabaya</h4>
                    <p><strong>PT Satu Kosong Tujuh (107) Surabaya</strong></p>
                    <p>Devita: +62 823-3838-5091</p>
                    <p>Alamat: <a href="https://maps.app.goo.gl/vQJ1iBQivk9JZG2B7" target="_blank" rel="noopener noreferrer">https://maps.app.goo.gl/vQJ1iBQivk9JZG2B7</a></p>

                    <h4 className="mt-4">Area Batam</h4>
                    <p><strong>Auto 86 Car Batam</strong></p>
                    <p>Wahid: +62 812-1552-3088</p>
                    <p>Alamat: <a href="https://maps.app.goo.gl/6QNffEsvdoigkA5P6" target="_blank" rel="noopener noreferrer">https://maps.app.goo.gl/6QNffEsvdoigkA5P6</a></p>

                    <div className="mt-5 mb-3">
                        <h5><strong>Share this Article:</strong></h5>
                        <div>
    <button className="btn btn-primary me-2">
        <i className="fab fa-facebook-f"></i> {/* Ikon Facebook */}
    </button>
    <button className="btn btn-info me-2">
        <i className="fab fa-twitter"></i> {/* Ikon Twitter */}
    </button>
    <button className="btn btn-success">
        <i className="fab fa-whatsapp"></i> {/* Ikon WhatsApp */}
    </button>
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
