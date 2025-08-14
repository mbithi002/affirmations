export default function Header() {
  return (
    <header className="navbar bg-white/100 px-4 md:px-6">
      <div className="flex-1">
        <span className="text-2xl md:text-3xl font-bold">
          🌱 Daily Uplift
        </span>
      </div>
      <div className="flex-none text-sm opacity-70">
        <span className="hidden sm:inline">Made with ❤️</span>
      </div>
    </header>
  )
}