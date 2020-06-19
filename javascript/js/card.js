function jsonFile(file,callback){
    var ajaxCall=new XMLHttpRequest();
    ajaxCall.overrideMimeType("application/json");
    ajaxCall.open("GET",file,true);
    ajaxCall.onreadystatechange=function(){
        if(ajaxCall.readyState === 4 && ajaxCall.status =="200"){
            callback(ajaxCall.responseText);
        }
    }
    ajaxCall.send(null);
}

// call the function

jsonFile("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data.mydata);
    // details(data.details);
    // arrData(data.mydata);
    
})

// var body=document.querySelector("#root");
// console.log(body);
// var main=document.createElement("section");
// main.classList.add("container");
// body.appendChild(main);

// // creating artical1
// var art1=document.createElement("artical");
// art1.setAttribute("class","artical1");
// main.appendChild(art1);

// // create image
// var image=document.createElement("img");
// image.src="#";
// image.alt="Profile Image";
// art1.appendChild(image);

// // create a function to get the object data
// function details(mydetails){
//     // create element for get the object name
//     var h2=document.createElement("h2");
//     h2.textContent=mydetails.name;
//     h2.style.color="red";
//     art1.appendChild(h2);

//     // create h4 email
//     let email=document.createElement("h4");
//     email.textContent=mydetails.email;
//     art1.appendChild(email);
//     // create h4 phone no here
//     let mob=document.createElement("h4");
//     mob.textContent=mydetails.mobile;
//     art1.appendChild(mob);
// // button creation
//     let btn=document.createElement("a");
//     btn.textContent="Profile";
//     btn.href="#";
//     btn.style.textDecoration="none";
//     art1.appendChild(btn);
// }

// function arrData(arrdetails){
//     for(i in arrdetails){
//         let art1=document.createElement("artical");
//         art1.setAttribute("class","artical2");
//         main.appendChild(art1);

//         // create image
//         var image=document.createElement("img");
//         image.src="#";
//         image.alt="Profile Image";
//         art1.appendChild(image);
//         // create element for get the object name
//         let h2=document.createElement("h2");
//         h2.textContent=arrdetails[i].name;
//         h2.style.color="red";
//         art1.appendChild(h2);

//         // create h4 email
//         let email=document.createElement("h4");
//         email.textContent=arrdetails[i].email;;
//         art1.appendChild(email);
//         // create h4 phone no here
//         let mob=document.createElement("h4");
//         mob.textContent=arrdetails[i].mobile;
//         art1.appendChild(mob);
//     // button creation
//         let btn=document.createElement("a");
//         btn.textContent="Profile";
//         btn.href="#";
//         btn.style.textDecoration="none";
//         art1.appendChild(btn);
//     }
// }