
let saveRegistrationInfo = ()=> {
    console.log("okok");

    let fn = document.getElementById('first_name').value;
    let ln = document.getElementById('last_name').value;

    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
    window.location.reload();

}

   let Logout = ()=>{
    console.log("kk");
    window.localStorage.clear();

    window.location.reload();
   }

  (()=>{
     let fn = window.localStorage.getItem('first_name')
     let ln = window.localStorage.getItem('last_name')
     
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
  })();