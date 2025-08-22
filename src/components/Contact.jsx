import React from 'react'

function Contact() {
  return (
    <section id="contact" style={{ padding: "60px 20px", background: "#f0f0ff", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Contact Us</h2>
      <form action="https://formspree.io/f/mkgzdrqw" method="POST" style={{ maxWidth: "400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
        <textarea name="message" placeholder="Your Message" rows="5" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}></textarea>
        <button type="submit" style={{ background: "#6e8efb", color: "#fff", padding: "12px", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Send</button>
      </form>
    </section>
  )
}

export default Contact
