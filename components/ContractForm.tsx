
import React from 'react';
import { ContractType, FormData } from '../types';
import { FORM_FIELDS, CONTRACT_TYPES } from '../constants';

interface ContractFormProps {
    contractType: ContractType;
    formData: FormData;
    onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

const ContractForm: React.FC<ContractFormProps> = ({ contractType, formData, onFormChange, onSubmit, isLoading }) => {
    const fields = FORM_FIELDS[contractType];

    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
                تفاصيل {CONTRACT_TYPES[contractType]}
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-4">
                {fields.map(field => (
                    <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-semibold text-gray-600 mb-1">
                            {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                            <textarea
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={onFormChange}
                                placeholder={field.placeholder}
                                required
                                className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                rows={3}
                            />
                        ) : (
                            <input
                                id={field.name}
                                name={field.name}
                                type={field.type || 'text'}
                                value={formData[field.name] || ''}
                                onChange={onFormChange}
                                placeholder={field.placeholder}
                                required
                                className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 px-4 py-3 text-white font-bold bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300"
                >
                    {isLoading ? (
                        <>
                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            جاري إنشاء العقد...
                        </>
                    ) : (
                        'إنشاء العقد'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContractForm;
