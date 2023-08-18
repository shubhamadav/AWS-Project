document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const signInBtn = document.getElementById('singinbtn');

    signInBtn.addEventListener('click', async function (event) {
        event.preventDefault();

        const name = document.querySelector('#namefield input').value;
        const email = document.querySelector('[type="email"]').value;
        const password = document.querySelector('[type="password"]').value;

        const formData = {
            name: name,
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3000/user/signup', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                
            } else {
               
                console.error('Error:', response.statusText); 
            }
        } catch (error) {
           
            console.error('Network error:', error);
        }
    });
});
