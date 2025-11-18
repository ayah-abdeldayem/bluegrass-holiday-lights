import React, { useRef } from "react";

export default function App() {
  const contactRef = useRef(null);

  const handleQuoteClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // simple mailto – user will swap THEIR email later
    window.location.href = "mailto:YOUR_EMAIL_HERE?subject=New%20Quote%20Request";
  };

  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif",
        background: "#f5f7fb",
        color: "#1c2833",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          background: "#0A2A4A",
          color: "white",
          padding: "6px 20px",
          fontSize: "13px",
          textAlign: "right",
        }}
      >
        📞 <strong>502-702-0733</strong> &nbsp; | &nbsp; Lexington, KY
      </div>

      {/* HEADER */}
      <header
        style={{
          background: "white",
          padding: "14px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.png"
            alt="Bluegrass Holiday Lights logo"
            style={{ height: 52, width: "auto", objectFit: "contain" }}
          />
        </div>
        <button
          onClick={handleQuoteClick}
          style={{
            padding: "9px 16px",
            borderRadius: "999px",
            border: "none",
            background: "#F4C15D",
            color: "#0A2A4A",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
          }}
        >
          Get a Free Quote
        </button>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "360px",
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              "linear-gradient(to bottom right, rgba(0,0,0,0.45), rgba(0,0,0,0.85))",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            padding: "40px 20px",
            maxWidth: "700px",
            animation: "fadeIn 1.2s ease-out",
          }}
        >
          <h1
            style={{
              fontSize: "34px",
              marginBottom: "10px",
              fontWeight: 700,
            }}
          >
            Make Your Home the Brightest on the Block ✨
          </h1>
          <p style={{ fontSize: "16px", opacity: 0.9, marginBottom: "20px" }}>
            Professional Christmas light installation in Lexington, KY.  
            We design, install, and remove – you just enjoy the view.
          </p>
          <button
            onClick={handleQuoteClick}
            style={{
              padding: "12px 22px",
              borderRadius: "999px",
              border: "none",
              background: "#F4C15D",
              color: "#0A2A4A",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              boxShadow: "0 8px 22px rgba(0,0,0,0.35)",
            }}
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* PRICING */}
      <section
        style={{
          padding: "45px 20px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: 26,
            marginBottom: 10,
            color: "#0A2A4A",
          }}
        >
          Simple Pricing for Real Homes
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#555",
            marginBottom: 30,
          }}
        >
          Final quote depends on roofline length, complexity, and add-ons.  
          All packages include commercial-grade LEDs, timers, and removal.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {/* Small */}
          <div
            style={{
              background: "white",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              border: "1px solid #e3e7f0",
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18, color: "#0A2A4A" }}>
              Small Home
            </h3>
            <p style={{ margin: "6px 0 10px", fontSize: 14, color: "#555" }}>
              Townhomes, small ranches, simple rooflines.
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0A2A4A",
                marginBottom: 6,
              }}
            >
              $350 – $550
            </p>
            <p style={{ fontSize: 13, color: "#777" }}>Install + lights + timer</p>
          </div>

          {/* Medium */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0A2A4A 0%, #1E4F7B 50%, #0A2A4A 100%)",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 10px 24px rgba(0,0,0,0.20)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: 11,
                padding: "3px 8px",
                borderRadius: 999,
                background: "rgba(244,193,93,0.9)",
                color: "#0A2A4A",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Most Popular
            </div>
            <h3 style={{ margin: 0, fontSize: 18 }}>Medium Home</h3>
            <p style={{ margin: "6px 0 10px", fontSize: 14, opacity: 0.9 }}>
              Typical single-family homes and two-stories.
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              $750 – $1,200
            </p>
            <p style={{ fontSize: 13, opacity: 0.9 }}>
              Roofline + garage + entry highlights.
            </p>
          </div>

          {/* Large */}
          <div
            style={{
              background: "white",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              border: "1px solid #e3e7f0",
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18, color: "#0A2A4A" }}>
              Large / Custom
            </h3>
            <p style={{ margin: "6px 0 10px", fontSize: 14, color: "#555" }}>
              Large homes, steep roofs, trees, advanced designs.
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0A2A4A",
                marginBottom: 6,
              }}
            >
              $1,500+
            </p>
            <p style={{ fontSize: 13, color: "#777" }}>
              Fully custom design and layout.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS – Google review style */}
      <section
        style={{
          padding: "40px 20px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: 24,
            marginBottom: 8,
            color: "#0A2A4A",
          }}
        >
          What Our Customers Say
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#555",
            marginBottom: 24,
          }}
        >
          Real reviews, Google-style. We care a lot about the details.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              name: "Sarah M.",
              text: "They handled everything. My house looks like a Christmas card and I didn’t have to touch a ladder.",
            },
            {
              name: "James R.",
              text: "On time, super professional, and the lights look way better than when I tried to do it myself.",
            },
            {
              name: "Lisa K.",
              text: "Loved that they also remove the lights after the holidays. Worth every penny.",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 14,
                padding: 18,
                boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                border: "1px solid #e3e7f0",
              }}
            >
              <div style={{ color: "#fbbc04", marginBottom: 4 }}>★★★★★</div>
              <p style={{ fontSize: 14, marginBottom: 10 }}>{t.text}</p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0A2A4A",
                  margin: 0,
                }}
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section
        style={{
          padding: "40px 20px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: 24,
            marginBottom: 18,
            color: "#0A2A4A",
          }}
        >
          Before & After
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/before1.jpg"
              alt="Before lights"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              background: "white",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/after1.jpg"
              alt="After lights"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* OUR WORK SECTION */}
      <section
        style={{
          padding: "40px 20px 50px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: 24,
            marginBottom: 18,
            color: "#0A2A4A",
          }}
        >
          More of Our Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {[
            { src: "/work1.jpg", alt: "Project 1" },
            { src: "/work2.jpg", alt: "Project 2" },
          ].map((w, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={w.src}
                alt={w.alt}
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / QUOTE FORM */}
      <section
        ref={contactRef}
        id="contact"
        style={{
          padding: "40px 20px 60px",
          background: "#0A2A4A",
          color: "white",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 24,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Get Your Free Quote
          </h2>
          <p
            style={{
              fontSize: 14,
              textAlign: "center",
              opacity: 0.9,
              marginBottom: 24,
            }}
          >
            Tell us a bit about your home and we’ll follow up with pricing and availability.
          </p>

          <form
            onSubmit={handleContactSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
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
              placeholder="Email Address"
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Property Address"
              required
              style={inputStyle}
            />
            <textarea
              placeholder="Tell us what areas you’d like lit (roofline, trees, walkway, etc.)"
              rows={4}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                marginTop: 8,
                padding: "12px 18px",
                borderRadius: 999,
                border: "none",
                background: "#F4C15D",
                color: "#0A2A4A",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              }}
            >
              Submit & Open Email
            </button>
            <p
              style={{
                fontSize: 11,
                opacity: 0.8,
                marginTop: 6,
                textAlign: "center",
              }}
            >
              This will open your email app with our address pre-filled.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "18px 20px",
          textAlign: "center",
          fontSize: 12,
          color: "#d0d6e2",
          background: "#07192D",
        }}
      >
        © {new Date().getFullYear()} Bluegrass Holiday Lights · Lexington, KY
      </footer>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.4)",
  fontSize: 14,
  outline: "none",
  background: "rgba(7,25,45,0.85)",
  color: "white",
};
