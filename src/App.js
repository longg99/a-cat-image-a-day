import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import {
  getAllBreeds,
  getAllCategories,
  getBreedInfo,
  getImgByCategory,
  getRandomCatImg,
} from "./api/api";
import RandomCatImage from "./Components/RandomCatImage";
import RandomImageSearch from "./Components/RandomImageSearch";
import BreedInfo from "./Components/BreedInfo";
import BreedSearch from "./Components/BreedSearch";
import CategorySearch from "./Components/CategorySearch";
import CategoryImage from "./Components/CategoryImage";

function App() {
  const [breedId, setBreedId] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [currentDisplay, setCurrentDisplay] = React.useState("");

  // queries
  const randomImgQuery = useQuery("random", getRandomCatImg, {
    refetchOnWindowFocus: false,
    // prevent the app from automatically querying
    enabled: false,
  });

  const allBreedQuery = useQuery("allBreeds", getAllBreeds);

  const breedQuery = useQuery(["breed", breedId], getBreedInfo, {
    refetchOnWindowFocus: false,
    // prevent the app from automatically querying
    enabled: !!breedId,
  });

  const allCategoryQuery = useQuery("allCategories", getAllCategories);

  const categoryQuery = useQuery(["category", categoryId], getImgByCategory, {
    refetchOnWindowFocus: false,
    // prevent the app from automatically querying
    enabled: !!categoryId,
  });
  // end of queries

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "2vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" component="h3" textAlign="center">
        A Cat Image A Day!
      </Typography>

      {/* Random cat image search */}
      <RandomImageSearch
        setCurrentDisplay={setCurrentDisplay}
        randomImgQuery={randomImgQuery}
      />
      <Box
        sx={{
          typography: "subtitle1",
          textAlign: "center",
          marginTop: "1vh",
          marginLeft: "1vh",
          marginRight: "1vh",
        }}
      >
        You can search for an image by choosing either a breed or a category
        (not both at the same time).
      </Box>
      {/* Breed search */}
      <BreedSearch
        allBreedQuery={allBreedQuery}
        setBreedId={setBreedId}
        setCurrentDisplay={setCurrentDisplay}
      />

      {/* Category search */}
      <CategorySearch
        allCategoryQuery={allCategoryQuery}
        setCategoryId={setCategoryId}
        setCurrentDisplay={setCurrentDisplay}
      />

      {/* Display */}
      <RandomCatImage
        currentDisplay={currentDisplay}
        randomImgQuery={randomImgQuery}
      />
      <CategoryImage
        currentDisplay={currentDisplay}
        categoryQuery={categoryQuery}
      />
      <BreedInfo currentDisplay={currentDisplay} breedQuery={breedQuery} />
    </Box>
  );
}

export default App;
