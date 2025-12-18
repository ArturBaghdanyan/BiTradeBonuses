import style from "./style.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import facebook from "../../assets/contact-icons/facebook.svg";
import linkedin from "../../assets/contact-icons/linkedin.svg";
import instagram from "../../assets/contact-icons/instagram.svg";
import youtube from "../../assets/contact-icons/youtube.svg";
import twitter from "../../assets/contact-icons/twitter.svg";
import email from "../../assets/contact-icons/email.svg";
import phone from "../../assets/contact-icons/phone.svg";

import background from "../../assets/contact-icons/bg.svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleUpdate = (data) => {
    console.log("form submitted", data);
  }
  return (
    <div className={`${style.contact}`}>
      <Header />
      <div className="pages_title">
          <p>Contact Us</p>
      </div>
      <div className={`${style.contact_container} container-spacing`}>
        <div className={style.contact_container_leftContent}>
            <h4>let’s <b>get in touch</b> with us</h4>
            <div className={style.contact_container_leftContent_social_icons}>
                <img src={facebook} alt="facebook" draggable = "false" style={{userSelect:"none"}} />
                <img src={linkedin} alt="linkedin" draggable = "false" style={{userSelect:"none"}} />
                <img src={instagram} alt="instagram" draggable = "false" style={{userSelect:"none"}} />
                <img src={youtube} alt="youtube" draggable = "false" style={{userSelect:"none"}} />
                <img src={twitter} alt="twitter" draggable = "false" style={{userSelect:"none"}} />
            </div>
            <div className={style.contact_container_leftContent_tel}>
              <div className={style.contact_container_leftContent_tel_piece}>
                <div className={style.contact_container_leftContent_tel_icon}>
                  <img src={phone} alt="phone" draggable = "false" style={{userSelect:"none"}} />
                </div>
                <div className={style.contact_container_leftContent_tel_piece_numbers}>
                  <NavLink to="#">0983888611</NavLink>
                  <NavLink to="#">0917749254</NavLink>
                </div>
              </div>
              <div className={style.contact_container_leftContent_tel_piece}>
                <div className={style.contact_container_leftContent_tel_icon}>
                  <img src={email} alt="email" draggable = "false" style={{userSelect:"none"}} />
                </div>
                <div className={style.contact_container_leftContent_tel_piece_numbers}>
                  <NavLink to="#">biTradesupport@mail.ru</NavLink>
                  <NavLink to="#">yourbitrade@gmail.com</NavLink>
                </div>
              </div>
            </div>
        </div>
        <div className={style.contact_container_rightContent}>
          <img src={background} alt="bg" draggable = "false" style={{userSelect:"none"}} />
          <form onSubmit={handleSubmit(handleUpdate)}>
            <label>Name</label>
            {errors && <p>Name is required</p>}
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              {...register('name', { required: true })}
            />

            <label>Email</label>
            {errors && <p>Email is required</p>}
            <input 
              type="text" 
              placeholder="Enter your email" 
              id="email"
              {...register('email', { required: true })}
            />

            <label>Message</label>
            {errors && <p>message is required</p>}
            <textarea 
              placeholder="Type your message" 
              id="message" 
              {...register('message', { required: true })}
            />

            <button>Contact Us Now</button>
          </form>
        </div>
      </div>
	    <div style={{background: "#00150FFF"}}>
		  <Footer />
	    </div>
    </div>
  )
}
export default ContactPage;