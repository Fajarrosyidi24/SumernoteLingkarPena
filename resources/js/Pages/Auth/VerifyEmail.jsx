import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Email Verification" />

            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <div className="card-header bg-primary text-white text-center" style={{ background: "linear-gradient(90deg, #ffffff, #a8a8a8)" }}>
                        <h3 className="mb-0" style={{ color: "black" }}>Email Verification</h3>
                    </div>
                    <div className="card-body">
                        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        Terima kasih telah mendaftar! Sebelum memulai, dapatkah Anda memverifikasi alamat email Anda dengan mengeklik tautan yang baru saja kami kirimkan kepada Anda? Jika Anda tidak menerima email tersebut, kami akan dengan senang hati mengirimkan email lain kepada Anda.
                        </div>

                        {status === 'verification-link-sent' && (
                            <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                            Tautan verifikasi baru telah dikirim ke alamat email yang Anda berikan saat pendaftaran.
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="mt-4">
                                <PrimaryButton
                                    className="btn btn-primary w-100"
                                    disabled={processing}
                                >
                                    Resend Verification Email
                                </PrimaryButton>
                            </div>

                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="btn btn-sm-danger text-decoration-none text-danger"
                                    style={{ textDecoration: "underline", color: "#07e107" }}
                                >
                                    Log Out
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
    );
}
