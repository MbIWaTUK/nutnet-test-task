import { Box, makeStyles, Container, AppBar, Toolbar, Link, Typography, Button, Grid, ListItem, Hidden, Drawer, IconButton } from "@material-ui/core"
import { useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { useRouter } from 'next/router'


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
  appBar: {
    backgroundColor: "transparent",
    zIndex: "1",
    boxShadow: "unset",
    "& .MuiTypography-colorPrimary": {
      color: "#fff"
    },


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
  },
  drawerPaper: {

    backgroundColor: "#fff",
    color: "#000"
  },
  sidebarWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
    padding: "20px"
  },
  link: {
    fontSize: "14px",
    letterSpacing: "1px",
    lineHeight: "24px",
    color: "#000",
    fontWeight: "300",
    fontFamily: "Roboto",
    textAlign: "center",
    padding: "5px 0",
    textDecoration: "none"
  }
}))

const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const handleLink = async (link) => {
    await setOpen(false)
    router.push(`${`/${link}`}`)
  }
  return (
    <Box className={classes.main} id="header">
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.appBar}>
          <Container fixed >
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <img src="/static/tajam .png" />
              </Grid>
              <Hidden smDown>
                <Grid container item spacing={4} xs={10} justify="flex-end">
                  <Grid item>
                    <Link href="#header">HOME</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#ourStory">ABOUT</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#expertise">EXPERTISE</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#team">TEAMS</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#ourWorks">WORKS</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#comment">PEOPLE SAY</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#footer">CONTACT</Link>
                  </Grid>
                </Grid>
              </Hidden>


              <Hidden mdUp implementation="css">

                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setOpen(true)}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={open}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  onClose={() => setOpen(!open)}
                  ModalProps={{ keepMounted: true }}
                >

                  <div className={classes.sidebarWrapper}>

                    <Link href="#header" onClick={() => handleLink("#header")} className={classes.link}>HOME</Link>

                    <Link href="#ourStory" onClick={() => handleLink("#ourStor")} className={classes.link}>ABOUT</Link>

                    <Link href="#expertise" onClick={() => handleLink("#expertise")} className={classes.link}>EXPERTISE</Link>

                    <Link href="#team" onClick={() => handleLink("#team")} className={classes.link}>TEAMS</Link>

                    <Link href="#ourWorks" onClick={() => handleLink("#ourWorks")} className={classes.link}>WORKS</Link>

                    <Link href="#comment" onClick={() => handleLink("#comment")} className={classes.link}>PEOPLE SAY</Link>

                    <Link href="#footer" onClick={() => handleLink("#footer")} className={classes.link}>CONTACT</Link>

                  </div>
                </Drawer>
              </Hidden>


            </Grid>

          </Container>
        </Toolbar>
      </AppBar>
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