export interface Creator {
  games?: Array<Popular>
  id: number;
  name: string
  slug: string;
  games_count: number;
  image_background: string;
}

interface Popular {
  id: number;
  slug: string;
  name: string;
  added: number;
}

