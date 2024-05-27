export const scrollToSection = (sectionId: string) => {
  const isOnProjectsPage = window.location.pathname === "/projects";
  const section = document.getElementById(sectionId);

  if (sectionId === "projetos" && isOnProjectsPage) {
    return;
  }

  if (isOnProjectsPage) {
    window.location.href = "/";
  } else if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};
