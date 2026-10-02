function CheckoutForm({
  name,
  email,
  setName,
  setEmail,
  total,
  saving,
  cartIsEmpty,
  error,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 rounded-xl bg-brand-surface p-6 sm:p-8"
    >
      {error && (
        <p className="mb-6 rounded-lg bg-red-500/10 p-4 font-sans font-semibold text-red-400">
          {error}
        </p>
      )}

      <div>
        <label
          htmlFor="name"
          className="font-sans font-bold"
        >
          Nombre
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
          className="mt-2 w-full rounded-lg border border-brand-muted/30 bg-brand-bg px-4 py-3 font-sans text-brand-text outline-none transition focus:border-brand-primary"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="email"
          className="font-sans font-bold"
        >
          Correo electrónico
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
          className="mt-2 w-full rounded-lg border border-brand-muted/30 bg-brand-bg px-4 py-3 font-sans text-brand-text outline-none transition focus:border-brand-primary"
        />
      </div>

      <div className="mt-8 border-t border-brand-muted/20 pt-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold">
            Total
          </span>

          <span className="font-display text-2xl font-extrabold text-brand-primary">
            S/ {total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={cartIsEmpty || saving}
        className="mt-8 w-full rounded-lg bg-brand-primary px-6 py-3 font-sans font-bold text-brand-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {saving
          ? "Registrando compra..."
          : "Generar ticket"}
      </button>
    </form>
  );
}

export default CheckoutForm;