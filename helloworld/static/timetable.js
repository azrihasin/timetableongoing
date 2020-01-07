

// document.getElementById("pdf-upload").addEventListener("change", function (e) {
//   var pdfupload = document.getElementById('pdf_upload');
//   var file = e.target.files[0]

//   console.log(file);
//   if (file.type != "application/pdf") {
//     console.error(file.name, "is not a pdf file.");
//     return
//   }

//   var pdfview = document.getElementById('pdfview');
//   pdfview.src = file.name;




// })

var addone = document.getElementById('SUBJECTELEMENT').childElementCount;


alert(data.length);

function myFunction() {

  var x = 1000;

  document.getElementById('ELEMENT').style.visibility = "visible";
  document.getElementById('pdfview').style.visibility = "hidden";
  document.getElementById('SUBJECTELEMENT').style.visibility = "visible";
  document.getElementById('CUSTOMIZEELEMENT').style.visibility = "hidden";
  document.getElementById('CUSTOMIZE').style.visibility = "hidden";


  var subject = document.getElementById('timetable').value;

  var day = document.getElementById('day');

  var daychoose = day.options[day.selectedIndex].value;

  var time_start = document.getElementById('time_start').value;

  var time_end = document.getElementById('time_end').value;

  document.getElementById("timetable").innerHTML = subject;

  var period = time_start - time_end;
  var width = period * 60;


  //starttime
  var fields = time_start.split(':');
  var hour = parseInt(fields[0]);
  var minute = parseInt(fields[1]);
  var masa = (hour * 60) + minute;





  //endtime
  var fields1 = time_end.split(':');
  var hour1 = parseInt(fields1[0]);
  var minute1 = parseInt(fields1[1]);
  var masa1 = (hour1 * 60) + minute1;


  //period of subject
  var period = ((masa1 - masa) / 60) * 60;

  var periodtext = period.toString();

  //width of subject
  var height = periodtext + "px";


  //starttime aka top width
  var topcal = ((masa - 420) / 60) * 60;
  var toptext = topcal.toString();
  var top = toptext + "px";

  var combine = time_start + ' - ' + time_end;

  if (masa >= 420 && masa <= 1200 && masa1 >= 420 && masa1 <= 1200) {






    if (daychoose == "MON") {



      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = top;
      div.style.width = "100%";
      div.style.height = height;
      div.style.background = "blue";
      div.style.color = "white";
      div.innerHTML = subject;
      div.setAttribute("id", i);
      div.className = x;
      div.style.paddingTop = "8px";
      div.style.fontSize = "15px";
      div.onclick = function () {
        editindex = this.id;
        document.getElementById("edit").style.display = "inherit";
      };

      var div2 = document.createElement("div");
      div2.style.position = "absolute";
      div2.style.top = top;
      div2.style.width = "100%";
      div2.style.height = "5px";
      div2.style.background = "transparent";
      div2.style.color = "white";
      div2.innerHTML = combine;
      div2.style.fontSize = "10px";
      div2.setAttribute("id", x);


      var div1 = document.createElement("LI");
      button = document.createElement("BUTTON");
      div1.style.top = "5px";
      div1.style.width = "90%";
      div1.style.height = "20px";
      div1.style.background = "grey";
      div1.style.color = "black";
      div1.innerHTML = subject;
      div1.setAttribute("id", x);
      div1.className = x;

      button.style.position = "absolute";
      button.style.left = "80%";
      button.style.width = "20%";
      button.style.height = "20px";
      button.setAttribute("id", x);
      button.id = x;
      button.value = x;

      button.onclick = function () {
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
      };
      button.innerHTML = "Remove";


      var color = document.createElement("INPUT");
      color.setAttribute("type", "color");
      color.style.position = "absolute";
      color.style.left = "71%";
      color.style.width = "4%";
      color.style.borderRadius = "10px";
      color.style.height = "24px";
      color.setAttribute("id", x);
      color.className = x;
      color.value = "#ffffff";
      color.addEventListener('change', function () {

        var length = document.getElementsByClassName(this.className).length;

        for (var i = 0; i < length; i++) {
          document.getElementsByClassName(this.className)[i].style.background = this.value;

        }

        document.querySelectorAll('input[type=text]').forEach(function (el) {
          el.style.background = "white";
        });

        document.querySelectorAll('input[type=color]').forEach(function (el) {

          el.value = "#ffffff";
          el.style.background = "white";
        });

      });

      var lab = document.createElement("LABEL");


      var text = document.createElement("INPUT");
      text.setAttribute("type", "text");
      text.style.position = "absolute";
      text.style.left = "35%";
      text.style.width = "100px";
      text.style.height = "20px";
      text.style.borderRadius = "10px";
      text.setAttribute("id", x);
      text.className = x;
      text.addEventListener('change', function () {


        lab.style.position = "absolute";
        lab.style.left = "20%";
        lab.style.width = "100px";
        lab.style.height = "20px";
        lab.style.color = "white";
        lab.setAttribute("id", x);
        lab.className = x;
        lab.innerHTML = this.value;

        document.getElementById(this.id).innerHTML = this.value;
        div1.appendChild(lab);


      });

      div1.appendChild(text);
      div1.appendChild(color);
      div1.appendChild(button);


      document.getElementById('MON').appendChild(div);
      document.getElementById('MON').appendChild(div2);
      document.getElementById('SUBJECTELEMENT').appendChild(div1);



      x++;


    }
    else if (daychoose == "TUE") {

      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = top;
      div.style.width = "100%";
      div.style.height = height;
      div.style.background = "blue";
      div.style.color = "white";
      div.innerHTML = subject;
      div.setAttribute("id", x);
      div.className = x;
      div.style.paddingTop = "8px";
      div.style.fontSize = "15px";
      div.onclick = function () {
        editindex = this.id;
        document.getElementById("edit").style.display = "inherit";
      };

      var div2 = document.createElement("div");
      div2.style.position = "absolute";
      div2.style.top = top;
      div2.style.width = "100%";
      div2.style.height = "5px";
      div2.style.background = "transparent";
      div2.style.color = "white";
      div2.innerHTML = combine;
      div2.style.fontSize = "10px";
      div2.setAttribute("id", x);


      var div1 = document.createElement("LI");
      button = document.createElement("BUTTON");
      div1.style.top = "5px";
      div1.style.width = "90%";
      div1.style.height = "20px";
      div1.style.background = "grey";
      div1.style.color = "black";
      div1.innerHTML = subject;
      div1.setAttribute("id", x);
      div1.className = x;

      button.style.position = "absolute";
      button.style.left = "80%";
      button.style.width = "20%";
      button.style.height = "20px";
      button.id = x;
      button.value = x;

      button.onclick = function () {
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
      };
      button.innerHTML = "Remove";


      var color = document.createElement("INPUT");
      color.setAttribute("type", "color");
      color.style.position = "absolute";
      color.style.left = "71%";
      color.style.width = "4%";
      color.style.borderRadius = "10px";
      color.style.height = "24px";
      color.setAttribute("id", x);
      color.className = x;
      color.value = "#ffffff";
      color.addEventListener('change', function () {

        var length = document.getElementsByClassName(this.className).length;

        for (var i = 0; i < length; i++) {
          document.getElementsByClassName(this.className)[i].style.background = this.value;

        }

        document.querySelectorAll('input[type=text]').forEach(function (el) {
          el.style.background = "white";
        });

        document.querySelectorAll('input[type=color]').forEach(function (el) {

          el.value = "#ffffff";
          el.style.background = "white";
        });

      });

      var lab = document.createElement("LABEL");


      var text = document.createElement("INPUT");
      text.setAttribute("type", "text");
      text.style.position = "absolute";
      text.style.left = "35%";
      text.style.width = "100px";
      text.style.height = "20px";
      text.style.borderRadius = "10px";
      text.setAttribute("id", x);
      text.className = x;
      text.addEventListener('change', function () {


        lab.style.position = "absolute";
        lab.style.left = "20%";
        lab.style.width = "100px";
        lab.style.height = "20px";
        lab.style.color = "white";
        lab.setAttribute("id", x);
        lab.className = x;
        lab.innerHTML = this.value;

        document.getElementById(this.id).innerHTML = this.value;
        div1.appendChild(lab);


      });

      div1.appendChild(text);
      div1.appendChild(color);
      div1.appendChild(button);


      document.getElementById('TUE').appendChild(div);
      document.getElementById('TUE').appendChild(div2);
      document.getElementById('SUBJECTELEMENT').appendChild(div1);

      x++;

    }
    else if (daychoose == "WED") {

      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = top;
      div.style.width = "100%";
      div.style.height = height;
      div.style.background = "blue";
      div.style.color = "white";
      div.innerHTML = subject;
      div.setAttribute("id", x);
      div.className = x;
      div.style.paddingTop = "8px";
      div.style.fontSize = "15px";
      div.onclick = function () {
        editindex = this.id;
        document.getElementById("edit").style.display = "inherit";
      };

      var div2 = document.createElement("div");
      div2.style.position = "absolute";
      div2.style.top = top;
      div2.style.width = "100%";
      div2.style.height = "5px";
      div2.style.background = "transparent";
      div2.style.color = "white";
      div2.innerHTML = combine;
      div2.style.fontSize = "10px";
      div2.setAttribute("id", x);


      var div1 = document.createElement("LI");
      button = document.createElement("BUTTON");
      div1.style.top = "5px";
      div1.style.width = "90%";
      div1.style.height = "20px";
      div1.style.background = "grey";
      div1.style.color = "black";
      div1.innerHTML = subject;
      div1.setAttribute("id", x);
      div1.className = x;

      button.style.position = "absolute";
      button.style.left = "80%";
      button.style.width = "20%";
      button.style.height = "20px";
      button.id = x;
      button.value = x;

      button.onclick = function () {
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
      };
      button.innerHTML = "Remove";


      var color = document.createElement("INPUT");
      color.setAttribute("type", "color");
      color.style.position = "absolute";
      color.style.left = "71%";
      color.style.width = "4%";
      color.style.borderRadius = "10px";
      color.style.height = "24px";
      color.setAttribute("id", x);
      color.className = x;
      color.value = "#ffffff";
      color.addEventListener('change', function () {

        var length = document.getElementsByClassName(this.className).length;

        for (var i = 0; i < length; i++) {
          document.getElementsByClassName(this.className)[i].style.background = this.value;

        }

        document.querySelectorAll('input[type=text]').forEach(function (el) {
          el.style.background = "white";
        });

        document.querySelectorAll('input[type=color]').forEach(function (el) {

          el.value = "#ffffff";
          el.style.background = "white";
        });

      });

      var lab = document.createElement("LABEL");


      var text = document.createElement("INPUT");
      text.setAttribute("type", "text");
      text.style.position = "absolute";
      text.style.left = "35%";
      text.style.width = "100px";
      text.style.height = "20px";
      text.style.borderRadius = "10px";
      text.setAttribute("id", x);
      text.className = x;
      text.addEventListener('change', function () {


        lab.style.position = "absolute";
        lab.style.left = "20%";
        lab.style.width = "100px";
        lab.style.height = "20px";
        lab.style.color = "white";
        lab.setAttribute("id", x);
        lab.className = x;
        lab.innerHTML = this.value;

        document.getElementById(this.id).innerHTML = this.value;
        div1.appendChild(lab);


      });

      div1.appendChild(text);
      div1.appendChild(color);
      div1.appendChild(button);


      document.getElementById('WED').appendChild(div);
      document.getElementById('WED').appendChild(div2);
      document.getElementById('SUBJECTELEMENT').appendChild(div1);


      x++;

    }
    else if (daychoose == "THUR") {

      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = top;
      div.style.width = "100%";
      div.style.height = height;
      div.style.background = "blue";
      div.style.color = "white";
      div.innerHTML = subject;
      div.setAttribute("id", x);
      div.className = x;
      div.style.paddingTop = "8px";
      div.style.fontSize = "15px";
      div.onclick = function () {
        editindex = this.id;
        document.getElementById("edit").style.display = "inherit";
      };

      var div2 = document.createElement("div");
      div2.style.position = "absolute";
      div2.style.top = top;
      div2.style.width = "100%";
      div2.style.height = "5px";
      div2.style.background = "transparent";
      div2.style.color = "white";
      div2.innerHTML = combine;
      div2.style.fontSize = "10px";
      div2.setAttribute("id", x);


      var div1 = document.createElement("LI");
      button = document.createElement("BUTTON");
      div1.style.top = "5px";
      div1.style.width = "90%";
      div1.style.height = "20px";
      div1.style.background = "grey";
      div1.style.color = "black";
      div1.innerHTML = subject;
      div1.setAttribute("id", x);
      div1.className = x;

      button.style.position = "absolute";
      button.style.left = "80%";
      button.style.width = "20%";
      button.style.height = "20px";
      button.id = x;
      button.value = x;

      button.onclick = function () {
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
      };
      button.innerHTML = "Remove";


      var color = document.createElement("INPUT");
      color.setAttribute("type", "color");
      color.style.position = "absolute";
      color.style.left = "71%";
      color.style.width = "4%";
      color.style.borderRadius = "10px";
      color.style.height = "24px";
      color.setAttribute("id", x);
      color.className = x;
      color.value = "#ffffff";
      color.addEventListener('change', function () {

        var length = document.getElementsByClassName(this.className).length;

        for (var i = 0; i < length; i++) {
          document.getElementsByClassName(this.className)[i].style.background = this.value;

        }

        document.querySelectorAll('input[type=text]').forEach(function (el) {
          el.style.background = "white";
        });

        document.querySelectorAll('input[type=color]').forEach(function (el) {

          el.value = "#ffffff";
          el.style.background = "white";
        });

      });

      var lab = document.createElement("LABEL");


      var text = document.createElement("INPUT");
      text.setAttribute("type", "text");
      text.style.position = "absolute";
      text.style.left = "35%";
      text.style.width = "100px";
      text.style.height = "20px";
      text.style.borderRadius = "10px";
      text.setAttribute("id", x);
      text.className = x;
      text.addEventListener('change', function () {


        lab.style.position = "absolute";
        lab.style.left = "20%";
        lab.style.width = "100px";
        lab.style.height = "20px";
        lab.style.color = "white";
        lab.setAttribute("id", x);
        lab.className = x;
        lab.innerHTML = this.value;

        document.getElementById(this.id).innerHTML = this.value;
        div1.appendChild(lab);


      });

      div1.appendChild(text);
      div1.appendChild(color);
      div1.appendChild(button);


      document.getElementById('THUR').appendChild(div);
      document.getElementById('THUR').appendChild(div2);
      document.getElementById('SUBJECTELEMENT').appendChild(div1);


      x++;

    }
    else if (daychoose == "FRI") {

      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = top;
      div.style.width = "100%";
      div.style.height = height;
      div.style.background = "blue";
      div.style.color = "white";
      div.innerHTML = subject;
      div.setAttribute("id", x);
      div.className = x;
      div.style.paddingTop = "8px";
      div.style.fontSize = "15px";
      div.onclick = function () {
        editindex = this.id;
        document.getElementById("edit").style.display = "inherit";
      };

      var div2 = document.createElement("div");
      div2.style.position = "absolute";
      div2.style.top = top;
      div2.style.width = "100%";
      div2.style.height = "5px";
      div2.style.background = "transparent";
      div2.style.color = "white";
      div2.innerHTML = combine;
      div2.style.fontSize = "10px";
      div2.setAttribute("id", x);


      var div1 = document.createElement("LI");
      button = document.createElement("BUTTON");
      div1.style.top = "5px";
      div1.style.width = "90%";
      div1.style.height = "20px";
      div1.style.background = "grey";
      div1.style.color = "black";
      div1.innerHTML = subject;
      div1.setAttribute("id", x);
      div1.className = x;

      button.style.position = "absolute";
      button.style.left = "80%";
      button.style.width = "20%";
      button.style.height = "20px";
      button.id = x;
      button.value = x;

      button.onclick = function () {
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
      };
      button.innerHTML = "Remove";


      var color = document.createElement("INPUT");
      color.setAttribute("type", "color");
      color.style.position = "absolute";
      color.style.left = "71%";
      color.style.width = "4%";
      color.style.borderRadius = "10px";
      color.style.height = "24px";
      color.setAttribute("id", x);
      color.className = x;
      color.value = "#ffffff";
      color.addEventListener('change', function () {

        var length = document.getElementsByClassName(this.className).length;

        for (var i = 0; i < length; i++) {
          document.getElementsByClassName(this.className)[i].style.background = this.value;

        }

        document.querySelectorAll('input[type=text]').forEach(function (el) {
          el.style.background = "white";
        });

        document.querySelectorAll('input[type=color]').forEach(function (el) {

          el.value = "#ffffff";
          el.style.background = "white";
        });

      });

      var lab = document.createElement("LABEL");


      var text = document.createElement("INPUT");
      text.setAttribute("type", "text");
      text.style.position = "absolute";
      text.style.left = "35%";
      text.style.width = "100px";
      text.style.height = "20px";
      text.style.borderRadius = "10px";
      text.setAttribute("id", x);
      text.className = x;
      text.addEventListener('change', function () {


        lab.style.position = "absolute";
        lab.style.left = "20%";
        lab.style.width = "100px";
        lab.style.height = "20px";
        lab.style.color = "white";
        lab.setAttribute("id", x);
        lab.className = x;
        lab.innerHTML = this.value;

        document.getElementById(this.id).innerHTML = this.value;
        div1.appendChild(lab);


      });

      div1.appendChild(text);
      div1.appendChild(color);
      div1.appendChild(button);


      document.getElementById('FRI').appendChild(div);
      document.getElementById('FRI').appendChild(div2);
      document.getElementById('SUBJECTELEMENT').appendChild(div1);


      x++;

    }
    else if (daychoose == "SAT") {

      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = top;
      div.style.width = "100%";
      div.style.height = height;
      div.style.background = "blue";
      div.style.color = "white";
      div.innerHTML = subject;
      div.setAttribute("id", x);
      div.className = x;
      div.style.paddingTop = "8px";
      div.style.fontSize = "15px";
      div.onclick = function () {
        editindex = this.id;
        document.getElementById("edit").style.display = "inherit";
      };

      var div2 = document.createElement("div");
      div2.style.position = "absolute";
      div2.style.top = top;
      div2.style.width = "100%";
      div2.style.height = "5px";
      div2.style.background = "transparent";
      div2.style.color = "white";
      div2.innerHTML = combine;
      div2.style.fontSize = "10px";
      div2.setAttribute("id", x);


      var div1 = document.createElement("LI");
      button = document.createElement("BUTTON");
      div1.style.top = "5px";
      div1.style.width = "90%";
      div1.style.height = "20px";
      div1.style.background = "grey";
      div1.style.color = "black";
      div1.innerHTML = subject;
      div1.setAttribute("id", x);
      div1.className = x;

      button.style.position = "absolute";
      button.style.left = "80%";
      button.style.width = "20%";
      button.style.height = "20px";
      button.id = x;
      button.value = x;

      button.onclick = function () {
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
      };
      button.innerHTML = "Remove";


      var color = document.createElement("INPUT");
      color.setAttribute("type", "color");
      color.style.position = "absolute";
      color.style.left = "71%";
      color.style.width = "4%";
      color.style.borderRadius = "10px";
      color.style.height = "24px";
      color.setAttribute("id", x);
      color.className = x;
      color.value = "#ffffff";
      color.addEventListener('change', function () {

        var length = document.getElementsByClassName(this.className).length;

        for (var i = 0; i < length; i++) {
          document.getElementsByClassName(this.className)[i].style.background = this.value;

        }

        document.querySelectorAll('input[type=text]').forEach(function (el) {
          el.style.background = "white";
        });

        document.querySelectorAll('input[type=color]').forEach(function (el) {

          el.value = "#ffffff";
          el.style.background = "white";
        });

      });

      var lab = document.createElement("LABEL");


      var text = document.createElement("INPUT");
      text.setAttribute("type", "text");
      text.style.position = "absolute";
      text.style.left = "35%";
      text.style.width = "100px";
      text.style.height = "20px";
      text.style.borderRadius = "10px";
      text.setAttribute("id", x);
      text.className = x;
      text.addEventListener('change', function () {


        lab.style.position = "absolute";
        lab.style.left = "20%";
        lab.style.width = "100px";
        lab.style.height = "20px";
        lab.style.color = "white";
        lab.setAttribute("id", x);
        lab.className = x;
        lab.innerHTML = this.value;

        document.getElementById(this.id).innerHTML = this.value;
        div1.appendChild(lab);


      });

      div1.appendChild(text);
      div1.appendChild(color);
      div1.appendChild(button);


      document.getElementById('SAT').appendChild(div);
      document.getElementById('SAT').appendChild(div2);
      document.getElementById('SUBJECTELEMENT').appendChild(div1);


      x++;

    }
    else if (daychoose == "SUN") {

      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = top;
      div.style.width = "100%";
      div.style.height = height;
      div.style.background = "blue";
      div.style.color = "white";
      div.innerHTML = subject;
      div.setAttribute("id", x);
      div.className = x;
      div.style.paddingTop = "8px";
      div.style.fontSize = "15px";
      div.onclick = function () {
        editindex = this.id;
        document.getElementById("edit").style.display = "inherit";
      };

      var div2 = document.createElement("div");
      div2.style.position = "absolute";
      div2.style.top = top;
      div2.style.width = "100%";
      div2.style.height = "5px";
      div2.style.background = "transparent";
      div2.style.color = "white";
      div2.innerHTML = combine;
      div2.style.fontSize = "10px";
      div2.setAttribute("id", x);


      var div1 = document.createElement("LI");
      button = document.createElement("BUTTON");
      div1.style.top = "5px";
      div1.style.width = "90%";
      div1.style.height = "20px";
      div1.style.background = "grey";
      div1.style.color = "black";
      div1.innerHTML = subject;
      div1.setAttribute("id", x);
      div1.className = x;

      button.style.position = "absolute";
      button.style.left = "80%";
      button.style.width = "20%";
      button.style.height = "20px";
      button.id = x;
      button.value = x;

      button.onclick = function () {
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
        document.getElementById(this.id).remove();
      };
      button.innerHTML = "Remove";


      var color = document.createElement("INPUT");
      color.setAttribute("type", "color");
      color.style.position = "absolute";
      color.style.left = "71%";
      color.style.width = "4%";
      color.style.borderRadius = "10px";
      color.style.height = "24px";
      color.setAttribute("id", x);
      color.className = x;
      color.value = "#ffffff";
      color.addEventListener('change', function () {

        var length = document.getElementsByClassName(this.className).length;

        for (var i = 0; i < length; i++) {
          document.getElementsByClassName(this.className)[i].style.background = this.value;

        }

        document.querySelectorAll('input[type=text]').forEach(function (el) {
          el.style.background = "white";
        });

        document.querySelectorAll('input[type=color]').forEach(function (el) {

          el.value = "#ffffff";
          el.style.background = "white";
        });

      });

      var lab = document.createElement("LABEL");


      var text = document.createElement("INPUT");
      text.setAttribute("type", "text");
      text.style.position = "absolute";
      text.style.left = "35%";
      text.style.width = "100px";
      text.style.height = "20px";
      text.style.borderRadius = "10px";
      text.setAttribute("id", x);
      text.className = x;
      text.addEventListener('change', function () {


        lab.style.position = "absolute";
        lab.style.left = "20%";
        lab.style.width = "100px";
        lab.style.height = "20px";
        lab.style.color = "white";
        lab.setAttribute("id", x);
        lab.className = x;
        lab.innerHTML = this.value;

        document.getElementById(this.id).innerHTML = this.value;
        div1.appendChild(lab);


      });

      div1.appendChild(text);
      div1.appendChild(color);
      div1.appendChild(button);


      document.getElementById('SUN').appendChild(div);
      document.getElementById('SUN').appendChild(div2);
      document.getElementById('SUBJECTELEMENT').appendChild(div1);

      x++;
    }



    var j = document.getElementById('SUBJECTELEMENT').childElementCount;
    var c = document.getElementById('SUBJECTELEMENT').childNodes;
    var d = document.querySelectorAll('input[type=color]');
    var f = document.getElementById('SUBJECTELEMENT').querySelectorAll('input[type=text]');


    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var z = 0; z < 6; z++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    var w = 1;

    while (w <= j) {

      var str = c[w].textContent;
      var str1 = c[j].textContent;

      str = str.replace("Remove", "");
      str1 = str1.replace("Remove", "");

      if (str == str1) {

        c[j].className = c[w].className;
        d[w - 1].value = d[j - 1].value;




        c[w].id;

        if (daychoose == "MON") {
          document.getElementById(c[w].id).className = c[w].className;
          d[w - 1].className = c[w].className;
          f[w - 1].className = c[w].className;
          f[w - 1].style.background = "white";

          document.getElementsByClassName(c[j].className[0])[0].style.background = c[w].style.background;


        } else if (daychoose == "TUE") {
          document.getElementById(c[w].id).className = c[w].className;
          d[w - 1].className = c[w].className;
          f[w - 1].className = c[w].className;
          f[w - 1].style.background = "white";
          document.getElementsByClassName(c[j].className[0])[0].style.background = c[w].style.background;


        } else if (daychoose == "WED") {
          document.getElementById(c[w].id).className = c[w].className;
          d[w - 1].className = c[w].className;
          f[w - 1].className = c[w].className;
          f[w - 1].style.background = "white";
          document.getElementsByClassName(c[j].className[0])[0].style.background = c[w].style.background;


        } else if (daychoose == "THUR") {
          document.getElementById(c[w].id).className = c[w].className;
          d[w - 1].className = c[w].className;
          f[w - 1].className = c[w].className;
          f[w - 1].style.background = "white";
          document.getElementsByClassName(c[j].className[0])[0].style.background = c[w].style.background;


        } else if (daychoose == "FRI") {
          document.getElementById(c[w].id).className = c[w].className;
          d[w - 1].className = c[w].className;
          f[w - 1].className = c[w].className;
          f[w - 1].style.background = "white";
          document.getElementsByClassName(c[j].className[0])[0].style.background = c[w].style.background;


        } else if (daychoose == "SAT") {
          document.getElementById(c[w].id).className = c[w].className;
          d[w - 1].className = c[w].className;
          f[w - 1].className = c[w].className;
          f[w - 1].style.background = "white";
          document.getElementsByClassName(c[j].className[0])[0].style.background = c[w].style.background;


        } else if (daychoose == "SUN") {
          document.getElementById(c[w].id).className = c[w].className;
          d[w - 1].className = c[w].className;
          f[w - 1].className = c[w].className;
          f[w - 1].style.background = "white";
          document.getElementsByClassName(c[j].className[0])[0].style.background = c[w].style.background;


        }
      }
      else {

        c[j].style.background = color;
        if (daychoose == "MON") {

          document.getElementById(c[j].id).style.background = c[j].style.background;

        } else if (daychoose == "TUE") {

          document.getElementById(c[j].id).style.background = c[j].style.background;

        } else if (daychoose == "WED") {

          document.getElementById(c[j].id).style.background = c[j].style.background;

        } else if (daychoose == "THUR") {

          document.getElementById(c[j].id).style.background = c[j].style.background;

        } else if (daychoose == "FRI") {

          document.getElementById(c[j].id).style.background = c[j].style.background;

        } else if (daychoose == "SAT") {

          document.getElementById(c[j].id).style.background = c[j].style.background;

        } else if (daychoose == "SUN") {

          document.getElementById(c[j].id).style.background = c[j].style.background;

        }
      }

      w++;

    }



    console.log(document.getElementsByClassName(1));
  }


  function deleteRow(x) {
    document.getElementById(x).remove();
    document.getElementById(x).remove();
    // var elem = document.getElementById(x);
    // elem.parentNode.removeChild(elem);
    //
    // var elem = document.getElementById(x);
    // elem.parentNode.removeChild(elem);
  }


}




