import { makeStyles, Box, Container, Typography, Grid } from "@material-ui/core"
import { useState } from "react"

const comments = [
  {
    id: 1,
    comment: "1This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    name: "JANE GALADRIEL1",
    job: "CEO TENGKUREP1",
    avatar: "/static/lay1.png"
  },
  {
    id: 2,
    comment: "2This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    name: "JANE GALADRIEL2",
    job: "CEO TENGKUREP2",
    avatar: "/static/lay2.png"
  },
  {
    id: 3,
    comment: "3This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    name: "JANE GALADRIEL3",
    job: "CEO TENGKUREP3",
    avatar: "/static/lay3.png"
  },
  {
    id: 4,
    comment: "4This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    name: "JANE GALADRIEL4",
    job: "CEO TENGKUREP4",
    avatar: "/static/lay4.png"
  },
  {
    id: 5,
    comment: "5This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
    name: "JANE GALADRIEL5",
    job: "CEO TENGKUREP5",
    avatar: "/static/lay5.png"
  }
]
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: "url(/static/BG4.png)",
    height: "500px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundPosition: "center center",
    "@media(max-width:425px)": {
      height: "630px"
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
    borderRadius: "50%",
    cursor: "pointer",
    width: "45px",
    height: "45px",
    transition: "all .5s ease"
  },
  imgActive: {
    borderRadius: "50%",
    cursor: "pointer",
    width: "70px",
    height: "70px",
    transition: "all .5s ease"
  },
  blockJob: {
    paddingTop: "40px",
    height: "125px"
  },

}))
const Comment = () => {
  const classes = useStyles()
  const [activeComment, setActiveComment] = useState(1)

  const newComment = comments.filter(c => c.id === activeComment)
  return (
    <Box className={classes.main} id="comment">
      <div className={classes.filter}>
        <Container fixed className={classes.block}>
          <Typography className={classes.title}>“ </Typography>

          <Typography className={classes.text}>{newComment && newComment[0].comment}</Typography>
          <Typography className={classes.name}>{newComment && newComment[0].name}</Typography>
          <Typography className={classes.job}>{newComment && newComment[0].job}</Typography>

          <Grid container spacing={1} className={classes.blockJob} alignItems="flex-end" justify="center">
            {comments && comments.map(c => (
              <Grid item onClick={() => setActiveComment(c.id)} key={c.id}>
                <img src={c.avatar} className={c.id === activeComment ? classes.imgActive : classes.img} />
              </Grid>
            ))}


          </Grid>

        </Container>
      </div>

    </Box>
  )
}

export default Comment