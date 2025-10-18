        document.getElementById('loginForm').addEventListener('submit', function(event) 
        {
            event.preventDefault(); // Prevent the form from refreshing the page

            // Capture the input values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Print the values to the console
            console.log('Username:', username);
            console.log('Password:', password);

            localStorage.setItem('username', userName);
        });

let userName = localStorage.getItem(username);




function setUserElements (userName)
{
    //All Together: '<a href="../MysteryCompanion_V2/pages/evidence.html"><img src="/assests/images/icons/evidence.png" width="60"></a>'
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
          link = "/MysteryCompanion_V2/pages/characters/dracula/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/dracula/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/dracula/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case maleficent:
          link = "/MysteryCompanion_V2/pages/characters/maleficent/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/maleficent/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/maleficent/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case ursula:
          link = "/MysteryCompanion_V2/pages/characters/ursula/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/ursula/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/ursula/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case jafar:
          link = "/MysteryCompanion_V2/pages/characters/jafar/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/jafar/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/jafar/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case hannibal:
          link = "/MysteryCompanion_V2/pages/characters/hannibal/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/hannibal/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/hannibal/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case kingpin:
          link = "/MysteryCompanion_V2/pages/characters/kingpin/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/kingpin/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/kingpin/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;
          
        case krueger:
          link = "/MysteryCompanion_V2/pages/characters/krueger/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/krueger/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/krueger/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case joker:
          link = "/MysteryCompanion_V2/pages/characters/joker/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/joker/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/joker/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case cruella:
          link = "/MysteryCompanion_V2/pages/characters/cruella/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/cruella/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/cruella/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case medusa:
          link = "/MysteryCompanion_V2/pages/characters/medusa/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/medusa/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/medusa/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case evilQueen:
          link = "/MysteryCompanion_V2/pages/characters/evilQueen/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/evilQueen/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/evilQueen/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case chucky:
          link = "/MysteryCompanion_V2/pages/characters/evilQueen/profile.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/chucky/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/chucky/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case tiffany:
          link = "/MysteryCompanion_V2/pages/characters/tiffany/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/tiffany/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/tiffany/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case queenHearts:
          link = "/MysteryCompanion_V2/pages/characters/queenHearts/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/queenHearts/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/queenHearts/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;
          
        case harleyQuinn:
          link = "/MysteryCompanion_V2/pages/characters/harleyQuinn/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/harleyQuinn/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/harleyQuinn/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;

        case poisonIvy:
          link = "/MysteryCompanion_V2/pages/characters/poisonIvy/tasks1.html";
          tasksElement = string1 + link + tasksString2;
          localStorage.setItem('tasksElement', tasksElement);

          link = "/MysteryCompanion_V2/pages/characters/poisonIvy/tasks2.html";
          tasksMurderElement = string1 + link + tasksString2;
          localStorage.setItem('tasksMurderElement', tasksMurderElement);

          link = "/MysteryCompanion_V2/pages/characters/poisonIvy/profile.html";
          image = "IMAGE";
          profileElement = string1 + link + string2 + image + string3;
          localStorage.setItem('profileElement', profileElement);
          window.location.href = 'home.html';
          break;
          
        default:
            break;
    }
}