var game = {
  autobought: false,
  points: 0,
  upgradelvl: 1,
  multiply: {
    multiply1: 1,
    multiply2: 1,
    multiply3: 1,
    multiply4: 1,
    multiply5: 1,
    multiply6: 1,
  },
  upgradecst: {
    cost1: 10,
    cost2: 1000,
    cost3: 100000,
    cost4: 10000000,
    cost5: 1000000000,
    cost6: 1000000000000,
    cost7: 1000000000000000,
  },
  docsID: {
    cash: document.getElementById("cash"),
    cost1: document.getElementById("cost1"),
    cost2: document.getElementById("cost2"),
    cost3: document.getElementById("cost3"),
    cost4: document.getElementById("cost4"),
    cost5: document.getElementById("cost5"),
    cost6: document.getElementById("cost6"),
    cost7: document.getElementById("cost7"),
    prestige: document.getElementById("prestige"),
    baseclick: document.getElementById("baseclick"),
    firstmul: document.getElementById("firstmul"),
    secondmul: document.getElementById("secondmul"),
    thirdmul: document.getElementById("thirdmul"),
    fourthmul: document.getElementById("fourthmul"),
    fithmul: document.getElementById("fithmul"),
    sixthmul: document.getElementById("sixthmul"),
    total: document.getElementById("total"),
    autotext: document.getElementById("autotext"),
    auto: document.getElementById("auto"),
    prestigebutton: document.getElementById("prestigebutton"),
    saved: document.getElementById("saved"),
    got100: document.getElementById("got100"),
    got1k: document.getElementById("got1k"),
  },
  prestige: {
    mult: 1,
    price: 100000,
    shown: false,
    prestige: function () {
      if (game.points >= this.price) {
        game.points -= this.price;
        this.price *= 9;
        if (this.mult == 1) {
          game.prestige.mult += 0.1;
        } else if (this.mult > 1) {
          game.prestige.mult *= 1.1;
        }
        var cost = game.upgradecst;
        cost.cost1 = 10;
        cost.cost2 = 1000;
        cost.cost3 = 100000;
        cost.cost4 = 10000000;
        cost.cost5 = 1000000000;
        cost.cost6 = 1000000000000;
        cost.cost7 = 1000000000000000;
        game.upgradelvl = 1;
        for (var x in game.multiply) {
          game.multiply[x] = 1;
        }
        game.points = 0;
        this.shown = false;
        game.autobought = false;
        docID.autotext.innerHTML = "Auto <br> $1M";
        docID.auto.classList.toggle("on", false);
        docID.prestigebutton.classList.toggle("hidden");
        settext();
      }
    }
  },
};
var docID = game.docsID;
if (localStorage.getItem("saved") != undefined) {
  var multiply = game.multiply;
  game.points = Number(localStorage.getItem("points"));
  game.upgradecst.cost1 = Number(localStorage.getItem("cost1"));
  game.upgradecst.cost2 = Number(localStorage.getItem("cost2"));
  game.upgradecst.cost3 = Number(localStorage.getItem("cost3"));
  game.upgradecst.cost4 = Number(localStorage.getItem("cost4"));
  game.upgradecst.cost5 = Number(localStorage.getItem("cost5"));
  game.upgradecst.cost6 = Number(localStorage.getItem("cost6"));
  game.upgradecst.cost7 = Number(localStorage.cost7);
  game.prestige.mult = Number(localStorage.getItem("mult"));
  game.prestige.price = Number(localStorage.getItem("pcost"));
  multiply.multiply1 = Number(localStorage.getItem("mul1"));
  multiply.multiply2 = Number(localStorage.getItem("mul2"));
  multiply.multiply3 = Number(localStorage.getItem("mul3"));
  multiply.multiply4 = Number(localStorage.getItem("mul4"));
  multiply.multiply5 = Number(localStorage.getItem("mul5"));
  multiply.multiply6 = Number(localStorage.mul6);
  game.autobought = Boolean(localStorage.getItem("autobought") == "true");
  game.upgradelvl = Number(localStorage.getItem("baseclick"));
}
function deletesave () {
  var confirmdel = confirm("This Will Delete ALL your data in this game \n Are you sure you want to do this?");
  if (confirmdel == true) {
    localStorage.clear();
  }
}
function save() {
  var upgrade = game.upgradecst;
  var prestige = game.prestige;
  localStorage.setItem("saved","true");
  localStorage.setItem("points",game.points);
  localStorage.setItem("cost1",upgrade.cost1);
  localStorage.setItem("cost2",upgrade.cost2);
  localStorage.setItem("cost3",upgrade.cost3);
  localStorage.setItem("cost4",upgrade.cost4);
  localStorage.setItem("cost5",upgrade.cost5);
  localStorage.setItem("cost6",upgrade.cost6);
  localStorage.setItem("cost7",upgrade.cost7);
  localStorage.setItem("mult",prestige.mult);
  localStorage.setItem("pcost",prestige.price);
  localStorage.setItem("mul1",game.multiply.multiply1);
  localStorage.setItem("mul2",game.multiply.multiply2);
  localStorage.setItem("mul3",game.multiply.multiply3);
  localStorage.setItem("mul4",game.multiply.multiply4);
  localStorage.setItem("mul5",game.multiply.multiply5);
  localStorage.setItem("mul6",game.multiply.multiply6);
  localStorage.setItem("autobought",game.autobought);
  localStorage.setItem("baseclick",game.upgradelvl);
  docID.saved.classList.toggle("show");
  setTimeout(function () {
    docID.saved.classList.toggle("show");
  }, 3000);
}
function settext () {
  var vispoints = game.points;
  if (game.points >= 1000) {
    vispoints = vispoints.toFixed(3);
  } else if (game.points < 1000) {
    Math.round(vispoints);
  }
  docID.cash.innerHTML = "$" + valueToMagnitude(Math.round(vispoints),'','');
  docID.cost1.innerHTML = "$" + valueToMagnitude(game.upgradecst.cost1,'','');
  if (game.points >= game.upgradecst.cost1) {
    docID.cost1.classList.toggle("unbuyable", false);
  } else {
    docID.cost1.classList.toggle("unbuyable", true);
  }
  docID.cost2.innerHTML = "$" + valueToMagnitude(game.upgradecst.cost2,'','');
  if (game.points >= game.upgradecst.cost2) {
    docID.cost2.classList.toggle("unbuyable", false);
  } else {
    docID.cost2.classList.toggle("unbuyable", true);
  }
  docID.cost3.innerHTML = "$" + valueToMagnitude(game.upgradecst.cost3,'','');
  if (game.points >= game.upgradecst.cost3) {
    docID.cost3.classList.toggle("unbuyable", false);
  } else {
    docID.cost3.classList.toggle("unbuyable", true);
  }
  docID.cost4.innerHTML = "$" + valueToMagnitude(game.upgradecst.cost4,'','');
  if (game.points >= game.upgradecst.cost4) {
    docID.cost4.classList.toggle("unbuyable", false);
  } else {
    docID.cost4.classList.toggle("unbuyable", true);
  }
  docID.cost5.innerHTML = "$" + valueToMagnitude(game.upgradecst.cost5,'','');
  if (game.points >= game.upgradecst.cost5) {
    docID.cost5.classList.toggle("unbuyable", false);
  } else {
    docID.cost5.classList.toggle("unbuyable", true);
  }
  docID.cost6.innerHTML = "$" + valueToMagnitude(game.upgradecst.cost6,'','');
  if (game.points >= game.upgradecst.cost6) {
    docID.cost6.classList.toggle("unbuyable", false);
  } else {
    docID.cost6.classList.toggle("unbuyable", true);
  }
  docID.cost7.innerHTML = "$" + valueToMagnitude(game.upgradecst.cost7,'','');
  if (game.points >= game.upgradecst.cost7) {
    docID.cost7.classList.toggle("unbuyable", false);
  } else {
    docID.cost7.classList.toggle("unbuyable", true);
  }
  docID.prestige.innerHTML = "Prestige <br> " + valueToMagnitude(game.prestige.price,'','');
  if (game.prestige.mult == 1) {
    var total = game.upgradelvl;
    for (var x in game.multiply) {
      total *= game.multiply[x];
    };
    docID.baseclick.innerHTML = game.upgradelvl;
    docID.firstmul.innerHTML = game.multiply.multiply1;
    docID.secondmul.innerHTML = game.multiply.multiply2;
    docID.thirdmul.innerHTML = game.multiply.multiply3;
    docID.fourthmul.innerHTML = game.multiply.multiply4;
    docID.fithmul.innerHTML = game.multiply.multiply5;
    docID.sixthmul.innerHTML = game.multiply.multiply6;
    docID.total.innerHTML = valueToMagnitude(total,'','');
  } else if (game.prestige.mult > 1) {
    var mult = game.prestige.mult.toFixed(2);
    var total = (game.upgradelvl * mult);
    for (var x in game.multiply) {
      var temp = 0
      if (game.multiply[x] > 1) {
        temp = game.multiply[x] * mult;
      } else if (game.multiply[x] == 1) {
        temp = game.multiply[x];
      } else {
        console.error("line 123");
      }
      total *= temp;
    };
    docID.baseclick.innerHTML = game.upgradelvl + " x " + mult;
    docID.firstmul.innerHTML = game.multiply.multiply1 + " x " + mult;
    docID.secondmul.innerHTML = game.multiply.multiply2 + " x " + mult;
    docID.thirdmul.innerHTML = game.multiply.multiply3 + " x " + mult;
    docID.fourthmul.innerHTML = game.multiply.multiply4 + " x " + mult;
    docID.fithmul.innerHTML = game.multiply.multiply5 + " x " + mult;
    docID.sixthmul.innerHTML = game.multiply.multiply6 + " x " + mult;
    docID.total.innerHTML = valueToMagnitude(total,'','');
  } else {
    console.error("Could not run settext() Function");
  }
}
function getpoints () {
  if (game.prestige.mult == 1) {
    var total = game.upgradelvl;
    for (var x in game.multiply) {
      total *= game.multiply[x];
    }
    game.points += total;
  } else if (game.prestige.mult > 1) {
    var mult = game.prestige.mult;
    var total = (game.upgradelvl * mult);
    for (var x in game.multiply) {
      var temp = 0;
      if (game.multiply[x] > 1) {
        temp = game.multiply[x] * mult;
      } else if (game.multiply[x] == 1) {
        temp = game.multiply[x];
      } else {
        console.error("line 170");
      }
      total *= temp
    }
    game.points += total;
  } 
  settext();
}
function upglvl1 (event) {
  if (event.shiftKey) {
    for (var x = 999; x >= 0; x--) {
      if (game.points >= game.upgradecst.cost1) {
        game.points -= game.upgradecst.cost1;
        game.upgradelvl += 1;
        game.upgradecst.cost1 *= 1.3;
        settext();
        console.log("shift pressed");
      } else {
        break;
      }
    }
  } else {
    if (game.points >= game.upgradecst.cost1) {
      game.points -= game.upgradecst.cost1;
      game.upgradelvl += 1;
      game.upgradecst.cost1 *= 1.3;
      settext();
    }
  }
}
function upglvl2 (event) {
  if (event.shiftKey) {
    for (var x = 999; x >= 0; x--){
      if (game.points >= game.upgradecst.cost2) {
        game.points -= game.upgradecst.cost2;
        game.multiply.multiply1 += 1;
        game.upgradecst.cost2 *= 1.3;
        settext();
      } else {
        break;
      }
    }
  }
  if (game.points >= game.upgradecst.cost2) {
    game.points -= game.upgradecst.cost2;
    game.multiply.multiply1 += 1;
    game.upgradecst.cost2 *= 1.3;
    settext();
  }
}
function upglvl3 (event) {
  if (event.shiftKey) {
    for (var x = 999; x >= 0; x--){
      if (game.points >= game.upgradecst.cost3) {
        game.points -= game.upgradecst.cost3;
        game.multiply.multiply2 += 1;
        game.upgradecst.cost3 *= 1.3;
        settext();
      } else {
        break;
      }
    }
  }
  if (game.points >= game.upgradecst.cost3) {
    game.points -= game.upgradecst.cost3;
    game.multiply.multiply2 += 1;
    game.upgradecst.cost3 *= 1.3;
    settext();
  }
}
function upglvl4 (event) {
  if (event.shiftKey) {
    for (var x = 999; x >= 0; x--){
      if (game.points >= game.upgradecst.cost4) {
        game.points -= game.upgradecst.cost4;
        game.multiply.multiply3 += 1;
        game.upgradecst.cost4 *= 1.3;
        settext();
      } else {
        break;
      }
    }
  }
  if (game.points >= game.upgradecst.cost4) {
    game.points -= game.upgradecst.cost4;
    game.multiply.multiply3 += 1;
    game.upgradecst.cost4 *= 1.3;
    settext();
  }
}
function upglvl5 (event) {
  if (event.shiftKey) {
    for (var x = 999; x >= 0; x--){
      if (game.points >= game.upgradecst.cost5) {
        game.points -= game.upgradecst.cost5;
        game.multiply.multiply4 += 1;
        game.upgradecst.cost5 *= 1.3;
        settext();
      } else {
        break;
      }
    }
  }
  if (game.points >= game.upgradecst.cost5) {
    game.points -= game.upgradecst.cost5;
    game.multiply.multiply4 += 1;
    game.upgradecst.cost5 *= 1.3;
    settext();
  }
}
function upglvl6 (event) {
  if (event.shiftKey) {
    for (var x = 999; x >= 0; x--){
      if (game.points >= game.upgradecst.cost6) {
        game.points -= game.upgradecst.cost6;
        game.multiply.multiply5 += 1;
        game.upgradecst.cost6 *= 1.3;
        settext();
      } else {
        break;
      }
    }
  }
  if (game.points >= game.upgradecst.cost6) {
    game.points -= game.upgradecst.cost6;
    game.multiply.multiply5 += 1;
    game.upgradecst.cost6 *= 1.3;
    settext();
  }
}
function upglvl7 (event) {
  if (event.shiftKey) {
    for (var x = 999; x >= 0; x--){
      if (game.points >= game.upgradecst.cost7) {
        game.points -= game.upgradecst.cost7;
        game.multiply.multiply6 += 1;
        game.upgradecst.cost7 *= 1.35;
      } else {
        break;
      }
    }
  }
  if (game.points >= game.upgradecst.cost7) {
    game.points -= game.upgradecst.cost7;
    game.multiply.multiply6 += 1;
    game.upgradecst.cost7 *= 1.35;
  }
}
function round () {
  for (var x in game.upgradecst) {
    game.upgradecst[x] = Math.round(game.upgradecst[x]);
    settext();
  }
}
function valueToMagnitude(value, unit, fixedPlaces) {
  var unitExponents = [
      [0,' '],
      [3,'k'],
      [6,'M'],
      [9,'B'],
      [12,'T'],
      [15,'q'],
      [18,'Q'],
      [21,'s'],
      [24,'S'],
      [27,'o'],
      [30,'O'],
      [33,'n'],
      [36,'N'],
      [39,'d'],
      [42,'D'],
      [45,'e+45'],
      [48,'e+48'],
      [51,'e+51'],
      [54,'e+54'],
      [57,'e+57'],
      [60,'e+60'],
      [63,'e+63'],
      [66,'e+66'],
      [69,'e+69'],
      [72,'e+72'],
      [75,'e+75'],
      [78,'e+78'],
  ];
  if ((Math.abs(value) > 0 && Math.abs(value) < 1)) {
      return valueToMagnitudeVerySmall(value, unit, fixedPlaces);
  }
  var sign = (value<0?-1:1);
  value = Math.abs(value);
  var i = 0; 
  var idx=0;
  for (i=unitExponents.length-1; i >=0; i--) {
      if (value >= Math.pow(10, unitExponents[i][0])) {
          idx = i;
          break;
      }
  } 
  value = (value / Math.pow(10, unitExponents[idx][0]));
  if (fixedPlaces !== undefined && value < 1000) {
      value = Math.round(value * 1000)/1000;
  }
  value = value * sign;
  return value + ' ' + unitExponents[idx][1] + unit;    
}
function buyauto() {
  if (!game.autobought && game.points >= 1000000) {
    game.points -= 1000000;
    docID.autotext.innerHTML = "Auto";
    docID.auto.classList.toggle("on");
    game.autobought = true;
  } 
}
function auto(){
  if (game.autobought) {
    getpoints();
  }
}
function showprestige() {
  if (game.points >= (game.prestige.price / 2) && game.prestige.shown == false) {
    game.prestige.shown = true;
    docID.prestigebutton.classList.toggle("hidden");
  }
}
function close(type) {
  console.log("in function close. Type =" + type);
  switch (type) {
    case 100:
      console.log("in case 100");
      console.log(docID.got100); 
      docID.got100.classList.toggle("hide", true);
      break;
    case 1000:
      console.log("in case 1000");
      console.log(docID.got1k);
      docID.got1k.classList.toggle("hide", true);
      break;
    default:
      console.error("unknown type for close ('type');");
  };
};
setInterval(round, 10);
setInterval(auto, 100);
setInterval(showprestige, 100);
setInterval(settext,10);
setInterval(save,300000);