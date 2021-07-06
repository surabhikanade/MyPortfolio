import React, {useEffect} from "react";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

import img1 from './images/introduction.png';
import img2 from './images/surabhi.png';
import img3 from './images/image2.png'
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: 'url("introduction.png")',
    backgroundRepeat: "repeat",
    position:'fix',
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    height: "50vh",
    backgroundPosition: "center",
    
  },
  image1:{
    backgroundImage: 'url("surabhi.png")',
    backgroundRepeat: "repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    height: "50vh",
    backgroundPosition: "center",
      
  },
  intro:{
    fontSize: '100%',
    // paddingTop: theme.spacing(0),
    // paddingBottom: theme.spacing(30),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
  },
  imageGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
  },
  steps: {
    height: '100%',
    display: 'flex',
    justifyContent:'center'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  animation:{
  
      animationfillmode:" both",
      animationduration: "1000ms",
      animationdelay: "0ms",
      animationiterationcount: "1",
      opacity: "1",
      // animationname: r"eact-reveal-265213204292779-2",

  }
}));

function Home() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);

  return (
    <div className="title">
     
{/* PART 1 */}
      <Grid container component="main" style={{ display: "flex" ,backgroundcolor:"white"}}  data-aos="fade-up">
        <Grid item xs={12} sm={8} md={7} lg={7} style={{ padding: "4%" ,backgroundcolor:"white"}} >
          <div className={classes.intro}>
          <Typography variant="h4" gutterBottom>
           Hi,I am Surabhi !
          </Typography>
          <div style={{fontSize:"20px",fontFamily:"sans-serif"}}> 
          <p>A tireless seeker of knowledge & humour nd also coincidentally a Computer Engineer. </p>
          <p>and also coincidentally a Computer Engineer. nd also coincidentally a Computer Engineer. </p> 
          <p>This is my little space on Internet  </p>
          <p> where you can always find me and my work.nd also coincidentally a Computer Engineer.  </p>
          <p>A tireless seeker of knowledge & humour  </p>
         
          </div>
          </div>
          
          <div>
            <a target="_blank" href="https://github.com/surabhikanade">
              <GitHubIcon  type="button" style={{ fontSize: 80 ,paddingRight:"3%"}}/>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/surabhi-kanade-0886581a0">
              <LinkedInIcon color="primary" style={{ fontSize: 80,paddingRight:"3%"}}/>
            </a>

            <a target="_blank" href="https://twitter.com/surabhi__kanade?s=08">
              <TwitterIcon  style={{ fontSize: 80 ,color:"#39A2DB",paddingRight:"3%" }}/>
            
            </a>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">
              <EmailIcon style={{ fontSize: 80,paddingRight:"3%",color:"#EA4335 " }}/>
            </a>

          </div>

          <div>
            <Button variant="contained" color="primary" >
            SEE MY RESUME
            </Button>
          </div>
    </Grid>

        <Grid item xs={12} sm={4} md={8} lg={5}  > <img style={{height:"auto",width:"100%"}} src={img1}/> </Grid>

      </Grid>

{/* PART 2 */}

<Grid container component="main" style={{ display: "flex" ,backgroundcolor:"white"}}  data-aos="fade-down">
        <Grid item xs={12} sm={8} md={7} lg={7}  >
        <img style={{height:"auto",width:"100%"}} src={img3}/>
         </Grid>

        <Grid item xs={12} sm={4} md={8} lg={5}>
          <div className={classes.intro}>
          <Typography variant="h4" gutterBottom>
           Hi,I am Surabhi !
          </Typography>
          <div style={{fontSize:"20px",fontFamily:"sans-serif"}}> 
          <p>A tireless seeker of knowledge & humour nd also coincidentally a Computer Engineer. </p>
          <p>and also coincidentally a Computer Engineer. nd also coincidentally a Computer Engineer. </p> 
          <p>This is my little space on Internet  </p>
          <p> where you can always find me and my work.nd also coincidentally a Computer Engineer.  </p>
          <p>A tireless seeker of knowledge & humour  </p>
         
          </div>
          </div>
          
          <div >
            <GitHubIcon style={{ fontSize: 80 ,paddingRight:"3%"}}/>
            <LinkedInIcon color="primary" style={{ fontSize: 80,paddingRight:"3%"}}/>
            <TwitterIcon  style={{ fontSize: 80 ,color:"#39A2DB",paddingRight:"3%" }}/>
            <EmailIcon style={{ fontSize: 80,paddingRight:"3%",color:"#EA4335 " }}/>
            
          </div>

          <div>
            <Button variant="contained" color="primary" >
            SEE MY RESUME
            </Button>
          </div>
          </Grid>

      </Grid>

 {/* PART 3 */}
        <Grid xs={12} sm={12} xd={12} className={classes.cardGrid}  style={{paddingLeft:'4%'}} >
          <Typography variant="h4" style={{textAlign:"center"}} gutterBottom>
            What I Do?
          </Typography>
        </Grid>
    
        <Grid xs={12} sm={12} xd={12} className={classes.imageGrid} container direction="row" >
            <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
            <Button variant="contained" color="primary">
            SEE MY RESUME
            </Button>
              <Typography variant="body1" gutterBottom align="center"> 
              surabhiiii
              </Typography>
            </Grid>
    
          <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
          <Button variant="contained" color="primary">
            SEE MY RESUME
            </Button>
              <Typography variant="body1" gutterBottom align="center"> 
              surabhiiii
              </Typography>
          </Grid>
    
          <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
          <Button variant="contained" color="primary">
            SEE MY RESUME
            </Button>
              <Typography variant="body1" gutterBottom align="center"> 
            surabhiiii
            </Typography>
          </Grid>
    
          <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
          <Button variant="contained" color="primary">
            SEE MY RESUME
            </Button>
              <Typography variant="body1" gutterBottom align="center"> 
              surabhiiii
              </Typography>
          </Grid>
    
        </Grid>

{/* Footer */}

       
    
             <div>
              <Grid lg={12}  md={12} sm={12} xs={12} >
                <p style={{textAlign:"center",marginTop:"5%"}}>© Made with SURABHI KANADE ® </p>

              </Grid>
            
          </div> 

        {/* footer end */}
      
    </div>

   
    
  );
}

export default Home;
