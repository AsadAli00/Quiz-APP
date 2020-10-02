function signup() {
    let email = document.getElementById('Email')
    let pass = document.getElementById("Password")
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
        .then((result) => {
            console.log(result)
            let mainDiv = document.getElementById("successfullModal")
            let innerDiv = document.createElement("div");
            innerDiv.setAttribute("class", "modal-dialog")
            mainDiv.appendChild(innerDiv);
            let inner1div = document.createElement("div")
            inner1div.setAttribute("class", "modal-content")
            innerDiv.appendChild(inner1div);
            let inner2div = document.createElement('div')
            inner2div.setAttribute("class", "modal-body")
            inner2div.setAttribute("id","signup-message")
            inner1div.appendChild(inner2div);
            let p = document.createElement("p")
            inner2div.appendChild(p);
            p_text = document.createTextNode("Successfull signup");
            p.appendChild(p_text);
            setTimeout(() => {
                // let dataMsgDismiss = document.getElementById('dataMsgDismiss')
                // dataMsgDismiss.click()
                let dataDismiss = document.getElementById('dataDismiss')
                console.log(dataDismiss)
                dataDismiss.click()
                location.reload()
                // let signupModal = document.getElementById("signupModal")
                // console.log(s)

            }, 1000)
        })
        // let signup_message = document.getElementById("signup-message")
        // let p = document.createElement("p")
        // signup_message.appendChild(p);
        // p_text =document.createTextNode("Successfull signup");
        // p.appendChild(p_text);



        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            let mainDiv = document.getElementById("successfullModal")
            let innerDiv = document.createElement("div");
            innerDiv.setAttribute("class", "modal-dialog")
            mainDiv.appendChild(innerDiv);
            let inner1div = document.createElement("div")
            inner1div.setAttribute("class", "modal-content")
            innerDiv.appendChild(inner1div);
            let inner2div = document.createElement('div')
            inner2div.setAttribute("class", "modal-body")
            inner2div.setAttribute("id","signup-message")
            inner1div.appendChild(inner2div);
            let p = document.createElement("p")
            inner2div.appendChild(p);
            p_text = document.createTextNode(errorMessage);
            p.appendChild(p_text);

            setTimeout(() => {
                // let dataMsgDismiss = document.getElementById('dataMsgDismiss')
                // dataMsgDismiss.click()
                let dataDismiss = document.getElementById('dataDismiss')
                console.log(dataDismiss)
                dataDismiss.click()
                location.reload()
                // let signupModal = document.getElementById("signupModal")
                // console.log(s)

            }, 5000)
        });
}




let signin = () => {
    let email = document.getElementById('email')
    let password = document.getElementById("password")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            // alert("login Successfully")
            console.log("login Successfully")
            parent.location="home.html"
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            console.log(errorMessage);
            
        });


}

function facebookLogin(){
    console.log("facebook")
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("login facebook")
        window.location = "home.html";
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      }); 
}

function googleLogin(){
    console.log("google")
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location = "home.html"
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}