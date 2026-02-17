export default function PageShell({
  title = "StudyMega",
  subtitle = "Coming soon...",
  children,
}) {
  return (
    <main className="w-full min-h-[70vh] px-6 md:px-12 py-12">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text">
          {title}
        </h1>
        <p className="mt-2 text-text/70">{subtitle}</p>
      </div>

      <div className="mt-10">{children}</div>
    </main>
  );
}
