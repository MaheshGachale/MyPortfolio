// Environment configuration
const config = {
    emailjs: {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qDAoyswbaALvGHlQK',
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx',
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx'
    }
};

export default config;
