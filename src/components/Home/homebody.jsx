import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import { Icon } from "@iconify/react";
import ProfileInfo from "../../widgets/cards/profile-info-card";
import { profileInfo } from "../../data/home-profile-info";

function HomeBody() {
  return (
    <div className="home-page bg-white2 pb-10">
      <section className="main-section flex justify-center">
        <div className="main-section-wrapper flex flex-col gap-6 w-11/12">
          <section className="secondary-navlist text-white flex items-center gap-4 mt-6 mb-6 ">
            <a
              href="/daily-cause-list"
              className="first-button bg-red rounded-md px-4 py-2 flex items-center gap-2 hover:shadow-xl"
            >
              <Icon icon="lets-icons:date-fill" fontSize={20} />
              <b className="font-semibold text-sm">दैनिक पेसी सूची</b>
            </a>
            <a
              href="/weekly-cause-list"
              className="second-button rounded-md px-4 py-2 flex items-center gap-2 bg-green2 hover:shadow-xl"
            >
              <Icon icon="lets-icons:date-fill" fontSize={20} />
              <b className="font-semibold text-sm">साप्ताहिक पेसी सूची</b>
            </a>
          </section>
          <section className="profile-section bg-darkRed text-white text-xl rounded-lg flex flex-col gap-1.3">
            <h2 className="profile-section-heading font-medium  p-4 text-center">
              न्यायिक समितिका पदाधिकारीहरुको नामावली
            </h2>
            <div className="profile-section-wrapper rounded-b-lg flex gap-16 flex-wrap justify-around bg-white py-12">
              {profileInfo.map((data, index) => (
                <ProfileInfo key={index} profileData={data} />
              ))}
            </div>
          </section>
          <section
            className="search-case-section bg-white3 flex flex-col gap-12 items-center pt-7 rounded-lg"
            style={{
              boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
            }}
          >
            <div className="section-header text-xl font-semibold text-textBlue">
              <h1 className="common-main-heading">विवाद खोज्नुहोस्</h1>
            </div>
            <div className="section-content w-full">
              <div className="section-content-wrapper">
                <form action="/ujuri-query" method="post">
                  <div className="section-content-container flex flex-wrap gap-4 md:justify-around mb-10 mx-4">
                    <div className="section-content-item case-category md:w-1/3 lg:w-1/4 w-full md:w-auto">
                      <select
                        name="complainType"
                        id="inlineFormCustomSelect"
                        className="py-2 px-4 border border-grey rounded-md w-full focus:outline-none text-grey"
                        required
                      >
                        <option value disabled selected>
                          विवादको प्रकार रोज्नुहोस्
                        </option>
                      </select>
                    </div>

                    <div className="section-content-item w-full md:w-1/3 lg:w-1/4 bg-white rounded-md">
                      <Calendar
                        placeholder="विवाद रजिस्टर गरिएको मिति"
                        className="nepali-datepicker py-2 px-4 border border-grey rounded-md text-darkGrey w-full focus:outline-none"
                        required
                        autoComplete="off"
                      />
                    </div>

                    <div className="md:w-1/4 w-full">
                      <button
                        className="common-case-btn py-2 px-4 rounded-md text-darkGrey bg-blue text-white w-full hover:shadow-md"
                        type="submit"
                      >
                        खोज्नुहोस्
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default HomeBody;
