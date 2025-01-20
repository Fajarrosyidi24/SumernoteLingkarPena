import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import '../../../../public/css/style.css/'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />
            <Navbar />

            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <div className="card-header bg-primary text-white text-center" style={{
                        background: "linear-gradient(90deg, #ffffff, #a8a8a8)",
                    }}>
                        <h3 className="mb-0" style={{ color: "black" }}>Login</h3>
                    </div>
                    <div className="card-body">
                        {status && (
                            <div className="alert alert-success text-sm" role="alert">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
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
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && (
                                    <div className="text-danger mt-2">{errors.email}</div>
                                )}
                            </div>

                            {/* Password Input */}
                            <div className="mb-3">
                                <InputLabel htmlFor="password" value="Password" className="form-label" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="form-control"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                {errors.password && (
                                    <div className="text-danger mt-2">{errors.password}</div>
                                )}
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="form-check mb-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="form-check-input rounded border-gray-300 text-green-600 shadow-sm focus:ring-green-500 focus:ring-2 focus:ring-offset-2 hover:cursor-pointer"
                                />

                                <label htmlFor="remember" className="form-check-label text-sm">
                                    Remember me
                                </label>
                            </div>

                            {/* Forgot Password & Submit */}
                            <div className="d-flex justify-content-between align-items-center">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-decoration-none" style={{ color: "#07e107" }}
                                    >
                                        Lupa Kata Sandi?
                                    </Link>
                                )}

                                <PrimaryButton className="btn btn-primary" disabled={processing} style={{background:"#07e107"}}>
                                    Log in
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
