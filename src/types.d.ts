interface InputSearchProps {
  onSearchHandler: (value: string) => void;
}

interface CardDetailsProps {
  id: Number;
  backButtonHandler: () => void;
}

interface CardProps {
  movieDetails: {
    id: Number;
    poster_path: string;
    title: string;
    release_date: string;
  };
  onClickShowDetails: (id: Number) => void;
}

interface CardListProps {
  name: string;
  cards: { movie: Object }[];
  onClickShowDetails: (id: Number) => void;
}
