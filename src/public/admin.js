$(document).ready(function() {
  $("#submit-match").click(function() {
    newMatch();
  });

  let t1name = $("#team1name");
  let t1link = $("#team1link");
  let t2name = $("#team2name");
  let t2link = $("#team2link");

  let match = {
    team1: "",
    team2: "",
    team1link: "",
    team2link: "",
    datetime: "0",
    location: "The O2 London"
  };

  function newMatch() {
    match.team1 = t1name.val().trim();
    match.team2 = t2name.val().trim();
    match.team1link = t1link.val().trim();
    match.team2link = t2link.val().trim();

    postMatch(match);
  }

  function postMatch(m) {
    console.log(m);
    $.post("/api/matches", m);
  }
});
