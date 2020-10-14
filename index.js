// function  takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name);
//   katzDeliLine = katzDeliLine.length;
//   return "Welcome, " + name + ". You are number " + katzDeliLine + " in line.";
// }

var c = 0;

function nowServing(katzDeliLine) {
  while (katzDeliLine.length > 0) {
<<<<<<< HEAD
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  var v = [];
  var i = 1;
  if (katzDeliLine.length > 0 ) {
    while (katzDeliLine.length > 0) {
      v.push(i + ". " + katzDeliLine.shift());
      i++
    }
    var s = v.join(", ");
    return "The line is currently: " + s;
  } else return "The line is currently empty."
}
=======
    return katzDeliLine.shift();
  }
  return "There is nobody waiting to be served!"
}

function takeANumber(katzDeliLine) {
  katzDeliLine.push(c);
  c ++
  return "You are number " + c;
}
