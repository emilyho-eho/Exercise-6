const items = document.querySelectorAll(".item");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollY / maxScroll, 1);

  items.forEach(item => {
    const currentTop = parseFloat(getComputedStyle(item).top);
    const targetTop = 110; // center alignment line inside 300px container

    const newY = currentTop + (targetTop - currentTop) * progress;

    item.style.transform = `translateY(${newY - currentTop}px)`;
  });
});