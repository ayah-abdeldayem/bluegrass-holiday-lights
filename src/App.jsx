import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f6f8fb" }}>

      {/* HEADER */}
      <header
        style={{
          background: "#0A2A4A",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <img src="/logo.png" height="60" style={{ borderRadius: "6px" }} />
        <h1 style={{ color: "white", fontSize: "28px", margin: 0 }}>
          Bluegrass Holiday Lights
        </h1>
      </header>

      {/* HERO */}
      <section
        style={{
          height: "420px",
          backgroundImage: "url('/after1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom right, rgba(0,0,0,0.25), rgba(0,0,0,0.55))",
          }}
        />
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            zIndex: 2,
            textShadow: "0 3px 12px rgba(0,0,0,0.7)",
            animation: "fadeIn 1.2s ease-out",
          }}
        >
          Professional Holiday Light Installations
        </h2>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ padding: "50px 30px" }}>
        <h2
          style={{
            color: "#0A2A4A",
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "25px",
          }}
        >
          Before & After Transformations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            { label: "Before", img: "/before1.jpg" },
            { label: "After", img: "/after1.jpg" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                animation: "fadeUp 0.8s ease-out both",
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <img
                src={item.img}
                style={{ width: "100%", height: "230px", objectFit: "cover" }}
              />
              <div
                style={{
                  padding: "12px",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#0A2A4A",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "50px 30px", background: "#fff" }}>
        <h2
          style={{
            color: "#0A2A4A",
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Pricing
        </h2>

        <p style={{ color: "#39546b", marginBottom: "30px" }}>
          Transparent, fair pricing for every home size.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            { title: "Small Home", price: "$350–$550", desc: "Townhouses + small roofs" },
            { title: "Medium Home", price: "$750–$1,200", desc: "Most standard homes" },
            { title: "Large / Custom", price: "Custom Quote", desc: "Large roofs + trees" },
          ].map((p, i) => (
            <div
              key={i}
              style={{
                background: "#fdfdfd",
                borderRadius: "14px",
                padding: "22px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ color: "#0A2A4A", fontSize: "22px", margin: 0 }}>
                {p.title}
              </h3>
              <p style={{ color: "#F4C15D", fontWeight: 700, fontSize: "26px", margin: "10px 0" }}>
                {p.price}
              </p>
              <p style={{ color: "#39546b" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "50px 30px", background: "#f6f8fb" }}>
        <h2
          style={{
            color: "#0A2A4A",
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "30px",
          }}
        >
          What Our Customers Say
        </h2>

        <div
          style={{
            display: "grid",
            gap: "25px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {[
            {
              name: "Sarah M.",
              text: "Absolutely beautiful work. The lights made our home the best on the block!",
            },
            {
              name: "James T.",
              text: "Fast, professional, and super clean install. Worth every penny.",
            },
            {
              name: "Emily R.",
              text: "They handled everything—design, install, removal. Stress-free holiday magic.",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "22px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "22px", color: "#F4C15D" }}>★★★★★</div>
              <p style={{ color: "#39546b", margin: "10px 0" }}>{t.text}</p>
              <p style={{ fontWeight: 600, color: "#0A2A4A" }}>{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0A2A4A",
          color: "white",
          padding: "25px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Bluegrass Holiday Lights  
      </footer>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
