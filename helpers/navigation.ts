// Helpers exported so other components can reuse navigation logic (measure nav, compute active section, scroll with offset)
export function computeActiveSectionWithNavOffset(navHeight: number) {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section[id]")
  );
  const currentPos = window.scrollY + navHeight + 20;
  let currentId: string | null = null;
  for (const sec of sections) {
    if (sec.offsetTop <= currentPos) currentId = sec.id;
  }
  return currentId;
}

export function scrollToSectionWithNavOffset(
  sectionId: string,
  navHeight: number
) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}
