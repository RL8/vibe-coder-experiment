export type Challenge = {
  id: string;
  businessName: string;
  businessUrl: string;
  businessDescription: string;
  title: string;
  description: string;
  icon: string;
};

export type Submission = {
  id?: string;
  name: string;
  email: string;
  challengeId: string;
  chatHistoryUrl?: string;
  artifactUrl?: string;
  videoUrl: string;
  logicDescription: string;
  status?: "pending" | "reviewed" | "trial" | "hired" | "rejected";
};

// Static challenge data (can be moved to Supabase later)
export const CHALLENGES: Challenge[] = [
  {
    id: "bakery-predictor",
    businessName: "Wild Hearth Bakery",
    businessUrl: "https://www.wildhearthbakery.com/",
    businessDescription:
      "Wood-fired sourdough bakery doing wholesale + retail. Sourdough takes 3 days—if a chef forgets to order by 2 PM Tuesday, no bread Thursday.",
    title: "Production Predictor",
    description:
      "Predict order quantities based on historical sales (farmers markets, shop orders)",
    icon: "bread",
  },
  {
    id: "bakery-panic",
    businessName: "Wild Hearth Bakery",
    businessUrl: "https://www.wildhearthbakery.com/",
    businessDescription:
      "Wood-fired sourdough bakery doing wholesale + retail. Sourdough takes 3 days—if a chef forgets to order by 2 PM Tuesday, no bread Thursday.",
    title: "Panic Order Reminder",
    description:
      "If 'Cafe X' usually orders but hasn't by 1 PM, auto-generate WhatsApp reminder",
    icon: "bell-ring",
  },
  {
    id: "bakery-market",
    businessName: "Wild Hearth Bakery",
    businessUrl: "https://www.wildhearthbakery.com/",
    businessDescription:
      "Wood-fired sourdough bakery doing wholesale + retail. Sourdough takes 3 days—if a chef forgets to order by 2 PM Tuesday, no bread Thursday.",
    title: "Market Day Calculator",
    description:
      "Input weather + location → output 'Safe Bake List' based on historical data",
    icon: "cloud-sun",
  },
  {
    id: "croft-loyalty",
    businessName: "Comrie Croft",
    businessUrl: "https://www.comriecroft.com/",
    businessDescription:
      "Award-winning eco-farm, campsite, wedding venue. A 'stacked' business: bike rental, weddings, market garden, cafe, campsite.",
    title: "Loyalty/Membership App",
    description:
      "Track visits, activities, services used. Leaderboard for gamification",
    icon: "trophy",
  },
  {
    id: "croft-bikes",
    businessName: "Comrie Croft",
    businessUrl: "https://www.comriecroft.com/",
    businessDescription:
      "Award-winning eco-farm, campsite, wedding venue. A 'stacked' business: bike rental, weddings, market garden, cafe, campsite.",
    title: "Bike Fleet Tracker",
    description:
      "QR scan on bike → tap 'Ready' / 'Needs Service' / 'Decommissioned'",
    icon: "bike",
  },
  {
    id: "croft-firewood",
    businessName: "Comrie Croft",
    businessUrl: "https://www.comriecroft.com/",
    businessDescription:
      "Award-winning eco-farm, campsite, wedding venue. A 'stacked' business: bike rental, weddings, market garden, cafe, campsite.",
    title: "Firewood Ordering",
    description: "QR in tent → one-click order → ping to ranger's WhatsApp",
    icon: "flame",
  },
  {
    id: "croft-wedding",
    businessName: "Comrie Croft",
    businessUrl: "https://www.comriecroft.com/",
    businessDescription:
      "Award-winning eco-farm, campsite, wedding venue. A 'stacked' business: bike rental, weddings, market garden, cafe, campsite.",
    title: "Wedding Inquiry Triager",
    description:
      "Paste email → AI parses date/guests/budget → drafts reply based on availability",
    icon: "heart",
  },
];
