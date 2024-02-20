const products = [
  {
    title: "World of Warcraft",
    url: "worldofwarcraft",
    bg: "/assets/games/wow.jpg",
    logo: "/assets/games/wowlogo.png",
    productList: [
      {
        id: 0,
        title: "WoW Gold",
        url: "wowgold",
        imgSrc: "/assets/products/wow.png",
        category: "WoW Gold",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 1,
        title: "Amirdrassil Mythic",
        url: "amidrassil-mythic",
        imgSrc: "/assets/products/wow.png",
        category: "Raids",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 2,
        title: "Amirdrassil Heroic",
        url: "amidrassil-heroic",
        imgSrc: "/assets/products/wow.png",
        category: "Raids",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 3,
        title: "Keystone Master",
        url: "keystone-master",
        imgSrc: "/assets/products/wow.png",
        category: "Dungeons",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 4,
        title: "Mythic Plus Gear",
        url: "mythic-plus-gear",
        imgSrc: "/assets/products/wow.png",
        category: "Dungeons",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 5,
        title: "Arena PvP Coaching",
        url: "arena-pvp-coaching",
        imgSrc: "/assets/products/wow.png",
        category: "PvP",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 6,
        title: "Arena 2v2",
        url: "arena-duo",
        imgSrc: "/assets/products/wow.png",
        category: "PvP",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 7,
        title: "Power Leveling",
        url: "power-leveling",
        imgSrc: "/assets/products/wow.png",
        category: "Leveling",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
    ],
  },
  {
    title: "Diablo 4",
    url: "diablo4",
    bg: "/assets/games/diablo4.jpg",
    logo: "/assets/games/diablo4logo.png",
    productList: [
      {
        id: 8,
        title: "Gold",
        url: "gold",
        imgSrc: "/assets/products/diablo4.png",
        category: "Currency",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 9,
        title: "Murmuring obols",
        url: "murmuring-obols",
        imgSrc: "/assets/products/diablo4.png",
        category: "Currency",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 10,
        title: "Power Leveling",
        url: "power-leveling",
        imgSrc: "/assets/products/diablo4.png",
        category: "Leveling",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 11,
        title: "Vashan the Consumed",
        url: "vashan-the-consumed",
        imgSrc: "/assets/products/diablo4.png",
        category: "Bosses",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
    ],
  },
  {
    title: "Call of Duty",
    url: "callofduty",
    bg: "/assets/games/cod.jpg",
    logo: "/assets/games/codlogo.png",
    productList: [
      {
        id: 12,
        title: "Pickaxe Unlock",
        url: "pickaxe-unlock",
        imgSrc: "/assets/products/cod.png",
        category: "Modern Warfare 2",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 13,
        title: "MW3 Ranked Play",
        url: "modern-warfare-3-ranked-play",
        imgSrc: "/assets/products/cod.png",
        category: "Modern Warfare 3",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
    ],
  },
  {
    title: "League of Legends",
    url: "lol",
    bg: "/assets/games/lol.jpg",
    logo: "/assets/games/lollogo.png",
    productList: [
      {
        id: 14,
        title: "Ranked Boost",
        url: "ranked-boost",
        imgSrc: "/assets/products/lol.png",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 15,
        title: "Win Boost",
        url: "win-boost",
        imgSrc: "/assets/products/lol.png",
        category: "Win Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 16,
        title: "Coaching",
        url: "coaching",
        imgSrc: "/assets/products/lol.png",
        category: "Coaching",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 17,
        title: "Division Boost",
        url: "division-boost",
        imgSrc: "/assets/products/lol.png",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 18,
        title: "Placement Matches",
        url: "placement-matches",
        imgSrc: "/assets/products/lol.png",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
    ],
  },
  {
    title: "Apex Legends",
    url: "apex",
    bg: "/assets/games/apex.jpg",
    logo: "/assets/games/apexlogo.png",
    productList: [
      {
        id: 19,
        title: "Rank Boost",
        url: "rank-boost",
        imgSrc: "/assets/products/apex.png",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 20,
        title: "Predator Rank",
        url: "predator-rank",
        imgSrc: "/assets/products/apex.png",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 21,
        title: "All Badges",
        url: "all-badges",
        imgSrc: "/assets/products/apex.png",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 22,
        title: "Legend's Wrath Badge",
        url: "legends-wrath-badge",
        imgSrc: "/assets/products/apex.png",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
    ],
  },
  {
    title: "League of Legends",
    url: "lol",
    bg: "/assets/games/lol.jpg",
    logo: "/assets/games/lollogo.png",
    productList: [
      {
        id: 23,
        title: "Ranked Boost",
        url: "ranked-boost",
        imgSrc: "/assets/products/lol.png",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 24,
        title: "Win Boost",
        url: "win-boost",
        imgSrc: "/assets/products/lol.png",
        category: "Win Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 25,
        title: "Coaching",
        url: "coaching",
        imgSrc: "/assets/products/lol.png",
        category: "Coaching",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 26,
        title: "Division Boost",
        url: "division-boost",
        imgSrc: "/assets/products/lol.png",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
      {
        id: 27,
        title: "Placement Matches",
        url: "placement-matches",
        imgSrc: "/assets/products/lol.png",
        category: "Teamfight Tactics",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
    ],
  },
  {
    title: "Apex Legends",
    url: "apex",
    bg: "/assets/games/apex.jpg",
    logo: "/assets/games/apexlogo.png",
    productList: [
      {
        id: 28,
        title: "Rank Boost",
        url: "rank-boost",
        imgSrc: "/assets/products/apex.png",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 29,
        title: "Predator Rank",
        url: "predator-rank",
        imgSrc: "/assets/products/apex.png",
        category: "Rank Boost",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 30,
        title: "All Badges",
        url: "all-badges",
        imgSrc: "/assets/products/apex.png",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: false,
      },
      {
        id: 31,
        title: "Legend's Wrath Badge",
        url: "legends-wrath-badge",
        imgSrc: "/assets/products/apex.png",
        category: "Badges",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        lowestPrice: "0.45",
        deal: true,
      },
    ],
  },
];

export default products;
