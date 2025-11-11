
import { ContractType } from './types';

export const CONTRACT_TYPES: Record<ContractType, string> = {
    [ContractType.Lease]: 'عقد إيجار',
    [ContractType.Sale]: 'عقد بيع',
    [ContractType.Contracting]: 'عقد مقاولات',
    [ContractType.Partnership]: 'عقد شراكة',
};

export const FORM_FIELDS: Record<ContractType, { name: string; label: string; placeholder: string; type?: string }[]> = {
    [ContractType.Lease]: [
        { name: 'lessorName', label: 'اسم المؤجر (الطرف الأول)', placeholder: 'أدخل اسم المؤجر بالكامل' },
        { name: 'lessorId', label: 'رقم هوية المؤجر', placeholder: 'أدخل رقم الهوية الوطنية أو جواز السفر' },
        { name: 'lesseeName', label: 'اسم المستأجر (الطرف الثاني)', placeholder: 'أدخل اسم المستأجر بالكامل' },
        { name: 'lesseeId', label: 'رقم هوية المستأجر', placeholder: 'أدخل رقم الهوية الوطنية أو جواز السفر' },
        { name: 'propertyAddress', label: 'عنوان العقار المؤجر', placeholder: 'مثال: 123 شارع النصر، حي الزهور، الإسماعيلية' },
        { name: 'propertyDescription', label: 'وصف العقار', placeholder: 'مثال: شقة سكنية مكونة من 3 غرف وصالة', type: 'textarea' },
        { name: 'rentAmount', label: 'قيمة الإيجار الشهري (بالجنيه المصري)', placeholder: 'مثال: 5000' },
        { name: 'leaseStartDate', label: 'تاريخ بدء الإيجار', placeholder: '', type: 'date' },
        { name: 'leaseDuration', label: 'مدة العقد (بالسنوات)', placeholder: 'مثال: 1' },
    ],
    [ContractType.Sale]: [
        { name: 'sellerName', label: 'اسم البائع (الطرف الأول)', placeholder: 'أدخل اسم البائع بالكامل' },
        { name: 'sellerId', label: 'رقم هوية البائع', placeholder: 'أدخل رقم الهوية الوطنية أو جواز السفر' },
        { name: 'buyerName', label: 'اسم المشتري (الطرف الثاني)', placeholder: 'أدخل اسم المشتري بالكامل' },
        { name: 'buyerId', label: 'رقم هوية المشتري', placeholder: 'أدخل رقم الهوية الوطنية أو جواز السفر' },
        { name: 'propertyAddress', label: 'عنوان العقار المبيع', placeholder: 'مثال: 123 شارع النصر، حي الزهور، الإسماعيلية' },
        { name: 'propertyDetails', label: 'تفاصيل العقار (المساحة، الحدود، ...)', placeholder: 'اذكر تفاصيل العقار بدقة', type: 'textarea' },
        { name: 'salePrice', label: 'إجمالي سعر البيع (بالجنيه المصري)', placeholder: 'مثال: 1500000' },
        { name: 'paymentTerms', label: 'شروط السداد', placeholder: 'مثال: دفعة مقدمة 500 ألف والباقي على 24 شهر', type: 'textarea' },
    ],
    [ContractType.Contracting]: [
        { name: 'clientName', label: 'اسم العميل (صاحب العمل)', placeholder: 'أدخل اسم العميل بالكامل' },
        { name: 'contractorName', label: 'اسم المقاول (الطرف الثاني)', placeholder: 'أدخل اسم المقاول أو الشركة' },
        { name: 'projectLocation', label: 'موقع المشروع', placeholder: 'أدخل عنوان موقع العمل' },
        { name: 'scopeOfWork', label: 'نطاق الأعمال المطلوب تنفيذها', placeholder: 'صف الأعمال بالتفصيل (مثال: تشطيب شقة بالكامل)', type: 'textarea' },
        { name: 'totalCost', label: 'التكلفة الإجمالية للمشروع (بالجنيه المصري)', placeholder: 'مثال: 250000' },
        { name: 'paymentSchedule', label: 'جدول الدفعات', placeholder: 'صف الدفعات ومواعيد استحقاقها', type: 'textarea' },
        { name: 'projectTimeline', label: 'الجدول الزمني للمشروع (بالأيام)', placeholder: 'مثال: 90' },
    ],
    [ContractType.Partnership]: [
        { name: 'partnerOneName', label: 'اسم الشريك الأول', placeholder: 'أدخل اسم الشريك الأول بالكامل' },
        { name: 'partnerTwoName', label: 'اسم الشريك الثاني', placeholder: 'أدخل اسم الشريك الثاني بالكامل' },
        { name: 'partnershipName', label: 'اسم الشركة أو الشراكة', placeholder: 'أدخل الاسم التجاري للشراكة' },
        { name: 'businessPurpose', label: 'غرض الشراكة', placeholder: 'صف طبيعة النشاط التجاري', type: 'textarea' },
        { name: 'partnerOneContribution', label: 'مساهمة الشريك الأول في رأس المال', placeholder: 'صف مساهمة الشريك الأول (مبلغ مالي، أصول، ...)' },
        { name: 'partnerTwoContribution', label: 'مساهمة الشريك الثاني في رأس المال', placeholder: 'صف مساهمة الشريك الثاني (مبلغ مالي، أصول، ...)' },
        { name: 'profitDistribution', label: 'نسبة توزيع الأرباح والخسائر', placeholder: 'مثال: 50% لكل شريك' },
    ],
};
