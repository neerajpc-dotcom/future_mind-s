import React from 'react'

function Features() {
  const features = [
    { title: "AI Insights", desc: "Gain actionable intelligence from your data." },
    { title: "Automation", desc: "Streamline operations with smart automation." },
    { title: "Scalable Solutions", desc: "Future-proof tech that grows with your business." },
  ]

  return (
    <section id="features" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>Our Features</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {features.map((f, i) => (
          <div key={i} style={{ width: "250px", padding: "20px", borderRadius: "12px", background: "#f9f9f9", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ marginBottom: "10px", color: "#6e8efb" }}>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
