export default function LearnHeader() {
    return (
        <header className="h-16 bg-blue-400 text-white flex items-center justify-between px-4 shadow">
            {/* Kiri */}
            <div className="flex items-center gap-3">
                <button className="text-white font-semibold">
                    &larr; BAGIAN 2, UNIT 1
                </button>
                <h2 className="font-bold">Belanja pakaian</h2>
            </div>

            {/* Kanan */}
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded font-medium">
                Buku Panduan
            </button>
        </header>
    );
}
