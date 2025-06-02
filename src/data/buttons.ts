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
import SoftButton from "@/components/buttons/SoftButton";
import BorderlessButton from "@/components/buttons/BorderlessButton";
import ElevatedButton from "@/components/buttons/ElevatedButton";
import PillButton from "@/components/buttons/PillButton";
import HolographicButton from "@/components/buttons/HolographicButton";
import SunsetButton from "@/components/buttons/SunsetButton";
import FrostedButton from "@/components/buttons/FrostedButton";
import CrystalButton from "@/components/buttons/CrystalButton";
import WiggleButton from "@/components/buttons/WiggleButton";
import MorphButton from "@/components/buttons/MorphButton";
import PixelButton from "@/components/buttons/PixelButton";
import VintageButton from "@/components/buttons/VintageButton";
import FabButton from "@/components/buttons/FabButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import TextButton from "@/components/buttons/TextButton";
import LinkButton from "@/components/buttons/LinkButton";

// New Creative Styles
import PaintSplashButton from "@/components/buttons/PaintSplashButton";
import SketchButton from "@/components/buttons/SketchButton";
import LiquidButton from "@/components/buttons/LiquidButton";
import PaperFoldButton from "@/components/buttons/PaperFoldButton";
import EmojiButton from "@/components/buttons/EmojiButton";

// New Mobile UI-Friendly Buttons
import LargeThumbButton from "@/components/buttons/LargeThumbButton";
import MobileFABButton from "@/components/buttons/MobileFABButton";
import SwipeToConfirmButton from "@/components/buttons/SwipeToConfirmButton";
import StickyBottomButton from "@/components/buttons/StickyBottomButton";
import ToggleSwitchButton from "@/components/buttons/ToggleSwitchButton";

// New Utility Buttons
import DownloadButton from "@/components/buttons/DownloadButton";
import SocialMediaButton from "@/components/buttons/SocialMediaButton";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import PlayButton from "@/components/buttons/PlayButton";
import HamburgerMenuButton from "@/components/buttons/HamburgerMenuButton";
import FavoriteButton from "@/components/buttons/FavoriteButton";

// New Special Effects Buttons
import GlassShineButton from "@/components/buttons/GlassShineButton";
import PulseEffectButton from "@/components/buttons/PulseEffectButton";
import GlitchButton from "@/components/buttons/GlitchButton";
import MagneticButton from "@/components/buttons/MagneticButton";
import ThreeDTiltButton from "@/components/buttons/ThreeDTiltButton";

// New Shape Variations Buttons
import RoundedPillButton from "@/components/buttons/RoundedPillButton";
import CircleIconButton from "@/components/buttons/CircleIconButton";
import SquareIconButton from "@/components/buttons/SquareIconButton";
import DiamondButton from "@/components/buttons/DiamondButton";
import HexagonButton from "@/components/buttons/HexagonButton";

