import { makeStyles, Container, Box, Typography, Button, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "22px",
    letterSpacing: "1px",
    color: "#413d4b",
    fontWeight: "700",
    fontFamily: "Playfair Display",
  },
  text: {
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#413d4b",
    fontWeight: "300",
    fontFamily: "Roboto",
    textAlign: "right",
  },
  block: {
    backgroundColor: "#e9e9e9",
    height: "300px",
    margin: "30px 0"
  },
  btn: {
    fontSize: "16px",
    color: "#00e0d0",
    fontWeight: "400",
    fontFamily: "HammersmithOne",
    textAlign: "center",
    border: "1px solid #00e0d0",
    margin: "0 auto"
  }
}))
const OurWorks = () => {
  const classes = useStyles()
  return (
    <Box pt={12} pb={12}>
      <Container fixed>
        <Typography className={classes.title}>OUR WORKS</Typography>
        <Typography className={classes.text}>See All Project in dribbble ></Typography>
      </Container>
      <Box className={classes.block}>

      </Box>
      <Grid container>
        <Button className={classes.btn}>LOAD MORE</Button>
      </Grid>

    </Box>
  )
}

export default OurWorks