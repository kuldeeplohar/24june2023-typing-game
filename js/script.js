
let saveRegistrationInfo = ()=> {
    console.log("okok");

    let fn = document.getElementById('first_name').value;
    let ln = document.getElementById('last_name').value;
    let dur = document.querySelector('.k_select').value

    console.log(fn);
    console.log(ln);
    console.log(dur);
    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
    window.localStorage.setItem('duration',dur);
    window.location.reload();

}

   let Logout = ()=>{
    console.log("kk");
    window.localStorage.clear();

    window.location.reload();
   }

    let playAudio = ()=>{
    //console.log("GM")
    let at = document.querySelector('.kAudio');
    at.play();
  }
     
  let start = ()=>{
     // Set the date we're counting down to
    var nextTime = new Date().getTime();  

    nextTime = new Date ( nextTime + (localStorage.getItem('duration') * 60 * 1000))
    setInterval(function(){
      
      // Get today's date and time
      var now = new Date().getTime();
      console.log('current time', now)
      console.log('next time', nextTime)
  
      var distance = nextTime - now;
      
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = minutes + ':'+ seconds ;

      // If the count down is finished, w rite some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
     },1000)
   }

    


     (()=>{

      let currentcharacterposition = 0;
    

     let fn = window.localStorage.getItem('first_name')
     let ln = window.localStorage.getItem('last_name')

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

          //Play sound when press key
      
          document.addEventListener('keypress',(e)=>{
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
          })
  

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

           currentcharacterposition = currentcharacterposition+1
           console.log(currentcharacterposition)
           
          })


          var o = ``;
          for(var i=1; i<=60; i++){
            
            o = o + `<option value = "${i}">${i}</option>`;
          }
          console.log(o);

          document.querySelector('.k_select').innerHTML = o ;

    
          document.querySelector('.k_duration').innerHTML = localStorage.getItem('duration') === null ? '' :localStorage.getItem('duration') + ':00';

          let story = `To Clean a Creek is inspired by the true story of a young boy in Brazil who was saddened by the trash in and around the river near his home. Determined to take action, he inspired the people in his community to work together to clean up the river and restore the natural beauty of the area.
          What role did his friends play in changing their community? Why does it matter? Read and imagine a cleaner, safer world for you and your community.`
          
        
          
          let x = story.split(' ');

          console.log(x.slice(0,20).join(' '))
         
          var content = x.slice(0,20).join(' ')

         document.querySelector('.k_splite').innerHTML = content;

   })();