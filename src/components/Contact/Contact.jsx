import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


export const Contact = () => {
  const [result, setResult] = React.useState("");

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        
        formData.append("access_key","77b84f95-b5cf-4727-89e4-96e93677567e");
        
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>No mundo atual, a contínua expansão de nossa atividade nos obriga à análise das formas de ação.</p>
        <ul>
          <li> <img src={mail_icon} alt="" /> contact@alltracksapp.com</li>
          <li> <img src={phone_icon} alt="" /> +55 11 998457-7785</li>
          <li> <img src={location_icon} alt="" /> Av. Infinito Loop, 1000 <br />
              Bairro Alto, Sao Paulo
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder='Enter your name' required/>
          <label>Phone number</label>
          <input type="tel" name="phone" placeholder='mobil number' required/>
          <label>Write your message here</label>
          <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
          <button className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
