window.setTheme = (theme) => {
  document.body.classList.forEach(cls => {
    if (cls.startsWith('theme-')) {
      document.body.classList.remove(cls);
    }
  });

  document.body.classList.add(theme);

  localStorage.setItem('theme', theme);

  document.documentElement.style.setProperty(
    '--theme-refresh',
    Date.now()
  );
};


document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    "夜があるから、朝の光は美しい。",
    "блулулулулу вевевевеве",
    "омномноном",
    "ВАС ПОЗВАЛИ ЕБАТЬ МАНГО🥭🥭🥭",
    "антон чигур никого не убивал",
    "A big lie repeated becomes belief.",
    "Сестрёнка открой ротик и скажи мяу мяу пожалуйста",
    "toothbrush with 6k polygons",
    "Wayland is a replacement for the X11 window system protocol",
    "ешьте чё дают",
    "Accidents happen",
    "So I felt like the biggest asshole",
    "Nobody here but us chickens!",
    "plasmashell closed unexpectedly",
    "And the superstar's sucked into the... (Ooh, you set my soul)",
    "- She's a killer queen. Gunpowder, gelatin. Dynamite with a laser beam. Guaranteed to blow your mind!",
    "- As slowly turns the grinding wheel, In the court of the crimson king...",
    "- let the joy of love give you an answer, wakare no toki sae, kudake nu ishi de, 1999 bizarre summer, kawasu yuki ga umu sanka, great days!",
    "- Jealousy, when will you let go?",
    "- I feel I'm knockin' on heaven's door",
    "systemctl stop pulseaudio",
    "pip install opsec",
    "Reconstruct what????",
    "nix-shell -p love",
    "The right man in the wrong place can make all the difference in the world.",
    "Smell the ashes",
    "I think we can put our differences behind us. For science, you monster!",
    "which funny / funny not found",
    "nixos-rebuild switch",
    "Would you hold still, please?",
    "твое от тебя не уйдет",
    "Feel that? That's true",
    "I wanna go home. I don't like this party. I'm allergic to people",
    "Why is he lying?",
    "Did you know that people with guilty consciences are more easily startled by loud noise",
    "I'm... right here, with someone you can't see.",
    "Try looking into that place where you dare not look! You'll find me there, staring out at you!",
    "A beginning is the time for taking the most delicate care that the balances are correct.",
    "May thy knife chip and shatter.",
    "You fought well, Atreides...",
    "Muad-dib leads the way.",
    "Cousin? Is that right? Well, you wouldn't be the first relative I've killed."
  ];

  const messageStream = document.getElementById('message-stream');
  let lastQuoteIndex = -1;

  const addRandomQuote = () => {
    let index;
    // Ensure we don't repeat the same quote twice in a row
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === lastQuoteIndex && quotes.length > 1);
    lastQuoteIndex = index;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerText = quotes[index];
    bubble.setAttribute('role', 'status');
    bubble.setAttribute('aria-live', 'polite');
    
    messageStream.appendChild(bubble);
    
    // Smooth scroll to bottom
    requestAnimationFrame(() => {
      messageStream.scrollTop = messageStream.scrollHeight;
    });
  };

  // Auto-quote feature: show a new quote every 5 seconds
  const quoteInterval = setInterval(addRandomQuote, 5000);
  
  // Show initial quote
  addRandomQuote();
  
  // Optional: Add click handler to add quote on demand
  messageStream.addEventListener('click', (e) => {
    if (e.target.classList.contains('message-bubble')) {
      addRandomQuote();
    }
  });
  
  // Clean up interval on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(quoteInterval);
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }
});
