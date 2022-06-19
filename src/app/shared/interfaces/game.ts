import {Creator} from "./creator";

export enum CardTypeEnum {
  dev = 'dev',
  game = 'game',
  platform = 'platform'
}

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  dominant_color: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  description_raw: string;
  screenshots: Array<Screenshot>
  genres: Array<Genre>;
  publishers: Array<Dev>,
  developers: Array<Creator>,
  parent_platforms: Array<Platform>;
  platforms: Array<Platform>;
  tags: Array<Tag>;
  trailers: Array<Trailer>;
  esrb_rating: Tag;
  website: string;
}

export interface Platform {
  platform: {
    id: number;
    slug: string;
    name: string;
  }
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Dev {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string,
}

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  }
}