// New Theme-Specific Buttons
import DarkModeButton from "@/components/buttons/DarkModeButton";
import LightModeButton from "@/components/buttons/LightModeButton";
import GlassDarkButton from "@/components/buttons/GlassDarkButton";
import RetroPixelButton from "@/components/buttons/RetroPixelButton";
import CyberpunkButton from "@/components/buttons/CyberpunkButton";

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
  "Minimal",
  "Creative",
  "Mobile",
  "Utility",
  "Special Effects",
  "Theme-Specific"
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
  },
  {
    id: "29",
    slug: "soft-button",
    title: "Soft Button",
    description: "Ultra-soft button with rounded corners and gentle hover effect.",
    category: "Flat",
    tags: ["soft", "gentle", "rounded"],
    component: SoftButton,
    code: `<button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl hover:bg-slate-200 transition-all font-medium shadow-sm">
  Click Me
</button>`
  },
  {
    id: "30",
    slug: "borderless-button",
    title: "Borderless Button",
    description: "Clean borderless button with subtle background on hover.",
    category: "Flat",
    tags: ["borderless", "clean", "subtle"],
    component: BorderlessButton,
    code: `<button className="px-6 py-3 bg-transparent text-blue-500 hover:bg-blue-50 transition-all font-semibold">
  Click Me
</button>`
  },
  {
    id: "31",
    slug: "elevated-button",
    title: "Elevated Button",
    description: "Highly elevated button with dramatic shadow and lift effect.",
    category: "Raised",
    tags: ["elevated", "dramatic", "lift"],
    component: ElevatedButton,
    code: `<button className="px-6 py-3 bg-white text-gray-700 rounded-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all transform">
  Click Me
</button>`
  },
  {
    id: "32",
    slug: "pill-button",
    title: "Pill Button",
    description: "Pill-shaped button with rounded edges and smooth transitions.",
    category: "Raised",
    tags: ["pill", "rounded", "smooth"],
    component: PillButton,
    code: `<button className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all transform hover:-translate-y-0.5">
  Click Me
</button>`
  },
  {
    id: "33",
    slug: "holographic-button",
    title: "Holographic Button",
    description: "Futuristic button with holographic gradient and pulsing effect.",
    category: "Gradient",
    tags: ["holographic", "futuristic", "pulse"],
    component: HolographicButton,
    code: `<button className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white rounded-lg hover:from-cyan-500 hover:via-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 animate-pulse">
  Click Me
</button>`
  },
  {
    id: "34",
    slug: "sunset-button",
    title: "Sunset Button",
    description: "Warm sunset gradient with rotation and scale effects.",
    category: "Gradient",
    tags: ["sunset", "warm", "rotation"],
    component: SunsetButton,
    code: `<button className="px-6 py-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white rounded-lg hover:from-orange-500 hover:via-red-600 hover:to-pink-600 transition-all transform hover:rotate-1 hover:scale-105">
  Click Me
</button>`
  },
  {
    id: "35",
    slug: "frosted-button",
    title: "Frosted Button",
    description: "Enhanced frosted glass button with stronger blur effects.",
    category: "Glass",
    tags: ["frosted", "enhanced", "blur"],
    component: FrostedButton,
    code: `<button className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl hover:bg-white/20 hover:border-white/30 transition-all shadow-xl">
  Click Me
</button>`
  },
  {
    id: "36",
    slug: "crystal-button",
    title: "Crystal Button",
    description: "Crystal-clear button with sophisticated glass morphism design.",
    category: "Glass",
    tags: ["crystal", "sophisticated", "morphism"],
    component: CrystalButton,
    code: `<button className="px-6 py-3 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/30 text-white rounded-lg hover:from-white/30 hover:to-white/10 transition-all shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
  Click Me
</button>`
  },
  {
    id: "37",
    slug: "wiggle-button",
    title: "Wiggle Button",
    description: "Playful button that wiggles on hover for fun interactions.",
    category: "Animated",
    tags: ["wiggle", "playful", "fun"],
    component: WiggleButton,
    code: `<button className="px-6 py-3 bg-yellow-500 text-white rounded-lg transition-all hover:bg-yellow-600 hover:animate-[wiggle_0.5s_ease-in-out_infinite] transform">
  Click Me
</button>`
  },
  {
    id: "38",
    slug: "morph-button",
    title: "Morph Button",
    description: "Shape-shifting button that transforms completely on hover.",
    category: "Animated",
    tags: ["morph", "transform", "shape"],
    component: MorphButton,
    code: `<button className="px-6 py-3 bg-purple-500 text-white rounded-lg transition-all duration-500 hover:bg-green-500 hover:rounded-full transform hover:rotate-180">
  Click Me
</button>`
  },
  {
    id: "39",
    slug: "pixel-button",
    title: "Pixel Button",
    description: "Retro pixel-art style button with 8-bit aesthetics.",
    category: "Retro",
    tags: ["pixel", "8bit", "retro"],
    component: PixelButton,
    code: `<button className="px-6 py-3 bg-green-400 text-black rounded border-2 border-green-600 shadow-[2px_2px_0px_0px_rgba(34,197,94,1)] hover:shadow-[1px_1px_0px_0px_rgba(34,197,94,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-mono text-sm uppercase tracking-wider">
  CLICK ME
</button>`
  },
  {
    id: "40",
    slug: "vintage-button",
    title: "Vintage Button",
    description: "Classic vintage button with old-school styling and serif font.",
    category: "Retro",
    tags: ["vintage", "classic", "serif"],
    component: VintageButton,
    code: `<button className="px-6 py-3 bg-amber-600 text-amber-100 rounded border-3 border-amber-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-amber-700 transition-all font-serif">
  Click Me
</button>`
  },
  {
    id: "41",
    slug: "fab-button",
    title: "FAB Button",
    description: "Material Design Floating Action Button with precise specifications.",
    category: "Material",
    tags: ["fab", "material", "action"],
    component: FabButton,
    code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 uppercase tracking-widest text-xs font-bold">
  ACTION
</button>`
  },
  {
    id: "42",
    slug: "outlined-button",
    title: "Outlined Button",
    description: "Material Design outlined button with clean typography.",
    category: "Material",
    tags: ["outlined", "material", "typography"],
    component: OutlinedButton,
    code: `<button className="px-6 py-3 bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all uppercase text-sm tracking-wide">
  Click Me
</button>`
  },
  {
    id: "43",
    slug: "text-button",
    title: "Text Button",
    description: "Ultra-minimal text-only button for subtle interactions.",
    category: "Minimal",
    tags: ["text", "subtle", "minimal"],
    component: TextButton,
    code: `<button className="px-6 py-3 bg-transparent text-gray-600 hover:text-gray-900 transition-colors font-medium">
  Click Me
</button>`
  },
  {
    id: "44",
    slug: "link-button",
    title: "Link Button",
    description: "Hyperlink-style button with underline interaction.",
    category: "Minimal",
    tags: ["link", "underline", "hyperlink"],
    component: LinkButton,
    code: `<button className="px-2 py-1 text-blue-600 hover:text-blue-800 transition-colors border-b border-transparent hover:border-blue-600">
  Click Me
</button>`
  },

  // New Creative Styles
  {
    id: "45",
    slug: "paint-splash-button",
    title: "Paint Splash Button",
    description: "Creative button with random paint splash effects on hover.",
    category: "Creative",
    tags: ["paint", "splash", "creative", "artistic"],
    component: PaintSplashButton,
    code: `<button className="px-6 py-3 bg-blue-500 text-white rounded-lg relative overflow-hidden group transition-all hover:bg-blue-600">
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="absolute top-2 left-3 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
    <div className="absolute bottom-3 right-4 w-2 h-2 bg-pink-300 rounded-full animate-ping animation-delay-100"></div>
    <div className="absolute top-4 right-2 w-4 h-4 bg-green-300 rounded-full animate-ping animation-delay-200"></div>
  </div>
</button>`
  },
  {
    id: "46",
    slug: "sketch-button",
    title: "Sketch Button",
    description: "Hand-drawn sketch style button with dashed borders and playful font.",
    category: "Creative",
    tags: ["sketch", "hand-drawn", "artistic", "dashed"],
    component: SketchButton,
    code: `<button className="px-6 py-3 bg-white text-gray-800 rounded-none border-2 border-gray-800 relative transform hover:rotate-1 transition-all" 
        style={{
          borderStyle: 'dashed',
          boxShadow: '3px 3px 0px #000',
          fontFamily: 'Comic Sans MS, cursive'
        }}>
  <span className="relative">Click Me</span>
  <div className="absolute -top-1 -right-1 w-2 h-2 border border-gray-800 rounded-full bg-white"></div>
</button>`
  },
  {
    id: "47",
    slug: "liquid-button",
    title: "Liquid Button",
    description: "Water-like morphing button with fluid animation effects.",
    category: "Creative",
    tags: ["liquid", "fluid", "morph", "water"],
    component: LiquidButton,
    code: `<button className="px-6 py-3 bg-cyan-400 text-white rounded-full relative overflow-hidden group transition-all duration-500 hover:bg-cyan-500 transform hover:scale-110">
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
</button>`
  },
  {
    id: "48",
    slug: "paper-fold-button",
    title: "Paper Fold Button",
    description: "Realistic folded paper button with corner fold effect.",
    category: "Creative",
    tags: ["paper", "fold", "realistic", "corner"],
    component: PaperFoldButton,
    code: `<button className="px-6 py-3 bg-gray-100 text-gray-800 relative group transition-all duration-300 hover:bg-gray-200"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)',
          boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.1)'
        }}>
  <span className="relative">Click Me</span>
  <div className="absolute top-0 right-0 w-4 h-4 bg-gray-300 transform rotate-45 translate-x-2 -translate-y-2 group-hover:bg-gray-400 transition-colors"></div>
