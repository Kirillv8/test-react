import Button from "@shared/ui/button/Button";
import {
  Autocomplete,
  TextField,
  Paper,
  Typography,
  MenuItem,
  Stack,
  Box,
} from "@mui/material";

import { useState, useEffect, useContext } from "react";
import "@src/widgets/filters/ui/filter.css";
import { getGenresApi } from "@shared/api/genres.js";
import { UserContext } from "@shared/provider/UserProvider";
import { GenresContext, ReducerContext } from "../model/FilterProvider";

const Filters = () => {
  const [genres, setGenres] = useState([]);
  const [popularity, setPopularity] = useState("");
  const [rating, setRating] = useState("");

  const selectedGenres = useContext(GenresContext);
  const dispatch = useContext(ReducerContext);
  const TOKEN = useContext(UserContext);

  useEffect(() => {
    try {
      const getGenres = async () => {
        const data = await getGenresApi();
        console.log(data.genres);
        setGenres(data.genres);
      };
      getGenres();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: "#121212",
          color: "#fff",
          borderRadius: 2,
          width: "300px",

          "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
          "& .MuiInputBase-root": { color: "#fff" },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
          "& .MuiSvgIcon-root": { color: "#fff" },
        }}
      >
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              height: "40px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                lineHeight: 1,
                m: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              Фильтры
            </Typography>

            <Button
              className="btn"
              onClick={() => dispatch({ type: "reset" })}
              style={{
                minWidth: "40px",
                height: "40px",
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              X
            </Button>
          </Box>
          <TextField
            select
            label="Сортировать по"
            value={popularity}
            onChange={(e) => setPopularity(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="popularity.desc">По популярности:</MenuItem>
            <MenuItem value="revenue.desc">По рейтингу:</MenuItem>
          </TextField>
          <Box>
            <Typography variant="h5">Жанры</Typography>
            <Autocomplete
              multiple
              options={genres}
              getOptionLabel={(option) => option.name}
              disableCloseOnSelect
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={selectedGenres}
              onChange={(event, newValue) => {
                dispatch({
                  type: "SET_GENRES",
                  payload: newValue,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Выберите жанры"
                  variant="standard"
                />
              )}
            />
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default Filters;
