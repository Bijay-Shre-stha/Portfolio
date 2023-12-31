import './getTouch.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';


// import { Box, Button } from "@mui/material";
const GetTouch = () => {
    return (
        <section className="getTouch divider" id="getTouch">
            <div className="container get__Touch">
                <h2 className="heading">Get In Touch</h2>
                <hr className="horizontal__line" />
                <div className="get__In__Touch container ">
                    <a className='text-decoration-none text-dark'
                        aria-label="github"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/Bijay-Shre-stha">
                        <GitHubIcon className='get__icons' style={{ fontSize: '40px', }} />
                    </a>
                    <a className='text-decoration-none text-dark'
                        aria-label="linkedin"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/bijayshrestha0817/">
                        <LinkedInIcon className='get__icons' style={{ fontSize: '40px', }} />
                    </a>
                    <a className='text-decoration-none text-dark'
                        aria-label="facebook"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/bijay.shrestha.0817">
                        <FacebookIcon className='get__icons' style={{ fontSize: '40px', }} />
                    </a>
                    <a className='text-decoration-none text-dark'
                        aria-label="instagram"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/bijay.shrestha.0817/">
                        <InstagramIcon className='get__icons' style={{ fontSize: '40px', }} />
                    </a>
                    <a className='text-decoration-none text-dark'
                        aria-label="twitter"
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/bijay_stha_0817">
                        <TwitterIcon className='get__icons' style={{ fontSize: '40px', }} />
                    </a>
                    <a className='text-decoration-none text-dark'
                        aria-label="email"
                        rel="noreferrer"
                        target="_blank"
                        href="mailto: bijayshrestha0817@gmail.com">
                        <EmailIcon className='get__icons' style={{ fontSize: '40px', }} />
                    </a>
                </div>

                {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" href=" https://drive.google.com/file/d/1LXAsdkC_dgZWklw35yEOK8K6KZaieJcA/view?usp=drive_link" target="_blank">
                        Download Resume
                    </Button>
                    </Box> */}
            </div>
        </section>
    )
}

export default GetTouch
