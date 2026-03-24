import "./ContactForm.css";

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} placeholder="Write your message here..." />
      </div>

      <div className="form-actions">
        <button type="button" className="btn">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
