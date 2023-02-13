(function(){
  'use strict';
  console.log('reading.js');

  const myform = document.getElementById('myform');
  const madlib = document.querySelector('#madlib');
  let textSize = document.querySelector('#frame');
  


  myform.addEventListener('submit', function(event){
      event.preventDefault();
      document.getElementsByClassName('homeBase')[0].className = 'hidden';
      const fname = document.querySelector('#fname').value;
      const verb = document.querySelector('#verb').value;
      const noun1 = document.querySelector('#noun1').value;
      const noun2 = document.querySelector('#noun2').value;
      const adj1 = document.querySelector('#adj1').value;
      const adj2 = document.querySelector('#adj2').value;
      const birthday = document.querySelector('#birthday').value;
      
      let myText;
      if(fname== ''){
          myText = `please provide a name`;
          document.querySelector('#fname').focus();
      } else if(noun1==''){
          myText = `please provide a noun`;
          document.querySelector('#noun1').focus();
     } else if(adj1==''){
          myText = `please provide a adjective`;
          document.querySelector('#adj1').focus();
      } else if(adj2==''){
          myText = `please provide a adjective`;
          document.querySelector('#adj2').focus();
      } else if(verb==''){
          myText = `please provide a verb`;
          document.querySelector('#verb').focus();
      } else {
          myText= `${fname}, your sign is ${birthday}.
          You are very ${adj1} at school. When you feel ${adj2} you do anything to ${verb} for ${noun1}.
          All qualities make ${birthday} a great ${noun2}.`; 
      }

      madlib.innerHTML = myText;
      document.getElementById('overlay').className = 'showing';
  })
  }())