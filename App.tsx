
import React, { useState, useCallback } from 'react';
import { ContractType, FormData } from './types';
import { CONTRACT_TYPES } from './constants';
import { generateContractPrompt } from './services/geminiService';
import Header from './components/Header';
import ContractForm from './components/ContractForm';
import GeneratedContract from './components/GeneratedContract';

const App: React.FC = () => {
    const [contractType, setContractType] = useState<ContractType>(ContractType.Lease);
    const [formData, setFormData] = useState<FormData>({});
    const [generatedContract, setGeneratedContract] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleGenerateContract = async () => {
        setIsLoading(true);
        setError(null);
        setGeneratedContract('');
        try {
            const result = await generateContractPrompt(contractType, formData);
            setGeneratedContract(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleContractTypeChange = (type: ContractType) => {
        setContractType(type);
        setFormData({});
        setGeneratedContract('');
        setError(null);
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">منشئ العقود الذكي</h2>
                        <p className="text-gray-500 mt-2">اختر نوع العقد واملأ التفاصيل لإنشاء مستند قانوني جاهز.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                        {Object.values(ContractType).map((type) => (
                            <button
                                key={type}
                                onClick={() => handleContractTypeChange(type)}
                                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                                    contractType === type
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
                                }`}
                            >
                                {CONTRACT_TYPES[type]}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ContractForm
                            contractType={contractType}
                            formData={formData}
                            onFormChange={handleFormChange}
                            onSubmit={handleGenerateContract}
                            isLoading={isLoading}
                        />
                        <GeneratedContract
                            contractText={generatedContract}
                            isLoading={isLoading}
                            error={error}
                        />
                    </div>
                </div>
            </main>
             <footer className="text-center p-4 text-gray-500 text-sm mt-8">
                <p>&copy; {new Date().getFullYear()} شركة أبوكريم للتسويق العقاري والمقاولات. جميع الحقوق محفوظة.</p>
            </footer>
        </div>
    );
};

export default App;
