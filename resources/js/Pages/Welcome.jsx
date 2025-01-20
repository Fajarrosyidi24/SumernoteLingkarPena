import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Blog from '@/Components/Blog';
import '../../../public/css/style.css/'


export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="dashboard-container py-6">
                <div className="dashboard-content">
                    {/* Section Deskripsi */}
                    <div className="dashboard-text">
                        <h2 className="dashboard-title">Apa itu IPNU dan IPPNU?</h2>
                        <p className="dashboard-paragraph">
                            <strong>IPNU</strong> (Ikatan Pelajar Nahdlatul Ulama) adalah organisasi pelajar yang berafiliasi dengan Nahdlatul Ulama. Organisasi ini memiliki tujuan untuk membentuk generasi muda yang berwawasan kebangsaan, berkarakter islami, dan berintegritas dalam kehidupan bermasyarakat.
                        </p>
                        <p className="dashboard-paragraph">
                            <strong>IPPNU</strong> (Ikatan Pelajar Putri Nahdlatul Ulama) merupakan mitra dari IPNU yang khusus membina pelajar putri. IPPNU bertujuan membangun generasi muda perempuan yang mandiri, berpendidikan, dan mampu berkontribusi dalam bidang sosial maupun keagamaan.
                        </p>
                        <p className="dashboard-paragraph">
                            Melalui <strong>IPNU</strong> dan <strong>IPPNU</strong>, pelajar memiliki wadah untuk belajar, mengembangkan potensi diri, memperkuat ukhuwah, dan memberikan kontribusi positif untuk agama dan bangsa.
                        </p>

                        {/* Informasi Tambahan PAC Glenmore */}
                        <h3 className="dashboard-subtitle">Tentang IPNU IPPNU PAC Glenmore</h3>
                        <p className="dashboard-paragraph">
                            <strong>PAC Glenmore</strong> adalah kepanjangan tangan organisasi IPNU dan IPPNU di tingkat kecamatan Glenmore. PAC Glenmore berkomitmen untuk menjadi wadah pengembangan potensi pelajar dan remaja, khususnya di wilayah Glenmore.
                            Dengan berbagai program kerja seperti kajian rutin, pelatihan kepemimpinan, dan kegiatan sosial, PAC Glenmore terus berupaya mencetak kader-kader muda yang memiliki semangat nasionalisme dan religiusitas tinggi.
                        </p>
                        <p className="dashboard-paragraph">
                            Melalui sinergi antara IPNU dan IPPNU, PAC Glenmore menjadi teladan organisasi pelajar yang tidak hanya mendukung kegiatan belajar, tetapi juga mempersiapkan generasi muda untuk berperan aktif di masyarakat.
                        </p>
                    </div>

                    {/* Section Gambar */}
                    <div className="dashboard-image-container">
                        <img
                            src="/img/20160328173237_ini-gebrakkan-pengurus-baru-ipnu-dan-ippnu-jogja.jpg"
                            alt="Logo IPNU dan IPPNU"
                            className="dashboard-image"
                        />
                    </div>
                </div>
            </div>



            <div className="dashboard-container">
                <div className="dashboard-content">
                    {/* Section Gambar */}
                    <div className="dashboard-image-container left-image">
                        <img
                            src="/img/Simpel retro media logo.png"
                            alt="Logo Lingkar Pena Pelajar"
                            className="dashboard-image"
                        />
                    </div>

                    {/* Section Deskripsi */}
                    <div className="dashboard-text">
                        <h2 className="dashboard-title">Apa itu Lingkar Pena Pelajar?</h2>
                        <p className="dashboard-paragraph">
                            <strong>Lingkar Pena Pelajar</strong> adalah sebuah wadah kreatif yang dikelola oleh anggota <strong>IPNU</strong> dan <strong>IPPNU PAC Glenmore</strong>. Melalui platform ini, para pelajar diberi kesempatan untuk mengekspresikan ide, gagasan, dan pandangan mereka dalam bentuk karya tulis seperti artikel, berita, opini, esai, hingga cerpen.
                        </p>
                        <p className="dashboard-paragraph">
                            Dengan semangat literasi dan kreativitas, <strong>Lingkar Pena Pelajar</strong> hadir untuk meningkatkan budaya membaca dan menulis di kalangan pelajar. Di sini, setiap tulisan bukan hanya sekadar karya, melainkan juga suara dari generasi muda yang ingin berkontribusi untuk masyarakat.
                        </p>
                    </div>
                </div>
            </div>
            <Blog />
            <Footer />
        </>
    );
}
