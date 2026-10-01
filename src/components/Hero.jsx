function Hero() {
  return (
    <section className="bg-brand-bg px-6 py-16 text-brand-text sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-sm font-medium text-brand-secondary">
          CÓDIGO • SEGURIDAD • DESARROLLO
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Código seguro para
          <span className="text-brand-primary"> desarrolladores</span>
        </h1>

        <p className="mt-6 max-w-2xl font-sans text-base font-medium text-brand-muted sm:text-lg">
          Recursos digitales de ciberseguridad para ayudarte a construir
          aplicaciones más seguras.
        </p>

        <button className="mt-8 rounded-lg bg-brand-primary px-6 py-3 font-sans font-bold text-brand-bg transition hover:opacity-90">
          Explorar productos
        </button>
      </div>
    </section>
  );
}

export default Hero;
