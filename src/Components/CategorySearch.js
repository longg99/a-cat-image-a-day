import React from "react";
import { Autocomplete, CircularProgress, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const CategorySearch = (props) => {
  const { allCategoryQuery, setCategoryId, setCurrentDisplay } = props;

  if (allCategoryQuery.isLoading)
    return <CircularProgress sx={{ marginTop: "2vh" }} />;
  if (!allCategoryQuery.data) return null;

  return (
    <Box>
      <Autocomplete
        id="search-by-category"
        sx={{ width: "300px" }}
        // reset after each choice using random key
        key={Math.random()}
        onChange={(event, newCategory) => {
          if (newCategory != null) {
            setCategoryId(newCategory.id);
            setCurrentDisplay("category");
          }
        }}
        options={allCategoryQuery.data.data}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a category for your image"
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

export default CategorySearch;
