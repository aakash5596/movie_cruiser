function display_list_on_modal(name) {
    document.getElementById("modal").innerHTML = "";

    for (index in collection) {
        var shi = ` <h3> <a href="#" id="index" onclick="func3('${index}','${name}')">${index}</a></h3> `
        document.getElementById("modal").innerHTML += shi;

    }



}