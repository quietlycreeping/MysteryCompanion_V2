//#region-----!State Changing Variables--------------------------------- 

//Did the party start? Hide tasks until party.
const  party = false;
//did the murder occur? In second half of party? Hide second tasks and edvindence.
const  murder = false;
//Are they logged in? And who? Null if not logged in. Help lead to correct profile page.
var loggedIn;

//#endregion

//#region LoadIn Variables 
let evindenceElement = '<a href="/MysteryCompanion_V2/pages/evidence.html"><img src="/MysteryCompanion_V2/assests/images/icons/evidence.png" width="60"></a>';

let tasksElement;
let tasksMurderElement;

let profileElement;
//#endregion

//#region Load Cache Links 
loadCache(tasksElement, 'tasksElement');
loadCache(tasksMurderElement, 'tasksMurderElement');
loadCache(profileElement, 'profileElement');
//#endregion

if (profileElement == null) //so if not logged in
{
    //lead to log on screen
    profileElement = '<a href="/MysteryCompanion_V2/pages/logon.html"><img src="/MysteryCompanion_V2/assests/images/icons/evidence.png" width="60"></a>'
    loggedIn = false;
}

//#region Header Load: head = HOME ABOUT EVINDENCE TASKS PROFILE---------------------
//HOME + ABOUT doesn't change

//if not party not started hide tasks then if not logged in hide tasks else show tasks and check if before or after murder
document.getElementById("tasksHeader").innerHTML = party ? (loggedIn ? (murder ? tasksMurderElement : tasksElement) : null) : null;

document.getElementById("profileHeader").innerHTML = profileElement;
//#endregion

function loadCache(variable, key)
{
    variable = localStorage.getItem(key)
    console.log(variable);
}

