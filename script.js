//This function will validate the forms user name ..  User Name should be alphabetic only...
        function nameValidator(s)
        {
           var name = s.value;
           var legalchars=/[A-Za-z]+$/;
           if(!(legalchars.test(name)))
           {
               document.getElementById("Wrong Name").innerHTML = "<font color=red size=3>Username cannot be empty or should be alphabetic only</font>";
               s.value = "";
               document.getElementById("name").focus();
               return false;
           }
           else{
               document.getElementById("Wrong Name").innerHTML = " ";
               return true;
           } 
        }
        // This function will validate the email entered by user..
        function emailValidator(e)
        {
            var email = e.value;
            var legalchars = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // This Regular expression was taken from google. Ensure to verify at server end.
            if(!(legalchars.test(email)))
            {
                document.getElementById("Wrong Email").innerHTML = "<font color=red size=3>Enter a valid email</font>";
                e.value = "";
                document.getElementById("email").focus();
                return false;
            }
            else{
                document.getElementById("Wrong Email").innerHTML = "";
                return true;

            }
        }

        function numberValidator(n)
        {
            var number = n.value;
            var legalchars = /[0-9]+$/;//Update regex according to the country of user
            if(!(legalchars.test(number)))
            {
                document.getElementById("Wrong Number").innerHTML = "<font color=red size=3>Enter numbers only</font>";
                n.value = "";
                document.getElementById("mobile num").focus();
                return false;
            }
            else{
                document.getElementById("Wrong Number").innerHTML = "";
                return true;
            }

        }

        function passwordValidator(p){
            var pass = p.value;
            var legalchars = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
            if(!(legalchars.test(pass)))
            {
                document.getElementById("Wrong password").innerHTML ="<font color=red size=3>Invalid</font>";
                p.value="";
                document.getElementById("pass").focus();
                return false;
            }
            else{
                document.getElementById("Wrong password").innerHTML = "";
                return true;
            }
        }

        function passwordMatcher(p){
            var firstPass = document.getElementById('pass').value;
            var secondPass = p.value;
            if(firstPass!==secondPass)
            {
                document.getElementById("Password Not Match").innerHTML ="<font color=red size=3>Password do not match</font>";
                p.value="";
                document.getElementById('pass').value = "";
                document.getElementById('pass').focus();
                return false;
            }
            else{
                document.getElementById("Password Not Match").innerHTML ="";
                return true;
            }
        }

        let addressValidate = (obj) =>{
            let address = obj.value;
            if(address===null || address ==="")
            {
                document.getElementById("Wrong Address").innerHTML = "<font color=red size=3>Enter the address completely</font>";
                return false;
            }
           else{
                    document.getElementById("Wrong Address").innerHTML = "";
                    return true;
            }
            
        }
        let zipValidator = (obj) =>{
            let zip = obj.value;
            var legalchars = /[0-9]/;
            if(!(legalchars.test(zip)))
            {
                document.getElementById("Wrong Zip").innerHTML = "<font color=red size=3>Enter ZIP (Numeric Only)</font>";
                return false;
            }
            else{
                document.getElementById("Wrong Zip").innerHTML = "";
                return true;
            }
        }

        let checkNumOfBox = (obj) =>{
            let boxes = document.getElementsByName("hobby");
            let numOfChecked = 0;
            for(let i=0;i<boxes.length;i++){
                if(boxes[i].checked)
                    numOfChecked++;
            }
            if(numOfChecked==0)
            {
                alert("Check At least One");
                boxes[0].checked = true;
                return false;
            }
        }
