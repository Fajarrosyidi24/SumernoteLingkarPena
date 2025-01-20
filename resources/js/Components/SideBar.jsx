import { useState } from "react";
import { Link } from "@inertiajs/react";

function SideBar({ isSidebarCollapsed, handleSidebarToggle }) {
    // const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    // const handleSidebarToggle = () => {
    //     setIsSidebarCollapsed(!isSidebarCollapsed);
    // };
    const isActive = (link) => {
        return window.location.pathname === link ? 'sidebar-item active' : 'sidebar-item';
    };

    return (
        <>
            <nav id="sidebar" className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-content">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle">Lingkar Pena Pelajar</span>
                    </a>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Dashboard & Pages
                        </li>

                        <li className={isActive('/dashboard')}>
                            <Link className="sidebar-link" href={route('dashboard')}>
                                <i className="bi bi-house-door align-middle"></i> <span className="align-middle">Dashboard</span>
                            </Link>
                        </li>

                  
                        <li className={
                            `sidebar-item ${window.location.pathname.startsWith('/Blog/artikels/index') ||
                                            window.location.pathname.startsWith('/Blog/artikels/create')
                                            ? 'active'
                                            : ''
                                            }`}>
                            <Link className="sidebar-link" href={route('Blog.index.admin')}>
                                <i className="bi bi-pencil align-middle"></i> <span className="align-middle">Tambahkan Article</span>
                            </Link>
                        </li>

                        {/* Artikel Section */}
                        <li className="sidebar-header">
                            Artikel
                        </li>

                        <li className={isActive('/Blog/karya-pelajar/index')}>
                            <Link className="sidebar-link" href={route('Karya.index')}>
                                <i className="bi bi-pencil align-middle"></i> <span className="align-middle">Karya Pelajar</span>
                            </Link>
                        </li>
                        <li className={isActive('/Blog/Berita/index')}>
                            <Link className="sidebar-link" href={route('berita.index')}>
                                <i className="bi bi-newspaper align-middle"></i> <span className="align-middle">Berita</span>
                            </Link>
                        </li>
                        <li className={isActive('/Blog/Opini/index')}>
                            <Link className="sidebar-link" href={route('opini.index')}>
                                <i className="bi bi-chat-left-text align-middle"></i> <span className="align-middle">Opini</span>
                            </Link>
                        </li>
                        <li className={isActive('/Blog/Esai/index')}>
                            <Link className="sidebar-link" href={route('esai.index')}>
                                <i className="bi bi-file-earmark-text align-middle"></i> <span className="align-middle">Esai</span>
                            </Link>
                        </li>

                        {/* Program & Kegiatan Section */}
                        <li className="sidebar-header">
                            Program & Kegiatan
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" href="#">
                                <i className="bi bi-calendar-check align-middle"></i> <span className="align-middle">Kegiatan Rutin</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" href="#">
                                <i className="bi bi-calendar-event align-middle"></i> <span className="align-middle">Event Khusus</span>
                            </Link>
                        </li>

                        <li className="sidebar-header">
                            Member Actions
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="members-contributions.html">
                                <i className="bi bi-pencil align-middle"></i> <span className="align-middle">Kontribusi Anggota</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="members-feedback.html">
                                <i className="bi bi-chat-left-text align-middle"></i> <span className="align-middle">Feedback</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default SideBar
