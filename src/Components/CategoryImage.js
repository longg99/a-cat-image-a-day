import React from "react";
import { Button, CircularProgress, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CategoryImage = (props) => {
  const { currentDisplay, categoryQuery } = props;
  if (categoryQuery.isLoading || categoryQuery.isFetching)
    return <CircularProgress sx={{ marginTop: "2vh" }} />;
  if (currentDisplay !== "category" || !categoryQuery.data) return null;

  const imgURL = categoryQuery.data.data[0].url;
  const categoryName = categoryQuery.data.data[0].categories[0].name;
  return (
    <Box
      mt="2vh"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">A cat with {categoryName}</Typography>
      <Button
        onClick={() => {
          categoryQuery.refetch();
        }}
        sx={{ marginBottom: "2vh" }}
        variant="outlined"
      >
        Generate a new image
      </Button>
      <img src={imgURL} alt="Cat" width="80%" height="80%"></img>
      <Link href={imgURL} target="_blank">
        Open original
      </Link>
    </Box>
  );
};

export default CategoryImage;
