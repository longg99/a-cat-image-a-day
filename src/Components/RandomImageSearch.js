import { Button } from "@mui/material";
import React from "react";

// queries
const RandomImageSearch = (props) => {
  const handleClickRandom = () => {
    props.randomImgQuery.refetch();
    props.setCurrentDisplay("random");
  };

  return (
    <Button
      variant="contained"
      onClick={handleClickRandom}
      sx={{ marginTop: "1vh" }}
    >
      Give me a random cat image!
    </Button>
  );
};

export default RandomImageSearch;
