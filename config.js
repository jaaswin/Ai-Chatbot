// Configuration for chatbot - loads from environment variables or defaults
window.ChatbotConfig = {
    // Default values (fallbacks)
    chatflowid: "cf16971f-409f-4e78-bccf-a039fdc93206",
    apiHost: "https://cloud.flowiseai.com",

    // Function to load config from environment or server
    async loadFromEnv() {
        try {
            // Try to fetch from a server endpoint that provides env vars (if you have a backend)
            const response = await fetch('/api/config');
            if (response.ok) {
                const envConfig = await response.json();
                this.chatflowid = envConfig.CHATFLOW_ID || this.chatflowid;
                this.apiHost = envConfig.FLOWISE_API_HOST || this.apiHost;
            }
        } catch (error) {
            // Fallback to checking if environment variables are exposed globally
            if (window.ENV) {
                this.chatflowid = window.ENV.CHATFLOW_ID || this.chatflowid;
                this.apiHost = window.ENV.FLOWISE_API_HOST || this.apiHost;
            }
            // Otherwise use defaults
        }
        return {
            chatflowid: this.chatflowid,
            apiHost: this.apiHost
        };
    }
};