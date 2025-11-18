import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f7f9fc" }}>

      {/* HEADER */}
      <header
        style={{
          background: "#083763",
          padding: "20px",
          color: "white",
          fontSize: "26px",
          fontWeight: "700",
          letterSpacing: "0.5px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
        }}
      >
        Bluegrass Holiday Lights
      </header>

      {/* HERO */}
      <section
        style={{
          height: "350px",
          backgroundImage: "url('/hero-bg.jpg')",
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
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
          }}
        ></div>

        <h1
          style={{
            position: "relative",
            fontSize: "40px",
            fontWeight: "700",
            textShadow: "0 3px 10px rgba(0,0,0,0.5)",
            animation: "fadeIn 1.4s ease-out",
          }}
        >
          Professional Holiday Light Installations
        </h1>
      </section>

      {/* BEFORE AFTER SECTION */}
      <section style={{ padding: "40px" }}>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "700",
            color: "#083763",
            marginBottom: "20px",
          }}
        >
          Before & After
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {["before1", "after1", "before2", "after2"].map((img, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transform: "translateY(0)",
                animation: "fadeUp 0.8s ease-out both",
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <img
                src={`/${img}.jpg`}
                alt={img}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#083763",
          color: "white",
          padding: "25px",
          textAlign: "center",
          marginTop: "40px",
          fontSize: "15px",
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
