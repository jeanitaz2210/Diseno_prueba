import '../styles/Home_Admin.css';


const AdminLogin = () => {
return (
<div className="admin-container">
<div className="logo-section">
<img src="../src/assets/lgo.png" alt="Logo INAMHI" className="logo-inamhi" />
</div>


<div className="login-card">
<h2>INICIAR SESION</h2>


<div className="inputs-row">
<div className="input-group">
<label>Correo Electrónico</label>
<input type="email" placeholder="Ingresa tu correo" />
</div>


<div className="input-group">
<label>Contraseña</label>
<input type="password" placeholder="Ingresa tu contraseña" />
</div>
</div>


<button className="btn-ingresar">Ingresar</button>



</div>
</div>
);
};


export default AdminLogin;