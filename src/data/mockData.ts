import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  type: "apartment" | "house" | "villa" | "commercial" | "land";
  status: "for-sale" | "for-rent" | "sold";
  bedrooms: number;
  bathrooms: number;
  area: number;
  features: string[];
  images: string[];
  agent: {
    id: string;
    name: string;
    avatar: string;
    phone: string;
  };
  isFeatured: boolean;
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  avatar: string;
  phone: string;
  email: string;
  bio: string;
  listings: number;
  experience: number;
  rating: number;
  specialties: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Penthouse with City Views",
    description: "Stunning penthouse apartment with panoramic city views, featuring floor-to-ceiling windows and premium finishes throughout.",
    price: 2850000,
    location: "Manhattan, New York",
    address: "432 Park Avenue, Floor 89",
    type: "apartment",
    status: "for-sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 4500,
    features: ["City View", "Smart Home", "Private Elevator", "Wine Cellar", "Terrace"],
    images: [property1],
    agent: {
      id: "1",
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150",
      phone: "+1 (555) 123-4567"
    },
    isFeatured: true,
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    title: "Mediterranean Beachfront Villa",
    description: "Exquisite beachfront villa with private beach access, infinity pool, and breathtaking ocean views from every room.",
    price: 4200000,
    location: "Malibu, California",
    address: "21500 Pacific Coast Highway",
    type: "villa",
    status: "for-sale",
    bedrooms: 6,
    bathrooms: 7,
    area: 8200,
    features: ["Ocean View", "Private Beach", "Infinity Pool", "Home Theater", "Guest House"],
    images: [property2],
    agent: {
      id: "2",
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      phone: "+1 (555) 234-5678"
    },
    isFeatured: true,
    createdAt: "2024-01-10"
  },
  {
    id: "3",
    title: "Modern Urban Loft",
    description: "Contemporary urban loft in the heart of downtown, featuring open-concept living with industrial design elements.",
    price: 1250000,
    location: "Chicago, Illinois",
    address: "450 E Ohio St, Unit 2401",
    type: "apartment",
    status: "for-sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 2100,
    features: ["City View", "Exposed Brick", "High Ceilings", "Rooftop Access", "Concierge"],
    images: [property3],
    agent: {
      id: "3",
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      phone: "+1 (555) 345-6789"
    },
    isFeatured: false,
    createdAt: "2024-01-20"
  },
  {
    id: "4",
    title: "Historic Country Estate",
    description: "Magnificent country estate on 15 acres with restored Tudor architecture, formal gardens, and equestrian facilities.",
    price: 5800000,
    location: "Greenwich, Connecticut",
    address: "125 Round Hill Road",
    type: "house",
    status: "for-sale",
    bedrooms: 8,
    bathrooms: 10,
    area: 12500,
    features: ["Gardens", "Stables", "Tennis Court", "Pool House", "Wine Cellar"],
    images: [property4],
    agent: {
      id: "1",
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150",
      phone: "+1 (555) 123-4567"
    },
    isFeatured: true,
    createdAt: "2024-01-05"
  },
  {
    id: "5",
    title: "Skyline View Apartment",
    description: "Elegant apartment with stunning skyline views, featuring modern amenities and a prime downtown location.",
    price: 950000,
    location: "Austin, Texas",
    address: "301 Congress Ave, Unit 3502",
    type: "apartment",
    status: "for-rent",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    features: ["Skyline View", "Fitness Center", "Pool", "24/7 Security", "Valet Parking"],
    images: [property1],
    agent: {
      id: "2",
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      phone: "+1 (555) 234-5678"
    },
    isFeatured: false,
    createdAt: "2024-01-25"
  },
  {
    id: "6",
    title: "Coastal Paradise Retreat",
    description: "Stunning coastal home with direct ocean access, wraparound deck, and panoramic water views.",
    price: 3100000,
    location: "Miami Beach, Florida",
    address: "5775 Collins Ave",
    type: "villa",
    status: "for-sale",
    bedrooms: 5,
    bathrooms: 5,
    area: 5500,
    features: ["Ocean View", "Private Dock", "Heated Pool", "Outdoor Kitchen", "Smart Home"],
    images: [property2],
    agent: {
      id: "3",
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      phone: "+1 (555) 345-6789"
    },
    isFeatured: true,
    createdAt: "2024-01-18"
  }
];

