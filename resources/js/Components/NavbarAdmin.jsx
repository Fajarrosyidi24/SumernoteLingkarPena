import { Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function NavbarAdmin({ isSidebarCollapsed, handleSidebarToggle }) {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };
    return (
        <div>
            <>
                {/* <div className="main"> */}
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className={`sidebar-toggle ${isSidebarCollapsed ? 'collapsed' : ''}`} onClick={handleSidebarToggle}>
                        <i className="hamburger align-self-center"></i>
                    </a>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav navbar-align">
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="bi bi-bell align-middle"></i>
                                        <span className="indicator">4</span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                    <div className="dropdown-menu-header">
                                        4 New Notifications
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-danger bi bi-exclamation-circle"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Update completed</div>
                                                    <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                    <div className="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        {/* Add other notifications */}
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-gear align-middle"></i>
                                </a>

                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block bi-person" href="#" data-bs-toggle="dropdown">
                                    <span className="text-dark">Charles Hall</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="pages-profile.html"><i className="bi bi-person me-1"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="bi bi-bar-chart me-1"></i> Analytics</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="index.html"><i className="bi bi-gear me-1"></i> Settings & Privacy</a>
                                    <a className="dropdown-item" href="#"><i className="bi bi-question-circle me-1"></i> Help Center</a>
                                    <div className="dropdown-divider"></div>
                                    <Link href="#" onClick={handleLogout} className="dropdown-item">
                                        Log out
                                    </Link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* </div> */}
            </>
        </div>
    )
}
