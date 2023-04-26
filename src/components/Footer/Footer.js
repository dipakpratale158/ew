import { Fragment } from "react";
import { BsYoutube, BsSpotify, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <div className="p-1 bg-info text-white d-flex align-items-center ">
        <p style={{ fontSize: "2.5em", fontFamily: "bold", marginLeft: "25%"}}>
          The Generics
        </p>
        <BsYoutube style={{ marginLeft: "40%" }} size={36} />
        <BsSpotify style={{ marginLeft: "2%" }} size={36} />
        <BsFacebook style={{ marginLeft: "2%" }} size={36} />
        <BsInstagram style ={{marginLeft: "2%"}} size ={36} />
      </div>
    </Fragment>
  );
};
export default Footer;





// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <div>
        
//       <div className='flex shopping-cart'  >
//       <h2 className="heading" >The Generics</h2>
//         <div className="footer">
//         <a href="https://www.facebook.com/" >
//           𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤
//         </a>
//         <a href="https://www.youtube.com/">𝐲𝐨𝐮𝐭𝐮𝐛𝐞</a>
//         <a href="https://twitter.com/">𝙩𝙬𝙞𝙩𝙩𝙚𝙧</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;