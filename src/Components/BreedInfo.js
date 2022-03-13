import React from "react";
import {
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  Rating,
  Typography,
  Box,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const BreedInfo = (props) => {
  const breedQuery = props.breedQuery;
  // loading data
  if (breedQuery.isLoading)
    return <CircularProgress sx={{ marginTop: "2vh" }} />;
  if (props.currentDisplay !== "breed" || !breedQuery.data) return null;

  return (
    <Container maxWidth="sm">
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

        {/* all data about the given breed from the API */}
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
                <b>Child Friendly:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].child_friendly}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Dog Friendly:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].dog_friendly}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Energy level:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].energy_level}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Experimental:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].experimental === 0
                  ? "No"
                  : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Grooming:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].grooming}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Hairless:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].hairless === 0
                  ? "No"
                  : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Health Issues:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].health_issues}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Indoor:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].indoor === 0 ? "No" : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Intelligence:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].intelligence}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Lap:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].lap === 0 ? "No" : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Natural:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].natural === 0 ? "No" : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Rare:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].rare === 0 ? "No" : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Rex:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].rex === 0 ? "No" : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Shedding level:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].shedding_level}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Short legs:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].short_legs === 0
                  ? "No"
                  : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Social needs:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].social_needs}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Stranger friendly:</b>
              </Typography>
              <Rating
                name="read-only"
                value={breedQuery.data.data[0].breeds[0].stranger_friendly}
                readOnly
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Suppressed tail:</b>
              </Typography>
              <Typography>
                {breedQuery.data.data[0].breeds[0].suppressed_tail === 0
                  ? "No"
                  : "Yes"}
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <Typography variant="body2">
                <b>Vocalisation:</b>
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
    </Container>
  );
};

export default BreedInfo;
