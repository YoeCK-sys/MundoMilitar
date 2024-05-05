import Image from 'next/image';

export default function YoelEmpire() {
  return (
    <div key="1" className="w-full min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1b1b1b] text-white">
      <header className="py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img alt="YoelEmpire" className="h-8 w-8" src="/placeholder.svg" />
          <h1 className="text-2xl font-bold">YoelEmpire</h1>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <a className="text-sm font-medium hover:text-gray-400" href="#">
            Características
          </a>
          <a className="text-sm font-medium hover:text-gray-400" href="#">
            Unirse
          </a>
          <a className="text-sm font-medium hover:text-gray-400" href="#">
            Actualizaciones
          </a>
          <a className="text-sm font-medium hover:text-gray-400" href="#">
            Información
          </a>
          <a
            className="bg-[#7289da] text-white px-4 py-2 rounded-md hover:bg-[#677bc4]"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Unirse a Discord
          </a>
        </nav>
        <button className="md:hidden bg-[#7289da] text-white px-4 py-2 rounded-md hover:bg-[#677bc4]">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>
      </header>
      <main>
        <section className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-[#0f0f0f] to-[#1b1b1b]">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Bienvenido a YoelEmpire</h2>
            <p className="text-lg md:text-xl text-gray-400">
              Únete a la emocionante comunidad de Minecraft Bedrock en YoelEmpire.
            </p>
            <a
              className="bg-[#7289da] text-white px-6 py-3 rounded-md hover:bg-[#677bc4] inline-flex items-center gap-2"
              href="#"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              Unirse Ahora
            </a>
          </div>
          <div className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-br from-[#7289da] to-[#5865f2]" />
        </section>
        <section className="py-16 px-4 md:px-8" id="features">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Características del Servidor de Supervivencia</h2>
              <p className="text-gray-400">Descubre lo que YoelEmpire tiene para ofrecer en modo supervivencia.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] rounded-md p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7289da] rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Modo Supervivencia</h3>
                </div>
                <p className="text-gray-400">Disfruta de un desafiante modo de juego de supervivencia en YoelEmpire.</p>
              </div>
              <div className="bg-[#1b1b1b] rounded-md p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7289da] rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Eventos Especiales</h3>
                </div>
                <p className="text-gray-400">
                  Participa en emocionantes eventos y actividades especiales de supervivencia.
                </p>
              </div>
              <div className="bg-[#1b1b1b] rounded-md p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7289da] rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Comunidad Activa</h3>
                </div>
                <p className="text-gray-400">Únete a nuestra vibrante comunidad de jugadores de supervivencia.</p>
              </div>
              <div className="bg-[#1b1b1b] rounded-md p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7289da] rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Servidor Seguro</h3>
                </div>
                <p className="text-gray-400">
                  Disfruta de un entorno de juego seguro y confiable en modo supervivencia.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-8" id="join">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Únete a YoelEmpire</h2>
              <p className="text-gray-400">Sigue estos pasos para unirte a nuestro servidor.</p>
            </div>
            <div className="bg-[#1b1b1b] rounded-md p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Paso 1: Descarga Minecraft Bedrock</h3>
                <p className="text-gray-400">
                  Asegúrate de tener la versión Bedrock de Minecraft instalada en tu dispositivo.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Paso 2: Conecta al Servidor</h3>
                <p className="text-gray-400">
                  Abre Minecraft y selecciona "Multijugador", luego agrega el servidor con la siguiente información:
                </p>
                <div className="bg-[#0f0f0f] rounded-md p-4 text-sm font-mono">
                  IP del Servidor:
                  <span className="text-[#7289da]">play.yoelempire.com</span>
                  <br />
                  Puerto:
                  <span className="text-[#7289da]">25565</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Paso 3: ¡Disfruta!</h3>
                <p className="text-gray-400">
                  ¡Bienvenido a YoelEmpire! Explora el servidor, participa en eventos y haz nuevos amigos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-8" id="updates">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Últimas Actualizaciones</h2>
              <p className="text-gray-400">Mantente al tanto de las novedades en YoelEmpire.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] rounded-md p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7289da] rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Nueva Actualización de Mapa</h3>
                </div>
                <p className="text-gray-400">
                  Hemos lanzado una nueva actualización de mapa con nuevas áreas y características emocionantes.
                </p>
              </div>
              <div className="bg-[#1b1b1b] rounded-md p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7289da] rounded-full p-2">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Nuevo Evento de Temporada</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
