import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import '../../../../public/css/style.css/';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Reset Password" />
            <Navbar />

            <div className="d-flex justify-content-center align-items-center vh-100 bg-ligh py-6t">
                <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <div className="card-header bg-primary text-white text-center" style={{ background: "linear-gradient(90deg, #ffffff, #a8a8a8)" }}>
                        <h3 className="mb-0" style={{ color: "black" }}>Reset Kata Sandi</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submit}>
                            {/* Email Input */}
                            <div className="mb-3">
    <InputLabel htmlFor="email" value="Email" />
    <TextInput
        id="email"
        type="email"
        name="email"
        value={data.email}
        className="form-control"
        autoComplete="username"
        onChange={(e) => setData('email', e.target.value)} // bisa dihilangkan, karena ini tidak perlu diubah
        required
        readOnly // atribut readOnly memastikan input tidak dapat diedit
    />
    <InputError message={errors.email} className="mt-2" />
</div>


                            {/* Password Input */}
                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="form-control"
                                    autoComplete="new-password"
                                    isFocused={true}
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* Confirm Password Input */}
                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Konfirmasi Kata Sandi" />
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
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-4 flex items-center justify-end">
                                <PrimaryButton className="ms-4" disabled={processing} style={{ background: "#07e107" }}>
                                    Reset Kata Sandi
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
