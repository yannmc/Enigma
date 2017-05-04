/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Made by Yann Morin Charbonneau - Github : @yannmc
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
var typed = false;

//Function that runs the whole program
function createVariables(){
  var rotor1 = [[10,17],[21,4],[5,19],[-17,21],[21,7],[-4,11],[12,3],[16,-5],[6,7],[-3,9],[7,-10],[-7,9],[4,17],
  [2,6],[5,-6],[-7,-2],[-11,-4],[-17,-7],[-9,-12],[-6,-5],[-9,3],[-19,4],[2,-21],[-3,-16],[-21,-2],[-4,-21]];

  var rotor2 = [[3,25],[17,7],[22,17],[18,-3],[16,13],[7,19],[5,12],[1,3],[-7,-1],[16,11],[-3,5],[8,-5],[2,-7],
  [9,10],[2,-2],[-5,1],[-1,-2],[-13,4],[-12,-17],[-17,-8],[-11,-16],[-4,-18],[1,-9],[-10,-1],[-19,-22],[-25,-16]];

  var rotor3 = [[1,12],[16,-1],[5,23],[17,10],[20,2],[8,14],[-2,5],[2,-5],[14,9],[6,-2],[2,-13],[-5,10],[-12,-2],
  [-10,-8],[9,10],[10,-6],[5,6],[-9,-16],[1,2],[-14,-1],[-2,-17],[-10,-5],[-6,-14],[13,-9],[-10,-20],[-23,-10]];

  var reflecteur = [25,23,21,19,17,15,13,11,9,7,5,3,1,-1,-3,-5,-7,-9,-11,-13,-15,-17,-19,-21,-23,-25];

  var crypt = [["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],
  ["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25]];

  //Initialisation of all variables
  var k1Good = false;
  var k2Good = false;
  var k3Good = false;
  var init1;
  var init2;
  var init3;
  var direct1;
  var direct2;
  var direct3;
  var msg = "";
  var nmbRot1 = 0;
  var nmbRot2 = 0;

  //Get the key entered
  getKey(k1Good, k2Good, k3Good, init1, direct1, init2, direct2, init3, direct3);

  //Get the rotors starting position
  rotorStartingPosition(rotor1, getKey().init1, getKey().direct1, rotor2, getKey().init2, getKey().direct2, rotor3, getKey().init3, getKey().direct3);

  //Fill all the tables
  fillTable(rotor1, rotor2, rotor3, reflecteur, crypt);
  var y = document.getElementById("letter").value;
  var x = y.toUpperCase();
  if(x.length == 0){
    if(typed == true){
      document.getElementById("submitButton").disabled = true;
    }
    msg = "";
    for(var i = 0; i < 26; i++){
      document.getElementById('showAlphabet').rows[0].cells[i].style.backgroundColor = "white";
      document.getElementById('showAlphabet').rows[1].cells[i].style.backgroundColor = "white";
      document.getElementById('showReflecteur').rows[0].cells[i].style.backgroundColor = "white";
      document.getElementById('showRotor1').rows[0].cells[i].style.backgroundColor = "white";
      document.getElementById('showRotor1').rows[1].cells[i].style.backgroundColor = "white";
      document.getElementById('showRotor2').rows[0].cells[i].style.backgroundColor = "white";
      document.getElementById('showRotor2').rows[1].cells[i].style.backgroundColor = "white";
      document.getElementById('showRotor3').rows[0].cells[i].style.backgroundColor = "white";
      document.getElementById('showRotor3').rows[1].cells[i].style.backgroundColor = "white";
    }
  }else{
    for(var i = 0; i < x.length; i++){
      typed = true;
      if(x[i] == " "){
        msg = msg + " ";
      }else{
        if(x[i] >= "A" && x[i] <= "Z"){
          rotationRotor1(getKey().direct1, rotor1);
          var imgSource1 = document.getElementById("rotor1Moving").style.backgroundImage;
          var cleanup1 = /\"|\'|\)/g;
          var currentImageName1 = (imgSource1.split('/').pop().replace(cleanup1, ''));
          if(currentImageName1 == "images/leftFirst.png"){
            document.getElementById("rotor1Moving").style.backgroundImage = "url('images/leftMiddle.png')";
          }else if(currentImageName1 == "images/leftMiddle.png"){
            document.getElementById("rotor1Moving").style.backgroundImage = "url('images/leftEnd.png')";
          }else if(currentImageName1 == "images/leftEnd.png"){
            document.getElementById("rotor1Moving").style.backgroundImage = "url('images/leftFirst.png')";
          }else if(currentImageName1 == "images/rightFirst.png"){
            document.getElementById("rotor1Moving").style.backgroundImage = "url('images/rightMiddle.png')";
          }else if(currentImageName1 == "images/rightMiddle.png"){
            document.getElementById("rotor1Moving").style.backgroundImage = "url('images/rightEnd.png')";
          }else if(currentImageName1 == "images/rightEnd.png"){
            document.getElementById("rotor1Moving").style.backgroundImage = "url('images/rightFirst.png')";
          }
          nmbRot1++;
          if(nmbRot1 % 26 == 0){
            rotationRotor2(getKey().direct2, rotor2);
            var imgSource2 = document.getElementById("rotor2Moving").style.backgroundImage;
            var cleanup2 = /\"|\'|\)/g;
            var currentImageName2 = (imgSource2.split('/').pop().replace(cleanup2, ''));
            if(currentImageName2 == "images/leftFirst.png"){
              document.getElementById("rotor2Moving").style.backgroundImage = "url('images/leftMiddle.png')";
            }else if(currentImageName2 == "images/leftMiddle.png"){
              document.getElementById("rotor2Moving").style.backgroundImage = "url('images/leftEnd.png')";
            }else if(currentImageName2 == "images/leftEnd.png"){
              document.getElementById("rotor2Moving").style.backgroundImage = "url('images/leftFirst.png')";
            }else if(currentImageName2 == "images/rightFirst.png"){
              document.getElementById("rotor2Moving").style.backgroundImage = "url('images/rightMiddle.png')";
            }else if(currentImageName2 == "images/rightMiddle.png"){
              document.getElementById("rotor2Moving").style.backgroundImage = "url('images/rightEnd.png')";
            }else if(currentImageName2 == "images/rightEnd.png"){
              document.getElementById("rotor2Moving").style.backgroundImage = "url('images/rightFirst.png')";
            }
            nmbRot2++;
            if(nmbRot2 % 26 == 0){
              rotationRotor3(getKey().direct3, rotor3);
              var imgSource3 = document.getElementById("rotor3Moving").style.backgroundImage;
              var cleanup3 = /\"|\'|\)/g;
              var currentImageName3 = (imgSource3.split('/').pop().replace(cleanup3, ''));
              if(currentImageName3 == "images/leftFirst.png"){
                document.getElementById("rotor3Moving").style.backgroundImage = "url('images/leftMiddle.png')";
              }else if(currentImageName3 == "images/leftMiddle.png"){
                document.getElementById("rotor3Moving").style.backgroundImage = "url('images/leftEnd.png')";
              }else if(currentImageName3 == "images/leftEnd.png"){
                document.getElementById("rotor3Moving").style.backgroundImage = "url('images/leftFirst.png')";
              }else if(currentImageName3 == "images/rightFirst.png"){
                document.getElementById("rotor3Moving").style.backgroundImage = "url('images/rightMiddle.png')";
              }else if(currentImageName3 == "images/rightMiddle.png"){
                document.getElementById("rotor3Moving").style.backgroundImage = "url('images/rightEnd.png')";
              }else if(currentImageName3 == "images/rightEnd.png"){
                document.getElementById("rotor3Moving").style.backgroundImage = "url('images/rightFirst.png')";
              }
            }
          }
          msg = msg + crypting((letterValue = x[i].charCodeAt(0) - 65), rotor1, rotor2, rotor3, reflecteur, crypt);
        }else{
          msg = msg + "🚫";
        }
      }
      //Fill table after rotation
      fillTable(rotor1, rotor2, rotor3, reflecteur, crypt);
      refreshButton();
    }
  }
  document.getElementById("crypted").innerHTML = msg;
}

//Function that crypts a letter
function crypting(letterValue, rotor1, rotor2, rotor3, reflecteur, crypt){
  var rotor1Aller;

  var rotor2AllerPos;
  var rotor2Aller;

  var rotor3AllerPos;
  var rotor3Aller;

  var reflecteurAllerPos;
  var reflecteurAller;

  var reflecteurRetourPos;
  var reflecteurRetour;

  var rotor3RetourPos;
  var rotor3Retour;

  var rotor2RetourPos;
  var rotor2Retour;

  var rotor1RetourPos;
  var rotor1Retour;

  var codeValuePos;
  var codeValue;

  var finalLetter = "";

  for(var i = 0; i < 26; i++){
    document.getElementById('showAlphabet').rows[0].cells[i].style.backgroundColor = "white";
    document.getElementById('showAlphabet').rows[1].cells[i].style.backgroundColor = "white";
    document.getElementById('showReflecteur').rows[0].cells[i].style.backgroundColor = "white";
    document.getElementById('showRotor1').rows[0].cells[i].style.backgroundColor = "white";
    document.getElementById('showRotor1').rows[1].cells[i].style.backgroundColor = "white";
    document.getElementById('showRotor2').rows[0].cells[i].style.backgroundColor = "white";
    document.getElementById('showRotor2').rows[1].cells[i].style.backgroundColor = "white";
    document.getElementById('showRotor3').rows[0].cells[i].style.backgroundColor = "white";
    document.getElementById('showRotor3').rows[1].cells[i].style.backgroundColor = "white";
  }

  if(letterValue == -65){
    return lt = " ";
  }else{
    //red #ff8080
    //blue #80b3ff
    document.getElementById('showAlphabet').rows[0].cells[letterValue].style.backgroundColor = "#ff8080";
    document.getElementById('showAlphabet').rows[1].cells[letterValue].style.backgroundColor = "#ff8080";
    rotor1Aller = rotor1[letterValue][0];

    rotor2AllerPos = mod(letterValue + rotor1Aller);
    document.getElementById('showRotor1').rows[1].cells[letterValue].style.backgroundColor = "#ff8080";
    rotor2Aller = rotor2[rotor2AllerPos][0];

    rotor3AllerPos = mod(rotor2AllerPos + rotor2Aller);
    document.getElementById('showRotor2').rows[1].cells[rotor2AllerPos].style.backgroundColor = "#ff8080";
    rotor3Aller = rotor3[rotor3AllerPos][0];

    reflecteurAllerPos = mod(rotor3AllerPos + rotor3Aller);
    document.getElementById('showRotor3').rows[1].cells[rotor3AllerPos].style.backgroundColor = "#ff8080";
    reflecteurAller = reflecteur[reflecteurAllerPos];

    reflecteurRetourPos = mod(reflecteurAllerPos + reflecteurAller);
    document.getElementById('showReflecteur').rows[0].cells[reflecteurAllerPos].style.backgroundColor = "#ff8080";
    reflecteurRetour = reflecteur[reflecteurRetourPos];

    rotor3RetourPos = reflecteurRetourPos;
    document.getElementById('showReflecteur').rows[0].cells[reflecteurRetourPos].style.backgroundColor = "#80b3ff";
    rotor3Retour = rotor3[rotor3RetourPos][1];

    rotor2RetourPos = mod(rotor3RetourPos + rotor3Retour);
    document.getElementById('showRotor3').rows[0].cells[rotor3RetourPos].style.backgroundColor = "#80b3ff";
    rotor2Retour = rotor2[rotor2RetourPos][1];

    rotor1RetourPos = mod(rotor2RetourPos + rotor2Retour);
    document.getElementById('showRotor2').rows[0].cells[rotor2RetourPos].style.backgroundColor = "#80b3ff";
    rotor1Retour = rotor1[rotor1RetourPos][1];

    codeValuePos = mod(rotor1RetourPos + rotor1Retour);
    document.getElementById('showRotor1').rows[0].cells[rotor1RetourPos].style.backgroundColor = "#80b3ff";
    codeValue = crypt[codeValuePos][1];

    document.getElementById('showAlphabet').rows[0].cells[codeValuePos].style.backgroundColor = "#80b3ff";
    document.getElementById('showAlphabet').rows[1].cells[codeValuePos].style.backgroundColor = "#80b3ff";
    finalLetter = String.fromCharCode(Number(codeValue + 65));

    return lt = finalLetter;
  }
}

//Function that makes the rotor3 rotate
function rotationRotor3(direct2, rotor3){
  if(direct2 == "G"){
    var tmp = rotor3[0];
    rotor3.shift();
    rotor3[25] = tmp;
    //fillTable();
  }else if(direct2 == "D"){
    var tmp = rotor3[25];
    rotor3.unshift(tmp);
    rotor3.pop();
    //fillTable();
  }
}

//Function that makes the rotor2 rotate
function rotationRotor2(direct2, rotor2){
  if(direct2 == "G"){
    var tmp = rotor2[0];
    rotor2.shift();
    rotor2[25] = tmp;
    //fillTable();
  }else if(direct2 == "D"){
    var tmp = rotor2[25];
    rotor2.unshift(tmp);
    rotor2.pop();
    //fillTable();
  }
}

//Function that makes the rotor1 rotate
function rotationRotor1(direct1, rotor1){
  if(direct1 == "G"){
    var tmp = rotor1[0];
    rotor1.shift();
    rotor1[25] = tmp;
    //fillTable();
  }else if(direct1 == "D"){
    var tmp = rotor1[25];
    rotor1.unshift(tmp);
    rotor1.pop();
    //fillTable();
  }
}

//Function that takes the key entered
function getKey(k1Good, k2Good, k3Good, init1, direct1, init2, direct2, init3, direct3){
  var kr3 = document.getElementById("keyRotor3").value;
  if(kr3[0] == "(" && kr3[1] == "R" && kr3[2] == "3" && kr3[3] == "," && (kr3[4] == "G" || kr3[4] == "D") && kr3[5] == "," && kr3[kr3.length - 1] == ")"){
    kr3 = kr3.split(',');
    var kr3start = kr3[2].substr(0, kr3[2].length -1)
    if(isNaN(kr3start) == false && kr3start.length > 1){
      init3 = (Number(kr3start) % 26);
      k3Good = true;
      direct3 = kr3[1];
      document.getElementById("key3").style.background = "#99e699";
    }else{
      init3 = 0;
      document.getElementById("key3").style.background = "#ff9999";
    }
  }else{
    init3 = 0;
    document.getElementById("key3").style.background = "#ff9999";
  }

  var kr2 = document.getElementById("keyRotor2").value;
  if(kr2[0] == "(" && kr2[1] == "R" && kr2[2] == "2" && kr2[3] == "," && (kr2[4] == "G" || kr2[4] == "D") && kr2[5] == "," && kr2[kr2.length - 1] == ")"){
    kr2 = kr2.split(',');
    var kr2start = kr2[2].substr(0, kr2[2].length -1)
    if(isNaN(kr2start) == false && kr2start.length > 1){
      init2 = (Number(kr2start) % 26);
      k2Good = true;
      direct2 = kr2[1];
      document.getElementById("key2").style.background = "#99e699";
    }else{
      init2 = 0;
      document.getElementById("key2").style.background = "#ff9999";
    }
  }else{
    init2 = 0;
    document.getElementById("key2").style.background = "#ff9999";
  }

  var kr1 = document.getElementById("keyRotor1").value;
  if(kr1[0] == "(" && kr1[1] == "R" && kr1[2] == "1" && kr1[3] == "," && (kr1[4] == "G" || kr1[4] == "D") && kr1[5] == "," && kr1[kr1.length - 1] == ")"){
    kr1 = kr1.split(',');
    var kr1start = kr1[2].substr(0, kr1[2].length -1)
    if(isNaN(kr1start) == false && kr1start.length > 1){
      init1 = (Number(kr1start) % 26);
      k1Good = true;
      direct1 = kr1[1];
      document.getElementById("key1").style.background = "#99e699";
    }else{
      init1 = 0;
      document.getElementById("key1").style.background = "#ff9999";
    }
  }else{
    init1 = 0;
    document.getElementById("key1").style.background = "#ff9999";
  }
  if(k1Good && k2Good && k3Good){
    document.getElementById("submitButton").disabled = false;
    return {k1Good:k1Good, k2Good:k2Good, k3Good:k3Good, init1:init1, init2:init2, init3:init3, direct1:direct1, direct2:direct2, direct3:direct3}
  }else{
    document.getElementById("submitButton").disabled = true;
  }
}

//Function that takes the rotors starting positions
function rotorStartingPosition(rotor1, init1, direct1, rotor2, init2, direct2, rotor3, init3, direct3){
  if(init1 == 0){
    if(direct1 == "G"){
      document.getElementById("rotor1Moving").style.backgroundImage = "url('images/leftFirst.png')";
    }else if(direct1 == "D"){

      document.getElementById("rotor1Moving").style.backgroundImage = "url('images/rightFirst.png')";
    }
  }else{
    for(var i = 0; i < Math.abs(init1); i++){
      if(Number(init1) > 0){
        var tmp = rotor1[25];
        rotor1.unshift(tmp);
        rotor1.pop();
        if(direct1 == "G"){
          document.getElementById("rotor1Moving").style.backgroundImage = "url('images/leftFirst.png')";
        }else if(direct1 == "D"){
          document.getElementById("rotor1Moving").style.backgroundImage = "url('images/rightFirst.png')";
        }
      }else if(Number(init1) < 0){
        var tmp = rotor1[0];
        rotor1.shift();
        rotor1[25] = tmp;
        if(direct1 == "G"){
          document.getElementById("rotor1Moving").style.backgroundImage = "url('images/leftFirst.png')";
        }else if(direct1 == "D"){
          document.getElementById("rotor1Moving").style.backgroundImage = "url('images/rightFirst.png')";
        }
      }
    }
  }
  if(init2 == 0){
    if(direct2 == "G"){
      document.getElementById("rotor2Moving").style.backgroundImage = "url('images/leftFirst.png')";
    }else if(direct2 == "D"){
      document.getElementById("rotor2Moving").style.backgroundImage = "url('images/rightFirst.png')";
    }
  }else{
    for(var i = 0; i < Math.abs(init2); i++){
      if(Number(init2) > 0){
        var tmp = rotor2[25];
        rotor2.unshift(tmp);
        rotor2.pop();
        if(direct2 == "G"){
          document.getElementById("rotor2Moving").style.backgroundImage = "url('images/leftFirst.png')";
        }else if(direct2 == "2"){
          document.getElementById("rotor2Moving").style.backgroundImage = "url('images/rightFirst.png')";
        }
      }else if(Number(init2) < 0){
        var tmp = rotor2[0];
        rotor2.shift();
        rotor2[25] = tmp;
        if(direct2 == "G"){
          document.getElementById("rotor2Moving").style.backgroundImage = "url('images/leftFirst.png')";
        }else if(direct2 == "D"){
          document.getElementById("rotor2Moving").style.backgroundImage = "url('images/rightFirst.png')";
        }
      }
    }
  }
  if(init3 == 0){
    if(direct3 == "G"){
      document.getElementById("rotor3Moving").style.backgroundImage = "url('images/leftFirst.png')";
    }else if(direct3 == "D"){
      document.getElementById("rotor3Moving").style.backgroundImage = "url('images/rightFirst.png')";
    }
  }else{
    for(var i = 0; i < Math.abs(init3); i++){
      if(Number(init3) > 0){
        var tmp = rotor3[25];
        rotor3.unshift(tmp);
        rotor3.pop();
        if(direct3 == "G"){
          document.getElementById("rotor3Moving").style.backgroundImage = "url('images/leftFirst.png')";
        }else if(direct3 == "D"){
          document.getElementById("rotor3Moving").style.backgroundImage = "url('images/rightFirst.png')";
        }
      }else if(Number(init3) < 0){
        var tmp = rotor3[0];
        rotor3.shift();
        rotor3[25] = tmp;
        if(direct3 == "G"){
          document.getElementById("rotor3Moving").style.backgroundImage = "url('images/leftFirst.png')";
        }else if(direct3 == "D"){
          document.getElementById("rotor3Moving").style.backgroundImage = "url('images/rightFirst.png')";
        }
      }
    }
  }
  return {rotor1:rotor1, rotor2:rotor2, rotor3:rotor3}
}

//Function refreshed the button when resetting
function refreshButton(){
  document.getElementById("keyRotor1").disabled = true;
  document.getElementById("keyRotor2").disabled = true;
  document.getElementById("keyRotor3").disabled = true;
  document.getElementById("submitButton").disabled = true;
  document.getElementById("buttonReset").disabled = false;
  document.getElementById("letter").disabled = false;
  document.getElementById("letter").placeholder = "Entrez votre texte";
}

//Function to reload the page
function reloadPage(){
  location.reload();
}

//Function that calculates a mod%
function mod(n) {
  return ((n % 26) + 26) % 26;
}

//Function to fill all the tables
function fillTable(rotor1, rotor2, rotor3, reflecteur, crypt){
  var reflect = document.getElementById("showReflecteur").rows[0].cells;
  for(var i = 0; i < reflecteur.length; i++){
    reflect[i].innerHTML = reflecteur[i];
  }

  var rotor3a = document.getElementById("showRotor3").rows[1].cells;
  for(var i = 0; i < rotor3.length; i++){
    rotor3a[i].innerHTML = rotor3[i][0];
  }

  var rotor3r = document.getElementById("showRotor3").rows[0].cells;
  for(var i = 0; i < rotor3.length; i++){
    rotor3r[i].innerHTML = rotor3[i][1];
  }

  var rotor2a = document.getElementById("showRotor2").rows[1].cells;
  for(var i = 0; i < rotor2.length; i++){
    rotor2a[i].innerHTML = rotor2[i][0];
  }

  var rotor2r = document.getElementById("showRotor2").rows[0].cells;
  for(var i = 0; i < rotor2.length; i++){
    rotor2r[i].innerHTML = rotor2[i][1];
  }

  var rotor1a = document.getElementById("showRotor1").rows[1].cells;
  for(var i = 0; i < rotor1.length; i++){
    rotor1a[i].innerHTML = rotor1[i][0];
  }

  var rotor1r = document.getElementById("showRotor1").rows[0].cells;
  for(var i = 0; i < rotor1.length; i++){
    rotor1r[i].innerHTML = rotor1[i][1];
  }

  var alphabet = document.getElementById("showAlphabet").rows[1].cells;
  for(var i = 0; i < crypt.length; i++){
    alphabet[i].innerHTML = crypt[i][0];
  }

  var alphabet = document.getElementById("showAlphabet").rows[0].cells;
  for(var i = 0; i < crypt.length; i++){
    alphabet[i].innerHTML = crypt[i][1];
  }
  document.getElementById("showAlphabet").style.background = "#4d4d4d";
  document.getElementById("showReflecteur").style.background = "#4d4d4d";
  document.getElementById("showRotor1").style.background = "#4d4d4d";
  document.getElementById("showRotor2").style.background = "#4d4d4d";
  document.getElementById("showRotor3").style.background = "#4d4d4d";
}
