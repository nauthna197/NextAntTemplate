import React, { useEffect } from "react";
import Head from "next/head";

interface Props {}

export const Login: React.FC<Props> = () => {
  useEffect(() => {
    // (window as any).$.tilt({
    //   scale: 1.1
    // });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Login V1</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/animate/animate.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/css-hamburgers/hamburgers.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/select2/select2.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/util.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
      </Head>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/images/img-01.png" alt="IMG" />
            </div>

            <form className="login100-form validate-form">
              <span className="login100-form-title">Member Login</span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>

              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Create your Account
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script src="/vendor/jquery/jquery-3.2.1.min.js"></script>
      <script src="/vendor/bootstrap/js/popper.js"></script>
      <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="/vendor/select2/select2.min.js"></script>
      <script src="/vendor/tilt/tilt.jquery.min.js"></script>
      <script src="/js/main.js"></script>
    </React.Fragment>
  );
};

export default Login;
