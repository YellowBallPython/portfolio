const chk = document.getElementById("check");

let logos = document.querySelectorAll("img");

function logos_list(logos) {
  console.log(logos);
}

logos_list(logos);

chk.addEventListener("change", () => {
  if (chk.checked) {
    document.getElementById("theme-style").href = "secondary.css";
  } else {
    document.getElementById("theme-style").href = "mains.css";
  }
});
