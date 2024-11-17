AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Mobile Developer (iOS)",
    cardImage: "assets/images/experience-page/logo-nbs.jpeg",
    place: "Nusanta Beta Studio, Jakarta",
    time: "(Mar, 2023 - present)",
    desp: "<li>Mentored and onboarded 2 interns who successfully transitioned to full-time iOS Developer roles, supporting team growth and knowledge-sharing.</li> <li>Collaborated with a national scalability project for diverse clients, contributing more than 6 types of applications, including e-commerce, government apps, submission platforms, embedded machine learning applications, tracking systems, and finance apps.</li><li>Contributed to a multinational app with a crash-free of 99%, ensuring a high-quality user experience and robust application performance.</li><li>Consistently met 100% of sprint goals with maintained bug turnover rate below 10%, demonstrating reliable and efficient project execution.</li>",
  },
  {
    title: "iOS Developer",
    cardImage: "assets/images/experience-page/img-apple-academy.jpeg",
    place: "Apple Developer Academy, Tanggerang",
    time: "(Mar - Des, 2022)",
    desp: "<li>Developed 6 applications in 10 months, tackling social issues aligned with UN Sustainable Development Goals. Released OTIN on the App Store and achieved WWDC 2022 Submission Winner for an individual project.</li><li>Leveraged more than 6 tech stacks, including Swift, UIKit, SwiftUI, RxSwift, MVC, MVVM, Clean Architecture, AVFoundation, MapKit, Git, and many more.</li><li>Actively contributed 60+ GitHub commits collaborative projects, driving continuous integration, code refinement, and cross-functional teamwork.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "ICPC",
    cardImage: "assets/images/experience-page/img-icpc.png",
    description:
      "Participant for competitive programming from BINUS",
  },
  {
    title: "Google Cloud Computing Summit",
    cardImage: "assets/images/experience-page/img-google-cloud.jpg",
    description:
      "Successfully completed a introduction to cloud computing, 10 Google Cloud courses within a span of just 2 days.",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Apple WWDC Scholarship 2022",
    subtitle: "Participant",
    image: "assets/images/experience-page/img-swift-student-challenge.png",
    desp: "Selected as one out of 350 worldwide WWDC scholar in 2022.",
    href: "https://www.wwdcscholars.com/s/2A381223-5DF7-4D41-A2E4-93E7ADD00520/2022",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
