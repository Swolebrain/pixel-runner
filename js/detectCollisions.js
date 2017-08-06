module.exports = function(player, thing2){
  var px = player.x + 21;
  var py = player.y +35;
  var x0 = thing2.x;
  var x1 = thing2.x + thing2.width;
  var y0 = thing2.y;
  var y2 = thing2.y + thing2.height;
  if ( px > x0 && px < x1 && py > y0 && py < y2) return true;
  px = player.x - 45;
  if ( px > x0 && px < x1 && py > y0 && py < y2) return true;
  py = player.y - 35;
  if ( px > x0 && px < x1 && py > y0 && py < y2) return true;
  px = player.x + 21;
  if ( px > x0 && px < x1 && py > y0 && py < y2) return true;
  return false;
}
