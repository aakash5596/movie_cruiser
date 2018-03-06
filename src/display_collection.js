function display_collection(name1) {

    document.getElementById("display").innerHTML = "";
    for (item in collection[name1]) {
        var show1 = `<li>${collection[name1][item]}</li>
                    <a type="button" class="btn btn-default" href="#" onclick="func5('${collection[name1][item]}')">Delete</a></li>`


        document.getElementById("display").innerHTML += show1;


    }
}
