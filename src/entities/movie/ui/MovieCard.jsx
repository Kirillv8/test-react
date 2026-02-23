import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import.meta.env.VITE_TMDB_IMAGE_URL;

const MovieCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent></CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default MovieCard;
