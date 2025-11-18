import React, { useRef } from "react";

export default function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const brandBlue = "#0A2A4A";
  const gold = "#F4C15D";

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f4f6fa" }}>
      {/* HEADER */}
      <header
        style={{
          background: brandBlue,
          padding: "15px 30px",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "55px", height: "55px", objectFit: "contain" }}
        />
        <span style={{ fontSize: "24px", fontWeight: 700 }}>
          Bluegrass Holiday Lights
        </span>
      </header>

      {/* HERO */}
      <section
        style={{
          height: "500px",
          backgroundImage: "url('/hero2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75))",
          }}
        ></div>

        <div style={{ position: "relative" }}>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              textShadow: "0 4px 10px rgba(0,0,0,0.6)",
              marginBottom: "20px",
            }}
          >
            Professional Holiday Light Installations
          </h1>

          <button
            onClick={scrollToContact}
            style={{
              background: gold,
              border: "none",
              padding: "14px 24px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: 600,
              cursor: "pointer",
              color: brandBlue,
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ padding: "40px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: brandBlue,
            marginBottom: "25px",
          }}
        >
          Before & After Transformations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "25px",
          }}
        >
          {/* BEFORE */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/before1.jpg"
              style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />
            <div style={{ padding: "18px", fontWeight: 700, color: brandBlue }}>
              Before
            </div>
          </div>

          {/* AFTER */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/after1.jpg"
              style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />
            <div style={{ padding: "18px", fontWeight: 700, color: brandBlue }}>
              After
            </div>
          </div>
        </div>
      </section>

      {/* WORK GALLERY SECTION */}
      <section style={{ padding: "40px", paddingTop: "20px" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: brandBlue,
            marginBottom: "25px",
          }}
        >
          More of Our Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/work1.jpg"
              style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/work2.jpg"
              style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        ref={contactRef}
        style={{
          padding: "50px",
          background: "#ffffff",
          borderTop: "4px solid " + brandBlue,
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: brandBlue,
            marginBottom: "20px",
          }}
        >
          Get a Free Quote
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted! (You can connect this to email later)");
          }}
          style={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            style={inputStyle}
          />
          <textarea
            placeholder="Tell us about your project..."
            rows="5"
            style={inputStyle}
          ></textarea>

          <button
            type="submit"
            style={{
              background: brandBlue,
              color: "white",
              padding: "14px",
              fontSize: "18px",
              fontWeight: 600,
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </section>

      <footer
        style={{
          background: brandBlue,
          color: "white",
          padding: "25px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Bluegrass Holiday Lights
      </footer>
    </div>
  );
}

const inputStyle = {
  padding: "14px",
  fontSize: "16px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};
