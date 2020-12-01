$(function () {
  const id1 = $("#1");
  const id2 = $("#2");
  const id3 = $("#3");
  const id4 = $("#4");
  const id5 = $("#5");
  const id6 = $("#6");
  const id7 = $("#7");
  const id8 = $("#8");
  const id9 = $("#9");
  const circle = $(".circle").html();
  const cross = $(".cross").html();
  var playerOne = {
    icon: circle,
    name: "Joueur 1",
  };
  var playerTwo = {
    icon: cross,
    name: "Joueur 2",
  };
  var turn = 0;

  // JOUEUR 1

  $(document).on("click", "#circle1", function () {
    playerOne.icon = $(this).html();
  })

  $(document).on("click", "#cross1", function () {
    playerOne.icon = $(this).html();
  })

  $(document).on("click", "#laugh1", function () {
    playerOne.icon = $(this).html();
  })

  $(document).on("click", "#surprise1", function () {
    playerOne.icon = $(this).html();
  })

  $(document).on("click", "#first-player-submit", function () {
    if ($("#first-player-name").val() != "") {
      playerOne.name = $("#first-player-name").val();
    }
    $("#first-player-form").attr("hidden", "");
  })

  //  JOUEUR 2

  $(document).on("click", "#circle2", function () {
    playerTwo.icon = $(this).html();
  })

  $(document).on("click", "#cross2", function () {
    playerTwo.icon = $(this).html();
  })

  $(document).on("click", "#laugh2", function () {
    playerTwo.icon = $(this).html();
  })

  $(document).on("click", "#surprise2", function () {
    playerTwo.icon = $(this).html();
  })

  $(document).on("click", "#second-player-submit", function () {
    if ($("#second-player-name").val() != "") {
      playerTwo.name = $("#second-player-name").val();
    }
    $("#second-player-form").attr("hidden", "");
  })

  $(document).on("click", "#begin", function () {
    $(this).attr("hidden", "");
    $("#game").removeAttr("hidden");
  })

  function winning() {
    // combinaisons horizontales
    if (id1.html() != "" && id2.html() != "" && id3.html() != "") {
        if (id1.html() == id2.html() && id1.html() == id3.html() && id2.html() == id3.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    if (id4.html() != "" && id5.html() != "" && id6.html() != "") {
        if (id6.html() == id4.html() && id6.html() == id5.html() && id4.html() == id5.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    if (id7.html() != "" && id8.html() != "" && id9.html() != "") {
        if (id7.html() == id8.html() && id7.html() == id9.html() && id8.html() == id9.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    // combinaisons verticales
    if (id7.html() != "" && id1.html() != "" && id4.html() != "") {
        if (id1.html() == id4.html() && id1.html() == id7.html() && id4.html() == id7.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    if (id2.html() != "" && id5.html() != "" && id8.html() != "") {
        if (id2.html() == id5.html() && id2.html() == id8.html() && id5.html() == id8.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    if (id3.html() != "" && id6.html() != "" && id9.html() != "") {
        if (id3.html() == id6.html() && id3.html() == id9.html() && id6.html() == id9.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    // combinaisons diagonales
    if (id1.html() != "" && id5.html() != "" && id9.html() != "") {
        if (id1.html() == id5.html() && id1.html() == id9.html() && id5.html() == id9.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    if (id3.html() != "" && id5.html() != "" && id7.html() != "") {
        if (id3.html() == id5.html() && id3.html() == id7.html() && id5.html() == id7.html()) {
            emptyCells();
            turn = 0;
            return "victory";
        }
    }
    
    return "continue";
  }

  function emptyCells() {
    id1.html("");
    id2.html("");
    id3.html("");
    id4.html("");
    id5.html("");
    id6.html("");
    id7.html("");
    id8.html("");
    id9.html("");
  }

  function newTurn (name) {
    $("#turn").empty();
    $("#turn").append(`${name}, à toi de jouer !`);
  }

  $(document).on("click", "#1", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
        
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#2", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#3", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#4", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#5", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#6", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#7", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#8", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });

  $(document).on("click", "#9", function () {
    if ($(this).html() == "") {
      if (turn % 2 == 0) {
        $(this).append(playerOne.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerTwo.name);
      } else {
        $(this).append(playerTwo.icon);
        turn++;
        setTimeout(function(){
            if (winning() == "victory") {
                alert('Partie terminée');
                window.location.reload();
            }
        }, 100);
        newTurn(playerOne.name);
      }
    }
  });
});
