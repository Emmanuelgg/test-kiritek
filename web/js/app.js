$(document).ready(() =>{
    $.ajax({
        url: 'http://localhost:8080/book/all',
        type: 'GET',
        // data: $("#formularioAgregar").serialize(),
        success: function(data){
            console.log(data);
            data.map((value, index) => {
                $("#booksContainer").append(`
                    <div class="col-md-3 col-sm-4" style="margin:1%;">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${value.cover}" alt="Card image cap" style="width: 250px; height: 350px;">
                            <div class="card-body">
                            <h5 class="card-title">${value.title}</h5>
                            <p class="card-text" style="white-space: nowrap;text-overflow: ellipsis;width: 100%; display: block; overflow: hidden">${value.synopsis}</p>
                            <a href="detail.html?id=${value.id}" class="btn btn-primary">Detalles</a>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
    })
})