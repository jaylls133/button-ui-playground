import FlatButton from "@/components/buttons/FlatButton";
import RaisedButton from "@/components/buttons/RaisedButton";
import GradientButton from "@/components/buttons/GradientButton";
import GlassButton from "@/components/buttons/GlassButton";
import AnimatedButton from "@/components/buttons/AnimatedButton";
import NeonButton from "@/components/buttons/NeonButton";
import ThreeDButton from "@/components/buttons/ThreeDButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import PulseButton from "@/components/buttons/PulseButton";
import RippleButton from "@/components/buttons/RippleButton";
import BounceButton from "@/components/buttons/BounceButton";
import ShakeButton from "@/components/buttons/ShakeButton";
import SlideButton from "@/components/buttons/SlideButton";
import FlipButton from "@/components/buttons/FlipButton";
import MenuButton from "@/components/buttons/MenuButton";
import GhostButton from "@/components/buttons/GhostButton";
import ShadowButton from "@/components/buttons/ShadowButton";
import LoadingButton from "@/components/buttons/LoadingButton";
import IconButton from "@/components/buttons/IconButton";
import ToggleButton from "@/components/buttons/ToggleButton";
import RoundButton from "@/components/buttons/RoundButton";
import SquareButton from "@/components/buttons/SquareButton";
import NeuomorphismButton from "@/components/buttons/NeuomorphismButton";
import RetroButton from "@/components/buttons/RetroButton";
import MaterialButton from "@/components/buttons/MaterialButton";
import MinimalButton from "@/components/buttons/MinimalButton";
import GradientBorderButton from "@/components/buttons/GradientBorderButton";
import FloatingButton from "@/components/buttons/FloatingButton";

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
  "Neon",
  "Interactive",
  "Loading",
  "Icon",
  "Shape",
  "Retro",
  "Material",
  "Minimal"
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
  },
  {
    id: "9",
    slug: "pulse-button",
    title: "Pulse Button",
    description: "A button with pulsing animation that grabs attention effectively.",
    category: "Animated",
    tags: ["pulse", "attention", "animated"],
    component: PulseButton,
    code: `<button className="px-6 py-3 bg-pink-500 text-white rounded-lg animate-pulse hover:animate-none hover:bg-pink-600 transition-all">
  Click Me
</button>`
  },
  {
    id: "10",
    slug: "ripple-button",
    title: "Ripple Button",
    description: "Material Design inspired button with ripple effect on click.",
    category: "Interactive",
    tags: ["ripple", "material", "feedback"],
    component: RippleButton,
    code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-blue-700">
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 group-active:animate-ping rounded-full"></div>
</button>`
  },
  {
    id: "11",
    slug: "bounce-button",
    title: "Bounce Button",
    description: "Playful button with bounce and rotation effects on hover.",
    category: "Animated",
    tags: ["bounce", "playful", "rotation"],
    component: BounceButton,
    code: `<button className="px-6 py-3 bg-orange-500 text-white rounded-lg transition-all transform hover:scale-110 hover:rotate-2 hover:bg-orange-600 active:scale-95">
  Click Me
</button>`
  },
  {
    id: "12",
    slug: "shake-button",
    title: "Shake Button",
    description: "Dynamic button with shake animation to create urgency.",
    category: "Animated",
    tags: ["shake", "urgent", "dynamic"],
    component: ShakeButton,
    code: `<button className="px-6 py-3 bg-red-600 text-white rounded-lg transition-all hover:animate-bounce hover:bg-red-700">
  Click Me
</button>`
  },
  {
    id: "13",
    slug: "slide-button",
    title: "Slide Button",
    description: "Button with sliding text and arrow reveal animation.",
    category: "Animated",
    tags: ["slide", "arrow", "reveal"],
    component: SlideButton,
    code: `<button className="px-6 py-3 bg-green-600 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-green-700">
  <span className="relative z-10 transition-transform group-hover:translate-x-2">Click Me</span>
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
</button>`
  },
  {
    id: "14",
    slug: "flip-button",
    title: "Flip Button",
    description: "3D flip effect button with perspective transformation.",
    category: "3D",
    tags: ["flip", "3d", "perspective"],
    component: FlipButton,
    code: `<button className="px-6 py-3 bg-purple-600 text-white rounded-lg transition-all transform hover:rotateY-180 hover:bg-purple-700 perspective-1000">
  Click Me
</button>`
  },
  {
    id: "15",
    slug: "menu-button",
    title: "Menu Button",
    description: "Dropdown menu button with hover-activated options.",
    category: "Interactive",
    tags: ["menu", "dropdown", "navigation"],
    component: MenuButton,
    code: `<button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all relative group">
  <span>Menu</span>
  <div className="absolute top-full left-0 w-full bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-lg">
    <div className="py-2 px-4 text-sm">Option 1</div>
    <div className="py-2 px-4 text-sm">Option 2</div>
  </div>
</button>`
  },
  {
    id: "16",
    slug: "ghost-button",
    title: "Ghost Button",
    description: "Transparent button that fills with color on hover.",
    category: "Flat",
    tags: ["ghost", "transparent", "minimal"],
    component: GhostButton,
    code: `<button className="px-6 py-3 bg-transparent border-2 border-gray-400 text-gray-400 rounded-lg hover:bg-gray-400 hover:text-white transition-all">
  Click Me
</button>`
  },
  {
    id: "17",
    slug: "shadow-button",
    title: "Shadow Button",
    description: "Enhanced button with dramatic shadow effects and elevation.",
    category: "Raised",
    tags: ["shadow", "elevation", "dramatic"],
    component: ShadowButton,
    code: `<button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
  Click Me
</button>`
  },
  {
    id: "18",
    slug: "loading-button",
    title: "Loading Button",
    description: "Button with loading spinner animation for async operations.",
    category: "Loading",
    tags: ["loading", "spinner", "async"],
    component: LoadingButton,
    code: `<button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2">
  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  <span>Loading...</span>
</button>`
  },
  {
    id: "19",
    slug: "icon-button",
    title: "Icon Button",
    description: "Button with integrated icon for clear visual communication.",
    category: "Icon",
    tags: ["icon", "visual", "download"],
    component: IconButton,
    code: `<button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all flex items-center space-x-2">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 12l-6-6h12l-6 6z"/>
  </svg>
  <span>Download</span>
</button>`
  },
  {
    id: "20",
    slug: "toggle-button",
    title: "Toggle Button",
    description: "State-aware button that toggles between on/off states.",
    category: "Interactive",
    tags: ["toggle", "state", "switch"],
    component: ToggleButton,
    code: `<button className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all data-[state=on]:bg-green-500 data-[state=on]:text-white">
  Toggle Me
</button>`
  },
  {
    id: "21",
    slug: "round-button",
    title: "Round Button",
    description: "Circular button perfect for FAB (Floating Action Button) implementations.",
    category: "Shape",
    tags: ["round", "circle", "fab"],
    component: RoundButton,
    code: `<button className="w-12 h-12 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all transform hover:scale-110 flex items-center justify-center">
  +
</button>`
  },
  {
    id: "22",
    slug: "square-button",
    title: "Square Button",
    description: "Geometric square button with rotation effect.",
    category: "Shape",
    tags: ["square", "geometric", "rotation"],
    component: SquareButton,
    code: `<button className="w-12 h-12 bg-teal-500 text-white hover:bg-teal-600 transition-all transform hover:rotate-45 flex items-center justify-center">
  ⚡
</button>`
  },
  {
    id: "23",
    slug: "neuomorphism-button",
    title: "Neuomorphism Button",
    description: "Soft UI button with inset shadows for a pressed-in effect.",
    category: "3D",
    tags: ["neuomorphism", "soft", "inset"],
    component: NeuomorphismButton,
    code: `<button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition-all">
  Click Me
</button>`
  },
  {
    id: "24",
    slug: "retro-button",
    title: "Retro Button",
    description: "Vintage 8-bit style button with bold borders and pixel-perfect design.",
    category: "Retro",
    tags: ["retro", "8bit", "vintage"],
    component: RetroButton,
    code: `<button className="px-6 py-3 bg-yellow-400 text-black rounded border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-bold">
  CLICK ME
</button>`
  },
  {
    id: "25",
    slug: "material-button",
    title: "Material Button",
    description: "Google Material Design button with elevation and ripple effects.",
    category: "Material",
    tags: ["material", "google", "elevation"],
    component: MaterialButton,
    code: `<button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 uppercase tracking-wide text-sm font-medium">
  Click Me
</button>`
  },
  {
    id: "26",
    slug: "minimal-button",
    title: "Minimal Button",
    description: "Ultra-minimal text button with subtle underline interaction.",
    category: "Minimal",
    tags: ["minimal", "text", "underline"],
    component: MinimalButton,
    code: `<button className="px-6 py-3 text-gray-700 hover:text-black transition-colors underline hover:no-underline">
  Click Me
</button>`
  },
  {
    id: "27",
    slug: "gradient-border-button",
    title: "Gradient Border Button",
    description: "Button with animated gradient border that reveals on hover.",
    category: "Gradient",
    tags: ["gradient", "border", "reveal"],
    component: GradientBorderButton,
    code: `<button className="px-6 py-3 bg-white text-gray-700 rounded-lg relative overflow-hidden group transition-all hover:text-white">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div className="absolute inset-[2px] bg-white rounded-lg group-hover:bg-transparent transition-all"></div>
  <span className="relative z-10">Click Me</span>
</button>`
  },
  {
    id: "28",
    slug: "floating-button",
    title: "Floating Button",
    description: "Floating action button with enhanced shadow and scale effects.",
    category: "Raised",
    tags: ["floating", "fab", "scale"],
    component: FloatingButton,
    code: `<button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:bg-blue-600">
  Click Me
</button>`
  }
];
