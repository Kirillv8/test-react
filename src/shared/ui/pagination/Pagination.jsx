import { Pagination as MuiPagination, Stack } from "@mui/material";
import { useState, useEffect } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    console.log("Выбрана страница:", value);
  };

  return (
    <Stack
      spacing={2}
      sx={{ mt: 4, mb: 4, alignItems: "center", width: "100%" }}
    >
      <MuiPagination
        count={500}
        page={page}
        onChange={handleChange}
        size="large"
        variant="outlined"
        shape="rounded"
        color="primary"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff",
            borderColor: "rgba(255, 255, 255, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          },
          "& .Mui-selected": {
            backgroundColor: "rgba(63, 45, 226, 0.5) !important",
            color: "#fff",
          },
        }}
      />
    </Stack>
  );
};

export default Pagination;
