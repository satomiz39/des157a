(function(){
  'use strict';

  window.addEventListener('load', function(){
    const sections = document.querySelectorAll('section');
    let sectionTops = [];
    let documentTop;
    let counter = 0;
    const parachute = document.querySelector('#parachute');
    const hiker = document.querySelector('#hiker');
    const diver = document.querySelector('#diver');
    const sectionHeight = document.querySelector('section').offsetHeight;
    const para1 = document.querySelector('#para1')
    const para2 = document.querySelector('#para2')
    const para3 = document.querySelector('#para3')
    const mountain = document.querySelector('#mountain');
   const mountainTop = mountain.getBoundingClientRect().top;
   console.log(mountainTop);
    
    sections.forEach(function(section){
          sectionTops.push(Math.floor(section.getBoundingClientRect().top) + window.pageYOffset);
    });

    window.addEventListener('scroll', function(){
    documentTop = window.pageYOffset;
  
    // the user is scrolling down
    if (documentTop > sectionTops[counter]){
        // increment counter
            counter++;
            console.log(`scrolling down ${counter}`);
           
        // the user is scrolling up
        } else if (counter > 1 && documentTop < sectionTops[counter-1]){
            // decrement counter
            counter--;
            console.log(`scrolling up ${counter}`)
        }

        // call functions based on which section is in viewport
        switch(counter){
          case 1: moveParachute(); break;
          case 2: moveHiker(); break;
          case 3: moveDiver(); break;
          default:break;
        }

        function moveParachute(){
          // create position for parachute based on the scrollY position - height of element; change values for different speeds of movement         
          const newPosition = (window.scrollY * 2) - 200;

          // Set the element's top property to the new position
          parachute.style.top = `${newPosition}px`;

          // At about 70% of section, fade out parachute
          if (newPosition > sectionHeight * .6){
            parachute.className = 'fadeout';
            para1.className = 'fadeout moveoutleft';
          
          } else {
            parachute.className = 'fadein'
            para1.className = 'fadein moveinleft';
            
          }
        }

        function moveHiker(){
           // create position for hiker based on the scrollY position - height of element; change values for different speeds of movement
          const newPosition = (window.scrollY * 2) - 200;

          // the multiplier value was trial and error; it should be at least 2 for section section height
          if (newPosition > sectionHeight * 2.2){
            hiker.className='movein';
            para2.className = 'fadein moveoutleft';
          } else {
            hiker.className='moveout';
            para2.className = 'fadeout moveinleft';
          }
        }

        function moveDiver(){
          // the multiplier value was trial and error; it should be at least 2 for section section height
          if (window.scrollY > sectionHeight * 2.25){
            diver.className='showdiver';
            para3.className='showdiver';
          } else {
            diver.className='hidediver';
            par3.className='hidediver';
          }

        }


      }) // end window scroll function
      
    }); // end window load function

})()