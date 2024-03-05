function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

const serviceID = "service_5j59tud";
const templateID = "template_a8m2snl"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = ""; 
        document.getElementById("message").value = "";
        console.log(res);
        alert(" message sent successfully")
    }
)

.catch((err) => console.log(err));

}