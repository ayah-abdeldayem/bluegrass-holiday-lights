import React from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background: "#f3f6fa",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#0A2A4A",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          color: "white",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "45px", width: "45px", borderRadius: "6px" }}
        />
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
          Bluegrass Holiday Lights
        </h1>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          height: "520px",
          backgroundImage: "url('/hero2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.6))",
          }}
        ></div>

        <h2
          style={{
            position: "relative",
            fontSize: "48px",
            fontWeight: "800",
            textShadow: "0 4px 12px rgba(0,0,0,0.8)",
          }}
        >
          Professional Holiday Light Installations
        </h2>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ padding: "40px" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#0A2A4A",
            marginBottom: "26px",
          }}
        >
          Before & After Transformations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
          }}
        >
          {/* BEFORE */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 26px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src="/before1.jpg"
              alt="Before"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "16px", fontSize: "18px", fontWeight: 600 }}>
              Before
            </div>
          </div>

          {/* AFTER */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 26px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src="/after1.jpg"
              alt="After"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "16px", fontSize: "18px", fontWeight: 600 }}>
              After
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        style={{
          padding: "50px 40px",
          background: "white",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: "#0A2A4A",
            marginBottom: "30px",
          }}
        >
          Pricing
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Small Home",
              price: "$349",
              desc: "Perfect for 1-story homes or smaller layouts.",
            },
            {
              title: "Medium Home",
              price: "$499",
              desc: "Most popular. Ideal for average 1–2 story homes.",
            },
            {
              title: "Large Home",
              price: "$749+",
              desc: "For high roofs, large structures, or full property.",
            },
          ].map((tier, i) => (
            <div
              key={i}
              style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  color: "#0A2A4A",
                }}
              >
                {tier.title}
              </h3>
              <p
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  color: "#F4C15D",
                  marginBottom: "12px",
                }}
              >
                {tier.price}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#44515e",
                  marginBottom: "20px",
                }}
              >
                {tier.desc}
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#0A2A4A",
                  color: "white",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "50px 40px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: "#0A2A4A",
            marginBottom: "30px",
          }}
        >
          Testimonials
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              quote:
                "Absolutely stunning job. Our home has never looked this magical!",
              name: "Sarah W.",
            },
            {
              quote:
                "Super professional, quick install, and the lights look perfect.",
              name: "Jason K.",
            },
            {
              quote:
                "Our neighborhood keeps complimenting our house! 100% worth it.",
              name: "Emily R.",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "26px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  color: "#0A2A4A",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                “{t.quote}”
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "#7a8a9a",
                  fontWeight: 500,
                }}
              >
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0A2A4A",
          color: "white",
          padding: "24px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Bluegrass Holiday Lights
      </footer>
    </div>
  );
}
