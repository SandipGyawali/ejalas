import Marquee from "./marquee";
import { newsHead, newsData } from "../../data/home-profile-info";

function NavBar() {
  return (
    <header className="header-wrapper">
      <div className="main-header bg-cover bg-center bg-no-repeat bg-[url('/image/header/background.png')]">
        <div className="kmc-header h-auto bg-gradient-to-b from-gradientBlue to-gradientBlue">
          <div className="top-header flex justify-center">
            <div className="wrapper flex flex-col sm:flex-row items-center justify-between pt-2 w-11/12">
              <div className="date mb-2 sm:mb-0">
                <span>
                  <iframe
                    src="https://www.ashesh.com.np/linknepali-time.php?time_only=no&font_color=ffff&aj_time=yes&font_size=12&line_brake=0&bikram_sambat=0&api=132286l098"
                    width={305}
                    height={35}
                    scrolling="no"
                  ></iframe>
                </span>
              </div>
              <div className="tag-line text-white font-w500 hidden md:block">
                <span>साँस्कृतिक सहर, काठमाडौं महानगर</span>
              </div>
              <a
                href="/login"
                className="login-btn bg-white rounded font-extrabold px-6 py-1 text-sm cursor-pointer mt-2 sm:mt-0"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              >
                कर्मचारी लगइन
              </a>
            </div>
          </div>
          <div className="main-header-wrapper flex justify-center">
            <div className="main-header-container flex flex-col md:flex-row justify-between items-center w-11/12 pt-8 pb-4">
              <div className="logo-title-wrapper flex flex-col md:flex-row gap-4 items-center font-bold w-full">
                <div className="logo-container">
                  <img
                    src="/image/header/logo.png"
                    alt=""
                    className="w-24 h-auto"
                  />
                </div>
                <div className="title-container text-lg md:text-xl text-white text-center md:text-left w-full">
                  <h1>
                    काठमाडौँ महानगरपालिका
                    <br />
                    <span>विद्युतीय न्याय व्यवस्थापन प्रणाली </span>
                    <br />
                    <span className="font-extrabold">(इजलास)</span>
                  </h1>
                </div>
              </div>
              <div className="flag-wrapper hidden md:flex flex-col gap-2">
                <div className="flex gap-4">
                  <img
                    src="/image/header/kmc-logo.png"
                    alt="kmc-logo"
                    className="w-20 h-20"
                  />
                  <img
                    src="/image/header/flag-nepal.gif"
                    alt="flag-nepal"
                    className="w-20 h-20"
                  />
                </div>
                <img
                  src="/image/header/newari.png"
                  alt="newari-img"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee newsData={newsData} newsHead={newsHead} />
    </header>
  );
}

export default NavBar;
