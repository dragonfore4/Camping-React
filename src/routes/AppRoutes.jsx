import Layout from '@/layouts/Layout';
import LayoutAdmin from '@/layouts/LayoutAdmin';
import About from '@/pages/About';
import { Dashboard } from '@/pages/admin/Dashboard';
import { Manage } from '@/pages/admin/Manage';
import Home from '@/pages/Home';
import Notfound from '@/pages/Notfound';
import { BrowserRouter, Routes, Route } from "react-router";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>

                {/* PRIVATE */}
                <Route path='/admin' element={<LayoutAdmin />} >
                    <Route index element={<Dashboard />} />
                    <Route path='manage' element={<Manage />} />
                </Route>
                <Route path='/*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes