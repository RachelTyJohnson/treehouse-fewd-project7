let main = function() {
  $('.notification img').click(function() {
    $('.notification-menu').toggle();
  });

  $('.post .btn').click(function() {
    $(this).toggleClass('btn-like');
  });
};
$(document).ready(main);

let removeNotification = document.querySelector('.notification-menu');
removeNotification.addEventListener('click', (e) => {
  if (e.target.tagName == "SPAN"){
    let alert = e.target.parentNode;
    let main = alert.parentNode;
    main.removeChild(alert);
  }
})

let removealert = document.querySelector('main .alert .removealert');
removealert.addEventListener('click', (e) => {
  let alert = e.target.parentNode.parentNode;
  let main = alert.parentNode;
  alert.style.opacity = '0';
  setTimeout(function() {
    main.removeChild(alert);
  }, 301);
})

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
