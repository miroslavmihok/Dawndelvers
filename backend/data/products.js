const products = [
  {
    title: "World of Warcraft",
    url: "worldofwarcraft",
    bg: "/assets/games/wow.webp",
    logo: "/assets/games/wowlogo.webp",
    productList: [
      {
        id: 0,
        title: "WoW Gold",
        url: "wowgold",
        imgSrc: "/assets/products/wow.webp",
        category: "WoW Gold",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 1,
        title: "Amirdrassil Mythic",
        url: "amidrassil-mythic",
        imgSrc: "/assets/products/wow.webp",
        category: "Raids",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Amirdrassil Heroic",
        url: "amidrassil-heroic",
        imgSrc: "/assets/products/wow.webp",
        category: "Raids",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Keystone Master",
        url: "keystone-master",
        imgSrc: "/assets/products/wow.webp",
        category: "Dungeons",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Mythic Plus Gear",
        url: "mythic-plus-gear",
        imgSrc: "/assets/products/wow.webp",
        category: "Dungeons",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Arena PvP Coaching",
        url: "arena-pvp-coaching",
        imgSrc: "/assets/products/wow.webp",
        category: "PvP",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Arena 2v2",
        url: "arena-duo",
        imgSrc: "/assets/products/wow.webp",
        category: "PvP",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Power Leveling",
        url: "power-leveling",
        imgSrc: "/assets/products/wow.webp",
        category: "Leveling",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Diablo 4",
    url: "diablo4",
    bg: "/assets/games/diablo4.webp",
    logo: "/assets/games/diablo4logo.webp",
    productList: [
      {
        id: 8,
        title: "Gold",
        url: "gold",
        imgSrc: "/assets/products/diablo4.webp",
        category: "Currency",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 9,
        title: "Murmuring obols",
        url: "murmuring-obols",
        imgSrc: "/assets/products/diablo4.webp",
        category: "Currency",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 10,
        title: "Power Leveling",
        url: "power-leveling",
        imgSrc: "/assets/products/diablo4.webp",
        category: "Leveling",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 11,
        title: "Vashan the Consumed",
        url: "vashan-the-consumed",
        imgSrc: "/assets/products/diablo4.webp",
        category: "Bosses",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Call of Duty",
    url: "callofduty",
    bg: "/assets/games/cod.webp",
    logo: "/assets/games/codlogo.webp",
    productList: [
      {
        id: 12,
        title: "Pickaxe Unlock",
        url: "pickaxe-unlock",
        imgSrc: "/assets/products/cod.webp",
        category: "Modern Warfare 2",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 13,
        title: "MW3 Ranked Play",
        url: "modern-warfare-3-ranked-play",
        imgSrc: "/assets/products/cod.webp",
        category: "Modern Warfare 3",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "League of Legends",
    url: "lol",
    bg: "/assets/games/lol.webp",
    logo: "/assets/games/lollogo.webp",
    productList: [
      {
        id: 14,
        title: "Ranked Boost",
        url: "ranked-boost",
        imgSrc: "/assets/products/lol.webp",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 15,
        title: "Win Boost",
        url: "win-boost",
        imgSrc: "/assets/products/lol.webp",
        category: "Win Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 16,
        title: "Coaching",
        url: "coaching",
        imgSrc: "/assets/products/lol.webp",
        category: "Coaching",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 17,
        title: "Division Boost",
        url: "division-boost",
        imgSrc: "/assets/products/lol.webp",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 18,
        title: "Placement Matches",
        url: "placement-matches",
        imgSrc: "/assets/products/lol.webp",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Apex Legends",
    url: "apex",
    bg: "/assets/games/apex.webp",
    logo: "/assets/games/apexlogo.webp",
    productList: [
      {
        id: 19,
        title: "Rank Boost",
        url: "rank-boost",
        imgSrc: "/assets/products/apex.webp",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 20,
        title: "Predator Rank",
        url: "predator-rank",
        imgSrc: "/assets/products/apex.webp",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 21,
        title: "All Badges",
        url: "all-badges",
        imgSrc: "/assets/products/apex.webp",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 22,
        title: "Legend's Wrath Badge",
        url: "legends-wrath-badge",
        imgSrc: "/assets/products/apex.webp",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "League of Legends",
    url: "lol",
    bg: "/assets/games/lol.webp",
    logo: "/assets/games/lollogo.webp",
    productList: [
      {
        id: 23,
        title: "Ranked Boost",
        url: "ranked-boost",
        imgSrc: "/assets/products/lol.webp",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 24,
        title: "Win Boost",
        url: "win-boost",
        imgSrc: "/assets/products/lol.webp",
        category: "Win Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 25,
        title: "Coaching",
        url: "coaching",
        imgSrc: "/assets/products/lol.webp",
        category: "Coaching",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 26,
        title: "Division Boost",
        url: "division-boost",
        imgSrc: "/assets/products/lol.webp",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 27,
        title: "Placement Matches",
        url: "placement-matches",
        imgSrc: "/assets/products/lol.webp",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Apex Legends",
    url: "apex",
    bg: "/assets/games/apex.webp",
    logo: "/assets/games/apexlogo.webp",
    productList: [
      {
        id: 28,
        title: "Rank Boost",
        url: "rank-boost",
        imgSrc: "/assets/products/apex.webp",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 29,
        title: "Predator Rank",
        url: "predator-rank",
        imgSrc: "/assets/products/apex.webp",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 30,
        title: "All Badges",
        url: "all-badges",
        imgSrc: "/assets/products/apex.webp",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        basePrice: 5,
        dal: false,
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
      {
        id: 31,
        title: "Legend's Wrath Badge",
        url: "legends-wrath-badge",
        imgSrc: "/assets/products/apex.webp",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
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
            values: [
              { min: 100000, max: 1000000, step: 100000, multiplicator: 1 },
            ],
          },
        ],
      },
    ],
  },
];

export default products;
