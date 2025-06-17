function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `msg ${sender}`;

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = text;

    msgDiv.appendChild(bubble);
    document.getElementById("chatBox").appendChild(msgDiv);

    // Scroll to bottom
    const chatBox = document.getElementById("chatBox");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function startRecording() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    document.getElementById("status").innerText = "Listening...";

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        appendMessage(transcript, "user");

        fetch("/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: transcript })
        })
        .then(response => response.json())
        .then(data => {
            appendMessage(data.response, "bot");
            speak(data.response);
            document.getElementById("status").innerText = "Ready";
        });
    };

    recognition.onerror = function () {
        document.getElementById("status").innerText = "Speech error!";
    };

    recognition.start();
}

function submitText() {
    const input = document.getElementById("textInput");
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    document.getElementById("status").innerText = "Thinking...";
    input.value = "";

    fetch("/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage(data.response, "bot");
        speak(data.response);
        document.getElementById("status").innerText = "Ready";
    });
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
