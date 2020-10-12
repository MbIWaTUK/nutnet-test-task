import '../styles/globals.css'
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Toolbar, Link, AppBar, makeStyles, Container, Grid, Button, ListItem } from '@material-ui/core';
// import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  // appBar: {
  //   backgroundColor: "transparent",
  //   "& .MuiTypography-colorPrimary": {
  //     color: "#fff"
  //   }

  // }
}))

// function ElevationScroll(props) {
//   const { children, window } = props

//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default function MyApp({ Component, pageProps, props }) {
  const classes = useStyles()
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {/* <ElevationScroll {...props}>

          <AppBar className={classes.appBar}>
            <Toolbar className={classes.appBar}>
              <Container fixed >
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <img src="/static/tajam .png" />
                  </Grid>
                  <Grid container item spacing={4} xs={10} justify="flex-end">
                    <ListItem
                    disableGutters
                  >
                    <Button
                      activeClassName={classes.active}
                      className={classes.button}
                      component={RouterLink}
                      to="/"
                    >Home</Button>
                  </ListItem>
                    <Grid item>
                      <Link href="#">HOME</Link>
                    </Grid>
                    <Grid item>
                      <Link href="#">ABOUT</Link>
                    </Grid>
                    <Grid item>
                      <Link href="#">EXPERTISE</Link>
                    </Grid>
                    <Grid item>
                      <Link href="#">TEAMS</Link>
                    </Grid>
                    <Grid item>
                      <Link href="#">WORKS</Link>
                    </Grid>
                    <Grid item>
                      <Link href="#">PEOPLE SAY</Link>
                    </Grid>
                    <Grid item>
                      <Link href="#">CONTACT</Link>
                    </Grid>
                  </Grid>
                </Grid>

              </Container>
            </Toolbar>
          </AppBar>

        </ElevationScroll> */}

        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
