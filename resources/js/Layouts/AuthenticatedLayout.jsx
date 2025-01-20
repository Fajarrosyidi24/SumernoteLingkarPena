import React from 'react';
import '../../../public/css/app.css';
import SideBar from '@/Components/SideBar';
import NavbarAdmin from '@/Components/NavbarAdmin';
import { useState } from "react";

function AuthenticatedLayout({ children }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div>
            <>
                <div className="wrapper">
                    <SideBar
                        isSidebarCollapsed={isSidebarCollapsed}
                        handleSidebarToggle={handleSidebarToggle}
                    />

                    <div className="main">
                        <NavbarAdmin
                            isSidebarCollapsed={isSidebarCollapsed}
                            handleSidebarToggle={handleSidebarToggle}
                        />

                        {children}
                    </div>
                </div>
            </>
        </div>
    )
}

export default AuthenticatedLayout
