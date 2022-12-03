import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MovieCard = ({ movie }) => {
  return <div className="card"></div>;
};

export default MovieCard;

{
  /* <Card sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  height="250"
  image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
  alt={`${movie.title}_poster`}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {movie.title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {movie.overview}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Details</Button>
</CardActions>
</Card> */
}
