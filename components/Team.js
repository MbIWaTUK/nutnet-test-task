import { Box, makeStyles, Container, Typography, Card, CardActionArea, CardMedia, CardContent, Grid, Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: "url(/static/BG3.png)",
    height: "712px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundPosition: "center center",
    "@media(max-width:768px)": {
      height: "969px",
    },
    "@media(max-width:425px)": {
      height: "1630px",
    }
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
    flexDirection: "column",

  },
  title: {
    fontSize: "22px",
    letterSpacing: "1px",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Playfair Display",
    textAlign: "center",
  },
  text: {
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#f9f9f9",
    fontWeight: "400",
    fontFamily: "Playfair Display",
    textAlign: "center",
  },
  root: {
    maxWidth: "220px",
    height: "300px",
    backgroundColor: "transparent",
    border: "1px solid #fff",
    "@media(max-width:1024px)": {
      width: "215px",
    }
  },
  containerFlex: {
    "@media(max-width:768px)": {
      justifyContent: "center",
    }
  },
  cardTitle: {
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#fff",
    fontWeight: "900",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  cardText: {
    fontSize: "13px",
    color: "#fafafa",
    fontWeight: "300",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#f3f3f3",
    fontWeight: "300",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  btn: {
    fontSize: "16px",
    color: "#00e0d0",
    fontWeight: "400",
    fontFamily: "HammersmithOne",
    textAlign: "center",
    border: "1px solid #00e0d0",
    marginTop: "40px"
  },
  lineBlock: {
    width: "50px",
    height: "1px",
    backgroundColor: "#00e0d0",
    margin: "20px auto 0 auto",

  },
}))

const Team = () => {
  const classes = useStyles()
  return (
    <Box className={classes.main} id="team">
      <div className={classes.filter}>

        <Container fixed className={classes.containter}>
          <Typography className={classes.title} component="h3">MEET OUR AMAZING TEAM</Typography>
          <Typography className={classes.text} component="span">Lorem ipsum dolor sit amet proin gravida nibh vel velit</Typography>
          <div className={classes.lineBlock}></div>
          <Box className={classes.cardBlock} mt={5} mb={5}>
            <Grid container spacing={2} className={classes.containerFlex}>
              <Grid item>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="229"
                      image="/static/card-img.png"

                    />
                    <CardContent>
                      <Typography className={classes.cardTitle} variant="h5" component="h2">
                        SEMF UCUK
                  </Typography>
                      <Typography component="p" className={classes.cardText}>
                        CEO & FOUNDER
                  </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="229"
                      image="/static/card-img.png"

                    />
                    <CardContent>
                      <Typography className={classes.cardTitle} variant="h5" component="h2">
                        DIK ADALIN
                  </Typography>
                      <Typography component="p" className={classes.cardText}>
                        ENGINEERING
                  </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="229"
                      image="/static/card-img.png"

                    />
                    <CardContent>
                      <Typography className={classes.cardTitle} variant="h5" component="h2">
                        JENG KOL
                  </Typography>
                      <Typography component="p" className={classes.cardText}>
                        DESIGNER
                  </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="229"
                      image="/static/card-img.png"

                    />
                    <CardContent>
                      <Typography className={classes.cardTitle} variant="h5" component="h2">
                        PET ROMAK
                  </Typography>
                      <Typography component="p" className={classes.cardText}>
                        MARKETING
                  </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>

          </Box>
          <Typography className={classes.bottomText}>Become part of our dream team, let’s join us ! </Typography>

          <Button variant="outlined" className={classes.btn}>WE ARE HIRING</Button>
        </Container>

      </div>
    </Box>
  )
}

export default Team