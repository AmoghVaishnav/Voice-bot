# Voice-bot

# 🎙️ Amogh's VoiceBot — Personal AI Interview Assistant

An interactive voice + text chatbot that answers questions about me (Amogh Vaishnav) as if **I** were speaking — powered by OpenAI’s ChatGPT API.

Built as part of an interview assignment, this project demonstrates how AI can be personalized to represent an individual’s **personality, experiences, and aspirations**.


---

## 📌 Description

This is a web-based voice chatbot that:
- Responds to questions *as if Amogh himself is answering*
- Works with both **voice and text inputs**
- Uses a **custom personality system prompt** to simulate real-life responses
- Is deployed online and accessible to anyone without coding knowledge

Example questions it can handle:
- "What's your life story in a few sentences?"
- "What’s your #1 superpower?"
- "How do you push your limits?"

The bot’s responses are grounded in a detailed system prompt reflecting Amogh’s background, values, and personality — allowing the responses to feel **authentic and human**.

---

## 🧰 Tech Stack

| Layer            | Technology                        |
|------------------|------------------------------------|
| AI Model         | OpenAI GPT-4 (via Chat Completions API) |
| Backend Server   | Python + Flask                    |
| Voice Processing | Web Speech API (Browser-native)   |
| Frontend UI      | HTML, CSS, JavaScript             |
| Hosting          | Render.com                        |
| Environment Mgmt | python-dotenv                     |
| Styling          | Custom CSS (minimalist blue theme)|
| Deployment Tool  | Gunicorn                          |

---

## 🌐 Features

- 🎤 **Voice and Text Input**: Choose between typing or speaking
- 🤖 **Personality-Driven Responses**: Uses Amogh’s real-life story and tone
- 🌈 **User-Friendly UI**: Simple, clean interface with microphone icon and animations
- 🔐 **API Security**: Key handled server-side with `.env` management
- 🧠 **System Prompt Customization**: Injects personality into AI responses

---

## 🔍 Logic & Architecture

### 1. System Prompt (Personality Injection)
The chatbot uses a customized system prompt to guide GPT responses. This prompt includes:

- Amogh’s professional background
- Personal achievements (e.g., 40kg weight loss, ML model at Wellnest)
- Hobbies (gym, cooking)
- Personality traits (motivated, curious, talkative, slightly procrastinating)

This allows the assistant to **respond in Amogh’s tone** with consistency.

### 2. Chat Flow
User speaks or types →
Frontend sends message to Flask backend →
Flask app sends message + system prompt to OpenAI API →
Receives reply →
Returns JSON response →
Frontend speaks & displays it


##Demo

Click here to checkout the demo: https://youtu.be/84eXTb4hpAM?feature=shared
