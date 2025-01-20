import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import  '../../../public/css/style.css/'
import Footer from '@/Components/Footer';

function Contact() {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'), {
            onSuccess: (response) => {
                reset();
                if (response.props.flash && response.props.flash.status) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil',
                        html: response.props.flash.status,
                    });
                }
            },
            onError: (errors) => {
                // Handle error jika diperlukan
            },
        });
    }

    return (
        <>
            <Head title="Contact" />
            <Navbar />
            <section id="contact" className="py-6 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Kontak Kami</h2>

                    {/* Informasi Kontak */}
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h4 className="fw-bold">Hubungi Kami</h4>
                            <p><i className="bi bi-telephone-fill me-2"></i> +62 812-3456-7890</p>
                            <p><i className="bi bi-envelope-fill me-2"></i> info@organisasi.com</p>
                            <p><i className="bi bi-geo-alt-fill me-2"></i> Jl. Pelajar No. 123, Jakarta</p>
                        </div>
                        <div className="col-md-6">
                            <h4 className="fw-bold">Media Sosial</h4>
                            <p>
                                <a href="https://wa.me/81234567890" target="_blank" rel="noopener noreferrer" className="text-success me-3">
                                    <i className="bi bi-whatsapp"></i> WhatsApp
                                </a>
                            </p>
                            <p>
                                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-danger me-3">
                                    <i className="bi bi-instagram"></i> Instagram
                                </a>
                            </p>
                        </div>
                    </div>
                    <h2 className="text-center mb-4">Kontak Kami</h2>

                    {/* Formulir Kontak */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h4 className="text-center fw-bold mb-4">Kirim Pesan</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nama</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Masukkan nama Anda" required
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Masukkan email Anda" required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Pesan</label>
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        id="message"
                                        rows="4"
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder="Tulis pesan Anda di sini" required
                                    />
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Kirim</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
