/* ------------------------------------------- */
/* NOTIFICATION BELL ------------------------- */
/* ------------------------------------------- */
let main = function() {
  $('.notification img').click(function() {
    $('.notification-menu').toggle();
  });

  $('.post .btn').click(function() {
    $(this).toggleClass('btn-like');
  });
};
$(document).ready(main);


let nots = document.querySelector('.notification h6');
nots.textContent = "4";

let removeNotification = document.querySelector('.notification-menu');
removeNotification.addEventListener('click', (e) => {
  if (e.target.tagName == "SPAN"){
    let alert = e.target.parentNode;
    let main = alert.parentNode;
    main.removeChild(alert);
    let nottext = nots.textContent;
    nots.textContent = nottext-1;
    if (nots.textContent == "0"){
      nots.style.display='none';
      let noNots = document.createElement('li');
      let noNotsP = document.createElement('p');
      noNotsP.textContent = "No new notifications";
      noNots.appendChild(noNotsP);
      main.appendChild(noNots);
    }
  }
})




/* ------------------------------------------- */
/* ALERT NOTIFICATION ------------------------ */
/* ------------------------------------------- */

let removealert = document.querySelector('main .alert .removealert');
removealert.addEventListener('click', (e) => {
  let alert = e.target.parentNode.parentNode;
  let main = alert.parentNode;
  alert.style.opacity = '0';
  setTimeout(function() {
    main.removeChild(alert);
  }, 301);
})






/* ------------------------------------------- */
/* GRAPHS ------------------------------------ */
/* ------------------------------------------- */

/* Variables */
let hourButton = document.querySelector('.charts .hour');
let dayButton = document.querySelector('.charts .day');
let weekButton = document.querySelector('.charts .week');
let monthButton = document.querySelector('.charts .month');
let mq = window.matchMedia("(min-width: 1024px)");
let legendPosition;
let lineRatio;
if (mq.matches){
  legendPosition = 'right';
  lineRatio=4;
} else {
  legendPosition = 'top';
  lineRatio=2;
}

/* Line Chart */
let lineChartCont = document.getElementById("lineChart").getContext('2d');
let lineChart = new Chart(lineChartCont, {
  type: 'line',
  data: {
    labels: ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
    datasets: [{
      label: 'Visitors',
      data: [0, 750, 1750, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2000],
      backgroundColor: 'rgba(69, 155, 128, 0.4)',
      borderColor: '#459b80',
      borderWidth: 2,
    }]
  },
  options:{
    aspectRatio:lineRatio,
    legend:{display:false},
    elements:{
      point:{backgroundColor:'white'},
      line:{tension:0}
    }
  }
});

hourButton.addEventListener('click', ()=>{
  resetButtonColors();
  hourButton.classList.add('selected');
  lineChart.data.labels = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"]
  lineChart.data.datasets[0].data = [5, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20];
  lineChart.update();
});

dayButton.addEventListener('click', ()=>{
  resetButtonColors();
  dayButton.classList.add('selected');
  lineChart.data.labels = ["Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
  lineChart.data.datasets[0].data = [220, 320, 290, 190, 240, 450, 295, 220, 400, 320, 200];
  lineChart.update();
});

weekButton.addEventListener('click', ()=>{
  resetButtonColors();
  weekButton.classList.add('selected');
  lineChart.data.labels = ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"]
  lineChart.data.datasets[0].data = [0, 750, 1750, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2000];
  lineChart.update();
});

monthButton.addEventListener('click', ()=>{
  resetButtonColors();
  monthButton.classList.add('selected');
  lineChart.data.labels = ["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr"]
  lineChart.data.datasets[0].data = [2000, 4302, 2503, 5063, 4032, 2853, 4063, 5024, 8063, 5605, 7059];
  lineChart.update();
});


function resetButtonColors(){
  let allLis = document.querySelectorAll('.charts li');
  for (let i=0; i<allLis.length; i++){
    allLis[i].classList.remove('selected');
  }
}

/* Bar Chart */
let barChartCont = document.getElementById("barChart").getContext('2d');
let barChart = new Chart(barChartCont, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: 'Visitors',
      data: [75, 100, 175, 125, 225, 200, 100],
      backgroundColor: '#459b80',
      borderColor: '#459b80',
      borderWidth: 2,
    }]
  },
  options:{
    legend:{
      display:false,
    },
    elements:{
      point:{
        backgroundColor:'white',
      },
      line:{
        tension:0,
      }
    }
  }
});

/* Donut Chart */
let donutChartCont = document.getElementById("donutChart").getContext('2d');
let donutChart = new Chart(donutChartCont, {
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tablets", "Desktops"],
    datasets: [{
      label: 'Visitors',
      data: [70, 20, 10],
      backgroundColor: ['#459b80', '#46B2AF', '#4290A8'],
    }]
  },
  options:{
    legend:{
      position: legendPosition,
      labels:{
        boxWidth:15,
      }
    },
  }
});

/* ------------------------------------------- */
/* USER MESSAGING ---------------------------- */
/* ------------------------------------------- */


let currentUsers = ["Victoria Chambers", "Dale Byrd", "Dan Oliver", "Dawn Wood"];

let messagebutton = document.querySelector('#messagebutton');
messagebutton.addEventListener('click', (e) => {
  let message = e.target.previousElementSibling;
  let user = e.target.previousElementSibling.previousElementSibling.firstElementChild;

  if (user.value=="") {
    window.alert("Please specify a User");
  } else if (currentUsers.includes(user.value)==false){
    window.alert(user.value + " does not exist!");
  } else if (message.value == "" && user.value == "") {
    window.alert("Give us something to work with!");
  } else if (message.value=="" && user.value!==""){
    window.alert("Please write a Message");
  } else {
    window.alert("Message sent to " + user.value + "!");
    message.value = "";
    user.value = "";
  }
});


let userInput = document.querySelector('.message .autocomplete input');
autocomplete(userInput, currentUsers);

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}


/* ------------------------------------------- */
/* LOCAL STORAGE ----------------------------- */
/* ------------------------------------------- */
let emailNots = document.querySelector('.settings .email input');
let profilePublic = document.querySelector('.settings .public input');
let timezone = document.querySelector('.settings select');
let saveButton = document.querySelector('.settings .submit');
let resetButton = document.querySelector('.settings .reset');

emailNots.checked = truebool(localStorage.emailNots);
profilePublic.checked = truebool(localStorage.profilePublic);
if (localStorage.timezone==null){
  timezone.value = "Select Timezone";
} else {
  timezone.value = localStorage.timezone;
}

saveButton.addEventListener('click', ()=>{
  localStorage.emailNots = emailNots.checked;
  localStorage.profilePublic = profilePublic.checked;
  localStorage.timezone = timezone.value;
  alert("Your settings have been saved!");
});

resetButton.addEventListener('click', ()=>{
  emailNots.checked = truebool(localStorage.emailNots);
  profilePublic.checked = truebool(localStorage.profilePublic);
  if (localStorage.timezone==null){
    timezone.value = "Select Timezone";
  } else {
    timezone.value = localStorage.timezone;
  }
});

function truebool(trueorfalse){
  if (trueorfalse=="true") {return true;}
  else {return false;}
}
