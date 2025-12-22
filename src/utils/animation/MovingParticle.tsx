import React from "react";

interface MovingParticleProps {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
  stopOnSmall?: boolean;
  stopOnLarge?: boolean;
}

const MovingParticle: React.FC<MovingParticleProps> = ({
  children,
  speed = 5,
  className = "",
  stopOnSmall = false,
  stopOnLarge = false,
}) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className} ${
        stopOnSmall ? "pause-on-small" : ""
      } ${stopOnLarge ? "pause-on-large" : ""}`}
    >
      {React.Children.map(children, (child) => (
        <div
          className="absolute animate-pingPong"
          style={{ animationDuration: `${speed}s` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default MovingParticle;
