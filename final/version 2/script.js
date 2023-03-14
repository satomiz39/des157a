(function(){
  'use strict';
  console.log('reading.js');

  myform.addEventListener('submit', function(event){
      event.preventDefault();
      console.log('submitting myform')
      document.getElementsByClassName('homeBase')[0].className = 'hidden';
      const fname = document.querySelector('#fname').value;
      const verb = document.querySelector('#verb').value;
      const noun1 = document.querySelector('#noun1').value;
      const adverb = document.querySelector('#adverb').value;
      const plural = document.querySelector('#plural').value;
      const birthday = document.querySelector('#birthday').value;

      console.log(birthday);
      const image1=document.querySelector('#image1');
      image1.src=`images/${birthday}.gif`;
      
      let myText;
      if(fname== ''){
          myText = `please provide a name`;
          document.querySelector('#fname').focus();
      } else if(noun1==''){
          myText = `please provide a noun`;
          document.querySelector('#noun1').focus();
     } else if(adverb==''){
          myText = `please provide a adverb`;
          document.querySelector('#adverb').focus();
      } else if(plural==''){
          myText = `please provide a plural noun`;
          document.querySelector('#plural').focus();
      } else if(verb==''){
          myText = `please provide a verb`;
          document.querySelector('#verb').focus();
      } else {
          myText= `<strong>${fname}</strong>, your sign is <strong>${birthday}</strong>.
          You may run into <strong>${noun1}</strong> today, but don't worry. These are <strong>${plural}</strong>
          you are capable of working around. The tricky part of the situation is that none of these <strong>${plural}</strong>
          is likely to <strong>${verb}</strong>, and you may have absolutely no understanding of why they're there. 
          Try not to take this <strong>${adverb}</strong>.
          <p class=reset><a href=""><strong>Try again</strong></a></p>`; 
        
      }

      madlib.innerHTML = myText;
      document.getElementById('overlay').className = 'showing';
      document.getElementById('headline').className = 'hidden';
  })

  /*showing a new image*/
  function showNextImage() {
    var currentImage = document.querySelector(".image:not(.hidden)");
    var nextImage = currentImage.nextElementSibling;
    
    if (nextImage === null) {
      nextImage = document.querySelector(".image:first-child");
    }
    
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
  }
  
  window.onload = function() {
    var images = document.querySelectorAll(".image");
    
    for (var i = 1; i < images.length; i++) {
      images[i].classList.add("hidden");
    }
  };

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

span.addEventListener('click', function(){
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  }())