const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
$(document).ready(() =>{
    $.ajax({
        url: `http://localhost:8080/book/${id}`,
        type: 'GET',
        // data: $("#formularioAgregar").serialize(),
        success: function(data){
            console.log(data);
            $("#bookContainer").append(`
                <div class="col-12" style="margin:1%;">
                    <div class="card">
                        <img class="card-img-top mx-auto" src="${data.cover}" alt="Card image cap" style="width: 300px; 250px;">
                    <div class="card-body">
                        <p class="card-text">${data.synopsis}</p>
                    </div>
                </div>
            `)
        }
    })

    getReviews()

    $("#sendReview").click((e) => {
        e.preventDefault()
        console.log(localStorage.getItem('token'))
        $.ajax({
            url: `http://localhost:8080/review/add/${id}`,
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: `{
                "review": "${$("#newReview").val()}"
            }`,
            success: function(data){
                
                console.log(data);
            }
        })
        getReviews()
    })
})

let getReviews = () => {
    $.ajax({
        url: `http://localhost:8080/review/all/${id}`,
        type: 'GET',
        // data: $("#formularioAgregar").serialize(),
        success: function(data){
            var size = Object.size(data);
            console.log(size);
            if(!size) {
                $("#reviewsContainer").append(`
                    <div class="col-6 text-center" style="margin:1%; border-bottom: 1px solid black;">
                        <h3>Sin reseñas </h3>
                    </div>
                `)
                return null
            } 
            $("#reviewsContainer").html("")
            data.map((value, index) => {
                $("#reviewsContainer").append(`
                    <div class="col-6" style="margin:1%; border-bottom: 1px solid black;">
                        <p>${value.review} </p>
                    </div>
                `)
            })
        }
    })
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};