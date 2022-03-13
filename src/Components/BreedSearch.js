import React from "react";
import { Autocomplete, CircularProgress, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const BreedSearch = (props) => {
  const { allBreedQuery, setBreedId, setCurrentDisplay } = props;

  if (allBreedQuery.isLoading)
    return <CircularProgress sx={{ marginTop: "2vh" }} />;
  if (!allBreedQuery.data) return null;

  return (
    <Box mt="2vh" mb="2vh">
      <Autocomplete
        id="search-by-breed"
        sx={{ width: "300px" }}
        // reset after each choice using random key
        key={Math.random()}
        onChange={(event, newBreed) => {
          if (newBreed != null) {
            setBreedId(newBreed.id);
            setCurrentDisplay("breed");
          }
        }}
        options={allBreedQuery.data.data}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a breed"
            inputProps={{
              ...params.inputProps,
              autoComplete: "off", // disable autocomplete and autofill
            }}
          />
        )}
      ></Autocomplete>
    </Box>
  );
};

export default BreedSearch;
