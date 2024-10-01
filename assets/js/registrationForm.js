let url = 'https://script.google.com/macros/s/AKfycbxgpE8iftx3J8Xo4Zs350WpipxAqjbLw6NQBIKtokpX08BmuMd2aOZh5Ene3OyJ0bZJ9A/exec'
let regForm = document.querySelector('#regForm');
regForm.addEventListener("submit",(e)=>{

    e.target.btn.innerHTML="Submitting...";

    let value = new FormData(regForm);
    fetch(url, {
        method:"post",
        body:value
    }).then((res)=>res.text()).then((finalRes)=>{
        e.target.btn.innerHTML="Submit";
        document.getElementById("res").innerHTML=finalRes;
        regForm.reset();
        setTimeout(()=>{
            document.getElementById("res").innerHTML='';
        },5000)
        
    });
    e.preventDefault();
})