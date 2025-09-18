import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  // 👇 use your real Formspree form ID
  const [state, handleSubmit] = useForm("movnoklg");

  if (state.succeeded) {
    return (
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <p>✅ Thanks for your message! I’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>olajideayomikun257@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>09044161321</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* ✅ RIGHT SIDE FORM (Formspree) */}
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Write your message</label>
          <textarea id="message" name="message" rows="8" required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting} className="btn">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
