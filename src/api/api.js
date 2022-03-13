import axios from "axios";

export const getRandomCatImg = async () => {
  return await axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search",
  });
};

// call to our backend from here
export const getAllBreeds = async () => {
  return await axios({
    method: "get",
    url: "/breeds",
  });
};

export const getAllCategories = async () => {
  return await axios({
    method: "get",
    url: "/categories",
  });
};

export const getBreedInfo = async ({ queryKey }) => {
  const [_key, breedId] = queryKey;
  return await axios({
    method: "get",
    url: `/breeds/${breedId}`,
  });
};

export const getImgByCategory = async ({ queryKey }) => {
  // get the data from the query key
  const [_key, categoryId] = queryKey;
  return await axios({
    method: "get",
    url: `/categories/${categoryId}`,
  });
};
