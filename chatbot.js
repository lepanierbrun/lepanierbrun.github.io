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
      "Vous cherchez une lecture terre-&agrave;-terre? D&eacute;couvrez '50 nuances de brun', le livre incontournable!",
      "Fan de diversit&eacute; en brun? Nos t-shirts avec le slogan 'Vive la diversit&eacute;... des nuances de brun!' sont faits pour vous?",
      "Pour un caf&eacute; qui refl&egrave;te votre amour pour le brun, pourquoi ne pas opter pour nos cafeti&egrave;res brunes ultra-chic?",
      "Vous souhaitez allier mode et s&eacute;curit&eacute;? Que diriez-vous de nos masques faciaux en tissu brun?",
      "Pour satisfaire les palais sophistiqu&eacute;s de vos animaux de compagnie, pourquoi ne pas essayer nos jouets dans une gamme de tons bruns?",
      "Vos sourcils m&eacute;ritent-ils une palette aussi riche que votre personnalit&eacute;? Essayez nos crayons &agrave; sourcils aux multiples teintes de brun!",
      "En quête d'une cr&egrave;me hydratante qui sent bon le caf&eacute;? D&eacute;couvrez 'Cappuccino Chic' pour une peau douce et parfum&eacute;",
      "Aimez-vous cuisiner avec style? Nos ensembles de casseroles et poêles antiadh&eacute;sives dans des tons bruns chaleureux sont faits pour vous?",
      "Sous la pluie, le style compte! Nos parapluies bruns &eacute;l&eacute;gants sont-ils le parfait accessoire dont vous avez besoin?",
      "Pour des pieds confortablement chauds avec une touche de sophistication, que pensez-vous de nos chaussettes en laine brun?",
      "&agrave; la recherche d'un sac &agrave; main chic? D&eacute;couvrez nos sacs en cuir brun avec des compartiments sp&eacute;ciaux pour vos rouges &agrave; l&egrave;vres bruns pr&eacute;f&eacute;r&eacute;s.",
      "Pour rester &agrave; la mode et bien au chaud, pourquoi ne pas essayer nos &eacute;charpes en laine brun?",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  
