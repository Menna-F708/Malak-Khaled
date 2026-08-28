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

    type: "FASHION / EDITORIAL",

    infoType: "Editorial",

    description:
      "Layering as a visual language. Casual elements are combined with intention to create a distinctive visual story.",

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

    title: "Project Two",

    type: "STREET / CAMPAIGN",

    infoType: "Campaign",

    description:
      "A soft street narrative where flowing silhouettes meet grounded details, creating a balance between ease and strength.",

    images: [
      "../img/photo_1_2026-08-27_19-23-40.jpg",
      "../img/photo_2_2026-05-05_17-04-22.jpg",
      "../img/photo_2_2026-08-27_19-23-40.jpg",
      "../img/photo_3_2026-08-27_19-23-40.jpg",
      "../img/photo_5_2026-04-23_03-14-31.jpg",
    ],
  },

  3: {
    number: "PROJECT 03",

    title: "Project Three",

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    title: "Project  Ten",

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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
  11: {
    number: "PROJECT 11",

    title: "Project  Eleven",

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    type: "BEAUTY / VINTAGE",

    infoType: "Beauty",

    description:
      "Dark vintage energy with statement jewelry and expressive low-light photography creating a dramatic mood.",

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

    const currentId =
      Number(projectId) || 1;


    const nextId =
      currentId === 3
        ? 1
        : currentId + 1;


    const nextProject =
      projects[nextId];


    nextProjectLink.href =
      `./project.html?project=${nextId}`;


    nextProjectLink.textContent =
      `${nextProject.title} ↗`;

  }

}