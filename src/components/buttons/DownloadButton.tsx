
import { Download } from 'lucide-react';

const DownloadButton = () => {
  return (
    <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all flex items-center space-x-2 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
      <Download size={20} />
      <span>Download</span>
    </button>
  );
};

export default DownloadButton;
