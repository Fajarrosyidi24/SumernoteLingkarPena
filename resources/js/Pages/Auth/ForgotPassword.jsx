import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import '../../../../public/css/style.css/';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
            <Navbar />

            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <div className="card-header bg-primary text-white text-center" style={{ background: "linear-gradient(90deg, #ffffff, #a8a8a8)" }}>
                        <h3 className="mb-0" style={{ color: "black" }}>Lupa Kata Sandi</h3>
                    </div>
                    <div className="card-body">
                        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            Lupa kata sandi? Tidak masalah. Beri tahu kami alamat email Anda dan kami akan mengirimkan tautan pengaturan ulang kata sandi yang memungkinkan Anda memilih kata sandi baru.
                        </div>

                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            {/* Input Email */}
                            <div className="mb-3">
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control"
                                    autoComplete="email"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            {/* Tombol Kirim */}
                            <div className="d-flex justify-content-between align-items-center">
                                <PrimaryButton className="btn btn-primary" disabled={processing} style={{ background: "#07e107" }}>
                                    Kirim Tautan Reset Kata Sandi
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
