export const computeActiveSectionWithNavOffset = (navHeight: number) => {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section[id]")
  );

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log(sections[sections.length - 1]);
    return sections[sections.length - 2]?.id || null;
  }

  const currentPos = window.scrollY + navHeight + 20;
  let currentId: string | null = null;
  for (const sec of sections) {
    if (sec.offsetTop <= currentPos) currentId = sec.id;
  }
  return currentId;
};

export const scrollToSectionWithNavOffset = (
  sectionId: string,
  navHeight: number
) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
};
