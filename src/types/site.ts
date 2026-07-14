export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Plan = {
  name: string;
  duration: string;
  price: string;
  benefits: string[];
  highlight?: boolean;
};

export type Program = {
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  duration: string;
  suitableFor: string;
  imageUrl: string;
};

export type GalleryCategory = "Gym Photos" | "Equipment" | "Events" | "Transformation Photos" | "Videos";

export type GalleryItem = {
  title: string;
  category: GalleryCategory;
  imageUrl: string;
};

export type Testimonial = {
  name: string;
  result: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};