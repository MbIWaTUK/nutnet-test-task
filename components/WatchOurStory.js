import { Box, makeStyles, Container, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: "url(/static/NY.png)",
    height: "550px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundPosition: "center center"
  },
  filter: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    backgroundImage: "linear-gradient(90deg, #09052f 0%, #311d5e 100%)",
    opacity: "0.8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    fontSize: "16px",
    letterSpacing: "1px",
    color: "#fff",
    fontWeight: "900",
    fontFamily: "Roboto",
    textAlign: "center",
    paddingTop: "30px"
  }
}))
const WatchOurStory = () => {
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <div className={classes.filter}>

        <Container fixed className={classes.containter}>
          <img src="/static/play.png" />
          <Typography className={classes.title} component="h3">WATCH OUR STORY</Typography>
        </Container>

      </div>
    </Box>
  )
}

export default WatchOurStory