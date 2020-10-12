import { Box, makeStyles, Container, AppBar, Toolbar, Link, Typography, Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: "url(/static/BG1.png)",
    height: "670px",
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
    fontSize: "32px",
    letterSpacing: "0px",
    color: "#fff",
    fontWeight: "900",
    fontFamily: "Playfair",
    textAlign: "center"
  },
  lineBlock: {
    width: "50px",
    height: "1px",
    backgroundColor: "#00e0d0",
    margin: "20px auto",

  },
  text: {
    fontSize: "14px",
    letterSpacing: "1px",
    lineHeight: "24px",
    color: "#fff",
    fontWeight: "300",
    fontFamily: "Roboto",
    textAlign: "center"
  },
  btn: {
    fontSize: "16px",
    color: "#00e0d0",
    fontWeight: "400",
    fontFamily: "HammersmithOne",
    textAlign: "center",
    border: "1px solid #00e0d0",
    marginTop: "40px"
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <div className={classes.filter}>
        <Container fixed className={classes.block}>
          <Typography className={classes.title} component="h3">We Are Awesome Creative Agency</Typography>
          <div className={classes.lineBlock}></div>
          <Typography className={classes.text} component="span">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</Typography>
          <Button variant="outlined" className={classes.btn}>LERAN MORE</Button>
        </Container>
      </div>

    </Box>
  )
}

export default Header