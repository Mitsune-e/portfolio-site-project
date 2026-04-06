import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
        <div className="mt-4">
          <a href="mailto:gvelosodev@gmail.com" className="btn btn-primary me-2">Email</a>
          <a href="https://github.com/Mitsune-e" className="btn btn-outline-primary me-2">GitHub</a>
          <a href="https://www.linkedin.com/in/giovanaveloso/" className="btn btn-outline-primary">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
