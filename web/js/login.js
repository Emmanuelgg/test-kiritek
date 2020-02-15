
$(document).ready(() =>{
    console.log(document.cookie)
    $("#login").click((e) => {
        e.preventDefault()
        $.ajax({
            url: `http://localhost:8080/authenticate`,
            contentType: 'application/json',
            type: 'POST',
            dataType: 'json',
            data: `{
                "username": "${$("#inputUsername").val()}",
                "password": "${$("#inputPassword6").val()}"
            }`,
            success: function(data){
                localStorage.setItem('token', data.token)
                Cookies.set('token', data.token)
                console.log(localStorage.getItem('token'))
                window.location.replace("index.html")
            }
        })
    })
})