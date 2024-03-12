const products = [
  {
    title: "WoW Gold",
    url: "wowgold",
    imgSrc: "/assets/products/wow.webp",
    game: "World of Warcraft",
    gameUrl: "worldofwarcraft",
    category: "WoW Gold",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
    rating: 4.5,
    numReviews: 12,
    basePrice: 5,
    deal: true,
    filters: [
      {
        type: "Single",
        name: "Platform",
        values: [
          { title: "PC", multiplicator: 0 },
          { title: "Xbox", multiplicator: 0 },
          { title: "PS4", multiplicator: 0 },
        ],
      },
      {
        type: "Single",
        name: "Region",
        values: [
          { title: "EU", multiplicator: 0 },
          { title: "US", multiplicator: 0 },
        ],
      },
      {
        type: "Checkbox",
        name: "Additional options",
        values: [
          { title: "Legendary", multiplicator: 0.5 },
          { title: "Epic", multiplicator: 0.25 },
        ],
      },
      {
        type: "Checkbox",
        name: "Color",
        values: [
          { title: "Red", multiplicator: 0 },
          { title: "Blue", multiplicator: 2 },
          { title: "Yellow", multiplicator: 0.25 },
          { title: "Green", multiplicator: 1 },
        ],
      },
      {
        type: "Range",
        name: "Gold",
        values: [{ min: 100000, max: 1000000, step: 100000, multiplicator: 1 }],
      },
    ],
  },
  {
    title: "Fyrakk Heroic Slain",
    url: "fyrakk-heroic",
    imgSrc: "/assets/products/wow.webp",
    game: "World of Warcraft",
    gameUrl: "worldofwarcraft",
    category: "Raids",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
    rating: 4.5,
    numReviews: 12,
    basePrice: 5,
    deal: true,
    filters: [
      {
        type: "Single",
        name: "Platform",
        values: [
          { title: "PC", multiplicator: 0 },
          { title: "Xbox", multiplicator: 0 },
          { title: "PS4", multiplicator: 0 },
        ],
      },
      {
        type: "Single",
        name: "Region",
        values: [
          { title: "EU", multiplicator: 0 },
          { title: "US", multiplicator: 0 },
        ],
      },
      {
        type: "Checkbox",
        name: "Additional options",
        values: [
          { title: "Legendary", multiplicator: 0.5 },
          { title: "Epic", multiplicator: 0.25 },
        ],
      },
      {
        type: "Checkbox",
        name: "Color",
        values: [
          { title: "Red", multiplicator: 0 },
          { title: "Blue", multiplicator: 2 },
          { title: "Yellow", multiplicator: 0.25 },
          { title: "Green", multiplicator: 1 },
        ],
      },
      {
        type: "Range",
        name: "Gold",
        values: [{ min: 100000, max: 1000000, step: 100000, multiplicator: 1 }],
      },
    ],
  },
  {
    title: "Gold",
    url: "gold",
    imgSrc: "/assets/products/diablo4.webp",
    game: "Diablo 4",
    gameUrl: "diablo4",
    category: "Currency",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
    rating: 4.5,
    numReviews: 12,
    basePrice: 5,
    deal: true,
    filters: [
      {
        type: "Single",
        name: "Platform",
        values: [
          { title: "PC", multiplicator: 0 },
          { title: "Xbox", multiplicator: 0 },
          { title: "PS4", multiplicator: 0 },
        ],
      },
      {
        type: "Single",
        name: "Region",
        values: [
          { title: "EU", multiplicator: 0 },
          { title: "US", multiplicator: 0 },
        ],
      },
      {
        type: "Checkbox",
        name: "Additional options",
        values: [
          { title: "Legendary", multiplicator: 0.5 },
          { title: "Epic", multiplicator: 0.25 },
        ],
      },
      {
        type: "Checkbox",
        name: "Color",
        values: [
          { title: "Red", multiplicator: 0 },
          { title: "Blue", multiplicator: 2 },
          { title: "Yellow", multiplicator: 0.25 },
          { title: "Green", multiplicator: 1 },
        ],
      },
      {
        type: "Range",
        name: "Gold",
        values: [{ min: 100000, max: 1000000, step: 100000, multiplicator: 1 }],
      },
    ],
  },
  {
    title: "Pickaxe Unlock",
    url: "pickaxe-unlock",
    imgSrc: "/assets/products/cod.webp",
    game: "Call of Duty",
    gameUrl: "callofduty",
    category: "Modern Warfare 2",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
    rating: 4.5,
    numReviews: 12,
    basePrice: 5,
    deal: false,
    filters: [
      {
        type: "Single",
        name: "Platform",
        values: [
          { title: "PC", multiplicator: 0 },
          { title: "Xbox", multiplicator: 0 },
          { title: "PS4", multiplicator: 0 },
        ],
      },
      {
        type: "Single",
        name: "Region",
        values: [
          { title: "EU", multiplicator: 0 },
          { title: "US", multiplicator: 0 },
        ],
      },
      {
        type: "Checkbox",
        name: "Additional options",
        values: [
          { title: "Legendary", multiplicator: 0.5 },
          { title: "Epic", multiplicator: 0.25 },
        ],
      },
      {
        type: "Checkbox",
        name: "Color",
        values: [
          { title: "Red", multiplicator: 0 },
          { title: "Blue", multiplicator: 2 },
          { title: "Yellow", multiplicator: 0.25 },
          { title: "Green", multiplicator: 1 },
        ],
      },
      {
        type: "Range",
        name: "Gold",
        values: [{ min: 100000, max: 1000000, step: 100000, multiplicator: 1 }],
      },
    ],
  },
  {
    title: "Ranked Boost",
    url: "ranked-boost",
    imgSrc: "/assets/products/lol.webp",
    game: "League of Legends",
    gameUrl: "lol",
    category: "Rank Boost",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
    rating: 4.5,
    numReviews: 12,
    basePrice: 5,
    deal: true,
    filters: [
      {
        type: "Single",
        name: "Platform",
        values: [
          { title: "PC", multiplicator: 0 },
          { title: "Xbox", multiplicator: 0 },
          { title: "PS4", multiplicator: 0 },
        ],
      },
      {
        type: "Single",
        name: "Region",
        values: [
          { title: "EU", multiplicator: 0 },
          { title: "US", multiplicator: 0 },
        ],
      },
      {
        type: "Checkbox",
        name: "Additional options",
        values: [
          { title: "Legendary", multiplicator: 0.5 },
          { title: "Epic", multiplicator: 0.25 },
        ],
      },
      {
        type: "Checkbox",
        name: "Color",
        values: [
          { title: "Red", multiplicator: 0 },
          { title: "Blue", multiplicator: 2 },
          { title: "Yellow", multiplicator: 0.25 },
          { title: "Green", multiplicator: 1 },
        ],
      },
      {
        type: "Range",
        name: "Gold",
        values: [{ min: 100000, max: 1000000, step: 100000, multiplicator: 1 }],
      },
    ],
  },
  {
    title: "Rank Boost",
    url: "rank-boost",
    imgSrc: "/assets/products/apex.webp",
    game: "Apex Legends",
    gameUrl: "apex",
    category: "Rank Boost",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
    rating: 4.5,
    numReviews: 12,
    basePrice: 5,
    deal: false,
    filters: [
      {
        type: "Single",
        name: "Platform",
        values: [
          { title: "PC", multiplicator: 0 },
          { title: "Xbox", multiplicator: 0 },
          { title: "PS4", multiplicator: 0 },
        ],
      },
      {
        type: "Single",
        name: "Region",
        values: [
          { title: "EU", multiplicator: 0 },
          { title: "US", multiplicator: 0 },
        ],
      },
      {
        type: "Checkbox",
        name: "Additional options",
        values: [
          { title: "Legendary", multiplicator: 0.5 },
          { title: "Epic", multiplicator: 0.25 },
        ],
      },
      {
        type: "Checkbox",
        name: "Color",
        values: [
          { title: "Red", multiplicator: 0 },
          { title: "Blue", multiplicator: 2 },
          { title: "Yellow", multiplicator: 0.25 },
          { title: "Green", multiplicator: 1 },
        ],
      },
      {
        type: "Range",
        name: "Gold",
        values: [{ min: 100000, max: 1000000, step: 100000, multiplicator: 1 }],
      },
    ],
  },
];

export default products;
