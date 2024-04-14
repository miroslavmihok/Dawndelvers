const products = [
  {
    title: "WoW Gold",
    url: "wowgold",
    imgSrc:
      "https://res.cloudinary.com/dcuebj65r/image/upload/v1712919422/BoostingService/products/wowgold_iurisp.webp",
    game: "World of Warcraft",
    gameUrl: "worldofwarcraft",
    category: "WoW Gold",
    description:
      "In the world of Warcraft, gold serves as the primary currency, allowing players to purchase items, gear, and services to enhance their characters' abilities and progress. Acquiring gold through quests, looting enemies, or trading with other players is essential for thriving in the game's expansive virtual economy.",
    rating: 4.5,
    numReviews: 12,
    priceBeforeDiscount: 5,
    price: 5,
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
    imgSrc:
      "https://res.cloudinary.com/dcuebj65r/image/upload/v1712919798/BoostingService/products/fyrakk_by1ck2.webp",
    game: "World of Warcraft",
    gameUrl: "worldofwarcraft",
    category: "Raids",
    description:
      "The Fyrakk Raid in World of Warcraft is a formidable challenge where players must band together to defeat powerful foes and overcome treacherous obstacles. As adventurers delve into the depths of Fyrakk's lair, they uncover ancient secrets and vie for valuable treasures hidden within its perilous chambers.",
    rating: 4.5,
    numReviews: 12,
    priceBeforeDiscount: 5,
    price: 5,
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
    imgSrc:
      "https://res.cloudinary.com/dcuebj65r/image/upload/v1712919946/BoostingService/products/diablogold_zwq7s1.webp",
    game: "Diablo 4",
    gameUrl: "diablo4",
    category: "Currency",
    description:
      "In Diablo 4, gold serves as the universal currency that players use to purchase items, upgrade gear, and trade with other players. As adventurers traverse the dark and dangerous world of Sanctuary, amassing gold becomes crucial for surviving the ever-present threats lurking around every corner.",
    rating: 4.5,
    numReviews: 12,
    priceBeforeDiscount: 5,
    price: 5,
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
    imgSrc:
      "https://res.cloudinary.com/dcuebj65r/image/upload/v1712920079/BoostingService/products/codpickaxe_wzo42p.webp",
    game: "Call of Duty",
    gameUrl: "callofduty",
    category: "Modern Warfare 2",
    description:
      "In Call of Duty, the pickaxe is a versatile melee weapon that players can wield with deadly precision in close-quarters combat. With its swift strikes and devastating power, the pickaxe proves to be a formidable tool for dispatching enemies and securing victory on the battlefield.",
    rating: 4.5,
    numReviews: 12,
    priceBeforeDiscount: 5,
    price: 5,
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
    imgSrc:
      "https://res.cloudinary.com/dcuebj65r/image/upload/v1712920241/BoostingService/products/lolranked_rtz9dy.webp",
    game: "League of Legends",
    gameUrl: "lol",
    category: "Rank Boost",
    description:
      "In League of Legends, ranked mode offers players a competitive arena where they can test their skills against opponents of similar proficiency. Climbing the ranked ladder through victories earns players higher ranks and prestigious rewards, while defeat can result in demotion, adding a thrilling dynamic to each match.",
    rating: 4.5,
    numReviews: 12,
    priceBeforeDiscount: 5,
    price: 5,
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
    imgSrc:
      "https://res.cloudinary.com/dcuebj65r/image/upload/v1712920662/BoostingService/products/apexranked_tdiaws.webp",
    game: "Apex Legends",
    gameUrl: "apex",
    category: "Rank Boost",
    description:
      "In Apex Legends, ranked mode provides players with a competitive environment where they can showcase their abilities and strive for higher ranks. Climbing the ranks requires teamwork, strategic thinking, and skillful gameplay, offering both challenges and rewards to those who dare to compete.",
    rating: 4.5,
    numReviews: 12,
    priceBeforeDiscount: 5,
    price: 5,
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
