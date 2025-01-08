import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <h1>Main Nav</h1>
            <hr />
            <Outlet />
        </div>
    )
}

export default Layout