var users=[

    {"name":"john doe" ,
        "gender":"male",
        "image":"../images/john.png"
    },
    {
        "name":"jane doe" , 
        "gender":"female",  
        "image":"../images/jane.png "
    }
]
var currId=0;
function togglee(){
    currId=(currId+1)%2;
    var user=users[currId];

    document.getElementById("user-img").src=user.image;
    document.getElementById("user-name").innerText=user.name ;
    document.getElementById("user-gender").innerText=user.gender;

}