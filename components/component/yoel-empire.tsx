
import Link from "next/link"

export default function YoelEmpire() {
  return (
    <>
      <nav className="bg-gray-900 text-gray-400 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
              Inicio
            </Link>
            <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
              Actualizaciones
            </Link>
          </div>
        </div>
      </nav>
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Minecraft Bedrock Server</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Bienvenido a nuestro servidor de Minecraft Bedrock. Aquí encontrarás una experiencia de juego única y
                emocionante.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl font-semibold">Características Destacadas</h2>
                <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Modos de juego personalizados</li>
                  <li>Plugins de seguridad y anti-griefing</li>
                  <li>Soporte para la comunidad</li>
                </ul>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl font-semibold">Cómo Unirte</h2>
                <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Descarga Minecraft Bedrock Edition</li>
                  <li>Busca nuestro servidor en la lista</li>
                  <li>Conéctate y disfruta de la aventura</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden p-6 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] opacity-20 blur-xl" />
              <h2 className="text-xl font-semibold mb-4 relative z-10">Últimas Actualizaciones</h2>
              <div className="flex flex-col md:flex-row gap-4 relative z-10">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 flex-1 relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] rounded-t-lg" />
                  <h3 className="text-lg font-semibold mb-2">Nueva Actualización</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hemos agregado nuevos modos de juego y plugins para mejorar tu experiencia. ¡Echa un vistazo a lo
                    que hay de nuevo!
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 flex-1 relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] rounded-t-lg" />
                  <h3 className="text-lg font-semibold mb-2">Nuevo Anticheat Agregado</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hemos implementado un nuevo sistema anticheat para mejorar la seguridad y la integridad del
                    servidor. Esto ayudará a mantener una experiencia de juego justa y sin problemas.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden p-6 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] opacity-20 blur-xl" />
              <h2 className="text-xl font-semibold mb-4 relative z-10">Información del Servidor</h2>
              <div className="flex flex-col md:flex-row gap-4 relative z-10">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 flex-1 relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] rounded-t-lg" />
                  <h3 className="text-lg font-semibold mb-2">Dirección del Servidor</h3>
                  <p className="text-gray-500 dark:text-gray-400">IP: 192.168.1.100</p>
                  <p className="text-gray-500 dark:text-gray-400">Puerto: 25565</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden p-6 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] opacity-20 blur-xl" />
              <h2 className="text-xl font-semibold mb-4 relative z-10">Únete a Nuestra Comunidad</h2>
              <div className="flex flex-col md:flex-row gap-4 relative z-10">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 flex-1 relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] rounded-t-lg" />
                  <h3 className="text-lg font-semibold mb-2">Únete a Nuestro Discord</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Únete a nuestra comunidad en Discord para interactuar con otros jugadores, obtener soporte y estar
                    al tanto de las últimas novedades.
                  </p>
                  <div className="mt-4">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Unirse al Discord
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/50 to-[#ffa500]/50 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#6b72ff]/50 to-[#9b6bff]/50 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] opacity-20 blur-xl" />
            <img
              alt="Minecraft Server"
              className="w-full h-full object-cover relative z-10 rounded-lg"
              height={600}
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
        </div>
      </main>
    </>
  )
}
