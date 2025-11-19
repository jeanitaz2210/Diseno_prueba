import '../src/styles/App.css'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-sky-100 via-indigo-200 to-indigo-400">

      {/* Columna izquierda: Logo sin fondo blanco */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8 bg-transparent">
        <img
          src="../src/assets/img/lgo.png" 
          alt="Logo INAMHI"
          className="max-w-[400px] w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Columna derecha: Bienvenida y botón */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center text-center px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Bienvenido al Sistema de Soporte Técnico INAMHI
        </h1>
        <p className="text-lg text-indigo-100 mb-8 max-w-xl">
          Nuestro equipo trabaja con dedicación para ofrecer soluciones confiables, ágiles y de calidad.
        </p>
        <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-indigo-100 transition duration-300">
          Join our team
        </button>
      </div>

    </div>
  )
}


