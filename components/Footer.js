import { makeStyles, Box, Container, Grid, Typography, TextField } from "@material-ui/core"
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: "url(/static/footer.png)",
    height: "400px",
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
    flexDirection: "column",

    justifyContent: "center",
  },
  block: {


  },
  text: {
    fontSize: "14px",
    letterSpacing: "0px",
    lineHeight: "26px",
    color: "#fff",
    fontWeight: "300",
    fontFamily: "Roboto",
  },
  title: {
    fontSize: "15px",
    letterSpacing: "1px",
    lineHeight: "26px",
    color: "#fff",
    fontWeight: "900",
    fontFamily: "Roboto",
    paddingBottom: "20px"
  },
  input: {
    color: '#fff',
    '& label.Mui-focused': {
      color: '#fff',
    },
    "& .MuiInputBase-root": {
      color: "#fff"
    },
    "& .MuiFormLabel-root": {
      color: "#fff"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    }
  },
  copyright: {
    fontSize: "14px",
    letterSpacing: "0px",
    lineHeight: "26px",
    color: "#fff",
    fontWeight: "400",
    fontFamily: "Roboto",

  },

  bottomText: {
    fontSize: "14px",
    letterSpacing: "0px",
    lineHeight: "26px",
    color: "#fff",
    fontWeight: "400",
    fontFamily: "Roboto",
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.main} >
      <div className={classes.filter}>
        <Container fixed className={classes.block}>
          <Grid container spacing={3} direction="row">
            <Grid item container direction="column" xs={4} spacing={2}>
              <Grid item>
                <img src="/static/tajam .png" />
              </Grid>
              <Grid item>
                <Typography className={classes.text}>lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" xs={4} spacing={2}>
              <Grid item>
                <Typography className={classes.title}>OUR STUDIO</Typography>
              </Grid>
              <Grid container item spacing={1} noWrap>
                <Grid item>
                  <RoomOutlinedIcon style={{ color: "#fff" }} />
                </Grid>
                <Grid item>
                  <Typography className={classes.text} >Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia</Typography>
                </Grid>

              </Grid>
              <Grid container item spacing={1}>
                <Grid item>
                  <PhoneEnabledOutlinedIcon style={{ color: "#fff" }} />
                </Grid>
                <Grid item>
                  <Typography className={classes.text}>(+62) 21-2224 3333</Typography>
                </Grid>

              </Grid>
            </Grid>
            <Grid item container direction="column" xs={4} spacing={2}>
              <Grid item>
                <Typography className={classes.title}>STAY IN TOUCH</Typography>
              </Grid>
              <Grid container item spacing={2} >
                <Grid item>
                  <TextField label="Subscribe our newsletter" variant="outlined" className={classes.input} />
                </Grid>
                <Grid item>
                  <img src="/static/paper122.png" style={{ height: "54px" }} />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <img src="/static/facebook25.png" />
                </Grid>
                <Grid item>
                  <img src="/static/twitter16.png" />
                </Grid>
                <Grid item>
                  <img src="/static/dribbble4.png" />
                </Grid>
                <Grid item>
                  <img src="/static/instagram3.png" />
                </Grid>
                <Grid item>
                  <img src="/static/google26.png" />
                </Grid>
                <Grid item>
                  <img src="/static/youtube13.png" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Container>
        <Container fixed>
          <Box pt={8} >
            <Grid container justify="space-between">
              <Grid container item spacing={3} xs={4}>
                <Grid item>
                  <Typography className={classes.bottomText}>HELP</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.bottomText}>TERMS & CONDITION</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.bottomText}>PRIVACY</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className={classes.copyright} xs={4}>Copyright © 2015 - Tajem Creative</Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>

    </Box>
  )
}

export default Footer