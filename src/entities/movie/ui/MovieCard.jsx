import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
const imgUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

const MovieCard = ({ title, poster }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={`${imgUrl}${poster}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default MovieCard;