</button>`
  },
  {
    id: "49",
    slug: "emoji-button",
    title: "Emoji Button",
    description: "Fun button combining text with animated emoji for personality.",
    category: "Creative",
    tags: ["emoji", "fun", "animated", "personality"],
    component: EmojiButton,
    code: `<button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center space-x-2">
  <span>Click Me</span>
  <span className="text-xl animate-bounce">🚀</span>
</button>`
  },

  // New Mobile UI-Friendly Buttons
  {
    id: "50",
    slug: "large-thumb-button",
    title: "Large Thumb Button",
    description: "Extra large button designed for easy thumb tapping on mobile devices.",
    category: "Mobile",
    tags: ["large", "thumb", "mobile", "accessible"],
    component: LargeThumbButton,
    code: `<button className="px-12 py-6 bg-blue-500 text-white rounded-2xl text-xl font-semibold hover:bg-blue-600 transition-all transform active:scale-95 shadow-lg min-h-[80px] min-w-[200px]">
  Tap Me
</button>`
  },
  {
    id: "51",
    slug: "mobile-fab-button",
    title: "Mobile FAB Button",
    description: "Floating Action Button optimized for mobile interfaces.",
    category: "Mobile",
    tags: ["fab", "floating", "mobile", "icon"],
    component: MobileFABButton,
    code: `<button className="w-14 h-14 bg-red-500 text-white rounded-full shadow-2xl hover:shadow-3xl hover:bg-red-600 transition-all transform hover:scale-110 flex items-center justify-center text-2xl font-light">
  +
