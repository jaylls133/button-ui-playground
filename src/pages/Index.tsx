
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Copy, Github, Star } from "lucide-react";
import { buttonsData, buttonCategories } from "@/data/buttons";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredButtons = buttonsData.filter(button => {
    const matchesSearch = button.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         button.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         button.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || button.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const copyCode = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: `${title} code copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Ultimate Button UI Collection
              </h1>
              <p className="text-gray-300">
                Beautiful, modern button components for your next project
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg text-white transition-all">
                <Star size={16} />
                <span>Star</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg text-white transition-all">
                <Github size={16} />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search buttons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {buttonCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-purple-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredButtons.map((button) => {
            const ButtonComponent = button.component;
            return (
              <div
                key={button.id}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                {/* Button Preview */}
                <div className="flex items-center justify-center h-32 mb-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg">
                  <ButtonComponent />
                </div>

                {/* Button Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {button.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {button.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {button.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Link
                      to={`/buttons/${button.slug}`}
                      className="flex-1 px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm text-center transition-all"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => copyCode(button.code, button.title)}
                      className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                      title="Copy code"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredButtons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No buttons found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>Built with ❤️ using React, Tailwind CSS, and shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
