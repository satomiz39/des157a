// IIFE
// (function(){
// 'use strict';
//  console.log('reading.js');
// }())

(function(){
  'use strict';
  console.log('reading.js');

  const myform = document.getElementById('myform');
  const madlib = document.querySelector('#madlib');

  myform.addEventListener('submit', function(event){
      event.preventDefault();
      const fname = document.querySelector('#fname').value;
      const verb = document.querySelector('#verb').value;
      const noun = document.querySelector('#noun').value;
      const noun2 = document.querySelector('#noun2').value;
      const adj = document.querySelector('#adj').value;
      const adj2 = document.querySelector('#adj2').value;
      const birthday = document.querySelector('#birthday').value;
      
      let myText;
      if(fname== ''){
          myText = `please provide a name`;
          document.querySelector('fname').focus();
      } else if(noun1==''){
          myText = `please provide a noun`;
          document.querySelector('#noun1').focus();
     } else if(adj==''){
          myText = `please provide a adjective`;
          document.querySelector('#adj').focus();
      } else if(adj2==''){
          myText = `please provide a adjective`;
          document.querySelector('#adj2').focus();
      } else if(verb==''){
          myText = `please provide a verb`;
          document.querySelector('#verb').focus();
      } else {
          myText= `${fname}, your sign is${birthday}.
          You are very ${adj} at school. When you feel ${adj2} you do anything to ${verb} for ${noun}.
          All qualities make ${birthday} a great ${noun2}.`;   
      }
      
      madlib.innerHTML = myText;
      // document.querySelector('#fname').value ='';
      // document.querySelector('#verb').value ='';
      // document.querySelector('#noun1').value ='';
      // document.querySelector('#adj').value ='';
      // document.querySelector('#adj2').value ='';
      // document.querySelector('#noun2').value ='';
      // document.querySelector('#birthday').value ='';
  })
  }())