var users;
var leval;

function getLeval() {
    leval = [
        {
            leval: 1,
            point: 90
        },
        {
            leval: 2,
            point: 80
        },
        {
            leval: 3,
            point: 70
        },
        {
            leval: 4,
            point: 60
        },
        {
            leval: 5,
            point: 50
        }
    ]
    console.log(leval)
}

function listUsers() {
     users = [
        {
            name: "yash",
            leval: 1,
            point: 0
        },
        {
            name: "nandan",
            leval: 1,
            point: 0
        },
        {
            name: "priyank",
            leval: 2,
            point: 0
        },
        {
            name: "parag",
            leval: 3,
            point: 0
        },
        {
            name: "mihir",
            leval: 3,
            point: 0
        }
    ]
    console.log(users)
}


function getPoints() {
    for (let i = 0; i < users.length; i++) {
        let points = leval.filter((levals) => {
            if (users[i].leval == levals.leval) {
                return levals.point
            }
        })[0]['point']
        users[i].point = points
    }
    console.log(users)
}

const btn = document.getElementById("leval")
btn.addEventListener("click", getLeval)

const btn2 = document.getElementById("user")
btn2.addEventListener("click", listUsers)

const btn3 = document.getElementById("point")
btn3.addEventListener("click", getPoints)
