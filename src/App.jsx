import { useState, useEffect } from "react";
import "./App.css";
import hero from "./assets/hero.jpeg";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpeg";

function Countdown() {
  const [time, setTime] = useState({ days: 16, hours: 0, minutes: 49, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      const weddingDate = new Date("2026-07-01");
      const now = new Date();
      const diff = weddingDate - now;
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-box"><span className="countdown-num">{time.days}</span><span className="countdown-label">Days</span></div>
      <div className="countdown-box"><span className="countdown-num">{time.hours}</span><span className="countdown-label">Hours</span></div>
      <div className="countdown-box"><span className="countdown-num">{time.minutes}</span><span className="countdown-label">Minutes</span></div>
      <div className="countdown-box"><span className="countdown-num">{time.seconds}</span><span className="countdown-label">Seconds</span></div>
    </div>
  );
}

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const photos = [photo1, photo2, photo3, photo4];

  if (showEnvelope) {
    return (
      <div className="envelope-screen" onClick={() => setShowEnvelope(false)}>
        <div className="envelope-wrap">
          <div className="envelope-body">
            <div className="envelope-flap" />
            <p className="env-sneh">स्नेह निमंत्रण</p>
            <p className="env-names">Ashish ❤️ Anjali</p>
            <p className="env-date">01 · 07 · 2026</p>
          </div>
        </div>
        <p className="tap-text">✨ Tap to Open ✨</p>
      </div>
    );
  }

  return (
    <div className="app">
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

      <footer className="footer">
        <p className="footer-text">Ashish & Anjali</p>
        <p className="footer-date">01 · 07 · 2026</p>
      </footer>
    </div>
  );
}