### 🧠 AI Agent Workflow (Flowise)

The diagram below illustrates the complete Flowise pipeline used to build the Pondicherry Tourism AI Agent.
This workflow integrates a Gemini LLM, custom prompt engineering, and a text-based knowledge source to generate accurate and context-aware responses.

**Pipeline Components:**

* **ChatGoogleGenerativeAI Node**
  Connects the Gemini 2.5 Flash model using secure API credentials with adjustable parameters such as temperature and image upload permissions.

* **Text File Node**
  Imports external knowledge (pondy.txt) and splits content for efficient retrieval and processing.

* **Prompt Template Node**
  Defines the structured system prompt that instructs the model to act as a *Pondicherry Tourist Guide Assistant*.
  User questions are dynamically injected into the template using `{input}` variables.

* **LLM Chain Node**
  Combines the prompt, retrieved data, and language model to generate final user-facing responses.

This modular design ensures the agent remains scalable, maintainable, and optimized for tourism-based conversational assistance.
![WhatsApp Image 2025-12-08 at 10 14 28_98d8ee5b](https://github.com/user-attachments/assets/e839bea3-7df4-4776-8a4c-a9024a02b768)
