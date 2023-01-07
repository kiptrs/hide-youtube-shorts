setInterval(() => hideShorts(), 5000);
setTimeout(() => {
  hideShorts();
}, 1000);
setTimeout(() => {
  hideShorts();
}, 1500);
setTimeout(() => {
  hideShorts();
}, 2000);
const hideShorts = () => {
  document.querySelectorAll('[overlay-style="SHORTS"]').forEach((element) => {
    element.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  });
};
