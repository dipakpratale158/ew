import { Fragment } from "react";
import { BsYoutube,BsSpotify, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Fragment>
      <div className="p-1 bg-info text-white d-flex justify-content-center align-items-center ">
        <p style={{ margin:"3rem", fontSize: "2.5em", fontFamily: "bold"}}>
          The Generics
        </p>
        <a href="https://www.youtube.com/">
        <BsYoutube style={{margin:"1rem"}} size ={36} />
       </a>
       <FaLinkedin style={{margin:"1rem"}} size={36}/>
        <a href="https://www.facebook.com/" >
        <BsFacebook style={{margin:"1rem"}} size={36} />
        </a>
        <a href="https://www.instagram.com/" >

        <BsInstagram style={{margin:"1rem"}} size={36} />
      </a>
     
      <a href="https://twitter.com/">
        <FaTwitter style={{margin:"1rem"}} size ={36}/></a>
      </div>
    </Fragment>

  );
};
export default Footer;