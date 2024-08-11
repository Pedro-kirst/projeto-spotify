
import {Home as HomeIcons, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Maximize} from 'lucide-react'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className="flex item-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>

          <nav className="space-y-4 mt-6">
            <a href="" className="flex items-center text-xs font-semibold gap-2"><HomeIcons />Home</a>
            <a href="" className="flex items-center text-xs font-semibold gap-2"><Search />Search</a>
            <a href="" className="flex items-center text-xs font-semibold gap-2"><Library />Your library</a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Treino</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Nostalgia</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Tribo da periferia</a>
          </nav>
        </aside>


        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRight />  
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-5">Olá, Pedro! </h1>
          <div className="grid grid-cols-3 gap-3 mt-6">
            <a href="" className="bg-white/10 group flex items-center gap-2 hover:bg-white/20 transition-colors">
              <img src="/queen.jpg" width={120} height={120} alt="Banda Queen" />
              <strong>Banda Queen</strong>
              <button className="bg-green-500 rounded-full p-2 ml-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 group flex items-center gap-2 hover:bg-white/20 transition-colors">
              <img src="/queen.jpg" width={120} height={120} alt="Banda Queen" />
              <strong>Banda Queen</strong>
              <button className="bg-green-500 rounded-full p-2 ml-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 group flex items-center gap-2 hover:bg-white/20 transition-colors">
              <img src="/queen.jpg" width={120} height={120} alt="Banda Queen" />
              <strong>Banda Queen</strong>
              <button className="bg-green-500 rounded-full p-2 ml-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-5">Boa tarde</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <img src="/queen.jpg" className="w-full" width={120} height={120} alt="Banda Queen" />
              <strong>Daily Mix 1</strong>
              <span className="text-xs">Quuen band</span>
            </a>
          </div>
        </main>

        
      </div>
      <footer className="bg-zinc-800 p-6 border-t border-zinc-600 flex items-center justify-between">
        <div className="flex item-center gap-3">
          <img src="/queen.jpg"  width={56} height={56} alt="Banda Queen" />
          <div className="flex flex-col gap-1">
            <strong className="font-normal">We Are Are The Champion</strong>
            <span className="text-text-xs text-zinc-400">Queen</span>
          </div>
        </div>
        
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <Shuffle size={20} />
              <SkipBack size={20} />

              <button className="bg-white text-black rounded-full p-2">
                <Play />
              </button>


              <SkipForward />
              <Repeat />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-zinc-500">0:31</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
              </div>
              <span className="text-xs text-zinc-500">2:31</span>
            </div>
          </div>
        <div className="flex items-center gap-4">
          <Mic2 />
          <LayoutList />
          <Laptop2 />
          <div className="flex items-center gap-2">
            <Volume />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
              </div>
          </div>
          <Maximize2 />
        </div>
      </footer>
    </div>
  );
}
