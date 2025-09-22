
// Set the date we're counting down to
const countDownDate = new Date("Oct 18, 2025 16:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() 
{
  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) 
  {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's Party Time!";
  }
}, 1000);
//1000 means it'll update every second
