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
/* MESSAGE BUTTON ---------------------------- */
/* ------------------------------------------- */

let messagebutton = document.querySelector('#messagebutton');
messagebutton.addEventListener('click', (e) => {
  let message = e.target.previousElementSibling;
  let user = e.target.previousElementSibling.previousElementSibling;
  if (message.value == "" && user.value == "") {
    window.alert("Give us something to work with!");
  } else if (message.value=="" && user.value!==""){
    window.alert("Please write a Message");
  } else if (message.value!=="" && user.value=="") {
    window.alert("Please specify a User");
  } else {
    window.alert("Message sent to " + user.value + "!");
    message.value = "";
    user.value = "";
  }
});


/* ------------------------------------------- */
/* GRAPHS ------------------------------------ */
/* ------------------------------------------- */

/* Variables */
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
    labels: ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
    datasets: [{
      label: 'Visitors',
      data: [1000, 870, 1204, 1300, 1260, 1584, 1496, 1349, 1792, 1572, 1504, 2059],
      backgroundColor: 'rgba(69, 155, 128, 0.4)',
      borderColor: '#459b80',
      borderWidth: 2,
    }]
  },
  options:{
    aspectRatio:lineRatio,
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

/* Bar Chart */
let barChartCont = document.getElementById("barChart").getContext('2d');
let barChart = new Chart(barChartCont, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: 'Visitors',
      data: [50, 40, 60, 24, 60, 64, 67],
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
