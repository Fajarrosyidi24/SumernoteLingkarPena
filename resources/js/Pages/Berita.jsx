import Blog from '@/Components/Blog'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import '../../../public/css/style.css';

function Berita() {
    return (
        <div>
            <>
                <Head title='Berita' />
                <Navbar />
                <div className="dashboard-container py-6">
                    <p className="mb-4 m-3">
                        <Link href={route('welcome')} className="text-decoration-none">Beranda</Link> / Blog /Berita
                    </p>
                    <Blog />
                </div>
                <Footer />
            </>
        </div>
    )
}

export default Berita
