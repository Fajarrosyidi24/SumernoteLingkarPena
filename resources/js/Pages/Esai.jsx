import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Blog from '@/Components/Blog';
import '../../../public/css/style.css';

function Esai() {
    return (
        <div>
            <>
                <Head title='Karya Pelajar' />
                <Navbar />
                <div className="dashboard-container py-6">
                    <p className="mb-4 m-3">
                        <Link href={route('welcome')} className="text-decoration-none">Beranda</Link> / Blog /Esai
                    </p>
                    <Blog />
                </div>
                <Footer />
            </>
        </div>
    )
}

export default Esai
