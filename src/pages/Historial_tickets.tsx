import { useEffect, useState } from "react";
import "../styles/Form.css";

type Ticket = {
    code: string;
    name: string;
    last?: string;
    address?: string;
    position?: string;
    email?: string;
    phone?: string;
    requestType?: string;
    otherRequest?: string;
    description?: string;
    fileName?: string;
    observations?: string;
    createdAt: string;
};

export default function Historial_tickets() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        try {
            const raw = localStorage.getItem("tickets");
            const arr: Ticket[] = raw ? JSON.parse(raw) : [];
            // Mostrar los más recientes primero:
            setTickets(arr.reverse());
        } catch (err) {
            console.warn("Error leyendo tickets:", err);
            setTickets([]);
        }
    }, []);

    const eliminar = (code: string) => {
        const keep = tickets.filter((t) => t.code !== code);
        setTickets(keep);
        // guardar en el orden original (invertir antes de guardar)
        try {
            localStorage.setItem("tickets", JSON.stringify(keep.slice().reverse()));
        } catch (err) {
            console.warn("No se pudo actualizar localStorage:", err);
        }
    };

    const borrarTodo = () => {
        if (!confirm("¿Borrar todos los tickets? Esta acción no se puede deshacer.")) return;
        setTickets([]);
        localStorage.removeItem("tickets");
    };

    const filtered = tickets.filter((t) => {
        if (!query) return true;
        const q = query.toLowerCase();
        return (
            t.code.toLowerCase().includes(q) ||
            (t.name && t.name.toLowerCase().includes(q)) ||
            (t.last && t.last.toLowerCase().includes(q)) ||
            (t.position && t.position.toLowerCase().includes(q)) ||
            (t.requestType && t.requestType.toLowerCase().includes(q)) ||
            (t.description && t.description.toLowerCase().includes(q))
        );
    });

    return (
        <div className="form-container">
            <h2>Historial de Tickets</h2>

            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                <input
                    type="search"
                    placeholder="Buscar por código, nombre, cargo, tipo o descripción..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #e6e9ef" }}
                />
                <button
                    onClick={() => {
                        // recargar desde localStorage
                        try {
                            const raw = localStorage.getItem("tickets");
                            const arr: Ticket[] = raw ? JSON.parse(raw) : [];
                            setTickets(arr.reverse());
                        } catch { /* ignore */ }
                    }}
                    className="submit-btn"
                    style={{ minWidth: 120 }}
                >
                    Recargar
                </button>

                <button onClick={borrarTodo} style={{ background: "#ef4444", color: "white", borderRadius: 8, padding: "10px 14px", border: "none" }}>
                    Borrar todo
                </button>
            </div>

            {filtered.length === 0 ? (
                <p>No hay tickets para mostrar.</p>
            ) : (
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Código</th>
                                <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Fecha</th>
                                <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Solicitante</th>
                                <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Cargo</th>
                                <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Tipo</th>
                                <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Descripción</th>
                                <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Archivo</th>
                                <th style={{ textAlign: "center", padding: 10, borderBottom: "1px solid #e6e9ef" }}>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filtered.map((t) => (
                                <tr key={t.code}>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top" }}>{t.code}</td>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top" }}>
                                        {new Date(t.createdAt).toLocaleString()}
                                    </td>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top" }}>
                                        {t.name} {t.last ?? ""}
                                    </td>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top" }}>{t.position}</td>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top" }}>
                                        {t.requestType} {t.otherRequest ? ` — ${t.otherRequest}` : ""}
                                    </td>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top", maxWidth: 360 }}>
                                        {t.description?.length && t.description.length > 120 ? t.description.slice(0, 120) + "…" : t.description}
                                    </td>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top" }}>{t.fileName ?? "-"}</td>
                                    <td style={{ padding: 10, borderBottom: "1px solid #f1f5f9", verticalAlign: "top", textAlign: "center" }}>
                                        <button
                                            onClick={() => alert(`Descripción completa:\\n\\n${t.description ?? "(sin descripción)"}`)}
                                            style={{ marginRight: 8, padding: "6px 10px", borderRadius: 6, border: "none", cursor: "pointer" }}
                                        >
                                            Ver
                                        </button>
                                        <button
                                            onClick={() => eliminar(t.code)}
                                            style={{ background: "#ef4444", color: "#fff", padding: "6px 10px", borderRadius: 6, border: "none", cursor: "pointer" }}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}