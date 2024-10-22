let courses = document.getElementById("all-courses");
let callToAction = document.getElementById("call-to-action");
let callBtn = document.getElementById("call-btn");
callBtn.addEventListener("click", () => {
  courses.style.display = "block";
  callToAction.style.display = "none";
  console.log("hello");
});
