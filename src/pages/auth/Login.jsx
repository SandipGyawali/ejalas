import { Fragment } from "react";

function Login() {
  return (
    <Fragment>
      <div className="container h-full w-full m-auto">
        <div className="login-page">
          <div className="main-section mb-28">
            <div className="main-section-wrapper mt-10 relative flex items-center justify-center mx-6">
              <div className="login-form-section mt-20 bg-white4 w-11/12 max-w-lg  rounded-xl flex justify-center">
                <div
                  className="header-section absolute w-9/12 top-12 flex max-w-md items-center justify-around bg-blue text-white text-xl font-medium rounded-2xl"
                  style={{ maxWidth: 445 }}
                >
                  <div className="left-content p-5 w-1/2">
                    <img
                      src="image/header/logo.png"
                      alt="logo-png"
                      width={100}
                    />
                  </div>
                  <div className="right-content p-6 w-1/2 sm:w-2/3 flex flex-col items-center gap-2 text-base md:text-xl text-center">
                    <h3>काठमाडौँ महानगरपालिका</h3>
                    <h2>इजलास</h2>
                  </div>
                </div>
                <form
                  action="/login"
                  method="post"
                  className="login-form flex justify-center mt-28"
                >
                  <div className="login-form-wrapper flex flex-col items-center gap-4 w-10/12 mt-4">
                    <h4 className="text-lg text-blue">
                      इजलासमा यहाँलाई स्वागत छ ।{" "}
                    </h4>
                    <h5 className="text-normal text-grey text-center sm:text-lg text-sm">
                      सेवा उपयोगका लागि प्रयोगकर्ता विवरण र पासवर्ड प्रयोग गरी
                      लगइन गर्नुहोस् ।
                    </h5>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="प्रयोगकर्ता"
                      className="mt-4 py-1.5 px-4 border border-border-col rounded-md w-full focus:outline-none text-grey focus:shadow-md"
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="पासवर्ड"
                      className="py-1.5 px-4 border border-border-col rounded-md w-full focus:outline-none text-grey focus:shadow-md"
                    />
                    <div className="text-center btn my-4">
                      <button
                        type="submit"
                        className="common-case-btn py-2 px-4 w-44 rounded-md text-darkGrey bg-blue text-white hover:shadow-xl"
                      >
                        साइन इन गर्नुहोस्
                      </button>
                    </div>

                    <p className="pb-6 text-sm">
                      पासवर्ड बिर्सनुभयो ?{" "}
                      <a href="#" className="text-blue hover:text-red">
                        यहाँ क्लिक गर्नुहोस्
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
