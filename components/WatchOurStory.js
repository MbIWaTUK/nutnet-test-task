import { Box, makeStyles, Container, Typography } from "@material-ui/core"
import { useState } from "react"

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
    flexDirection: "column",

  },
  title: {
    fontSize: "16px",
    letterSpacing: "1px",
    color: "#fff",
    fontWeight: "900",
    fontFamily: "Roboto",
    textAlign: "center",
    paddingTop: "30px",
    cursor: "pointer"
  },

}))
const WatchOurStory = () => {
  const classes = useStyles()
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <Box className={classes.main}>
      {openVideo && (
        <div className="videoWindow" onClick={(e) =>
          e.target.classList.contains("videoWindow")
            ? setOpenVideo(false)
            : null
        }>
          <iframe width="560"
            height="315"
            src="https://www.youtube.com/embed/KvUgaHTNit4"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
      )}
      <div className={classes.filter}>

        <Container fixed className={classes.containter}>

          <img src="/static/play.png" onClick={() => setOpenVideo(true)} style={{ cursor: "pointer" }} />
          <Typography className={classes.title} component="h3" onClick={() => setOpenVideo(true)}>WATCH OUR STORY</Typography>
        </Container>

      </div>
      <style jsx>
        {`
          .videoWindow{
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
          }
        `}
      </style>
    </Box>
  )
}

export default WatchOurStory