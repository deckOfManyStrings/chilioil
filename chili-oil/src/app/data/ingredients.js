// data/ingredients.js
export const ingredients = [
  {
    id: 1,
    name: 'Dried Garlic',
    price: 1.50,
    description: 'Premium dried garlic flakes',
    effect: 'Adds savory depth and umami. When infused, creates a roasted garlic flavor throughout the oil.',
    heatLevel: 0
  },
  {
    id: 2,
    name: 'Sesame Seeds',
    price: 1.00,
    description: 'Toasted white sesame seeds',
    effect: 'Adds nutty flavor and texture. Creates a rich, toasted undertone in your finished oil.',
    heatLevel: 0
  },
  {
    id: 3,
    name: 'Sichuan Peppercorns',
    price: 2.00,
    description: 'Whole premium Sichuan peppercorns',
    effect: 'Creates the signature "má" numbing sensation. Infuses citrusy and floral notes.',
    heatLevel: 2
  },
  {
    id: 4,
    name: 'Dried Shallots',
    price: 1.50,
    description: 'Crispy dried shallot pieces',
    effect: 'Provides sweet, aromatic notes. Mellower than garlic with delicate onion flavor.',
    heatLevel: 0
  },
  {
    id: 5,
    name: 'Star Anise',
    price: 1.75,
    description: 'Whole star anise pods',
    effect: 'Adds warm, sweet licorice notes. Traditional Chinese spice that deepens flavor.',
    heatLevel: 0
  },
  {
    id: 6,
    name: 'Jalapeños',
    price: 1.75,
    description: 'Dried jalapeño flakes',
    effect: 'Medium heat with fresh pepper flavor. Perfect for those who enjoy moderate spice.',
    heatLevel: 2
  },
  {
    id: 7,
    name: 'Bird\'s Eye Chilies',
    price: 2.25,
    description: 'Dried Thai bird\'s eye chili flakes',
    effect: 'Intense heat with bright, citrusy notes. Creates a sharp, vibrant spiciness.',
    heatLevel: 5
  },
  {
    id: 8,
    name: 'Carolina Reaper',
    price: 3.00,
    description: 'Dried Carolina Reaper flakes',
    effect: 'Extreme heat with sweet undertones. Use sparingly - world\'s hottest pepper.',
    heatLevel: 5,
    warning: true
  }
];

export const baseBlend = {
  description: "Our signature spice blend combines premium chilies, garlic, and select aromatics for the perfect foundation. Each jar contains a carefully measured portion to create 8oz of perfectly balanced chili oil.",
  heatLevel: 3,
  instructions: [
    "Heat 8oz neutral oil (like grapeseed or canola) to 275°F/135°C",
    "Place spice blend in heat-safe jar",
    "Carefully pour hot oil over spices",
    "Stir gently to combine",
    "Let cool completely at room temperature",
    "Store in a cool, dark place for up to 3 months"
  ],
  tips: [
    "Use a cooking thermometer for best results",
    "Oil should be hot but not smoking",
    "Additional ingredients can be added with base blend before oil infusion",
    "Allow 24 hours for flavors to fully develop"
  ],
  oilRecommendations: [
    "Grapeseed oil (neutral, high smoke point)",
    "Canola oil (neutral, readily available)",
    "Peanut oil (slight nutty flavor)",
    "Vegetable oil (neutral, economical)"
  ]
};