</button>`
  },
  {
    id: "52",
    slug: "swipe-to-confirm-button",
    title: "Swipe to Confirm Button",
    description: "Interactive button requiring drag gesture to activate.",
    category: "Mobile",
    tags: ["swipe", "confirm", "drag", "gesture"],
    component: SwipeToConfirmButton,
    code: `<div className="relative w-64 h-12 bg-gray-200 rounded-full overflow-hidden group">
  <div className="absolute inset-y-1 left-1 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer group-hover:translate-x-52 transition-transform duration-300">
    →
  </div>
  <div className="flex items-center justify-center h-full text-gray-600 font-medium">
    Swipe to confirm
  </div>
</div>`
  },
  {
    id: "53",
    slug: "sticky-bottom-button",
    title: "Sticky Bottom Button",
    description: "Full-width button that sticks to the bottom of the screen.",
    category: "Mobile",
    tags: ["sticky", "bottom", "full-width", "fixed"],
    component: StickyBottomButton,
    code: `<button className="w-full px-6 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition-all shadow-lg border-t border-green-600">
  Continue
</button>`
  },
  {
    id: "54",
    slug: "toggle-switch-button",
    title: "Toggle Switch Button",
    description: "iOS-style toggle switch with smooth sliding animation.",
    category: "Mobile",
    tags: ["toggle", "switch", "ios", "animated"],
    component: ToggleSwitchButton,
    code: `const [isToggled, setIsToggled] = useState(false);

