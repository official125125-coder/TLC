/* =========================================
   TLC - THE LEGEND CLUB
   ========================================= */

const games = [

  {
    name: "LIVE22",
    image: "images/live22.png"
  },

  {
    name: "MEGA888",
    image: "images/mega888.png"
  },

  {
    name: "PUSSY888",
    image: "images/pussy888.png"
  },

  {
    name: "ROLLEX11",
    image: "images/rollex11.png"
  },

  {
    name: "LION KING",
    image: "images/lionking.png"
  },

  {
    name: "NEWTOWN",
    image: "images/newtown.png"
  },

  {
    name: "SUNCITY2",
    image: "images/suncity2.png"
  },

  {
    name: "PLAYBOY2",
    image: "images/playboy2.png"
  },

  {
    name: "GREAT WALL99",
    image: "images/greatwall99.png"
  },

  {
    name: "918KAYA",
    image: "images/918kaya.png"
  },

  {
    name: "918KISS ORIGINAL",
    image: "images/918kissoriginal.png"
  }

];


/* ELEMENT */

const gameGrid =
  document.getElementById("gameGrid");

const modal =
  document.getElementById("contactModal");

const modalOverlay =
  document.getElementById("modalOverlay");

const closeModalButton =
  document.getElementById("closeModal");

const selectedGame =
  document.getElementById("selectedGame");


/* CREATE GAME */

function createGameList() {

  gameGrid.innerHTML = "";


  games.forEach(function(game) {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "game-card";


    /* LOGO BOX */

    const logoBox =
      document.createElement("div");

    logoBox.className =
      "game-logo-box";


    /* IMAGE */

    const gameImage =
      document.createElement("img");

    gameImage.className =
      "game-logo";

    gameImage.src =
      game.image;

    gameImage.alt =
      game.name;


    /* AUTO DEFAULT TLC */

    gameImage.onerror = function() {

      gameImage.remove();


      const defaultLogo =
        document.createElement("div");

      defaultLogo.className =
        "default-game-logo";

      defaultLogo.textContent =
        "TLC";


      logoBox.appendChild(
        defaultLogo
      );

    };


    logoBox.appendChild(
      gameImage
    );


    /* NAME */

    const gameName =
      document.createElement("div");

    gameName.className =
      "game-name";

    gameName.textContent =
      game.name;


    card.appendChild(
      logoBox
    );

    card.appendChild(
      gameName
    );


    /* CLICK */

    card.addEventListener(
      "click",
      function() {

        openModal(game);

      }
    );


    gameGrid.appendChild(
      card
    );

  });

}


/* OPEN POPUP */

function openModal(game) {

  selectedGame.textContent =
    game.name;


  modal.classList.add(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}


/* CLOSE POPUP */

function closeModal() {

  modal.classList.remove(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


closeModalButton.addEventListener(
  "click",
  closeModal
);


modalOverlay.addEventListener(
  "click",
  closeModal
);


document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape" &&
      modal.classList.contains("active")
    ) {

      closeModal();

    }

  }
);


/* START */

createGameList();