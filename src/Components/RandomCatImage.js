import React from "react";
import { CircularProgress, Link } from "@mui/material";
import { Box } from "@mui/system";

const RandomCatImage = (props) => {
  if (props.randomImgQuery.isFetching)
    return <CircularProgress sx={{ marginTop: "2vh" }} />;
  if (props.currentDisplay !== "random" || !props.randomImgQuery.data)
    return null;
  const imgURL = props.randomImgQuery.data.data[0].url;
  return (
    <Box
      mt="2vh"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={imgURL} alt="Cat" width="80%" height="80%"></img>
      <Link href={imgURL} target="_blank">
        Open original
      </Link>
    </Box>
  );
};

export default RandomCatImage;