<button 
  onClick={() => setIsToggled(!isToggled)}
  className={\`relative w-16 h-8 rounded-full transition-all duration-300 \${
    isToggled ? 'bg-blue-500' : 'bg-gray-300'
  }\`}
>
  <div className={\`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 \${
    isToggled ? 'translate-x-8' : 'translate-x-1'
  }\`}></div>
</button>`
  },

  // New Utility Buttons
  {
    id: "55",
    slug: "download-button",
    title: "Download Button",
    description: "Purpose-built download button with download icon and clear CTA.",
    category: "Utility",
    tags: ["download", "icon", "utility", "cta"],
    component: DownloadButton,
    code: `import { Download } from 'lucide-react';

<button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all flex items-center space-x-2 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
  <Download size={20} />
  <span>Download</span>
</button>`
  },
  {
    id: "56",
    slug: "social-media-button",
    title: "Social Media Button",
    description: "Branded social media sharing button with platform icon.",
    category: "Utility",
    tags: ["social", "share", "facebook", "branded"],
    component: SocialMediaButton,
    code: `import { Facebook } from 'lucide-react';

<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 transform hover:scale-105">
  <Facebook size={20} />
  <span>Share</span>
</button>`
  },
  {
    id: "57",
    slug: "add-to-cart-button",
    title: "Add to Cart Button",
    description: "E-commerce button with shopping cart icon for product pages.",
    category: "Utility",
    tags: ["cart", "ecommerce", "shopping", "product"],
    component: AddToCartButton,
    code: `import { ShoppingCart } from 'lucide-react';

<button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all flex items-center space-x-2 transform hover:scale-105 shadow-md hover:shadow-lg">
  <ShoppingCart size={20} />
  <span>Add to Cart</span>
</button>`
  },
  {
    id: "58",
    slug: "play-button",
    title: "Play Button",
    description: "Circular play button perfect for media players and video content.",
    category: "Utility",
    tags: ["play", "media", "video", "audio"],
    component: PlayButton,
    code: `import { Play } from 'lucide-react';

<button className="w-16 h-16 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all flex items-center justify-center transform hover:scale-110 shadow-lg hover:shadow-xl">
  <Play size={24} fill="white" />
</button>`
  },
  {
    id: "59",
    slug: "hamburger-menu-button",
    title: "Hamburger Menu Button",
    description: "Classic three-line menu button for navigation toggles.",
    category: "Utility",
    tags: ["menu", "hamburger", "navigation", "toggle"],
    component: HamburgerMenuButton,
    code: `import { Menu } from 'lucide-react';

<button className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105">
  <Menu size={24} />
</button>`
  },
  {
    id: "60",
    slug: "favorite-button",
    title: "Favorite Button",
    description: "Interactive favorite button with heart animation and state toggle.",
    category: "Utility",
    tags: ["favorite", "heart", "toggle", "interactive"],
    component: FavoriteButton,
    code: `const [isFavorited, setIsFavorited] = useState(false);

<button 
  onClick={() => setIsFavorited(!isFavorited)}
  className={\`px-6 py-3 rounded-lg transition-all transform hover:scale-105 \${
    isFavorited 
      ? 'bg-red-500 text-white shadow-lg' 
      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
  }\`}
>
  <span className="flex items-center space-x-2">
    <span className={\`text-xl \${isFavorited ? 'text-white' : 'text-red-500'}\`}>
      {isFavorited ? '❤️' : '🤍'}
    </span>
    <span>{isFavorited ? 'Favorited' : 'Favorite'}</span>
  </span>
</button>`
  },

  // New Special Effects Buttons
  {
    id: "61",
    slug: "glass-shine-button",
    title: "Glass Shine Button",
    description: "Glassmorphism button with animated shine effect sweeping across on hover.",
    category: "Special Effects",
    tags: ["glass", "shine", "animation", "sweep"],
    component: GlassShineButton,
    code: `<button className="px-6 py-3 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm text-white rounded-lg relative overflow-hidden group transition-all hover:from-blue-600/80 hover:to-purple-600/80">
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
</button>`
  },
  {
    id: "62",
    slug: "pulse-effect-button",
    title: "Pulse Effect Button",
    description: "Button with layered pulsing animations for attention-grabbing effects.",
    category: "Special Effects",
    tags: ["pulse", "ping", "attention", "layered"],
    component: PulseEffectButton,
    code: `<button className="px-6 py-3 bg-emerald-500 text-white rounded-lg relative overflow-hidden transition-all hover:bg-emerald-600">
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 bg-emerald-400 opacity-0 animate-ping rounded-lg"></div>
  <div className="absolute inset-0 bg-emerald-300 opacity-0 animate-pulse rounded-lg animation-delay-150"></div>
</button>`
  },
  {
    id: "63",
    slug: "glitch-button",
    title: "Glitch Button",
    description: "Cyberpunk-style button with glitch effects and digital distortion.",
    category: "Special Effects",
    tags: ["glitch", "cyberpunk", "digital", "distortion"],
    component: GlitchButton,
    code: `<button className="px-6 py-3 bg-black text-green-400 rounded-lg relative overflow-hidden group font-mono border border-green-400/30 hover:bg-gray-900 transition-all">
  <span className="relative z-10 group-hover:animate-pulse">Click Me</span>
  <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 animate-pulse duration-75"></div>
  <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 animate-bounce"></div>
  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-magenta-400 opacity-0 group-hover:opacity-100 animate-bounce animation-delay-100"></div>
</button>`
  },
  {
    id: "64",
    slug: "magnetic-button",
    title: "Magnetic Button",
    description: "Button that appears to be magnetically attracted to cursor with smooth following motion.",
    category: "Special Effects",
    tags: ["magnetic", "cursor", "following", "attraction"],
    component: MagneticButton,
    code: `<button className="px-6 py-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-purple-500/50 group">
  <span className="relative z-10 transition-all group-hover:translate-x-1 group-hover:-translate-y-0.5">Click Me</span>
  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
</button>`
  },
  {
    id: "65",
    slug: "3d-tilt-button",
    title: "3D Tilt Button",
    description: "Advanced 3D button with perspective tilt effects on hover.",
    category: "Special Effects",
    tags: ["3d", "tilt", "perspective", "hover"],
    component: ThreeDTiltButton,
    code: `<button 
  className="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg transition-all duration-300 transform hover:rotate-x-12 hover:rotate-y-12 shadow-xl hover:shadow-2xl"
  style={{
    perspective: '1000px',
    transformStyle: 'preserve-3d'
  }}
>
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform translate-z-2"></div>
</button>`
  },

  // New Shape Variations Buttons
  {
    id: "66",
    slug: "rounded-pill-button",
    title: "Rounded Pill Button",
    description: "Fully rounded pill-shaped button with gradient background.",
    category: "Shape",
    tags: ["pill", "rounded", "gradient", "smooth"],
    component: RoundedPillButton,
    code: `<button className="px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full hover:from-teal-500 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
  Click Me
</button>`
  },
  {
    id: "67",
    slug: "circle-icon-button",
    title: "Circle Icon Button",
    description: "Perfect circle button designed for icons and single actions.",
    category: "Shape",
    tags: ["circle", "icon", "perfect", "action"],
    component: CircleIconButton,
    code: `<button className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-full hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-110 flex items-center justify-center shadow-lg hover:shadow-xl">
  <span className="text-xl">✨</span>
</button>`
  },
  {
    id: "68",
    slug: "square-icon-button",
    title: "Square Icon Button",
    description: "Perfect square button with rotation effect and icon support.",
    category: "Shape",
    tags: ["square", "icon", "rotation", "geometric"],
    component: SquareIconButton,
    code: `<button className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 transition-all transform hover:rotate-45 flex items-center justify-center shadow-lg hover:shadow-xl">
  <span className="text-xl transform hover:-rotate-45 transition-transform">⚡</span>
</button>`
  },
  {
    id: "69",
    slug: "diamond-button",
    title: "Diamond Button",
    description: "Diamond-shaped button created with CSS transforms and rotation effects.",
    category: "Shape",
    tags: ["diamond", "rotate", "transform", "unique"],
    component: DiamondButton,
    code: `<button className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 text-white transform rotate-45 hover:rotate-0 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
  <span className="transform -rotate-45 hover:rotate-0 transition-transform duration-300 text-sm font-bold">CLICK</span>
</button>`
  },
  {
    id: "70",
    slug: "hexagon-button",
    title: "Hexagon Button",
    description: "Hexagonal button using CSS clip-path for unique polygon shape.",
    category: "Shape",
    tags: ["hexagon", "polygon", "clip-path", "geometric"],
    component: HexagonButton,
    code: `<button 
  className="w-16 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700 transition-all transform hover:scale-110 flex items-center justify-center text-xs font-bold shadow-lg hover:shadow-xl"
  style={{
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  }}
>
  HEX
</button>`
  },

  // New Theme-Specific Buttons
  {
    id: "71",
    slug: "dark-mode-button",
    title: "Dark Mode Button",
    description: "Button specifically designed and optimized for dark theme interfaces.",
    category: "Theme-Specific",
    tags: ["dark", "theme", "mode", "optimized"],
    component: DarkModeButton,
    code: `<button className="px-6 py-3 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all shadow-lg hover:shadow-gray-900/50">
  <span className="flex items-center space-x-2">
    <span>🌙</span>
    <span>Dark Mode</span>
  </span>
</button>`
  },
  {
    id: "72",
    slug: "light-mode-button",
    title: "Light Mode Button",
    description: "Clean button designed specifically for light theme interfaces.",
    category: "Theme-Specific",
    tags: ["light", "theme", "mode", "clean"],
    component: LightModeButton,
    code: `<button className="px-6 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-lg hover:shadow-gray-200/50">
  <span className="flex items-center space-x-2">
    <span>☀️</span>
    <span>Light Mode</span>
  </span>
</button>`
  },
  {
    id: "73",
    slug: "glass-dark-button",
    title: "Glass Dark Button",
    description: "Dark-tinted glassmorphism button perfect for dark backgrounds.",
    category: "Theme-Specific",
    tags: ["glass", "dark", "tinted", "glassmorphism"],
    component: GlassDarkButton,
    code: `<button className="px-6 py-3 bg-black/20 backdrop-blur-lg border border-white/10 text-white rounded-lg hover:bg-black/30 hover:border-white/20 transition-all shadow-xl">
  <span className="relative z-10">Dark Glass</span>
  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-black/30 rounded-lg"></div>
</button>`
  },
  {
    id: "74",
    slug: "retro-pixel-button",
    title: "Retro Pixel Button",
    description: "Enhanced 8-bit pixel art style button with authentic retro gaming aesthetics.",
    category: "Theme-Specific",
    tags: ["retro", "pixel", "8bit", "gaming"],
    component: RetroPixelButton,
    code: `<button className="px-6 py-3 bg-lime-400 text-black rounded border-4 border-lime-600 shadow-[4px_4px_0px_0px_rgba(101,163,13,1)] hover:shadow-[2px_2px_0px_0px_rgba(101,163,13,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-mono text-sm font-bold uppercase tracking-wider">
  PIXEL BUTTON
</button>`
  },
  {
    id: "75",
    slug: "cyberpunk-button",
    title: "Cyberpunk Button",
    description: "Futuristic cyberpunk button with neon glow effects and bold typography.",
    category: "Theme-Specific",
    tags: ["cyberpunk", "neon", "futuristic", "glow"],
    component: CyberpunkButton,
    code: `<button className="px-6 py-3 bg-black text-cyan-400 rounded border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] relative overflow-hidden group">
  <span className="relative z-10">CYBERPUNK</span>
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
</button>`
  }
];
