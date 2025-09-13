import React, { ReactNode } from 'react';

export default function OnboardingLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <div className="w-full max-w-2xl flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}
