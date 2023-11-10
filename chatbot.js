// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "Vous cherchez une lecture terre-à-terre? Découvrez '50 nuances de brun', le livre incontournable! 😊",
      "Fan de diversité en brun? Nos t-shirts avec le slogan 'Vive la diversité... des nuances de brun!' sont faits pour vous? 😕",
      "Pour un café qui reflète votre amour pour le brun, pourquoi ne pas opter pour nos cafetières brunes ultra-chic? 📩",
      "Vous souhaitez allier mode et sécurité? Que diriez-vous de nos masques faciaux en tissu brun? 💻",
      "Pour satisfaire les palais sophistiqués de vos animaux de compagnie, pourquoi ne pas essayer nos jouets dans une gamme de tons bruns? 🤔",
      "Vos sourcils méritent-ils une palette aussi riche que votre personnalité? Essayez nos crayons à sourcils aux multiples teintes de brun! 🚫",
      "En quête d'une crème hydratante qui sent bon le café? Découvrez 'Cappuccino Chic' pour une peau douce et parfumée. 🚀",
      "Aimez-vous cuisiner avec style? Nos ensembles de casseroles et poêles antiadhésives dans des tons bruns chaleureux sont faits pour vous? 💬",
      "Sous la pluie, le style compte! Nos parapluies bruns élégants sont-ils le parfait accessoire dont vous avez besoin? 😊",
      "Pour des pieds confortablement chauds avec une touche de sophistication, que pensez-vous de nos chaussettes en laine brun? 🤗",
      "À la recherche d'un sac à main chic? Découvrez nos sacs en cuir brun avec des compartiments spéciaux pour vos rouges à lèvres bruns préférés. 💬",
      "Pour rester à la mode et bien au chaud, pourquoi ne pas essayer nos écharpes en laine brun? 💡",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  