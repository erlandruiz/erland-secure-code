function Hero (){
    return(
        <section className="bg-slate-950 px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <p className="mb-4 font-mono text-sm text-cyan-400">
                    CÓDIGO ° SEGURIDAD  ° DESAROLLO
                </p>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight">
                    Código seguro para
                    <span className="text-cyan-400"> desarrolladores</span>
                </h1>
                <p className="mt-6 max-w-2xl font-sans text-lg text-slate-400">
                    Recursos digitales de ciberseguridad para construcción de aplicaciones más seguras
                </p>
                <button className="mt-8 rounded-lg bg-cyan-400 px-6 py-3 font-sans font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Explorar productos
                </button>
            </div>
        </section>
    )
}

export default Hero;