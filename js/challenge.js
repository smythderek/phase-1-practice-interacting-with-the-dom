
let numberInCounter = 0; 
let numberOfLikes = 0; // Set variable to hold the number of times the numberInCounter has been liked
let likeObject = {};
let interval; // Variable to hold the return value of setInterval() then clear with clearInterval()

const likeList = document.querySelector('.likes');
likeList.setAttribute('id', 'like_list');

function countSeconds () {
    interval = setInterval(function () {
        document.getElementById("counter").textContent = numberInCounter + 1;
        numberInCounter++;
    }, 1000)
    
    document.getElementById("minus").addEventListener('click', function() {
        numberInCounter--;
    })

    document.getElementById("plus").addEventListener('click', function() {
        numberInCounter++;
    })

    document.getElementById("heart").addEventListener('click', function() {
        const likeItem = document.createElement("li");
        likeItem.setAttribute('id', numberInCounter);

        if (likeObject[numberInCounter] > 0) { 
            likeObject[numberInCounter]++
            likeItem.innerText = `${numberInCounter} has been liked ${likeObject[numberInCounter]} times`;
            document.getElementById(numberInCounter).innerText = `${numberInCounter} has been liked ${likeObject[numberInCounter]} times`;
        }
        else {
            likeObject[numberInCounter] = 1;
            likeItem.innerText = `${numberInCounter} has been liked ${likeObject[numberInCounter]} time`
            document.getElementById('like_list').appendChild(likeItem);
        }      
    })

    document.getElementById("pause").addEventListener('click', function() {
        if (document.getElementById("pause").innerText === "pause") {
            clearInterval(interval);
            document.getElementById("pause").innerText = "resume";
            document.getElementById("pause").setAttribute('name', 'paused')
            document.getElementById("minus").disabled = true;
            document.getElementById("plus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        else {
            document.getElementById("pause").innerText = "pause";
            document.getElementById("pause").setAttribute('name', 'resumed')
            document.getElementById("minus").disabled = false;
            document.getElementById("plus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false; 
            interval = setInterval(function () {
                document.getElementById("counter").textContent = numberInCounter + 1;
                numberInCounter++;
            }, 1000); 
        }
    })

    document.getElementById("submit").addEventListener('click', function(e) {
        e.preventDefault();
        let submission = document.getElementById("comment-input").value;
        const comment = document.createElement("p")
        comment.innerText = submission;
        document.getElementById('list').appendChild(comment);
        document.getElementById("comment-input").value = '';  
    })
}

window.addEventListener('DOMContentLoaded', countSeconds)