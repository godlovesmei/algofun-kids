import React from 'react';

const DuolingoMascot: React.FC = () => {
    return (
        <div className="flex flex-col items-center mb-8">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500 shadow-lg">
                <div className="relative">
                    <div className="w-12 h-12 relative">
                        <div className="absolute top-1 left-1 w-3 h-4 bg-white rounded-full">
                            <div className="w-2 h-2 bg-black rounded-full mt-0.5 ml-0.5"></div>
                        </div>
                        <div className="absolute top-1 right-1 w-3 h-4 bg-white rounded-full">
                            <div className="w-2 h-2 bg-black rounded-full mt-0.5 ml-0.5"></div>
                        </div>

                        {/* Beak */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-2 border-r-2 border-t-3 border-l-transparent border-r-transparent border-t-orange-400"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative rounded-2xl border-2 border-sky-100 bg-white px-6 py-3 shadow-sm">
                <p className="font-bold text-slate-700">
                    Pilih alasan belajarmu, nanti misi Algofun akan terasa
                    lebih pas.
                </p>
                <div className="absolute -top-2 left-8 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
            </div>
        </div>
    );
};

export default DuolingoMascot;
