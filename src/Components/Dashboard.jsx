import "../App.css";
import { useTheme } from "../App"; 
const Dashboard = () => {
  const { lightMode, setLightMode } = useTheme();

  return (
    <div className={`px-20 pt-5 ${lightMode ? "bg-lightTheme-bg" : "bg-darkTheme-bg text-white"}`}>
      <div className="flex justify-between">
        {/* Header */}
        <header>
          <div className={`text-3xl font-inter ${lightMode ? "text-black" : "text-white"}`}>
            Social Media Dashboard
          </div>
          <p className={`font-inter text-md font-semibold tracking-wide mb-10 ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>
            Total Followers: 23,004
          </p>
        </header>

        {/* Light/Dark Button */}
        <div className="flex items-center">
          <span className="mr-3">{lightMode ? "Light Mode" : "Dark Mode"}</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={lightMode} readOnly />
            <div
              onClick={() => setLightMode(!lightMode)}
              className="w-12 h-6 bg-gradient-to-r from-teal-400 to-green-400 rounded-full peer peer-focus:ring-green-300 
              peer-checked:after:translate-x-full peer-checked:after:border-white 
              after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border 
              after:rounded-full after:h-5 after:w-5 after:transition-all 
              peer-checked:bg-gradient-to-r peer-checked:from-green-400 peer-checked:to-green-600"
            ></div>
          </label>
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-4 gap-7 text-center grid-cols-1 font-inter grid">

        {/* Card 1 */}
        <div className={`relative py-3 rounded-md cursor-pointer ${lightMode ? " bg-lightTheme-cardBg hover:bg-slate-200 " : "bg-darkTheme-cardBg hover:bg-slate-600 text-white"}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-social-facebook"></div>
          <div className={`py-5 font-bold tracking-wider ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>
            <img src="/images/icon-facebook.svg" alt="Facebook Icon" className="inline-block w-6 h-6 mr-3 mb-1" />
            @nathanf
          </div>
          <h1 className="text-6xl font-bold tracking-wide">1987</h1>
          <p className="text-darkTheme-text pt-2 pb-6">F O L L O W E R S</p>
          <div className="text-primary-limeGreen font-bold text-sm pb-4">
            <img src="/images/icon-up.svg" alt="up arrow" className="inline-block mr-2" />
            12 Today
          </div>
        </div>

        {/* Card 2 */}
        <div className={`relative py-3 rounded-md cursor-pointer ${lightMode ? "bg-lightTheme-cardBg hover:bg-slate-200  text-black" : "bg-darkTheme-cardBg hover:bg-slate-600 text-white"}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-social-facebook"></div>
          <div className={`py-5 font-bold tracking-wider ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>
            <img src="/images/icon-twitter.svg" alt="twitter Icon" className="inline-block w-6 h-6 mr-3 mb-1" />
            @nathanf
          </div>
          <h1 className="text-6xl font-bold tracking-wide">1044</h1>
          <p className="text-darkTheme-text pt-2 pb-6">F O L L O W E R S</p>
          <div className="text-primary-limeGreen font-bold text-sm pb-4">
            <img src="/images/icon-up.svg" alt="up arrow" className="inline-block mr-2" />
            98 Today
          </div>
        </div>

        {/* Card 3 */}
        <div className={`relative py-3 rounded-md cursor-pointer ${lightMode ? "bg-lightTheme-cardBg hover:bg-slate-200  text-black" : "bg-darkTheme-cardBg hover:bg-slate-600 text-white"}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]"></div>
          <div className={`py-5 font-bold tracking-wider ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>
            <img src="/images/icon-instagram.svg" alt="Instagram Icon" className="inline-block w-6 h-6 mr-3 mb-1" />
            @realnathanf
          </div>
          <h1 className="text-6xl font-bold tracking-wide">11k</h1>
          <p className="text-darkTheme-text pt-2 pb-6">F O L L O W E R S</p>
          <div className="text-primary-limeGreen font-bold text-sm pb-4">
            <img src="/images/icon-up.svg" alt="up arrow" className="inline-block mr-2" />
            1099 Today
          </div>
        </div>

        {/* Card 4 */}
        <div className={`relative py-3 rounded-md cursor-pointer ${lightMode ? "bg-lightTheme-cardBg hover:bg-slate-200  text-black" : "bg-darkTheme-cardBg hover:bg-slate-600 text-white"}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-social-youtube"></div>
          <div className={`py-5 font-bold tracking-wider ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>
            <img src="/images/icon-youtube.svg" alt="Youtube Icon" className="inline-block w-6 h-6 mr-3 mb-1" />
            Nathan F.
          </div>
          <h1 className="text-6xl font-bold tracking-wide">8239</h1>
          <p className="text-darkTheme-text pt-2 pb-6">S U B S C R I B E R S</p>
          <div className="text-primary-brightRed font-bold text-sm pb-4">
            <img src="/images/icon-down.svg" alt="down arrow" className="inline-block mr-2" />
            144 Today
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
