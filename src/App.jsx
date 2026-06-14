import { useEffect, useState } from "react";
import heroImage from "./assets/hero.jpeg";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpeg";

function App() {
  const weddingDate = new Date("July 1, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(
          rgba(109,31,50,0.55),
          rgba(109,31,50,0.55)
        ), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        flexDirection: "column",
        gap: "32px",
        padding: "20px",
      }}
    >
      <p
        style={{
          color: "#D4AF37",
          letterSpacing: "4px",
          margin: 0,
          fontSize: "1.2rem",
        }}
      >
        स्नेह निमंत्रण
      </p>

      <h1
  style={{
    fontSize: "clamp(2.5rem, 8vw, 5rem)",
    margin: 0,
    lineHeight: 1.1,
  }}
>
  Ashish ❤️ Anjali
</h1>

      <p
        style={{
          fontSize: "1.5rem",
          margin: 0,
        }}
      >
        A Beginning of Forever
      </p>

      <p
        style={{
          color: "#D4AF37",
          fontSize: "1.3rem",
          margin: 0,
        }}
      >
        01 July 2026
      </p>

      <div
        style={{
          display: "flex",
          gap: "32px",
          marginTop: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div>
          <h2>{timeLeft.days}</h2>
          <p>Days</p>
        </div>

        <div>
          <h2>{timeLeft.hours}</h2>
          <p>Hours</p>
        </div>

        <div>
          <h2>{timeLeft.minutes}</h2>
          <p>Minutes</p>
        </div>

        <div>
          <h2>{timeLeft.seconds}</h2>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default App;