import Image from 'next/image'

export default function Perfil() {
  return (
    <section className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative w-20 h-20 rounded-full bg-gray-100 border-2 border-white shadow-lg">
          <Image
            src="/avatar.webp"
            fill
            alt="Perfil Diogo"
            className="rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">Diogo Graciano</h2>
          <p className="text-sm text-gray-500 mt-1">Desenvolvedor Full Stack</p>
        </div>

        <button className="w-full max-w-[200px] py-2 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
          <span className="text-sm font-medium text-gray-700 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
            </svg>
            Editar Perfil
          </span>
        </button>

        <div className="w-full border-t border-gray-100 my-4"/>

        <div className="w-full space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
              <path d="m3.3 7 8.7 5 8.7-5"/>
              <path d="M12 22V12"/>
            </svg>
            <span className="text-gray-600">diogograciiano@gmail.com</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            <span className="text-gray-600">Membro desde: 01/2024</span>
          </div>
        </div>

        {/* Saldo Disponível */}
        <div className="w-full mt-4 space-y-3">
          <div className="text-sm font-medium text-gray-500">Saldo disponível</div>
          <div className="text-2xl font-bold text-gray-900">R$ 45.230,50</div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50/80 border border-green-100">
            <span className="text-xs font-semibold text-green-700">Conta Corrente</span>
          </div>
        </div>
      </div>
    </section>
  )
}