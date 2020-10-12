import { Box, makeStyles, Container, Typography, Button, Hidden } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "100px",
    "@media(max-width:425px)": {
      paddingLeft: "0px",
    }
  },
  title: {
    fontSize: "22px",
    letterSpacing: "1px",
    color: "#413d4b",
    fontWeight: "700",
    fontFamily: "Playfair Display",
    marginBottom: "15px"
  },
  text: {
    fontSize: "14px",
    letterSpacing: "0px",
    lineHeight: "22px",
    color: "#413d4b",
    fontWeight: "300",
    fontFamily: "Roboto"
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
const OurStory = () => {
  const classes = useStyles()
  return (
    <Box pt={12} pb={12} id="ourStory">
      <Container fixed className={classes.container}>
        <Hidden xsDown>
          <img src="/static/Page 1.png" />
        </Hidden>

        <Box className={classes.textBox}>
          <Typography className={classes.title} component="h3">OUR STORY</Typography>
          <Typography className={classes.text} style={{ marginBottom: "15px" }}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</Typography>
          <Typography className={classes.text}>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Typography>
          <Button variant="outlined" className={classes.btn}>LERAN MORE</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default OurStory