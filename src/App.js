import React from "react";
import {
  Autocomplete,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { getAllBreeds, getBreedInfo, getRandomCatImg } from "./api/api";

function App() {
  const [breedId, setBreedId] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");
  const [currentDisplay, setCurrentDisplay] = React.useState("");

  // queries
  const randomImgQuery = useQuery("random", getRandomCatImg, {
    refetchOnWindowFocus: false,
    // prevent the app from automatically querying
    enabled: false,
  });

  const allBreedQuery = useQuery("allBreed", getAllBreeds);

  const breedQuery = useQuery(["breed", breedId], getBreedInfo, {
    refetchOnWindowFocus: false,
    // prevent the app from automatically querying
    enabled: !!breedId,
  });

  const handleClickRandom = () => {
    randomImgQuery.refetch();
    setCurrentDisplay("random");
  };

  const renderImage = () => {
    if (currentDisplay !== "random" || !randomImgQuery.data) return null;
    const imgURL = randomImgQuery.data.data[0].url;
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

  const renderBreedInfo = () => {
    if (currentDisplay !== "breed" || !breedQuery.data) return null;
    return (
      <Card sx={{ marginTop: "2vh" }}>
        <CardMedia
          component="img"
          object-fit="contain"
          image={`${breedQuery.data.data[0].url}`}
          alt={`${breedQuery.data.data[0].breeds[0].name}`}
        />

        <Box
          sx={{
            marginTop: "2vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button
            onClick={() => {
              breedQuery.refetch();
            }}
            variant="outlined"
          >
            Generate a new image
          </Button>
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {breedQuery.data.data[0].breeds[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {breedQuery.data.data[0].breeds[0].description}
          </Typography>
          <hr />
          <Typography gutterBottom variant="h6" component="div">
            Some more information:
          </Typography>
          <Typography variant="body2">
            <b>Origin:</b> {breedQuery.data.data[0].breeds[0].origin}
          </Typography>
          <Typography variant="body2">
            <b>Lifespan:</b> {breedQuery.data.data[0].breeds[0].life_span} years
          </Typography>
          <Typography variant="body2">
            <b>Weight:</b> {breedQuery.data.data[0].breeds[0].weight.imperial}{" "}
            lbs or {breedQuery.data.data[0].breeds[0].weight.metric} kgs
          </Typography>
          <Grid container>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Adaptability:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].adaptability}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Affection level:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].affection_level}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Child Friendly</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].child_friendly}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Dog Friendly</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].dog_friendly}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Energy level</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].energy_level}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Experimental</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].experimental}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Grooming</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].grooming}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Hairless</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].hairless}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Health Issues</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].health_issues}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Indoor</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].indoor}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Intelligence</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].intelligence}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Lap</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].lap}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Natural</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].natural}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Rare</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].rare}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Rex</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].rex}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Shedding level</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].shedding_level}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Short legs</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].short_legs}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Social needs</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].social_needs}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Stranger friendly</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].stranger_friendly}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Suppressed tail</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].suppressed_tail}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Vocalisation</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].vocalisation}
                readOnly
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href={`${breedQuery.data.data[0].breeds[0].wikipedia_url}`}
            target="_blank"
          >
            Wikipedia
          </Button>
          <Button
            size="small"
            href={`${breedQuery.data.data[0].breeds[0].vetstreet_url}`}
            target="_blank"
          >
            Vetstreet
          </Button>
          <br />
          <Button
            size="small"
            href={`${breedQuery.data.data[0].breeds[0].vcahospitals_url}`}
            target="_blank"
          >
            VCA
          </Button>
          <Button
            size="small"
            href={`${breedQuery.data.data[0].breeds[0].cfa_url}`}
            target="_blank"
          >
            CFA
          </Button>
        </CardActions>
      </Card>
    );
  };

  console.log("query data: ", breedQuery.data);
  const renderSearchBreed = () => {
    if (allBreedQuery.isLoading) return <CircularProgress />;
    if (!allBreedQuery.data) return null;
    return (
      <Autocomplete
        id="search-by-breed"
        sx={{ width: "300px" }}
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
    );
  };

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

      <Button
        variant="contained"
        onClick={handleClickRandom}
        sx={{ marginTop: "1vh" }}
      >
        Give me a random cat image!
      </Button>
      <Box mt="4vh">{renderSearchBreed()}</Box>

      {renderImage()}
      <Container maxWidth="sm">{renderBreedInfo()}</Container>
    </Box>
  );
}

export default App;
