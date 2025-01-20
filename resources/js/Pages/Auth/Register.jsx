import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import '../../../../public/css/style.css/';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />
            <Navbar />

            <div className="d-flex justify-content-center align-items-center vh-100 bg-light" id='RegisterForm'>
                <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <div className="card-header bg-primary text-white text-center" style={{ background: "linear-gradient(90deg, #ffffff, #a8a8a8)" }}>
                        <h3 className="mb-0" style={{ color: "black" }}>Register</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submit}>
                            {/* Name Input */}
                            <div className="mb-3">
                                <InputLabel htmlFor="name" value="Nama" className="form-label" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="form-control"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2 text-danger" />
                            </div>

                            {/* Email Input */}
                            <div className="mb-3">
                                <InputLabel htmlFor="email" value="Email" className="form-label" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2 text-danger" />
                            </div>

                            {/* Password Input */}
                            <div className="mb-3">
                                <InputLabel htmlFor="password" value="Kata Sandi" className="form-label" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="form-control"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2 text-danger" />
                            </div>

                            {/* Confirm Password Input */}
                            <div className="mb-3">
                                <InputLabel htmlFor="password_confirmation" value="Konfirmasi Kata Sandi" className="form-label" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="form-control"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2 text-danger" />
                            </div>

                            {/* Already registered & Submit */}
                            <div className="d-flex justify-content-between align-items-center">
                                <Link
                                    href={route('login')}
                                    className="text-sm text-decoration-none"
                                    style={{ color: "#07e107" }}
                                >
                                    Sudah Memiliki Akun?
                                </Link>

                                <PrimaryButton className="btn btn-primary" disabled={processing} style={{ background: "#07e107" }}>
                                    Daftar
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
