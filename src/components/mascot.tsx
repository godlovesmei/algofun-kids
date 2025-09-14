import React from 'react';

const DuolingoMascot: React.FC = () => {
    return (
        <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <div className="relative">
                    {/* Duo's face */}
                    <div className="w-12 h-12 relative">
                        {/* Eyes */}
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

            <div className="bg-white rounded-2xl px-6 py-3 shadow-md relative">
                <p className="text-gray-700 font-medium">
                    Lets unlock new opportunities for you!
                </p>
                {/* Speech bubble tail */}
                <div className="absolute -top-2 left-8 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
            </div>
        </div>
    );
};

export default DuolingoMascot;
