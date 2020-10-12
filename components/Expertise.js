import { Box, makeStyles, Typography, Container, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    fontSize: "22px",
    letterSpacing: "1px",
    color: "#413d4b",
    fontWeight: "700",
    fontFamily: "Playfair Display",
    textAlign: "center",
  },
  text: {
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#2f2d35",
    fontWeight: "400",
    fontFamily: "Playfair Display",
    textAlign: "center",
  },
  lineBlock: {
    width: "50px",
    height: "1px",
    backgroundColor: "#413d4b",
    margin: "20px auto",

  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  itemImg1: {
    mask: "url(/static/monitor74.png) no-repeat center",
    backgroundImage: "linear-gradient(90deg, #00e0d0 0%, #4aa3cc 100%)",
    height: "100px",
    width: "100px"
  },
  itemImg2: {
    mask: "url(/static/img2.png) no-repeat center",
    backgroundImage: "linear-gradient(90deg, #00e0d0 0%, #4aa3cc 100%)",
    height: "100px",
    width: "100px"
  },
  itemImg3: {
    mask: "url(/static/img3.png) no-repeat center",
    backgroundImage: "linear-gradient(90deg, #00e0d0 0%, #4aa3cc 100%)",
    height: "100px",
    width: "100px"
  },
  itemImg4: {
    mask: "url(/static/img4.png) no-repeat center",
    backgroundImage: "linear-gradient(90deg, #00e0d0 0%, #4aa3cc 100%)",
    height: "100px",
    width: "100px"
  },
  itemImg5: {
    mask: "url(/static/img5.png) no-repeat center",
    backgroundImage: "linear-gradient(90deg, #00e0d0 0%, #4aa3cc 100%)",
    height: "100px",
    width: "100px"
  },
  itemImg6: {
    mask: "url(/static/img6.png) no-repeat center",
    backgroundImage: "linear-gradient(90deg, #00e0d0 0%, #4aa3cc 100%)",
    height: "100px",
    width: "100px"
  },
  itemTitle: {
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#413d4b",
    fontWeight: "900",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  itemText: {
    fontSize: "14px",
    letterSpacing: "1px",
    lineHeight: "22px",
    color: "#333333",
    fontWeight: "300",
    fontFamily: "Roboto",
    textAlign: "center",
  }
}))
const Expertise = () => {
  const classes = useStyles()
  return (
    <Box pt={12} pb={12}>
      <Container fixed className={classes.container}>
        <Typography className={classes.title}>EXPERTISE</Typography>
        <Typography className={classes.text}>Lorem ipsum dolor sit amet proin gravida nibh vel velit</Typography>
        <div className={classes.lineBlock}></div>
        <Grid container >
          <Grid item xs={4}>
            <Box className={classes.item}>
              <div className={classes.itemImg1}>

              </div>

              <Typography className={classes.itemTitle}>WEB DESIGN & DEVELOPMENT</Typography>
              <Typography className={classes.itemText}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.item}>
              <div className={classes.itemImg2}>

              </div>

              <Typography className={classes.itemTitle}>BRANDING IDENTITY</Typography>
              <Typography className={classes.itemText}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.item}>
              <div className={classes.itemImg3}>

              </div>

              <Typography className={classes.itemTitle}>MOBILE APP</Typography>
              <Typography className={classes.itemText}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.item}>
              <div className={classes.itemImg4}>

              </div>

              <Typography className={classes.itemTitle}>SEARCH ENGINE OPTIMIZATION</Typography>
              <Typography className={classes.itemText}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.item}>
              <div className={classes.itemImg5}>

              </div>

              <Typography className={classes.itemTitle}>GAME DEVELOPMENT</Typography>
              <Typography className={classes.itemText}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.item}>
              <div className={classes.itemImg6}>

              </div>

              <Typography className={classes.itemTitle}>MADE WITH LOVE</Typography>
              <Typography className={classes.itemText}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default Expertise