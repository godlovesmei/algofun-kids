import React, { ReactNode } from 'react';

export default function OnboardingLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl flex-1 flex flex-col py-6 sm:py-8 md:py-12">
                    {children}
                </div>
            </div>
            {/* Full-width border separator */}
            <div className="w-full border-t border-gray-200 bg-white">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Footer content akan ditaruh di sini oleh children */}
                </div>
            </div>
        </div>
    );
}
