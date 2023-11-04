import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

function Layout() {
    const { token } = useStateContext();

    if (!token) {
        return <Navigate to={"/login"} />;
    }

    const logOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <div id="defaultLayout">
                <aside>
                    <Link to="/dashboard"> Dashboard</Link>
                    <Link to="/users"> Users</Link>
                </aside>
                <div className="content">
                    <header>
                        <div>Header</div>
                        <div>
                            YASEEN &nbsp; &nbsp;
                            <a onClick={logOut} className="btn-logout" href="#">
                                Logout
                            </a>
                        </div>
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Layout;
