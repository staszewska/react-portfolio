import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-me">
        <div className="contact-me__info">
          <h1 className="contact-me__title">Contact me</h1>
          <h3>Malgorzata Staszewska-Bui</h3>
          <h3>Cologne, Germany</h3>
          <p>
            E-mail:{" "}
            <a href="mailto:mstaszewska93@gmail.com">mstaszewska93@gmail.com</a>
          </p>
          <p>
            Phone number: <a href="tel:+491738392130">0049-173-83-92-130</a>
          </p>
          <p>
            <a
              href="https://github.com/staszewska"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out some of my code
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
