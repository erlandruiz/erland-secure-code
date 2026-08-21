function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="max-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h2 className="font-display text-xl font-bold text-white">
          Erland <span className="text-cyan-400">SecureCode</span>
        </h2>
        <ul className="flex items-center gap-8 font-sans text-sm text-slate-300">
          <li>
            <a className="transition hover:text-cyan-400" href="#">Inicio</a>
          </li>
          <li>
            <a className="transition hover:text-cyan-400" href="#">Productos</a>
          </li>
          <li>
            <a className="transition hover:text-cyan-400" href="#">Categorías</a>
          </li>
          <li>
            <a className="transition hover:text-cyan-400" href="#">Carrito</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
