export function fetch_data() {


    let Moviesearch = document.getElementById("quer").value;

    var url = `https://api.themoviedb.org/3/search/movie?api_key=132ee0736c8a18d79b761c1749454492&language=en-US&query=${Moviesearch}&page=1&include_adult=false`;
    console.log(url);

    fetch(url).then((res) => {
        res.json().then((data) => {
            for (var i = 0; i < data.results.length; i++) {


                console.log(data.results[i].original_title);






                var show = `<div class="panel">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h3 id="movie_name">${data.results[i].original_title}</h3></div>
                    </div>
                    <img src=https://image.tmdb.org/t/p/w500/${data.results[i].poster_path} alt="Movie name" style="width: 330px;">
                    <p>${data.results[i].overview}</p>

                    <a type="button" class="btn btn-default" href="#myModall" data-toggle="modal" data-target="#myModall" onclick="func2('${data.results[i].original_title}')">Add to Collection</a></li>

                    </div>

                    `;


                document.getElementById("display").innerHTML += show;




            }


        });
    });


}