
import { GoogleGenAI } from "@google/genai";
import { ContractType, FormData } from '../types';
import { CONTRACT_TYPES, FORM_FIELDS } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

function buildPrompt(contractType: ContractType, formData: FormData): string {
    const contractTitle = CONTRACT_TYPES[contractType];
    const fields = FORM_FIELDS[contractType];

    const details = fields
        .map(field => `- ${field.label}: ${formData[field.name] || 'غير محدد'}`)
        .join('\n');

    return `
        بصفتك خبيرًا في صياغة العقود القانونية ومتخصصًا في القانون المصري، قم بإنشاء مسودة ${contractTitle} رسمية وكاملة باللغة العربية. 
        يجب أن يكون العقد واضحًا وشاملاً ويحمي حقوق جميع الأطراف.

        استخدم التفاصيل التالية في صياغة العقد:
        ${details}

        تأكد من تضمين البنود الأساسية التالية:
        1.  مقدمة واضحة تعرف بأطراف العقد وأهليتهم القانونية.
        2.  بند تمهيدي يوضح خلفية العقد والغرض منه.
        3.  بنود تفصيلية تغطي جميع جوانب الاتفاق بناءً على التفاصيل المذكورة أعلاه (مثل: وصف العين المؤجرة، الثمن وطريقة السداد، نطاق الأعمال، رأس المال وتوزيعه).
        4.  بند يحدد التزامات كل طرف بوضوح.
        5.  بند يحدد مدة العقد وكيفية تجديده أو إنهائه.
        6.  بند خاص بالشرط الجزائي في حالة إخلال أحد الأطراف بالتزاماته.
        7.  بند يوضح القانون الواجب التطبيق والمحكمة المختصة في حالة النزاع (القانون المصري ومحاكم الإسماعيلية).
        8.  بند يؤكد على أن هذا العقد ملزم للطرفين وخلفائهما.
        9.  خاتمة تحتوي على عدد نسخ العقد وتوقيعات الأطراف والشهود.

        يجب أن تكون الصياغة قانونية ورسمية. قم بتنسيق المخرجات بشكل جيد مع عناوين واضحة للبنود.
    `;
}

export async function generateContractPrompt(contractType: ContractType, formData: FormData): Promise<string> {
    try {
        const model = 'gemini-2.5-pro';
        const prompt = buildPrompt(contractType, formData);

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                temperature: 0.5,
            }
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate contract. Please check your API key and try again.");
    }
}
