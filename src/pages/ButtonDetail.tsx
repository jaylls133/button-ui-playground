
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Copy, Download, Heart } from "lucide-react";
import { buttonsData } from "@/data/buttons";
import { toast } from "@/hooks/use-toast";

const ButtonDetail = () => {
  const { buttonSlug } = useParams();
  const button = buttonsData.find(b => b.slug === buttonSlug);

  if (!button) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-2 xs:px-4">
        <div className="text-center">
          <h1 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-4">Button not found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            ← Back to collection
          </Link>
        </div>
      </div>
    );
  }

  const ButtonComponent = button.component;

  const copyCode = () => {
    navigator.clipboard.writeText(button.code);
    toast({
      title: "Code copied!",
      description: "Button code copied to clipboard",
    });
  };

  const downloadCode = () => {
    const blob = new Blob([button.code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${button.slug}.tsx`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Code downloaded!",
      description: `${button.slug}.tsx downloaded successfully`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4 sm:py-6">
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm xs:text-base"
            >
              <ArrowLeft size={18} className="xs:w-5 xs:h-5" />
              <span>Back to Collection</span>
            </Link>
            <div className="flex items-center space-x-2 xs:space-x-4 w-full xs:w-auto justify-center xs:justify-end">
              <button className="flex items-center space-x-1 xs:space-x-2 px-2 xs:px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg text-white transition-all text-xs xs:text-sm">
                <Heart size={14} className="xs:w-4 xs:h-4" />
                <span className="hidden xs:inline">Favorite</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-4 xs:gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column - Preview */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">{button.title}</h1>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-3 xs:mb-4 sm:mb-6">
                {button.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 xs:gap-2 mb-4 xs:mb-6 sm:mb-8">
                <span className="px-2 xs:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs xs:text-sm">
                  {button.category}
                </span>
                {button.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 xs:px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs xs:text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Preview */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-4 xs:p-6 sm:p-8 lg:p-12 text-center border border-white/10">
              <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-4 xs:mb-6 sm:mb-8">Live Preview</h3>
              <div className="flex items-center justify-center">
                <div className="scale-90 xs:scale-100 sm:scale-110">
                  <ButtonComponent />
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-3 xs:p-4 sm:p-6">
              <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-3 xs:mb-4">Try Different States</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 text-center">
                <div>
                  <p className="text-xs xs:text-sm text-gray-400 mb-2 xs:mb-3">Normal</p>
                  <div className="flex justify-center">
                    <div className="scale-75 xs:scale-90 sm:scale-100">
                      <ButtonComponent />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs xs:text-sm text-gray-400 mb-2 xs:mb-3">Hover</p>
                  <div className="hover:pointer-events-none flex justify-center">
                    <div className="scale-75 xs:scale-90 sm:scale-100">
                      <ButtonComponent />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs xs:text-sm text-gray-400 mb-2 xs:mb-3">Disabled</p>
                  <div className="opacity-50 pointer-events-none flex justify-center">
                    <div className="scale-75 xs:scale-90 sm:scale-100">
                      <ButtonComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Code */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 xs:p-4 border-b border-white/10 gap-3 sm:gap-4">
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white">React Component</h3>
                <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-2 w-full sm:w-auto">
                  <button
                    onClick={copyCode}
                    className="flex items-center justify-center space-x-1 xs:space-x-2 px-2 xs:px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-xs xs:text-sm transition-all"
                  >
                    <Copy size={14} className="xs:w-4 xs:h-4" />
                    <span>Copy</span>
                  </button>
                  <button
                    onClick={downloadCode}
                    className="flex items-center justify-center space-x-1 xs:space-x-2 px-2 xs:px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs xs:text-sm transition-all"
                  >
                    <Download size={14} className="xs:w-4 xs:h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
              
              <div className="p-2 xs:p-3 sm:p-4 overflow-auto">
                <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap break-words">
                  <code>{button.code}</code>
                </pre>
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-3 xs:p-4 sm:p-6">
              <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-3 xs:mb-4">Usage Instructions</h3>
              <div className="space-y-2 xs:space-y-3 text-gray-300">
                <div>
                  <h4 className="font-medium text-white mb-1 text-xs xs:text-sm">1. Copy the code</h4>
                  <p className="text-xs sm:text-sm">Use the copy button to get the component code.</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 text-xs xs:text-sm">2. Customize</h4>
                  <p className="text-xs sm:text-sm">Modify colors, sizes, and text to match your design.</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 text-xs xs:text-sm">3. Implement</h4>
                  <p className="text-xs sm:text-sm">Add your click handlers and integrate with your app.</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-3 xs:p-4 sm:p-6">
              <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-3 xs:mb-4">Requirements</h3>
              <ul className="space-y-1.5 xs:space-y-2 text-gray-300 text-xs xs:text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-400 rounded-full"></div>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-400 rounded-full"></div>
                  <span>React 18+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Buttons */}
        <div className="mt-8 xs:mt-12 sm:mt-16">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-4 xs:mb-6 sm:mb-8">More {button.category} Buttons</h2>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
            {buttonsData
              .filter(b => b.category === button.category && b.id !== button.id)
              .slice(0, 6)
              .map((relatedButton) => {
                const RelatedComponent = relatedButton.component;
                return (
                  <Link
                    key={relatedButton.id}
                    to={`/buttons/${relatedButton.slug}`}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-2 xs:p-3 sm:p-4 lg:p-6 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center justify-center h-12 xs:h-16 sm:h-20 lg:h-24 mb-2 xs:mb-3 sm:mb-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg">
                      <div className="scale-75 xs:scale-90 sm:scale-100">
                        <RelatedComponent />
                      </div>
                    </div>
                    <h3 className="text-white font-medium text-center text-xs xs:text-sm sm:text-base line-clamp-2">{relatedButton.title}</h3>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDetail;
