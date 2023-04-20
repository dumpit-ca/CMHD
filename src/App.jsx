import "./assets/sass/main.scss";

function App() {
  return (
    <main class="container p-lg-5 px-2 py-3 mx-auto">
      <nav class="navbar navbar-expand-lg py-4 d-lg-none d-block">
        <div class="container">
          <div
            class="d-flex flex-row justify-content-center mx-auto"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav d-lg-none d-flex flex-row justify-content-between mx-auto mb-2 mb-lg-0 text-md-start text-center gap-md-2 gap-3">
              <li class="nav-item">
                <a class="nav-link mavenBold" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mavenBold" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mavenBold" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mavenBold" href="#education">
                  Education
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg py-4 sidenav d-lg-block d-none">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center mx-auto"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav d-lg-flex d-none flex-column justify-content-center mx-auto mb-2 mb-lg-0 text-md-start text-center line">
              <li class="nav-item">
                <a
                  class="nav-link active mavenBold"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mavenBold" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mavenBold" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mavenBold" href="#education">
                  Education
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        class="hero vh-100 row justify-content-center align-items-center"
        id="home"
      >
        <div class="text-center">
          <h2 class="mavenBold display-5">Hi! I'm Cassandra Dumpit</h2>
          <h5 class="fs-5">Frontend Web Developer | Your Partner in IT</h5>
        </div>
      </section>
      <section
        class="px-4 py-5 about row justify-content-center align-items-center vh-100"
        id="about"
      >
        <div class="col-lg-2 mx-auto col-12 text-center mb-3">
          <img
            src="./assets/images/hero.png"
            class="rounded-pill d-lg-block d-none"
            height="200px"
            alt="Cass Dumpit"
          />
        </div>

        <div class="col-lg-9">
          <h2 class="mavenBold fs-2">
            Frontend Web Developer | Traveller | Movie enthusiast
          </h2>
          <p class="fs-5">
            I'm currently finishing my degree in National University-Manila
            pursuing BS-Information Technology. In my free time, I love to
            travel and explore different culture. I also catch up to my favorite
            TV series and watch movies that feeds my curious mind.
          </p>
          <div class="fs-5 row align-items-center row-cols-lg-5 row-cols-2 gap-2">
            <div class="col d-flex align-items-center gap-2">
              <i class="bx bxl-react fs-5"></i> ReactJS
            </div>
            <div class="col d-flex align-items-center gap-2">
              <i class="bx bxl-tailwind-css fs-5"></i> Tailwind CSS
            </div>
            <div class="col d-flex align-items-center gap-2">
              <i class="bx bxl-sass fs-5"> </i> SASS
            </div>
            <div class="col d-flex align-items-center gap-2">
              <i class="bx bxl-bootstrap fs-5"> </i> Bootstrap
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto exp my-5 p-5" id="experience">
        <h1 class="display-5 mavenBold text-center">Where I've Worked</h1>

        <div class="exp__container--1 border rounded border-1 p-5 my-5">
          <h5 class="fs-2 mavenBold">Education Network Philippines</h5>
          <p class="fs-4">Website Technical Support | Nov 2022 - Feb 2023</p>
          <ul>
            <li class="fs-5">
              Responded to technical issues by troubleshooting website
              navigation and functionality problems to ensure an optimal
              customer experience
            </li>
            <li class="fs-5">
              Worked with the company's research team to upload required
              resources, including research studies, press statements, reports,
              and media such as recorded webinar videos
            </li>
            <li class="fs-5">
              Collaborated with the company's research team to upload essential
              resources, including research studies, press statements, reports,
              and media, such as recorded webinar videos.
            </li>
            <li class="fs-5">
              Collaborated with the company's research team to upload essential
              resources, including research studies, press statements, reports,
              and media, such as recorded webinar videos.
            </li>
            <li class="fs-5">
              Managed technical aspects of the company website by performing
              regular maintenance, including updating content, adding new
              features, and troubleshooting errors to enhance website
              functionality and user experience.
            </li>
          </ul>
        </div>

        <div class="exp__container--2 border rounded border-1 p-5 my-5">
          <h5 class="fs-2 mavenBold">The Northern Office</h5>
          <p class="fs-4">Freelance Web Developer | Feb 2023</p>
          <ul>
            <li class="fs-5">
              Addressed website functionality inquiries from clients by
              implementing updates to website pages, adding new features, and
              improving content to ensure a seamless user experience
            </li>
            <li class="fs-5">
              Performed comprehensive quality assurance testing on the website
              to ensure optimal compatibility with all devices and browsers.
            </li>
            <li class="fs-5">
              Maintained the highest standards of technical performance to
              enhance the user experience
            </li>
          </ul>
        </div>
      </section>
      <section class="mx-auto educ p-5 my-5 w-100" id="education">
        <h1 class="display-5 mavenBold text-center">Education</h1>
        <div class="educ__container--2 border rounded border-1 p-5 my-5">
          <h5 class="fs-2 mavenBold">National University-Manila</h5>
          <p class="fs-4">2020-Present</p>
          <span class="badge rounded-pill text-bg-success fs-6">
            Dean's Lister
          </span>
          <ul class="my-3">
            <li class="fs-5">
              Bachelor of Science in Information Technology: Mobile and Web
              Applications
            </li>
          </ul>
        </div>
      </section>

      <button onclick="topFunction()" id="btn__dom--to-top">
        <i class="bx bxs-up-arrow fs-3 text-center"></i>
      </button>
    </main>
  );
}

export default App;