
import React, { useState, useEffect } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';

interface GeneratedContractProps {
    contractText: string;
    isLoading: boolean;
    error: string | null;
}

const GeneratedContract: React.FC<GeneratedContractProps> = ({ contractText, isLoading, error }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (contractText) {
            navigator.clipboard.writeText(contractText);
            setCopied(true);
        }
    };
    
    useEffect(() => {
        if(copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);


    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                     <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-lg font-semibold">يقوم الذكاء الاصطناعي بصياغة العقد...</p>
                    <p className="mt-2">قد يستغرق هذا بضع لحظات.</p>
                </div>
            );
        }
        if (error) {
            return (
                <div className="flex items-center justify-center h-full text-red-500 bg-red-50 p-4 rounded-lg">
                    <p><strong>خطأ:</strong> {error}</p>
                </div>
            );
        }
        if (contractText) {
            return (
                <pre className="whitespace-pre-wrap break-words text-right p-4 font-sans text-sm leading-relaxed">
                    {contractText}
                </pre>
            );
        }
        return (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-semibold">سيظهر العقد الذي تم إنشاؤه هنا.</p>
                <p className="mt-1 text-center">املأ النموذج على اليمين واضغط على "إنشاء العقد" للبدء.</p>
            </div>
        );
    };

    return (
        <div className="bg-gray-50 p-2 rounded-lg border border-gray-200 relative min-h-[400px] lg:min-h-full flex flex-col">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 p-4">
                <h3 className="text-xl font-bold text-blue-700">مسودة العقد</h3>
                {contractText && !isLoading && (
                     <button
                        onClick={handleCopy}
                        className={`px-3 py-1.5 text-sm font-semibold rounded-md flex items-center gap-2 transition-colors duration-200 ${
                            copied ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                    >
                        <ClipboardIcon className="w-4 h-4" />
                        {copied ? 'تم النسخ!' : 'نسخ النص'}
                    </button>
                )}
            </div>
            <div className="flex-grow overflow-y-auto p-2" style={{ maxHeight: '60vh' }}>
                 {renderContent()}
            </div>
        </div>
    );
};

export default GeneratedContract;
