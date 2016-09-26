

 var left =  setInterval(function() {

    var col = '#';
    var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set  colors
    col += letters[Math.floor(Math.random() * letters.length)];

    document.getElementById('box1').style.background = col;
  },500);


 var right = document.querySelector('#box2').addEventListener('click', function(e) {

    // This should be refactored to a function
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);


    e.target.style.backgroundColor = 'rgb(' + red + ', '+ green + ', ' + blue + ')';
})

// Compare function and alert msg.

// if (''+left === ''+right) {
//     alert('Hooray!! You match the color');
// }else{
//   alert(Sorry ! Try again);
// }

