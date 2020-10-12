import { Box, makeStyles, Container, Grid, Typography, TextField, Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "22px",
    letterSpacing: "1px",
    color: "#413d4b",
    fontWeight: "700",
    fontFamily: "Playfair Display",
    "@media(max-width:425px)": {
      fontSize: "18px"
    }
  },
  btn: {
    fontSize: "16px",
    color: "#00e0d0",
    fontWeight: "400",
    fontFamily: "HammersmithOne",
    textAlign: "center",
    border: "1px solid #00e0d0",

  },
  inputForm: {
    width: "460px",
    "@media(max-width:425px)": {
      width: "100%"
    }
  },
  areaForm: {
    width: "460px",
    height: "200px",
    "@media(max-width:425px)": {
      width: "100%"
    }
  },
  block: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "@media(max-width:425px)": {

    }
  }
}))

const Message = () => {
  const classes = useStyles()
  return (
    <Box pt={12} pb={12} id="message">
      <Container fixed>
        <Grid container spacing={4} className={classes.block} >
          <Grid item xs={12}>
            <Typography className={classes.title}>GIVE US A GOOD NEWS</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Name" variant="outlined" className={classes.inputForm} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" className={classes.inputForm} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Subject" variant="outlined" className={classes.inputForm} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Your message"
              multiline
              rows={8}
              variant="outlined"
              className={classes.areaForm}
            />
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.btn}>SUBMIT</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Message