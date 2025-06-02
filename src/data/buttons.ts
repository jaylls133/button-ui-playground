
import FlatButton from "@/components/buttons/FlatButton";
import RaisedButton from "@/components/buttons/RaisedButton";
import GradientButton from "@/components/buttons/GradientButton";
import GlassButton from "@/components/buttons/GlassButton";
import AnimatedButton from "@/components/buttons/AnimatedButton";
import NeonButton from "@/components/buttons/NeonButton";
import ThreeDButton from "@/components/buttons/ThreeDButton";
import OutlineButton from "@/components/buttons/OutlineButton";

export interface ButtonData {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  component: React.ComponentType<any>;
  code: string;
}

export const buttonCategories = [
  "All",
  "Flat",
  "Raised", 
  "Animated",
  "Gradient",
  "Glass",
  "3D",
  "Neon"
];

export const buttonsData: ButtonData[] = [
  {
    id: "1",
    slug: "flat-button",
    title: "Flat Button",
    description: "A minimal button with no shadows or borders, ideal for clean interfaces.",
    category: "Flat",
    tags: ["flat", "minimal", "clean"],
    component: FlatButton,
    code: `<button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Click Me
</button>`
  },
  {
    id: "2", 
    slug: "raised-button",
    title: "Raised Button",
    description: "A button with subtle shadow and depth, perfect for call-to-action elements.",
    category: "Raised",
    tags: ["raised", "shadow", "cta"],
    component: RaisedButton,
    code: `<button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all transform hover:-translate-y-0.5">
  Click Me
</button>`
  },
  {
    id: "3",
    slug: "gradient-button", 
    title: "Gradient Button",
    description: "A vibrant button with gradient background and smooth transitions.",
    category: "Gradient",
    tags: ["gradient", "vibrant", "modern"],
    component: GradientButton,
    code: `<button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
  Click Me
</button>`
  },
  {
    id: "4",
    slug: "glass-button",
    title: "Glass Button", 
    description: "A modern glassmorphism button with blur effects and transparency.",
    category: "Glass",
    tags: ["glass", "blur", "modern"],
    component: GlassButton,
    code: `<button className="px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all">
  Click Me
</button>`
  },
  {
    id: "5",
    slug: "animated-button",
    title: "Animated Button",
    description: "A button with engaging hover animations and micro-interactions.",
    category: "Animated", 
    tags: ["animated", "hover", "interactive"],
    component: AnimatedButton,
    code: `<button className="px-6 py-3 bg-indigo-500 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-indigo-600">
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
</button>`
  },
  {
    id: "6",
    slug: "neon-button",
    title: "Neon Button",
    description: "A glowing neon button perfect for dark themes and gaming interfaces.",
    category: "Neon",
    tags: ["neon", "glow", "dark"],
    component: NeonButton,
    code: `<button className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
  Click Me
</button>`
  },
  {
    id: "7",
    slug: "3d-button",
    title: "3D Button",
    description: "A button with depth and realistic 3D effects using shadows and transforms.",
    category: "3D",
    tags: ["3d", "depth", "realistic"],
    component: ThreeDButton,
    code: `<button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-[0_6px_0_#dc2626] hover:shadow-[0_4px_0_#dc2626] active:shadow-[0_2px_0_#dc2626] transition-all transform hover:-translate-y-1 active:translate-y-1">
  Click Me
</button>`
  },
  {
    id: "8",
    slug: "outline-button",
    title: "Outline Button",
    description: "A clean outlined button that fills on hover, great for secondary actions.",
    category: "Flat",
    tags: ["outline", "clean", "secondary"],
    component: OutlineButton,
    code: `<button className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all">
  Click Me
</button>`
  }
];
