import { makeStyles, Box, Container, Typography, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: "url(/static/BG4.png)",
    height: "500px",
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
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    fontSize: "100px",
    letterSpacing: "3px",
    lineHeight: "22px",
    color: "#fff",
    fontWeight: "400",
    fontFamily: "Playfair Display",
  },
  text: {
    fontSize: "16px",
    letterSpacing: "0px",
    lineHeight: "26px",
    color: "#fff",
    fontWeight: "400",
    fontFamily: "Playfair Display",
    textAlign: "center",
    padding: "30px 0"
  },
  name: {
    fontSize: "14px",
    letterSpacing: "1px",
    lineHeight: "22px",
    color: "#fff",
    fontWeight: "900",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  job: {
    fontSize: "13px",
    lineHeight: "22px",
    color: "#fff",
    fontWeight: "300",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  img: {
    borderRadius: "50%"
  },
  blockJob: {
    paddingTop: "40px"
  }
}))
const Comment = () => {
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <div className={classes.filter}>
        <Container fixed className={classes.block}>
          <Typography className={classes.title}>“ </Typography>
          <Typography className={classes.text}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</Typography>
          <Typography className={classes.name}>JANE GALADRIEL</Typography>
          <Typography className={classes.job}>CEO TENGKUREP</Typography>
          <Grid container spacing={1} className={classes.blockJob} alignItems="flex-end" justify="center">
            <Grid item>
              <img src="/static/lay1.png" className={classes.img} />
            </Grid>
            <Grid item>
              <img src="/static/lay2.png" className={classes.img} />
            </Grid>
            <Grid item>
              <img src="/static/lay3.png" className={classes.img} />
            </Grid>
            <Grid item>
              <img src="/static/lay4.png" className={classes.img} />
            </Grid>
            <Grid item>
              <img src="/static/lay5.png" className={classes.img} />
            </Grid>

          </Grid>

        </Container>
      </div>

    </Box>
  )
}

export default Comment