import Banner from "./Banner";

// Example usage of the Banner component
function BannerExample() {
  return (
    <div>
      {/* Basic banner without gradient */}
      <Banner imageSrc="/src/assets/images/running.jpg" text="TRANSFORM YOUR BODY, ELEVATE YOUR LIFE" />

      {/* Banner with gradient overlay */}
      <Banner
        imageSrc="/src/assets/images/running.jpg"
        text="BUILT FOR GLORY — BORN TO MOVE"
        secondaryText="Join our community and discover your true potential"
        gradient={true}
        gradientDirection="to bottom"
        gradientColors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]}
      />

      {/* Banner with custom gradient direction */}
      <Banner
        imageSrc="/src/assets/images/running.jpg"
        text="YOUR FITNESS JOURNEY STARTS HERE!"
        secondaryText="Experience the difference with our expert coaches and state-of-the-art equipment"
        gradient={true}
        gradientDirection="to right"
        gradientColors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.9)"]}
      />

      {/* Banner with CSS custom property gradient */}
      <Banner
        imageSrc="/src/assets/images/running.jpg"
        text="DISCOVER STRENGTH AND VERSATILITY"
        secondaryText="Elevate your fitness journey with top-notch equipment and expert guidance"
        gradient={true}
        gradientDirection="to bottom"
        gradientColors={["transparent", "var(--bg-color)"]}
      />

      {/* Banner with diagonal gradient */}
      <Banner
        gradient={true}
        text="MORE THAN A GYM — IT'S A MOVEMENT"
        imageSrc="/src/assets/images/running.jpg"
        secondaryText="Join the Kingdom Movement and transform your life"
        gradientDirection="45deg"
        gradientColors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
      />
    </div>
  );
}

export default BannerExample;
