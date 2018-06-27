//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navi = document.getElementsByClassName('navi');
console.log(navi);

for (var i = 0; i < navi.length; i++){
    console.log(navi[i]);
    navi[i].addEventListener('click', showNav);
}

function showNav(){
    var hiddenNav = this.querySelectorAll('.inner')[0];
    if (hiddenNav.style.display === 'none')
    {
        hiddenNav.style.display = 'block';
    } else 
    {
        hiddenNav.style.display = 'none';
    }
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var fastFoodName = document.getElementsByClassName('name');
console.log(fastFoodName);

for (var i = 0; i < fastFoodName.length; i++){
    fastFoodName[i].addEventListener('click', showItem);
}

function showItem(){
    var hiddenItem = this.querySelectorAll('.menu')[0];
    if (hiddenItem.style.display === 'none'){
        hiddenItem.style.display = 'block';
    } else 
    {
        hiddenItem.style.display = 'none';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
var thumb = document.getElementsByClassName('thumb');
console.log(thumb);

for (var i = 0; i<thumb.length; i++){
    thumb[i].addEventListener('click', dislikeCounter);
}

for (var i = 0; i < thumb.length; i++){
    var counterDiv = document.createElement('div');
    counterDiv.className = 'counter';
    // counterDiv.innerHTML = 0;
    thumb[i].appendChild(counterDiv);

}

var counterList = document.getElementsByClassName('counter');
// console.log(counterList); length 3;


function dislikeCounter(){
    // var originalCount = this.querySelectorAll('.counter')[0];
    var newCount = this.querySelectorAll('.counter')[0];
    newCount += 1;
    newCount.innerHTML = newCount;
} 





// var origin = 0;
// function dislikeCounter(){
//     // var originalCount = this.querySelectorAll('.counter')[0];
//     origin += 1;
//     var newCount = this.querySelectorAll('.counter')[0];
//     newCount.innerHTML = origin;
// } This setup returns a cumulative add for all buttons pushed


// function dislikeCounter(){
//     var dislikes = this.querySelectorAll('.counter')[0];
//     dislikes.style.counterIncrement = 'subsection'; 
//     dislikes.innerHTML = dislikes;
// }

