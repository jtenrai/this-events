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

// var thumbImage = document.getElementsByTagName('i');
// console.log(thumbImage); 

// instead of writing 3 for loops, you can use just one to add the event listener to the thumb img and also create children elements for the counter
// then in your function, you just want to increment the innerHTML...

// give it a shot and we can review this in class today

// var thumb = document.getElementsByClassName('thumb');
// console.log(thumb);

// thumb.addEventListener('click', plus);

var thumb = document.getElementsByClassName('thumb');
console.log(thumb);

for (var i = 0; i<thumb.length; i++){
    thumb[i].addEventListener('click', dislikeCounter);
}

for (var i = 0; i < thumb.length; i++){
    var counterDiv = document.createElement('div');
    counterDiv.className = 'counterClass';
    counterDiv.innerHTML = 0;
    thumb[i].appendChild(counterDiv);
}

function dislikeCounter(){
    var counterOrigin = this.querySelectorAll('.counterClass')[0];
    counterOrigin.innerHTML++;
}

// for (var i = 0; i < thumb.length; i++){
//     var counterResult = document.createElement('div');
//     counterResult.className = 'counterResult';
//     thumb[i].appendChild(counterResult);
// }






//****************** Attempt *************************** */

// var thumb = document.getElementsByClassName('thumb');
// console.log(thumb);

// for (var i = 0; i<thumb.length; i++){
//     thumb[i].addEventListener('click', dislikeCounter);
// }

// for (var i = 0; i < thumb.length; i++){
//     var counterDiv = document.createElement('div');
//     counterDiv.className = 'counter';
//     counterDiv.innerHTML = 0;
//     thumb[i].appendChild(counterDiv);
// }

// var origin = 0;
// function dislikeCounter(){
//     origin += 1;
//     var newCount = this.querySelectorAll('.counter')[0];
//     newCount.innerHTML = origin;
// } 
// This setup returns a cumulative add for all buttons pushed

//******************  Long-Hand SetUp  ********************** */


// var thumb = document.getElementsByClassName('thumb');
// console.log(thumb);

// thumb[0].addEventListener('click', dislikeCounter0);
// thumb[1].addEventListener('click', dislikeCounter1);
// thumb[2].addEventListener('click', dislikeCounter2);

// var counterDiv0 = document.createElement('div');
// counterDiv0.className = 'counter0';
// thumb[0].appendChild(counterDiv);
// var class0 = document.getElementsByClassName('counter0')

// var counterDiv1 = document.createElement('div');
// counterDiv1.className = 'counter1';
// thumb[1].appendChild(counterDiv1);
// var class1 = document.getElementsByClassName('counter1')

// var counterDiv2 = document.createElement('div');
// counterDiv2.className = 'counter2';
// thumb[2].appendChild(counterDiv2);
// var class2 = document.getElementsByClassName('counter2')

// var origin0 = 0;
// function dislikeCounter0(){
//     origin0 += 1;
//     class0.innerHTML = origin0;
// }