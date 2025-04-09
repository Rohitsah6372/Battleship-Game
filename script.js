const shipLink =
  "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png";

const waterLink =
  "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp";

const arr = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const dialog = document.getElementById("dialog");

const gridContainer = document.getElementById("grid-container");

// console.log(arr.length)

let ships = 5;
let shipCt = 0;

let tot = 0;

const cells = Array.from(document.getElementsByClassName("cell"));

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // console.log(cell.id);
    const id = cell.id;

    const rand = arr[Math.floor(Math.random() * arr.length)];

    // console.log(tot);

    const showImage = document.getElementById(id);
    // console.log(showImage)

    if (rand === 1) {
      const div = document.getElementById(id);
      const children = div.children;
      //   console.log(children.length)
      if (!children.length) {
        shipCt++;
        ++tot;

        const img = document.createElement("img");
        img.src = shipLink;
        img.alt = "ship image";
        // div.style.backgroundColor = "transparent"
        div.appendChild(img);
        console.log(div);
      }
    } else {
      const div = document.getElementById(id);
      const children = div.children;
      if (!children.length) {
        ++tot;

        console.log(children.length);
        const img = document.createElement("img");
        img.src = waterLink;
        img.alt = "water image";
        // div.style.backgroundColor = "transparent"
        div.appendChild(img);
        console.log(div);
      }
    }

    if (ships === shipCt) {
      const heading = document.getElementById("heading");
      heading.innerText = "You Won!!";
      heading.style.color = "#333";
      gridContainer.style.opacity = 0.2;
      dialog.show();
      return;
    }

    if (tot === 8) {
      if (ships === shipCt) {
        const heading = document.getElementById("heading");
        heading.innerText = "You Won!!";
        heading.style.color = "#333";
        gridContainer.style.opacity = 0.2;

        dialog.show();
        // alert("You Won");
        return;
      }
      const heading = document.getElementById("heading");
      heading.innerText = "You Lose!!";
      heading.style.color = "#333";
      gridContainer.style.opacity = 0.2;
      dialog.show();
      return;
    }
  });
});

const btnClose = document.getElementById("btn-close");
btnClose.addEventListener("click", () => {
  dialog.close();
});

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  window.location.reload();
});
