import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import img3 from './images/image2.png'
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    
    intro:{
        fontSize: '60px',
        textAlign: 'center'
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

function Contact() {
    const classes = useStyles();
    useEffect(() => {
      AOS.init({ duration: 1800 });
    }, []);
    
    return (
        <div>
            <Grid container component="main" style={{ display: "flex" ,backgroundcolor:"white"}}  data-aos="fade-left">

                <Grid item xs={12} sm={8} md={7} lg={7}  >
                <img style={{height:"auto",width:"100%"}} src={img3}/>
                </Grid>

                <Grid item xs={12} sm={4} md={8} lg={5}>
                <div >
                {/* <Typography className={classes.intro} variant="h3" gutterBottom>
               Contact Me 
                </Typography> */}
                <div style={{fontSize:"20px",fontFamily:"sans-serif"}}> 
                <p className={classes.intro}>Contact Me</p>
                <p>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Competitive Programming, 
                    ML, Opensource Development otherwise I am always up for a good conversation. </p> 
  
            
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
        </div>
    )
}

export default Contact
