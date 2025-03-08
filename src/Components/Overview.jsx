import React from "react";
import "../App.css";
import { useTheme } from "../App"; 

const Overview = () => {
  const { lightMode } = useTheme(); 

  return (
    <div className={`font-inter ${lightMode ? "bg-white text-black" : "bg-darkTheme-bg text-white"} px-20 pt-3 pb-6`}>
      <header className="mt-10 text-2xl font-semibold pb-8"> Overview - Today</header>

      <div className="grid sm:grid-cols-4 grid-rows-2 gap-7 grid-cols-1">
        {/* Card 1 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
            <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Page Views</p>
            
            <img src="/images/icon-facebook.svg" alt="Facebook Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">87</h1>
            <p className="mt-2 text-green-400 flex items-center">
              <img src="/images/icon-up.svg" alt="Up Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">3%</span>
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
          <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Likes</p>
            <img src="/images/icon-facebook.svg" alt="Facebook Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">52</h1>
            <p className="mt-2 text-primary-brightRed flex items-center">
              <img src="/images/icon-down.svg" alt="Up Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">2%</span>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
          <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Likes</p>
            <img src="/images/icon-instagram.svg" alt="Instagram Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">5462</h1>
            <p className="mt-2 text-green-400 flex items-center">
              <img src="/images/icon-up.svg" alt="Up Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">2257%</span>
            </p>
          </div>
        </div>

        

        {/* Card 4 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
          <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Profile Views</p>
            <img src="/images/icon-instagram.svg" alt="isntagram Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">52K</h1>
            <p className="mt-2 text-green-400 flex items-center">
              <img src="/images/icon-up.svg" alt="Up Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">1375%</span>
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
          <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Retweets</p>
            <img src="/images/icon-twitter.svg" alt="Twitter Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">117</h1>
            <p className="mt-2 text-green-400 flex items-center">
              <img src="/images/icon-up.svg" alt="Up Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">303%</span>
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
          <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Likes</p>
            <img src="/images/icon-twitter.svg" alt="Twitter Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">507</h1>
            <p className="mt-2 text-green-400 flex items-center">
              <img src="/images/icon-up.svg" alt="Up Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">553%</span>
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
          <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Likes</p>
            <img src="/images/icon-youtube.svg" alt="Facebook Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">107</h1>
            <p className="mt-2 text-primary-brightRed flex items-center">
              <img src="/images/icon-down.svg" alt="down Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">19%</span>
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className={`px-6 rounded-md shadow-md h-36 w-100 cursor-pointer ${lightMode ? "bg-lightTheme-cardBg text-black hover:bg-slate-200" : "bg-darkTheme-cardBg text-white hover:bg-slate-600"}`}>
          <div className="flex justify-between items-center pt-5">
          <p className={`font-extrabold ${lightMode ? "text-lightTheme-textDarkGray" : "text-darkTheme-text"}`}>Total Views</p>
            <img src="/images/icon-youtube.svg" alt="youtube Icon" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center pt-10">
            <h1 className="text-4xl font-bold">1407</h1>
            <p className="mt-2 text-primary-brightRed flex items-center">
              <img src="/images/icon-down.svg" alt="Down Arrow" className="w-2 h-2 mr-1" />
              <span className="text-sm font-semibold">12%</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
