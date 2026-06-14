import { useState, useEffect } from "react";
import "./App.css";
import hero from "./assets/hero.jpeg";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpeg";

function Countdown() {
  const weddingDate = new Date("2026-07-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div className="countdown-box" key={unit}>
          <span className="countdown-num">{timeLeft[unit] ?? "00"}</span>
          <span className="countdown-label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="sneh">स्नेह निमंत्रण</p>
          <h1 className="names">Ashish <span className="heart">❤️</span> Anjali</h1>
          <p className="tagline">A Beginning of Forever</p>
          <p className="date">01 July 2026</p>
          <Countdown />
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <h2 className="gallery-title">Our Story</h2>
        <div className="gallery">
          {photos.map((photo, i) => (
            <div className="gallery-item" key={i}>
              <img src={photo} alt={`moment ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>💛 With Love — Ashish & Anjali • 01.07.2026 💛</p>
      </footer>
    </div>
  );
        }
