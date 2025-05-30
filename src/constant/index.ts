import { Github, Mail, Twitter } from "lucide-react";

export const MENU_CONTENT = [
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "About",
    link: "/about",
  },
];

export const ABOUT_HERO = [
  "Our goal is simple: to provide thoughtful reviews, insightful articles, and honest opinions about indie games that deserve your attention. From pixel art adventures to groundbreaking narratives, we explore every corner of the indie gaming world to help you discover titles that inspire, challenge, and entertain.",
  "We believe indie games are where creativity thrives and innovation happens. Whether you're a casual player or a hardcore gamer, Indie Gamer is your guide to finding the next unforgettable indie gem.",
];

export const OUR_STORY = [
  "Indie Gamer was founded in 2024 by Jane Doe, a passionate gamer who saw the untapped potential of the indie gaming world. Tired of seeing indie gems overshadowed by mainstream titles, Jane created Indie Gamer as a place where smaller games and their creators could get the spotlight they truly deserve.",

  "What started as a personal passion project soon grew into a platform where indie games are celebrated, reviewed, and shared with gamers seeking fresh, creative experiences. Jane’s mission is simple: to connect players with unique titles that push boundaries, tell meaningful stories, and showcase the artistry of independent developers.",
];

export const SOSMEDS = [
  {
    icon: Mail,
    label: "Email Us",
    href: "mailto:support@indiegamer.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
  },
];

export const AUTHOR = {
  name: "Jane Doe",
  role: "Founder & Editor-in-Chief",
  image: "/profile.png",
  bio: "Jane has been immersed in gaming and web development for over a decade. As a lifelong gamer and skilled developer, she combines her technical expertise with a deep appreciation for the artistry behind indie games.",
};

export const POSTS_DUMMY = [
  {
    title: "The Future of Web Design: Neo Brutalism",
    excerpt:
      "Explore how Neo Brutalism is shaping modern web design with its bold, unapologetic approach to visual hierarchy and user experience.",
    date: "Dec 16, 2023",
    category: "Design",
    imageUrl: "/placeholder.svg?height=400&width=600",
    href: "/post/1",
    short: "lorem ipsum dolor lorem ipsum dolor",
    imageAlt: "Alt Image",
    genre: "Action",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn the essential practices for creating web applications that are accessible to everyone, regardless of their abilities.",
    date: "Dec 15, 2023",
    category: "Development",
    imageUrl: "/placeholder.svg?height=400&width=600",
    href: "/post/1",
    short: "lorem ipsum dolor lorem ipsum dolor",
    imageAlt: "Alt Image",
    genre: "Action",
  },
  {
    title: "Getting Started with React Server Components",
    excerpt:
      "A comprehensive guide to understanding and implementing React Server Components in your Next.js applications.",
    date: "Dec 14, 2023",
    category: "Tutorials",
    imageUrl: "/placeholder.svg?height=400&width=600",
    href: "/post/1",
    short: "lorem ipsum dolor lorem ipsum dolor",
    imageAlt: "Alt Image",
    genre: "Action",
  },
];

export const GENRES_DUMMY = [
  { name: "Horror", count: 42, color: "#FFB6E1" },
  { name: "Survival", count: 38, color: "#B4FF39" },
  { name: "Simulation", count: 27, color: "#FFE5E5" },
  { name: "Multiplayer", count: 23, color: "#87CEEB" },
  { name: "Narrative", count: 19, color: "#FFA500" },
];
