document.addEventListener('DOMContentLoaded',() => {
    const submit = document.querySelector("#submit");
    submit.disabled = true;

    function button(){
        const studentId = document.querySelector("#Id").value.replace(/\s/g, '');
        const studentName = document.querySelector("#Name").value;

        if(studentId.length == 13 && !isNaN(studentId) && studentName.length > 0){
            submit.disabled = false;
        }
        else{
            submit.disabled = true;
        }
    }
    
    document.querySelector("#Id").onkeyup = button;
    document.querySelector("#Name").onkeyup = button;
    
    document.querySelector("form").onsubmit = (event)=>{
        event.preventDefault();
        const student_id = document.querySelector("#Id").value;
        const student_name = document.querySelector("#Name").value.toUpperCase();
        const Json = {"id":student_id,"name":student_name};
        
        fetch("https://206.189.146.138/api/students",{
            method:"POST",
            headers:{"Content-type": "application/json",},
            body: JSON.stringify(Json)
        })

        .then((response) => response.json())

        .then((data) => {
            console.log(data);
            alert(`${student_name} ${student_id} has been submitted`);
        })
        .catch(error => console.error('Error:', error));
    }  
})
