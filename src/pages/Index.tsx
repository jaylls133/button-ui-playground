
import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Github, Star } from "lucide-react";
import { buttonsData, buttonCategories } from "@/data/buttons";
import { toast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/ui/theme-toggle";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredButtons = buttonsData.filter(button => {
    const matchesCategory = selectedCategory === "All" || button.category === selectedCategory;
    return matchesCategory;
  });

  const copyCode = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: `${title} code copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 light:from-slate-100 light:via-purple-100 light:to-slate-100">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 dark:bg-black/30 dark:border-white/10 light:bg-white/80 light:border-gray-200">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4 sm:py-6">
          <div className="flex flex-col space-y-3 xs:space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-1 xs:mb-2">
                Ultimate Button UI Collection
              </h1>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 dark:text-gray-300 light:text-gray-600">
                Beautiful, modern button components for your next project
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2 xs:space-x-3 sm:space-x-4 w-full sm:w-auto">
              <ThemeToggle />
              <button className="flex items-center space-x-1 xs:space-x-2 px-2 xs:px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white light:bg-gray-900/10 light:hover:bg-gray-900/20 light:text-gray-900 light:border-gray-300 transition-all text-xs xs:text-sm">
                <Star size={14} className="xs:w-4 xs:h-4" />
                <span className="hidden xs:inline">Star</span>
              </button>
              <button className="flex items-center space-x-1 xs:space-x-2 px-2 xs:px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white light:bg-gray-900/10 light:hover:bg-gray-900/20 light:text-gray-900 light:border-gray-300 transition-all text-xs xs:text-sm">
                <Github size={14} className="xs:w-4 xs:h-4" />
                <span className="hidden xs:inline">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8">
        <div className="flex flex-wrap gap-1 xs:gap-2 sm:gap-3 mb-4 xs:mb-6 sm:mb-8 justify-center">
          {buttonCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-2 xs:px-3 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-lg transition-all text-xs xs:text-sm sm:text-base ${
                selectedCategory === category
                  ? "bg-purple-500 text-white shadow-lg scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20 light:bg-gray-900/10 light:text-gray-700 light:hover:bg-gray-900/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
          {filteredButtons.map((button) => {
            const ButtonComponent = button.component;
            return (
              <div
                key={button.id}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-3 xs:p-4 sm:p-6 hover:bg-white/10 transition-all group dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 light:bg-white/80 light:border-gray-200 light:hover:bg-white/90"
              >
                {/* Button Preview */}
                <div className="flex items-center justify-center h-16 xs:h-20 sm:h-24 lg:h-32 mb-2 xs:mb-3 sm:mb-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg dark:from-slate-800/50 dark:to-slate-700/50 light:from-gray-100 light:to-gray-200">
                  <div className="scale-75 xs:scale-90 sm:scale-100">
                    <ButtonComponent />
                  </div>
                </div>

                {/* Button Info */}
                <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-white mb-0.5 xs:mb-1 dark:text-white light:text-gray-900 line-clamp-1">
                      {button.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed dark:text-gray-400 light:text-gray-600 line-clamp-2">
                      {button.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-0.5 xs:gap-1">
                    {button.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 xs:px-2 py-0.5 xs:py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md dark:bg-purple-500/20 dark:text-purple-300 light:bg-purple-100 light:text-purple-700"
                      >
                        #{tag}
                      </span>
                    ))}
                    {button.tags.length > 2 && (
                      <span className="px-1.5 xs:px-2 py-0.5 xs:py-1 text-xs bg-gray-500/20 text-gray-400 rounded-md">
                        +{button.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-1.5 xs:space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 pt-1 xs:pt-2">
                    <Link
                      to={`/buttons/${button.slug}`}
                      className="flex-1 px-2 xs:px-3 py-1.5 xs:py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-xs sm:text-sm text-center transition-all"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => copyCode(button.code, button.title)}
                      className="px-2 xs:px-3 py-1.5 xs:py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all dark:bg-white/10 dark:hover:bg-white/20 dark:text-white light:bg-gray-900/10 light:hover:bg-gray-900/20 light:text-gray-900 flex items-center justify-center"
                      title="Copy code"
                    >
                      <Copy size={14} className="xs:w-4 xs:h-4" />
                      <span className="ml-1 xs:ml-2 sm:hidden text-xs">Copy</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredButtons.length === 0 && (
          <div className="text-center py-8 xs:py-12">
            <p className="text-gray-400 text-sm xs:text-base sm:text-lg dark:text-gray-400 light:text-gray-600">No buttons found in this category.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-8 xs:mt-12 sm:mt-16 dark:bg-black/30 dark:border-white/10 light:bg-white/80 light:border-gray-200">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8">
          <div className="text-center text-gray-400 dark:text-gray-400 light:text-gray-600">
            <p className="text-xs xs:text-sm sm:text-base">Built with ❤️ using React, Tailwind CSS, and shadcn/ui</p>
            <p className="mt-1 xs:mt-2 text-xs xs:text-sm sm:text-base">Total Buttons: {buttonsData.length}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
