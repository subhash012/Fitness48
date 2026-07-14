import type { FaqItem, GalleryItem, NavItem, Plan, Program, Stat, Testimonial } from "@/types/site";

export const siteConfig = {
  name: "Fitness 48",
  city: "Muthanallur, Sarjapur Road, Bangalore",
  description:
    "Fitness 48 is a premium fitness center in Muthanallur built for weight loss, muscle gain, personal training, and transformation-first results.",
  phone: "+9178921917112",
  whatsapp: "9178921917112",
  email: "hello@fitness48.in",
  address: "Fitness 48, Muthanallur, Sarjapur Road, Bangalore, Karnataka 560087",
  mapsUrl: "https://maps.app.goo.gl/pDz77Fu2obpjxJvn9"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Membership", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Transformations", href: "/transformations" },
  { label: "Free Trial", href: "/free-trial" },
  { label: "Contact", href: "/contact" }
];

export const stats: Stat[] = [
  { label: "Members coached", value: "500+" },
  { label: "Programs available", value: "9" },
  { label: "5-star reviews", value: "100+" },
  { label: "Open daily", value: "6 AM - 10 PM" }
];

export const plans: Plan[] = [
  {
    name: "Monthly",
    duration: "30 days",
    price: "₹1,000",
    benefits: ["Gym access", "Cardio & strength floor", "Basic posture guidance"]
  },
  {
    name: "Quarterly",
    duration: "90 days",
    price: "₹2,500",
    benefits: ["Priority support", "Fitness assessment", "Body composition check"],
    highlight: true
  },
  {
    name: "Half-Yearly",
    duration: "180 days",
    price: "₹4,000",
    benefits: ["Savings over monthly", "Progress tracking", "Goal roadmap"]
  },
  {
    name: "Annual",
    duration: "365 days",
    price: "₹9,000",
    benefits: ["Best value", "Year-round access", "Transformation support"]
  },
  {
    name: "Student Plan",
    duration: "30 days",
    price: "₹1,000",
    benefits: ["Discounted pricing", "Flexible timings", "Focus plan"]
  },
  {
    name: "Family Plan",
    duration: "30 days",
    price: "₹2,500",
    benefits: ["2-4 members", "Shared savings", "Personalized guidance"]
  }
];

export const programs: Program[] = [
  {
    name: "Weight Loss",
    slug: "weight-loss",
    description: "Structured fat-loss programming with cardio, strength, and habit coaching.",
    benefits: ["Calorie burn", "Sustainable habits", "Body recomposition"],
    duration: "8-12 weeks",
    suitableFor: "Beginners and busy professionals",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Muscle Gain",
    slug: "muscle-gain",
    description: "Progressive overload plans with strength blocks and recovery support.",
    benefits: ["Hypertrophy", "Strength gains", "Nutrition structure"],
    duration: "12 weeks",
    suitableFor: "Intermediate lifters and hard gainers",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Strength Training",
    slug: "strength-training",
    description: "Performance-focused coaching for compound lifts and power development.",
    benefits: ["Better lifts", "Core stability", "Confidence under load"],
    duration: "10 weeks",
    suitableFor: "Anyone chasing performance",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
  }
];

export const gallery: GalleryItem[] = [
  {
    title: "Premium training floor",
    category: "Gym Photos",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Functional setup",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Member event night",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Before and after transformation",
    category: "Transformation Photos",
    imageUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=80"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Arjun",
    result: "Lost 11 kg",
    quote: "The coaching is direct, structured, and consistent. The transformation was visible in 3 months."
  },
  {
    name: "Sneha",
    result: "Built strength and confidence",
    quote: "The environment feels premium, and the trainers know how to push without overwhelming."
  },
  {
    name: "Rahul",
    result: "Gained 4 kg muscle",
    quote: "Good equipment, clear programming, and the trial session helped me commit."
  }
];

export const faqs: FaqItem[] = [
  {
    question: "Do you have parking?",
    answer: "Yes, we provide nearby parking guidance and easy access for members and visitors."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes. Personal training is available for fat loss, muscle gain, strength, and lifestyle goals."
  },
  {
    question: "Can beginners join?",
    answer: "Absolutely. Fitness 48 is built for beginners, working professionals, and experienced lifters."
  },
  {
    question: "Is diet guidance included?",
    answer: "We provide practical diet guidance aligned to your goal and schedule."
  }
];