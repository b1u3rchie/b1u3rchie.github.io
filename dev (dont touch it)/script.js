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
    "- I feel I’m knockin' on heaven’s door",
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
  ];

  const messageStream = document.getElementById('message-stream');

  const addRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerText = quotes[index];
    messageStream.appendChild(bubble);
    messageStream.scrollTop = messageStream.scrollHeight;
  };

  // Auto-quote feature: show a new quote every 5 seconds
  setInterval(addRandomQuote, 5000);
  addRandomQuote(); // Initial quote
});
