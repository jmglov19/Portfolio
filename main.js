
function darkmode(){
    console.log(document.body.style.background) 
    var h1 = document.getElementById("h1")
    var about = document.getElementById("about")
    var skills = document.getElementById("skills")
    var form = document.getElementById("form")
    
    if (document.body.style.backgroundColor == "white"){
        document.body.style.background = '#1C2226';
        document.body.style.color = '#208C8C'       
        h1.style.color = 'white' 
        form.style.color = "white"       
        about.style.color = 'white'
        skills.style.color = 'white'
        console.log(document.body.style.backgroundColor)
        document.getElementById("btn").innerHTML = "Light Mode"
    } 
    else{   
       
            document.body.style.background = 'white';
            document.body.style.color = '#1C2226'
            h1.style.color = '#208C8C'           
            about.style.color = '#208C8C'
            skills.style.color = '#208C8C'
            form.style.color = '#208C8C'   
            console.log(document.body.style.backgroundColor)
            document.getElementById("btn").innerHTML = "Dark Mode"
        }
}

