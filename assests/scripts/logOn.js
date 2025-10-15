//#region Variables
let userName;
//#endregion

function setUserElements (userName)
{
    //All Together: '<a href="../pages/evidence.html"><img src="/assests/images/icons/evidence.png" width="60"></a>'
    string1 = '<a href='
    string2 = '><img src='
    string3 = ' width="60"></a>'

    tasksString2 = '><img src="IMAGE" width="60"></a>'; //TODO: add tasks icon image

    let link;
    let image;

//TODO: make html files per character- profile.html | tasks1.html | tasks2.html
//TODO: create profile image link- ../assests/images/profile/CHARACTER.jpg
    switch (userName) 
    {
        case dracula:
          link = "../pages/characters/dracula/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/dracula/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/dracula/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case maleficent:
          link = "../pages/characters/maleficent/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/maleficent/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/maleficent/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case ursula:
          link = "../pages/characters/ursula/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/ursula/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/ursula/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case jafar:
          link = "../pages/characters/jafar/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/jafar/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/jafar/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case hannibal:
          link = "../pages/characters/hannibal/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/hannibal/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/hannibal/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case kingpin:
          link = "../pages/characters/kingpin/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/kingpin/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/kingpin/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;
          
        case krueger:
          link = "../pages/characters/krueger/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/krueger/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/krueger/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case joker:
          link = "../pages/characters/joker/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/joker/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/joker/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case cruella:
          link = "../pages/characters/cruella/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/cruella/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/cruella/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case medusa:
          link = "../pages/characters/medusa/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/medusa/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/medusa/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case evilQueen:
          link = "../pages/characters/evilQueen/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/evilQueen/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/evilQueen/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case chucky:
          link = "../pages/characters/evilQueen/profile.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/chucky/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/chucky/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case tiffany:
          link = "../pages/characters/tiffany/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/tiffany/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/tiffany/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case queenHearts:
          link = "../pages/characters/queenHearts/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/queenHearts/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/queenHearts/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;
          
        case harleyQuinn:
          link = "../pages/characters/harleyQuinn/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/harleyQuinn/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/harleyQuinn/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case poisonIvy:
          link = "../pages/characters/poisonIvy/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "../pages/characters/poisonIvy/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "../pages/characters/poisonIvy/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;
          
        default:
            break;
    }
}