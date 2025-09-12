import "/src/styles/index.css";
import Navbar from "../assets/components/navbar";
import FB from "../assets/images/fb.svg";
import IG from "../assets/images/ig.svg";
import LK from "../assets/images/linkedin.svg";
import GH from "../assets/images/github.svg";

function App() {
  return (
    <>
      <pre>
        <code>
          <div className="relative min-h-screen bg-black text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_100%)] blur-4xl" />

            <Navbar />

            {/* Intro */}
            <main className="relative z-10 flex items-start mt-24 ml-55 font-code">
              <div className="flex-col">
                <h1 className="text-3xl">
                  {"<"}Hello I’m Gabriel{"/>"}
                  <p className="mt-5 ml-4  text-lg text-left">
                    {">"} I’m a Front-End Web & Mobile Developer with <br />
                    a passion for building intuitive and <br />
                    responsive apps.
                  </p>
                </h1>
              </div>
              {/* About Me */}
              <div className=" flex-start ml-200">
                <h2 className="text-2xl mt-4">
                  {"<"}About me{"/>"}
                </h2>
                <p className="mt-2 ml-4 text-left">
                  {">"} I’m a Front-End Web & Mobile <br />
                  Developer with a passion for <br /> building intuitive and{" "}
                  <br />
                  responsive apps.
                </p>

                <h2 className="text-2xl mt-30">
                  {"<"}My Skills{"/>"}
                </h2>
                <p className="mt-2 ml-4 text-left">
                  {">"} I’m a Front-End Web & Mobile <br />
                  Developer with a passion for <br /> building intuitive and{" "}
                  <br />
                  responsive apps.
                </p>

                <h2 className="text-2xl mt-30">
                  {"<"}Follow Me{"/>"}
                </h2>

                <div className="flex flex-row mt-5 gap-2">
                  <a
                    href="https://www.facebook.com/gabsenar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={FB} alt="Facebook" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gabriel-señar-it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img href="" src={LK} alt="Linkedin" />
                  </a>

                  <a
                    href=" https://www.instagram.com/gabsenar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img href="" src={IG} alt="Instagram" />
                  </a>
                  <a
                    href="https://github.com/IT-Abby"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img href="" src={GH} alt="Github" />
                  </a>
                </div>
              </div>
            </main>
          </div>
        </code>
      </pre>
    </>
  );
}

export default App;
