// calling imgs
var images = ['../images/sale.jpeg', '../images/random.png'];
      var x = 0;
      var imgs = document.getElementById('img');
      setInterval(slider, 3000);
      // class imgs by length
      function slider() {
        if (x < images.length) {
        x = x + 1;
        } else {
        x = 1;
        }
      imgs.innerHTML = "<img src=" + images[x - 1] + ">";
    }
    // when clicked on button alearts 
    function btn() {
      alert("Sorry! we have not started to sell.");
    }