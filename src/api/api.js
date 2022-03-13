import axios from "axios";

export const getRandomCatImg = async () => {
  return await axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search",
  });
};

export const getAllBreeds = async () => {
  return await axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/breeds",
    headers: {
      // the API key
      "x-api-key": "9779cf76-5952-479e-95fa-9c0a2ca1e69c",
    },
  });
};

export const getAllCategories = async () => {
  return await axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/categories",
    headers: {
      // the API key
      "x-api-key": "9779cf76-5952-479e-95fa-9c0a2ca1e69c",
    },
  });
};

export const getBreedInfo = async ({ queryKey }) => {
  const [_key, breedId] = queryKey;
  return await axios({
    method: "get",
    url: `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    headers: {
      // the API key
      "x-api-key": "9779cf76-5952-479e-95fa-9c0a2ca1e69c",
    },
  });
};

export const getImgByCategory = async ({ queryKey }) => {
  // get the data from the query key
  const [_key, categoryId] = queryKey;
  return await axios({
    method: "get",
    url: `https://api.thecatapi.com/v1/images/search?category_ids=${categoryId}`,
    headers: {
      // the API key
      "x-api-key": "9779cf76-5952-479e-95fa-9c0a2ca1e69c",
    },
  });
};
