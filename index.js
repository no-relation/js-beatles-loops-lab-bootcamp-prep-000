function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
  for (let i=0, i < musicians.length, i++) {
    playArray.push("${musicians[i]} plays ${instruments[i]}");
  }
  return playArray;
}