export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p className="text-gray-300">© {currentYear} Lito's Lab – Geen gedoe, gewoon resultaat.</p>
      </div>
    </footer>
  );
}
