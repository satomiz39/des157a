(function(){
  'use strict';
  console.log('reading.js');

  const myform = document.getElementById('myform');
  const madlib = document.querySelector('#madlib');

  


  myform.addEventListener('submit', function(event){
      event.preventDefault();
      document.getElementsByClassName('homeBase')[0].className = 'hidden';
      const fname = document.querySelector('#fname').value;
      const verb = document.querySelector('#verb').value;
      const noun1 = document.querySelector('#noun1').value;
      const adverb = document.querySelector('#adverb').value;
      const plural = document.querySelector('#plural').value;
      const birthday = document.querySelector('#birthday').value;
      
      
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

          var img = document.createElement("img");
          img.src = "images/taurus.png";
          document.body.appendChild(img);
      }

      madlib.innerHTML = myText;
      document.getElementById('overlay').className = 'showing';
  })
  }())