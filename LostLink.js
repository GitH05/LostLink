// Simulated data for demonstration
const items = [
    { id: 1, name: "Brown Wallet", description: "Found near Greenzy", image: "wallet.jpg", type: "found" },
    { id: 2, name: "Casio Watch", description: "Lost at D-Block", image: "watch.jpg", type: "lost" },
    { id: 3, name: "Redmi Mobile", description: "Found in N-Block(404)", image: "redmi.jpg", type: "found" },
    // Add more items as needed
  ];

  function displayItems(items) {
    const grid = document.getElementById('item-grid');
    grid.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <div class="item-title">${item.name}</div>
          <p>${item.description}</p>
          <p><strong>${item.type === 'lost' ? 'Lost' : 'Found'}</strong></p>
          <button onclick="openChat(${item.id})" class="btn">Contact</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Initial display of items
  displayItems(items);

  // Search functionality
  document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => 
      item.name.toLowerCase().includes(searchTerm) || 
      item.description.toLowerCase().includes(searchTerm)
    );
    displayItems(filteredItems);
  });

  // Simulated chat functionality
  function openChat(itemId) {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = 'block';
    
    // Clear previous messages
    document.getElementById('chat-messages').innerHTML = '';
    
    // Simulate a welcome message
    addChatMessage("System", "Welcome to the chat. You can now communicate about the item.");
  }

  function addChatMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const message = this.value;
      if (message.trim() !== '') {
        addChatMessage("You", message);
        this.value = '';
        
        // Simulate a response
        setTimeout(() => {
          addChatMessage("Owner", "Thank you for your message. Can you provide more details about the item?");
        }, 1000);
      }
    }
  });