const mockCharacters = [
  {
    id: 1,
    name: "Warrior",
    strength: 15,
    agility: 8,
    health: 100,
    inventory: ["Sword", "Shield"],
  },
  {
    id: 2,
    name: "Mage",
    strength: 5,
    agility: 12,
    health: 80,
    inventory: ["Spellbook", "Wand"],
  },
  {
    id: 3,
    name: "Rogue",
    strength: 10,
    agility: 15,
    health: 90,
    inventory: ["Dagger", "Lockpick"],
  },
];

const mockEvents = [
  {
    id: 1,
    title: "Treasure Chest",
    description: "You find a treasure chest in the forest. What do you do?",
    actions: [
      {
        id: 1,
        text: "Open it",
        effect: { health: 0, inventory: ["Gold Coins"] },
      },
      { id: 2, text: "Ignore it", effect: { health: 0, inventory: [] } },
    ],
  },
  {
    id: 2,
    title: "Ambush!",
    description: "You are ambushed by a group of bandits!",
    actions: [
      {
        id: 1,
        text: "Fight",
        effect: { health: -20, inventory: ["Bandit's Loot"] },
      },
      { id: 2, text: "Run", effect: { health: -10, inventory: [] } },
    ],
  },
  {
    id: 3,
    title: "Mystical Fountain",
    description:
      "You discover a mystical fountain that glows with magical energy.",
    actions: [
      {
        id: 1,
        text: "Drink the water",
        effect: { health: +30, inventory: [] },
      },
      { id: 2, text: "Walk away", effect: { health: 0, inventory: [] } },
    ],
  },
  {
    id: 4,
    title: "Cave Exploration",
    description:
      "You stumble upon a dark cave. It looks dangerous but exciting.",
    actions: [
      {
        id: 1,
        text: "Explore the cave",
        effect: { health: -10, inventory: ["Rare Gem"] },
      },
      { id: 2, text: "Stay outside", effect: { health: 0, inventory: [] } },
    ],
  },
  {
    id: 5,
    title: "Old Merchant",
    description: "An old merchant offers to trade items with you.",
    actions: [
      {
        id: 1,
        text: "Trade your Sword for a Magic Amulet",
        effect: { inventory: ["Magic Amulet"], trade: "Sword" },
      },
      {
        id: 2,
        text: "Decline the trade",
        effect: { inventory: [], trade: null },
      },
    ],
  },
];

export { mockCharacters, mockEvents };