document.getElementById("custom").addEventListener("click", function () {

  document.getElementById('ELEMENT').style.visibility = "hidden";
  document.getElementById('pdfview').style.visibility = "hidden";
  document.getElementById('SUBJECTELEMENT').style.visibility = "hidden";
  document.getElementById('CUSTOMIZEELEMENT').style.visibility = "visible";
  document.getElementById('CUSTOMIZE').style.visibility = "visible";
  var x = document.getElementById('SUBJECTELEMENT').childElementCount;
  var c = document.getElementById('SUBJECTELEMENT').childNodes;

  var last = c[x].className;
  var last = parseInt(last);
  var y = 1;
})


document.getElementById("check").addEventListener("click", function () {
  document.getElementById('ELEMENT').style.visibility = "hidden";
  document.getElementById('pdfview').style.visibility = "visible";
  document.getElementById('SUBJECTELEMENT').style.visibility = "hidden";
  document.getElementById('CUSTOMIZE').style.visibility = "hidden";
  document.getElementById('CUSTOMIZEELEMENT').style.visibility = "hidden";

});


document.getElementById("sub").addEventListener("click", function () {
  document.getElementById('ELEMENT').style.visibility = "visible";
  document.getElementById('pdfview').style.visibility = "hidden";
  document.getElementById('SUBJECTELEMENT').style.visibility = "visible";
  document.getElementById('CUSTOMIZE').style.visibility = "hidden";
  document.getElementById('CUSTOMIZEELEMENT').style.visibility = "hidden";
});


document.getElementById("opacity").addEventListener("change", function () {
  var mon = document.getElementById('MON');
  var tue = document.getElementById('TUE');
  var wed = document.getElementById('WED');
  var thur = document.getElementById('THUR');
  var fri = document.getElementById('FRI');
  var sun = document.getElementById('SUN');
  var sat = document.getElementById('SAT');

  mon.style.opacity = this.value;
  tue.style.opacity = this.value;
  wed.style.opacity = this.value;
  thur.style.opacity = this.value;
  fri.style.opacity = this.value;
  sun.style.opacity = this.value;
  sat.style.opacity = this.value;
});



document.getElementById('wallpaper').addEventListener('change', readURL, true);
function readURL() {
  var file = document.getElementById("wallpaper").files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById('imagewallpaper').style.backgroundImage = "url(" + reader.result + ")";
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}
