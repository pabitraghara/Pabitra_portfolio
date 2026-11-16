import cv from "../../public/PABITRA-GHARA-CV.pdf";

export const resumeUrl = cv;
export const resumeFileName = "Pabitra_Ghara_CV.pdf";

// Existing behaviour (moved from Home.jsx unchanged): notify the owner's
// Discord channel when someone opens/downloads the CV.
export const notifyResumeDownload = () =>
  fetch(
    "https://discord.com/api/webhooks/1361728535047176393/XO14QcOY7DvaQPy2Z8UP3Wrytoy3baKwOS8hg01wA_9A6NENcvNh0MLiLmvLtTgsJfPM",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "📄 Someone downloaded your resume!",
      }),
    }
  ).catch(() => {});

// Open the CV in a new tab first (preserves the click gesture), then notify.
export const openResume = () => {
  window.open(resumeUrl, "_blank", "noopener");
  notifyResumeDownload();
};
