import { useEffect, useState } from "react";
import "../styles/Admin.css";

const StatCard = ({ title, value, delta }: { title: string; value: string; delta?: string }) => (
    <div className="stat-card">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        {delta && <div className="stat-delta">{delta}</div>}
    </div>
);

export default function Admin() {
    const [ticketCount, setTicketCount] = useState(0);

    useEffect(() => {
        try {
            const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
            setTicketCount(Array.isArray(tickets) ? tickets.length : 0);
        } catch {
            setTicketCount(0);
        }
    }, []);

    return (
        <>
        <div className="admin-root">
            <aside className="admin-sidebar">
                <img src="../src/assets/lgo.png"></img>
                <nav className="side-nav">
                    <div className="section">Paginas</div>
                    <a>Account Settings</a>
                    <a>Authentications</a>
                    <div className="section">Components</div>
                    <a>Cards</a>
                    <a>User Interface</a>
                    <div className="section">Tablas y Registro de Usuarios</div>
                    <a>Registro de Usuarios</a>
                    <a href="/listado">Historial</a>
                </nav>
            </aside>

            <main className="admin-main">
                <header className="topbar">
                    <div className="top-actions">
                        <a href="/adminlogin" className="ghost">Cerrar Sesión</a>
                        <div className="avatar">DG</div>
                    </div>
                </header>

                <section className="page-grid">
                    <div className="hero card">
                        <div className="hero-left">
                            <h3>Bienvenido de nuevo Diego Gonzalez!</h3>
                            <br />
                            <p>En este administrador encontraras las estadisticas del sistema de gestion</p>
                            <br />
                            <button className="btn-primary">View Badges</button>
                        </div>
                        <div className="hero-right">
                            <div className="avatar-hero">👨‍💻</div>
                        </div>
                    </div>

                    <div className="card revenue">
                        <h4>Total Revenue</h4>
                        <div className="chart-placeholder">
                            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{ticketCount}</span>
                            <div style={{ fontSize: "1rem", color: "#888" }}>Tickets generados</div>
                        </div>
                    </div>

                    <div className="card stats">
                        <StatCard title="Profit" value="$12,628" delta="+72.80%" />
                        <StatCard title="Sales" value="$4,679" delta="+28.42%" />
                        <StatCard title="Payments" value="$2,456" delta="-14.82%" />
                        <StatCard title="Transactions" value="$14,857" delta="+28.14%" />
                    </div>

                    <div className="card orders">
                        <h4>Order Statistics</h4>
                        <div className="orders-body">
                            <div className="big-number">8,258</div>
                            <div className="mini-chart">[Mini chart]</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
}