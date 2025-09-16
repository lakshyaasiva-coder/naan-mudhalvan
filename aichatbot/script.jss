const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Predefined FAQ responses
const faqResponses = {
    "what is your name": "I am Lakshayaa's FAQ Chatbot!",
    "what degree are you pursuing": "I am pursuing Bachelor in AI & DS.",
    "what skills do you have": "I have communication and leadership skills.",
    "how can i contact you": "You can contact via email or social media.",
    "hello": "Hello! How can I help you today?",
    "hi": "Hi there! Ask me any question.",
    "bye": "Goodbye! Have a great day!"
};

function sendMessage() {
    const userText = userInput.value.trim().toLowerCase();
    if(userText === "") return;

    // Display user message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'user-message';
    userMsgDiv.textContent = userInput.value;
    chatbox.appendChild(userMsgDiv);

    // Clear input
    userInput.value = "";

    // Check FAQ
    let response = "Sorry, I don't know the answer to that. Please ask something else.";
    for (let key in faqResponses) {
        if (userText.includes(key)) {
            response = faqResponses[key];
            break;
        }
    }

    // Display bot response
    const botMsgDiv = document.createElement('div');
    botMsgDiv.className = 'bot-message';
    botMsgDiv.textContent = response;
    chatbox.appendChild(botMsgDiv);

    // Scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Enable sending message with Enter key
userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});