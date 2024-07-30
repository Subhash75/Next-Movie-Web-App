import { sidebarMenusTypes, trendingMoviesTypes } from "./types";

export const sidebarMenus: sidebarMenusTypes[] = [
  {
    id: 1,
    name: "Home",
    imageUrl: "/images/film.png",
  },
  {
    id: 2,
    name: "Favourites",
    imageUrl: "/images/heart.png",
  },
  {
    id: 3,
    name: "Trending",
    imageUrl: "/images/trending-up.png",
  },
  {
    id: 4,
    name: "Coming Soon",
    imageUrl: "/images/calendar.png",
  },
  {
    id: 5,
    name: "Community",
    imageUrl: "/images/users.png",
  },
  {
    id: 6,
    name: "Social",
    imageUrl: "/images/message-circle.png",
  },
  {
    id: 7,
    name: "Settings",
    imageUrl: "/images/sliders.png",
  },
  {
    id: 8,
    name: "Logout",
    imageUrl: "/images/log-out.png",
  },
];

export const trendingMovies: trendingMoviesTypes[] = [
  {
    id: 1,
    title: "Prince of Sahara",
    genre: "Historical Drama/Adventure",
    year: 2012,
    videoUrl: "/videos/sandstorm.mp4",
  },
  {
    id: 2,
    title: "H.E.R.",
    genre: "Romance/Drama",
    year: 2022,
    videoUrl: "/videos/her.mp4",
  },
  {
    id: 3,
    title: "Echoes of the Deep",
    genre: "Horror/Thriller",
    year: 2015,
    videoUrl: "/videos/ocean.mp4",
  },
  {
    id: 4,
    title: "Into The Wild",
    genre: "Adventure/Biography/Drama",
    year: 2015,
    videoUrl: "/videos/mountains.mp4",
  },
  {
    id: 5,
    title: "The Cursed Estate",
    genre: "Horror/Thriller",
    year: 2010,
    videoUrl: "/videos/horror.mp4",
  },
  {
    id: 6,
    title: "Andromeda's Call",
    genre: "Science Fiction/Thriller",
    year: 2023,
    videoUrl: "/videos/asteroid_attack.mp4",
  },
  {
    id: 7,
    title: "Wyrm of Darkness",
    genre: "Action/Fantasy",
    year: 2019,
    videoUrl: "/videos/dragon.mp4",
  },
  {
    id: 8,
    title: "Blizzard's Whisper",
    genre: "Mystery/Thriller",
    year: 2008,
    videoUrl: "/videos/ice.mp4",
  },
  {
    id: 9,
    title: "Street Symphony",
    genre: " Musical/Drama",
    year: 2014,
    videoUrl: "/videos/city.mp4",
  },
];

export const continueWatchingMovies: trendingMoviesTypes[] = [
  {
    id: 1,
    title: "The Lost Kingdom",
    genre: "Fantasy/Action",
    year: 2024,
    videoUrl: "/videos/fantasy.mp4",
  },
  {
    id: 2,
    title: "Night Train to Oblivion",
    genre: "Horror/Thriller",
    year: 2022,
    videoUrl: "/videos/train-journey.mp4",
  },
];
