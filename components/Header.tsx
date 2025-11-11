
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        أ
                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-blue-800">
                            شركة أبوكريم للتسويق العقاري والمقاولات
                        </h1>
                        <p className="text-xs md:text-sm text-gray-500">والتشطيبات والتوظيف بالإسماعيلية</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
