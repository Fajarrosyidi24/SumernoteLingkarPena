import React from 'react';
import '../../../public/css/app.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function Dashboard() {
    return (
        <>
        <Head title='Dasboard-admin'/>
            <AuthenticatedLayout>

            </AuthenticatedLayout>
        </>
    );
}

export default Dashboard;
