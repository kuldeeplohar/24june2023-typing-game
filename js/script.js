    let pertwolinecharactercount = 120 ;
    let intialsequeance = 1;
    let currentcharterlocation=0;
    let nextchar = '';
    let currentchar = '';
    let totalcharacter = 1720
    let correctCharacters = 0;
  
   
    
  let saveRegistrationInfo = ()=> {
      console.log("okok");

      let fn = document.getElementById('first_name').value;
      let ln = document.getElementById('last_name').value;
      let dur = document.querySelector('.k_select').value
      let typevalue = document.querySelector('.wpmrohit').value
     

      console.log(fn);
      console.log(ln);
      console.log(dur);
      window.localStorage.setItem('first_name',fn);
      window.localStorage.setItem('last_name',ln);
      window.localStorage.setItem('duration',dur);
     
      window.location.reload();

   }


   var Logout = ()=>{
    console.log("kk");
    window.localStorage.clear();

    window.location.reload();
   }

    let playAudio = ()=>{
    //console.log("GM")
    let at = document.querySelector('.kAudio');
    at.play();
  }
    let playAudioEs = ()=>{
    //console.log("GM")
    let es = document.querySelector('.tAudio');
    es.play();
  }
     
  let start = () => {
    var nextTime = new Date().getTime();
    nextTime = new Date(nextTime + localStorage.getItem('duration') * 60 * 1000);
    var countdownInterval = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
      var distance = nextTime - now;
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = minutes + ':' + seconds;
  
      // If the count down is finished, show the modal and reload the page
      if (distance <= 0) {
        clearInterval(countdownInterval);
  
        // Show the modal by removing the 'fade' class and adding 'show' to the modal element
        var modal = document.getElementById("myModal");
        modal.classList.remove("fade");
        modal.style.display = "block";
                                    
      }
    }, 1000);
  };
  
  



     (()=>{

   
    

     let fn = window.localStorage.getItem('first_name')
     let ln = window.localStorage.getItem('last_name')
     let typevalue = window.localStorage.getItem('typingSpeed')

     let l1 = document.querySelector('.l1');
     let l2 = document.querySelector('.l2');
     let l3 = document.querySelector('.l3');
     let l4 = document.querySelector('.l4');
     let l5 = document.querySelector('.l5');
     let r1 = document.querySelector('.r1');
     let r2 = document.querySelector('.r2');
     let r3 = document.querySelector('.r3');
     let r4 = document.querySelector('.r4');
     let r5 = document.querySelector('.r5');
     
     
    console.log("page loaded successfully")

    var modal = document.getElementById('registrationModel');

    var modalInstance = new bootstrap.Modal(modal);

    console.log(window.localStorage.getItem('first_name'));
            if(window.localStorage.getItem('first_name') === null ){
                modalInstance.show();
            }

            if(window.localStorage.getItem('first_name') !== null) {
               document.querySelector('.k_welcome').innerHTML = 'Welcome ' + fn + " " + ln;
            }
            if(window.localStorage.getItem('typingSpeed') !== null) {
              document.querySelector('.wpmrohit').innerHTML ='Typing speed:' + typevalue + " WPM";
           }

          //Play sound when press key
      
          document.addEventListener('keypress',(e)=>{
       
            var wpmElement = document.getElementById("wpm");     
            var textContent = wpmElement.textContent;
            var numericValue = textContent.match(/\d+/)[0]; 
            localStorage.setItem("typingSpeed", numericValue);
       
            currentchar = e.key

            if(currentchar !== nextchar){
              playAudioEs()
            }else{
              playAudio()
            }



             currentcharterlocation++;
            //console.log('=>',e.keyCode);
            if(e.keyCode == 97){ 
             
             let a = document.querySelector('.k_a');
             
             console.log(a.classList.add("k_active"));
            
             
            l1.style.display = 'block'
            
            }
            if(e.keyCode == 115){ 
             
              let s = document.querySelector('.k_s');
              
              console.log(s.classList.add("k_active"));
             
              
             l2.style.display = 'block'
             }
             if(e.keyCode == 100){ 
             
              let d = document.querySelector('.k_d');
              
              console.log(d.classList.add("k_active"));
             
              
             l3.style.display = 'block'
             }

             if(e.keyCode == 102){ 
             
              let f = document.querySelector('.k_f');
              
              console.log(f.classList.add("k_active"));
             
              
             l4.style.display = 'block'
             }
             if(e.keyCode == 103){ 
             
              let g = document.querySelector('.k_g');
              
              console.log(g.classList.add("k_active"));
             
              
             l4.style.display = 'block'
             }
             if(e.keyCode == 113){ 
             
              let q = document.querySelector('.k_q');
              
              console.log(q.classList.add("k_active"));
             
              
             l1.style.display = 'block'
             }
             if(e.keyCode == 119){ 
             
              let w = document.querySelector('.k_w');
              
              console.log(w.classList.add("k_active"));
             
              
             l2.style.display = 'block'
             }
             if(e.keyCode == 101){ 
             
              let e = document.querySelector('.k_e');
              
              console.log(e.classList.add("k_active"));
             
              
             l3.style.display = 'block'
             }
             if(e.keyCode == 114){ 
             
              let r = document.querySelector('.k_r');
              
              console.log(r.classList.add("k_active"));
             
              
             l4.style.display = 'block'
             }
             if(e.keyCode == 116){ 
             
              let t = document.querySelector('.k_t');
              
              console.log(t.classList.add("k_active"));
             
              
             l1.style.display = 'block'
             }
             if(e.keyCode == 122){ 
             
              let z = document.querySelector('.k_z');
              
              console.log(z.classList.add("k_active"));
             
              
             l1.style.display = 'block'
             }
             if(e.keyCode == 120){ 
             
              let x = document.querySelector('.k_x');
              
              console.log(x.classList.add("k_active"));
             
              
             l2.style.display = 'block'
             }
             if(e.keyCode == 99){ 
             
              let c = document.querySelector('.k_c');
              
              console.log(c.classList.add("k_active"));
             
              
             l3.style.display = 'block'
             }
             if(e.keyCode == 98){ 
             
              let b = document.querySelector('.k_b');
              
              console.log(b.classList.add("k_active"));
             
              
             l4.style.display = 'block'
             }
             if(e.keyCode == 96){ 
             
              let backtic  = document.querySelector('.k_backtic');
              
              console.log(backtic.classList.add("k_active"));
             
              
             l1.style.display = 'block'
             }
             if(e.keyCode == 49){ 
             
              let k1 = document.querySelector('.k_1');
              
              console.log(k1.classList.add("k_active"));
             
              
             l1.style.display = 'block'
             }
             if(e.keyCode == 50){ 
             
              let k2 = document.querySelector('.k_2');
              
              console.log(k2.classList.add("k_active"));
             
              
             l2.style.display = 'block'
             }
             if(e.keyCode == 51){ 
             
              let k3 = document.querySelector('.k_3');
              
              console.log(k3.classList.add("k_active"));
             
              
             l3.style.display = 'block'
             }
             if(e.keyCode == 52){ 
             
              let k4 = document.querySelector('.k_4');
              
              console.log(k4.classList.add("k_active"));
             
              
             l4.style.display = 'block'
             }
             if(e.keyCode == 53){ 
             
              let k5 = document.querySelector('.k_5');
              
              console.log(k5.classList.add("k_active"));
             
              
             l4.style.display = 'block'
             }
             if(e.keyCode == 54){ 
             
              let k6 = document.querySelector('.k_6');
              
              console.log(k6.classList.add("k_active"));
             
              
             r2.style.display = 'block'
             }
             if(e.keyCode == 55){ 
             
              let k7 = document.querySelector('.k_7');
              
              console.log(k7.classList.add("k_active"));
             
              
             r2.style.display = 'block'
             }
             if(e.keyCode == 53){ 
             
              let k5 = document.querySelector('.k_5');
              
              console.log(k5.classList.add("k_active"));
             
              
             l4.style.display = 'block'
             }
             if(e.keyCode == 56){ 
            
              let k8 = document.querySelector('.k_8');
              
              console.log(k8.classList.add("k_active"));
             
              
             r3.style.display = 'block'
             }
             if(e.keyCode == 57){ 
             
              let k9 = document.querySelector('.k_9');
              
              console.log(k9.classList.add("k_active"));
             
              
             r4.style.display = 'block'
             }
             if(e.keyCode == 48){ 
             
              let k0 = document.querySelector('.k_0');
              
              console.log(k0.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 45){ 
             
              let k_des = document.querySelector('.k_des');
              
              console.log(k_des.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             } 
             if(e.keyCode == 61){ 
             
              let k_equal = document.querySelector('.k_equal');
              
              console.log(k_equal.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 104){ 
             
              let k_h = document.querySelector('.k_h');
              
              console.log(k_h.classList.add("k_active"));
             
              
             r2.style.display = 'block'
             }
             if(e.keyCode == 106){ 
             
              let k_j = document.querySelector('.k_j');
              
              console.log(k_j.classList.add("k_active"));
             
              
             r2.style.display = 'block'
             }
             if(e.keyCode == 107){ 
             
              let k_k = document.querySelector('.k_k');
              
              console.log(k_k.classList.add("k_active"));
             
              
             r3.style.display = 'block'
             }
             if(e.keyCode == 108){ 
             
              let k_l = document.querySelector('.k_l');
              
              console.log(k_l.classList.add("k_active"));
             
              
             r4.style.display = 'block'
             }
             if(e.keyCode == 59){ 
             
              let k_c1 = document.querySelector('.k_colen');
              
              console.log(k_c1.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 39){ 
             
              let kc1 = document.querySelector('.k_c1');
              
              console.log(kc1.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 110){ 
             
              let kn = document.querySelector('.kn');
              
              console.log(kn.classList.add("k_active"));
             
              
             r2.style.display = 'block'
             }
             if(e.keyCode == 13){ 
             
              let kenter = document.querySelector('.enter');
              
              console.log(kenter.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 109){ 
             
              let km = document.querySelector('.km');
              
              console.log(km.classList.add("k_active"));
             
              
             r3.style.display = 'block'
             }
             if(e.keyCode == 44){ 
             
              let k11= document.querySelector('.k__');
              
              console.log(k11.classList.add("k_active"));
             
              
             r4.style.display = 'block'
             }
             if(e.keyCode == 46){ 
             
              let k_dot = document.querySelector('.k_dot');
              
              console.log(k_dot.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 47){ 
             
              let k_slesh = document.querySelector('.k_slesh');
              
              console.log(k_slesh.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 121){ 
             
              let k_y = document.querySelector('.k_y');
              
              console.log(k_y.classList.add("k_active"));
             
              
             r2.style.display = 'block'
             }
             if(e.keyCode == 117){ 
             
              let k_u = document.querySelector('.k_u');
              
              console.log(k_u.classList.add("k_active"));
             
              
             r2.style.display = 'block'
             }
             if(e.keyCode == 105){ 
             
              let k_i = document.querySelector('.k_i');
              
              console.log(k_i.classList.add("k_active"));
             
              
             r4.style.display = 'block'
             }
             if(e.keyCode == 111){ 
             
              let k_o = document.querySelector('.k_o');
              
              console.log(k_o.classList.add("k_active"));
             
              
             r4.style.display = 'block'
             }
             if(e.keyCode == 111){ 
             
              let k_o = document.querySelector('.k_o');
              
              console.log(k_o.classList.add("k_active"));
             
              
             r4.style.display = 'block'
             }
             if(e.keyCode == 112){ 
             
              let k_p = document.querySelector('.k_p');
              
              console.log(k_p.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 93){ 
             
              let kka = document.querySelector('.kka');
              
              console.log(kka.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 91){ 
             
              let kkk = document.querySelector('.kkk');
              
              console.log(kkk.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 92){ 
             
              let k_backslash = document.querySelector('.k_backslash');
              
              console.log(k_backslash.classList.add("k_active"));
             
              
             r5.style.display = 'block'
             }
             if(e.keyCode == 32){ 
             
              let k_sp = document.querySelector('.k_sp');
              
              console.log(k_sp.classList.add("k_active"));
             
              
             l5.style.display = 'block'
             }

            
           
             playAudio();
  
            function extractSubstrings(inputString, startIndex, length) {
              return inputString.substr(startIndex, length);
              }

            console.log('intialsequeance',intialsequeance)
            console.log('currentcharterlocation',currentcharterlocation)
            console.log('pertwolinecharactercount', pertwolinecharactercount)
     
            if(pertwolinecharactercount <= currentcharterlocation){
             currentcharterlocation=0
             intialsequeance++;
               console.log('newintialsequeance',intialsequeance)
         
            }


             const startIndex = (intialsequeance  -1 ) * pertwolinecharactercount;
             const substring = extractSubstrings(story, startIndex, pertwolinecharactercount);
             console.log('Current Substring:', substring);
             document.querySelector('.k_paragraph').innerHTML = substring
     
             let part1 = substring.slice(0, currentcharterlocation) ; // Similar to using substring()
             let part2 = substring.slice(currentcharterlocation); // End index omitted to include till the end
             nextchar=part2[0]
            
             console.log('part-1==>',part1); 
             console.log('part-2==>',part2);
             console.log('nextchar==>',nextchar);
     
     
             let a = `<span style='color:red '>${part1}</span>`+ `<span style='color:blue;text-decoration:underline;'>${part2[0]}</span>`+`<span style='color:green ' >${part2.slice(1)}</span>`;
             document.querySelector('.k_paragraph').innerHTML =  a
       
          })
            
          document.addEventListener("DOMContentLoaded", function () {
            const inputField = document.getElementById("inputField");
            var startTimerBtn = document.getElementById("startButton");
            const wpmElement = document.getElementById("wpm");

            
        
            let startTime, wordCount = 0;
            let timeoutId;
        
            startTimerBtn.addEventListener("click", function () {
                inputField.value = "";
                wpmElement.textContent = "Typing speed: 0 WPM";
                inputField.removeAttribute("disabled");
                inputField.focus();
                startTime = null;
                wordCount = 0;
                clearTimeout(timeoutId); // Clear any existing timeouts
                timeoutId = setTimeout(stopTypingTest, 60000); // 60 seconds timeout
                localStorage.setItem("typingSpeed", "0"); // Set initial typing speed in local storage
            });
        
            inputField.addEventListener("input", function () {
                if (!startTime) {
                    startTime = Date.now();
                }
        
                wordCount = inputField.value.trim().split(/\s+/).length;
        
                const elapsedTimeInSeconds = (Date.now() - startTime) / 1000;
                const wordsPerMinute = Math.round((wordCount / elapsedTimeInSeconds) * 60);
        
                wpmElement.textContent = `Typing speed: ${wordsPerMinute} WPM`;
            });
        
            function stopTypingTest() {
                inputField.setAttribute("disabled", "disabled");
                startTimerBtn.setAttribute("disabled", "disabled");
            }
        });
        
        
  

          document.addEventListener('keyup', (e)=>{
          console.log(e);
           
           var elements = document.getElementsByClassName('k_active');
           for(var i = 0; i < elements.length; i++){ 
            elements[i].classList.remove("k_active");
           }
           l1.style.display = "none"
           l2.style.display = "none"
           l3.style.display = "none"
           l4.style.display = "none"
           l5.style.display = "none"
           r1.style.display = "none"
           r2.style.display = "none"
           r3.style.display = "none"
           r4.style.display = "none"
           r5.style.display = "none"

          
           
          })
              //code working for before the press button keys disabled
            function preventKeyEvents(event) {
              event.preventDefault();
            }
         
            document.addEventListener('keydown', preventKeyEvents);
            document.addEventListener('keyup', preventKeyEvents);
  
            document.getElementById('startButton').addEventListener('click', function() {
              // Remove the event listeners when the start button is clicked
              document.removeEventListener('keydown', preventKeyEvents);
              document.removeEventListener('keyup', preventKeyEvents);

              // Add your start button logic here
            });
       
                  
    
          var o = ``;
          for(var i=1; i<=60; i++){

            
            o = o + `<option value = "${i}">${i}</option>`;
          }
          console.log(o);

          document.querySelector('.k_select').innerHTML = o ;

    
          document.querySelector('.k_duration').innerHTML = localStorage.getItem('duration') === null ? '' :localStorage.getItem('duration') + ':00';

          let story =(`In the tapestry of life, challenges and opportunities are woven together in a delicate dance. Each day brings a chance for you to paint your own masterpiece, to carve your path through the intricate landscape of existence. Remember, it's not the absence of adversity, but your response to it that defines your journey. Embrace setbacks as stepping stones, for they lead to growth and resilience. Let your dreams be the guiding stars that ignite your passions and fuel your determination.
          In the symphony of time, your actions play the notes that reverberate into the future. Your efforts, no matter how small they may seem, have the power to ripple across the universe, touching lives and shaping destinies. Even when doubt casts its shadow, remember the strength that resides within you. Draw inspiration from the countless souls who have overcome obstacles just like yours and emerged stronger, wiser, and more compassionate.
          The road to success winds through valleys of uncertainty and climbs peaks of triumph. It demands perseverance, courage, and an unwavering belief in your capabilities. As you navigate this intricate path, keep your vision clear and your heart aflame with passion. Let each sunrise remind you that you have a fresh canvas to paint upon, a new page to script your story.
          So, stand tall in the face of adversity, for within you lies a reservoir of untapped potential. Seize the day with the conviction that you are the author of your narrative. Let your actions be guided by hope, kindness, and a fierce determination to sculpt the life you envision. As you journey forward, remember that the most extraordinary tales are often born from the most challenging chapters.`)
          
          let x = story.split(' ');

          console.log(x.slice(0,10).join(' '))
         
          var content = x.slice(0,10).join(' ')

         document.querySelector('.k_splite').innerHTML = content;

    

   })();