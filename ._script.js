window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector(".top").style.transform = `translateY(${distance *
      1}px)`;
    document.querySelector(
      ".container"
    ).style.transform = `translateY(${distance * 0.3}px)`;
    setTimeout(() => {
      document.querySelector(".bot h2").classList.add("animate-me");
    }, 400);
  });



  const slideContainer = document.querySelector('.slider');
  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); }


  var counter1=1;
  setInterval(function() {
    document.getElementById('radio'+counter1).checked=true;
    counter1++;
    if(counter1>4) {
      counter1=1;
    }
  },3000);

  window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");

  }
  function otvori() {
    var txt=$("massage").val();
    $("contenttext").innerHTML(txt);
  }
 