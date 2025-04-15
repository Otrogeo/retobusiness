
import React from "react";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

const CircularProgress = ({
  value,
  size = 120,
  strokeWidth = 8,
  color = "#F97316", // Default to Tron orange
  bgColor = "rgba(255,255,255,0.1)",
  children,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(100, Math.max(0, value)); // Clamp between 0-100
  const progressOffset = ((100 - progress) / 100) * circumference;

  const center = size / 2;
  
  // Style with CSS variables for the animation
  React.useEffect(() => {
    document.documentElement.style.setProperty('--progress-value', `${progress}`);
  }, [progress]);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out animate-progress-fill"
          style={{ 
            filter: `drop-shadow(0 0 6px ${color})`,
            animation: 'progress-fill 1s ease-in-out forwards'
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default CircularProgress;
