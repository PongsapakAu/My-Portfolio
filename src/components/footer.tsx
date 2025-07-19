export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cradbg/40 border-t border-amber-400/30 py-6 text-center text-sm text-amber-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>
          &copy; {year} Pongsapak Junnasaksri. All rights reserved.
        </p>
        <p className="mt-1">
          Designed &amp; developed by <span className="font-semibold">Pongsapak Junnasaksri (Au)</span>
        </p>
      </div>
    </footer>
  );
}