export const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    title: "Senior Luxury Property Specialist",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300",
    phone: "+1 (555) 123-4567",
    email: "sarah@estatery.com",
    bio: "With over 15 years of experience in luxury real estate, Sarah has helped hundreds of clients find their dream homes. She specializes in high-end properties and provides exceptional service to discerning buyers.",
    listings: 42,
    experience: 15,
    rating: 4.9,
    specialties: ["Luxury Homes", "Waterfront Properties", "Investment Properties"]
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Commercial Real Estate Expert",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
    phone: "+1 (555) 234-5678",
    email: "michael@estatery.com",
    bio: "Michael brings a wealth of knowledge in commercial and residential real estate. His analytical approach and market insights have made him a trusted advisor for investors and homeowners alike.",
    listings: 38,
    experience: 12,
    rating: 4.8,
    specialties: ["Commercial Properties", "Urban Developments", "Multi-Family"]
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "First-Time Buyer Specialist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    phone: "+1 (555) 345-6789",
    email: "emily@estatery.com",
    bio: "Emily is passionate about helping first-time buyers navigate the real estate market. Her patient approach and extensive knowledge make the home-buying process smooth and enjoyable.",
    listings: 56,
    experience: 8,
    rating: 4.9,
    specialties: ["First-Time Buyers", "Condos", "Suburban Homes"]
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Relocation Specialist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    phone: "+1 (555) 456-7890",
    email: "david@estatery.com",
    bio: "David specializes in helping families relocate smoothly. With connections across the country and deep local knowledge, he ensures a seamless transition to your new community.",
    listings: 34,
    experience: 10,
    rating: 4.7,
    specialties: ["Relocation", "Family Homes", "School Districts"]
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Jennifer & Mark Williams",
    location: "Manhattan, NY",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150",
    content: "Estatery made our dream of owning a Manhattan penthouse a reality. Sarah's expertise and dedication were exceptional. We couldn't be happier with our new home!",
    rating: 5
  },
  {
    id: "2",
    name: "Robert Chen",
    location: "Malibu, CA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    content: "The team at Estatery helped us find the perfect beachfront property. Their knowledge of the luxury market is unmatched. Highly recommended!",
    rating: 5
  },
  {
    id: "3",
    name: "Amanda Foster",
    location: "Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    content: "As a first-time buyer, I was nervous about the process. Emily made everything so easy and was there every step of the way. Thank you, Estatery!",
    rating: 5
  }
];

export const services = [
  {
    id: "1",
    title: "Property Sales",
    description: "Expert guidance through every step of buying or selling your property, from valuation to closing.",
    icon: "home"
  },
  {
    id: "2",
    title: "Property Management",
    description: "Comprehensive management services for property owners, ensuring optimal returns and peace of mind.",
    icon: "settings"
  },
  {
    id: "3",
    title: "Investment Advisory",
    description: "Strategic investment advice to help you build and grow your real estate portfolio.",
    icon: "trending-up"
  },
  {
    id: "4",
    title: "Rental Services",
    description: "Find the perfect rental property or let us help you find quality tenants for your investment.",
    icon: "key"
  },
  {
    id: "5",
    title: "Market Analysis",
    description: "In-depth market research and analysis to help you make informed real estate decisions.",
    icon: "bar-chart"
  },
  {
    id: "6",
    title: "Legal Assistance",
    description: "Navigate complex real estate transactions with our network of trusted legal professionals.",
    icon: "shield"
  }
];
