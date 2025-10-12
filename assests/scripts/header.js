//#region-----!State Changing Variables--------------------------------- 

//Did the party start? Hide tasks until party.
const  party = false;
//did the murder occur? In second half of party? Hide second tasks and edvindence.
const  murder = false;
//Are they logged in? And who? Null if not logged in. Help lead to correct profile page.
var loggedIn = "null";

//#endregion

//#region Header Variables 
homeElement = '<a href="home.html"><img  src="../assests/images/icons/home.png" width="60" ></a>';
homeMurderElement = '<a href="home_2.html"><img  src="../assests/images/icons/home.png" width="60" ></a>';

evindenceElement = '<a href="evidence.html"><img src="../assests/images/icons/evidence.png" width="60"></a>';
//#endregion


//Header Fill Out: HOME ABOUT EVINDENCE TASKS PROFILE---------------------
document.getElementById("homeHeader").innerHTML = murder ? homeMurderElement : homeElement;
//ABOUT doesn't change
document.getElementById("evindenceHeader").innerHTML = murder ? evindenceElement : null;
document.getElementById("tasksHeader").innerHTML = murder ? homeMurderElement : homeElement;
document.getElementById("profileHeader").innerHTML = murder ? homeMurderElement : homeElement;