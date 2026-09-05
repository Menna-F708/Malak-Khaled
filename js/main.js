 /* ================================================= */
/* ================= MOBILE MENU =================== */
/* ================================================= */

const overlay = document.getElementById("overlay");


function openMenu() {

  if (!overlay) return;

  overlay.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeMenu() {

  if (!overlay) return;

  overlay.classList.remove("active");

  document.body.style.overflow = "";

}


if (overlay) {

  overlay.addEventListener("click", function () {

    closeMenu();

  });

}


/* ================================================= */
/* ================= REVEAL ANIMATION ============== */
/* ================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });

}


/* ================================================= */
/* ================= PROJECT DATA ================== */
/* ================================================= */

const projects = {
  1: {
    number: "PROJECT 01",

    title: "Project One",

    type: " Elegant Fashion Editorial",

    infoType: "Elegant",

    description:
      "Elegant fashion editorial featuring a sophisticated black look, dramatic backdrop, and expressive posing.",
    images: [
      "../img/photo_2_2026-05-05_22-27-38.jpg",

      "../img/photo_3_2026-05-05_22-27-38.jpg",

      "../img/photo_4_2026-05-05_22-27-38.jpg",

      "../img/photo_5_2026-05-05_22-27-38.jpg",
      "../img/photo_6_2026-05-05_22-27-38.jpg",
      "../img/photo_7_2026-05-05_22-27-38.jpg",
      "../img/photo_5_2026-05-05_22-27-38.jpg",
      "../img/photo_6_2026-05-05_22-27-38.jpg",
      "../img/photo_7_2026-05-05_22-27-38.jpg",
      "../img/photo_2026-05-05_22-26-46.jpg",
    ],
  },

  2: {
    number: "PROJECT 02",

    title: "Project  Two",

    type: "Dark Vintage Lifestyle",

    infoType: "Vintage",

    description:
      "Dark vintage-inspired lifestyle shoot featuring bold styling, warm tones, and an intimate atmosphere. ",
    images: [
      "../img/photo_1_2026-08-27_19-23-56.jpg",
      "../img/photo_3_2026-05-05_17-07-36.jpg",
      "../img/photo_6_2026-08-27_19-23-40.jpg",
      "../img/photo_7_2026-08-27_19-23-40.jpg",
      "../img/photo_8_2026-08-27_19-23-40.jpg",
      "../img/photo_9_2026-08-27_19-23-40.jpg",
      "../img/photo_10_2026-08-27_19-23-40.jpg",
      "../img/photo_3_2026-05-05_17-07-36.jpg",
    ],
  },

  3: {
    number: "PROJECT 03",

    title: "Project Three",

    type: "Egyptian Heritage Editorial",

    infoType: "",

    description:
      "Fashion editorial set in a historical location, blending contemporary fashion with Egyptian heritage and architecture.",
    images: [
      "../img/photo_1_2026-04-23_03-14-31.jpg",
      "../img/photo_5_2026-08-27_19-22-12.jpg",

      "../img/photo_3_2026-08-27_19-22-12.jpg",
      "../img/photo_2_2026-08-27_19-22-12.jpg",
      "../img/photo_4_2026-08-27_19-22-12.jpg",
      "../img/photo_6_2026-04-23_03-14-31.jpg",
      "../img/photo_8_2026-08-27_19-22-12.jpg",
      "../img/photo_9_2026-08-27_19-22-12.jpg",
      "../img/photo_10_2026-08-27_19-22-12.jpg",
    ],
  },

  4: {
    number: "PROJECT 04",

    title: "Project Four",

    type: "Modern Egyptian Editorial",

    infoType: "Modern",

    description:
      "Contemporary fashion editorial inspired by Egyptian identity, combining modern styling with the Nile and Cairo skyline. ",
    images: [
      "../img/photo_1_2026-08-27_19-21-53.jpg",
      "../img/photo_2_2026-08-27_19-21-53.jpg",
      "../img/photo_3_2026-08-27_19-21-53.jpg",
      "../img/photo_4_2026-05-05_17-04-22.jpg",
      "../img/photo_4_2026-08-27_19-21-53.jpg",
      "../img/photo_5_2026-08-27_19-21-53.jpg",
      "../img/photo_6_2026-08-27_19-21-53.jpg",
      "../img/photo_7_2026-08-27_19-21-53.jpg",
      "../img/photo_9_2026-08-27_19-21-53.jpg",
      "../img/photo_4_2026-08-28_21-13-46.jpg",
    ],
  },

  5: {
    number: "PROJECT 05",

    title: "Project  Five",

    type: "Artistic Egyptian Portrait",

    infoType: "Artistic",

    description:
      "Moody artistic portrait inspired by Egyptian heritage, featuring traditional jewelry, warm lighting, and a cinematic feel. ",
    images: [
      "../img/photo_1_2026-08-27_19-22-24.jpg",

      "../img/photo_4_2026-08-27_19-22-24.jpg",
      "../img/photo_5_2026-08-27_19-22-24.jpg",
      "../img/photo_3_2026-08-27_19-22-24.jpg",
      "../img/photo_2_2026-05-05_17-07-36.jpg",
    ],
  },
  6: {
    number: "PROJECT 06",

    title: "Project  Six",

    type: " Black & White Outdoor Editorial",

    infoType: "fashion",

    description:
      "Black & White Outdoor Editorial fashion shoot featuring monochromatic styling, natural surroundings, and expressive posing.",

    images: [
      "../img/photo_5_2026-08-27_19-22-32.jpg",

      "../img/photo_1_2026-08-27_19-22-32.jpg",
      "../img/photo_3_2026-08-27_19-22-32.jpg",
      "../img/photo_2_2026-08-27_19-22-32.jpg",

      "../img/photo_4_2026-08-27_19-22-32.jpg",
    ],
  },

  7: {
    number: "PROJECT 07",

    title: "Project  Seven",

    type: "Vintage Egyptian Fashion",

    infoType: "Vintage",

    description:
      " Vintage Egyptian Fashion Vintage-inspired fashion shoot combining traditional Egyptian elements with a nostalgic aesthetic.",

    images: [
      "../img/photo_4_2026-08-27_19-22-42.jpg",
      "../img/photo_1_2026-08-27_19-22-42.jpg",
      "../img/photo_6_2026-08-27_19-22-42.jpg",
      "../img/photo_2_2026-08-27_19-22-42.jpg",
      "../img/photo_3_2026-08-27_19-22-42.jpg",
      "../img/photo_5_2026-08-27_19-22-42.jpg",
    ],
  },

  8: {
    number: "PROJECT 08",

    title: "Project  Eight",

    type: "Art & Fashion Concept",

    infoType: "Art",

    description:
      "Conceptual fashion shoot blending portraiture and fine art, using a painting as a central visual element.",
    images: [
      "../img/photo_3_2026-08-27_19-23-09.jpg",

      "../img/photo_7_2026-08-27_19-23-09.jpg",
      "../img/photo_6_2026-08-27_19-23-09.jpg",

      "../img/photo_9_2026-08-27_19-23-09.jpg",
      "../img/photo_10_2026-08-27_19-23-10.jpg",
      "../img/photo_1_2026-08-27_19-23-19.jpg",
      "../img/photo_2_2026-08-27_19-23-09.jpg",
      "../img/photo_4_2026-08-27_19-23-09.jpg",
      "../img/photo_5_2026-08-27_19-23-09.jpg",

      "../img/photo_1_2026-08-27_19-23-09.jpg",
      "../img/photo_8_2026-08-27_19-23-09.jpg",
    ],
  },
  9: {
    number: "PROJECT 09",

    title: "Project  Nine",

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

    images: [
      "../img/photo_1_2026-08-27_19-23-49.jpg",
      "../img/photo_2_2026-08-27_19-23-49.jpg",
      "../img/photo_3_2026-08-27_19-23-49.jpg",
      "../img/photo_5_2026-08-27_19-23-49.jpg",
      "../img/photo_4_2026-08-27_19-23-49.jpg",
    ],
  },
  10: {
    number: "PROJECT 10",

    title: "Project Ten",

    type: "Classic Fashion Editorial",

    infoType: "Campaign",

    description:
      "Clean and timeless fashion shoot featuring classic styling, soft tones, and natural editorial posing.",
    images: [
      "../img/photo_1_2026-08-27_19-23-40.jpg",
      "../img/photo_2_2026-05-05_17-04-22.jpg",
      "../img/photo_2_2026-08-27_19-23-40.jpg",
      "../img/photo_3_2026-08-27_19-23-40.jpg",
      "../img/photo_5_2026-04-23_03-14-31.jpg",
    ],
  },
  11: {
    number: "PROJECT 11",

    title: "Project  Eleven",

    type: "Sunset Lifestyle Editorial",

    infoType: "Beauty",

    description:
      "Outdoor lifestyle editorial captured at sunset, featuring dark styling, natural light, and a cinematic atmosphere.",
    images: [
      "../img/photo_17_2026-08-28_21-13-46.jpg",
      "../img/photo_16_2026-08-28_21-13-46.jpg",
      "../img/photo_15_2026-08-28_21-13-46.jpg",
      "../img/photo_14_2026-08-28_21-13-46.jpg",
      "../img/photo_13_2026-08-28_21-13-46.jpg",
      "../img/photo_3_2026-08-28_21-13-46.jpg",
    ],
  },

  12: {
    number: "PROJECT 12",

    title: "Project  Twelve",

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

    images: [
      "../img/photo_18_2026-08-28_21-13-46.jpg",
      "../img/photo_19_2026-08-28_21-13-46.jpg",
    ],
  },

  13: {
    number: "PROJECT 13",

    title: "Project  Thirteen",

    type: "Casual Indoor Fashion",

    infoType: "Casual",

    description:
      "           Minimal indoor fashion shoot focused on natural posing, effortless styling, and candid expression.",
    images: [
      "../img/photo_10_2026-08-28_21-13-46.jpg",
      "../img/photo_12_2026-08-28_21-13-46.jpg",
      "../img/photo_11_2026-08-28_21-13-46.jpg",
      "../img/photo_10_2026-08-28_21-13-46.jpg",
      "../img/photo_9_2026-08-28_21-13-46.jpg",
      "../img/photo_8_2026-08-28_21-13-46.jpg",
      "../img/photo_7_2026-08-28_21-13-46.jpg",
      "../img/photo_6_2026-08-28_21-13-46.jpg",
      "../img/photo_5_2026-08-28_21-13-46.jpg",
    ],
  },
  14: {
    number: "PROJECT 14",

    title: "Project  Fourteen",

    type: "Egyptian Heritage Fashion",

    infoType: "Heritage",

    description:
      "Fashion editorial combining contemporary styling with Egyptian architecture and cultural surroundings.",
    images: [
      "../img/photo_4_2026-09-05_11-06-26.jpg",
      "../img/photo_3_2026-09-05_11-06-26.jpg",
      "../img/photo_2_2026-09-05_11-06-26.jpg",
      "../img/photo_1_2026-09-05_11-06-26.jpg",
    ],
  },
};


/* ================================================= */
/* =============== PROJECT PAGE ==================== */
/* ================================================= */

const params =
  new URLSearchParams(window.location.search);


const projectId =
  params.get("project");


const projectPage =
  document.querySelector(".project-page");


if (projectPage) {

  const project =
    projects[projectId] || projects[1];


  /* ================= HEADER ================= */

  const projectNumber =
    document.getElementById("projectNumber");

  const projectTitle =
    document.getElementById("projectTitle");

  const projectDescription =
    document.getElementById("projectDescription");

  const projectType =
    document.getElementById("projectType");

  const infoType =
    document.getElementById("infoType");


  if (projectNumber) {

    projectNumber.textContent =
      project.number;

  }


  if (projectTitle) {

    const titleParts =
      project.title.split(" ");

    projectTitle.innerHTML =
      `${titleParts[0]} <span>${titleParts.slice(1).join(" ")}</span>`;

  }


  if (projectDescription) {

    projectDescription.textContent =
      project.description;

  }


  if (projectType) {

    projectType.textContent =
      project.type;

  }


  if (infoType) {

    infoType.textContent =
      project.infoType;

  }


  /* ================= GALLERY ================= */
 
  const gallery =
    document.getElementById("projectGallery");


  if (gallery) {

    gallery.innerHTML = "";


    project.images.forEach(
      (image, index) => {

        const item =
          document.createElement("div");

        item.className =
          "project-gallery-item";


        item.innerHTML = `

          <span class="gallery-number">
            0${index + 1}
          </span>

          <img
            src="${image}"
            alt="${project.title} image ${index + 1}"
          >

        `;


        gallery.appendChild(item);

      }
    );

  }


 
  /* ================= NEXT PROJECT ================= */

const nextProjectLink =
    document.getElementById("nextProjectLink");

if (nextProjectLink) {

    const currentId = Number(projectId) || 1;

    const projectIds = Object.keys(projects).map(Number);

    const currentIndex =
        projectIds.indexOf(currentId);

    const nextIndex =
        (currentIndex + 1) % projectIds.length;

    const nextId =
        projectIds[nextIndex];

    const nextProject =
        projects[nextId];

    nextProjectLink.href =
        `./project.html?project=${nextId}`;

    nextProjectLink.textContent =
        `${nextProject.title} ↗`;
}}