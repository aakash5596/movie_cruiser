export function add_to_dropdown() {
    let i = 0;

    document.getElementById("dropdown1").innerHTML = "";
    var nm = document.getElementById("Name").value;
    debugger;
    console.log(nm);
    collection[nm] = [];


    for (index in collection) {
       var sh = `<li><a onclick ="func4('${index}')">${index}</a></li>`
        document.getElementById("dropdown1").innerHTML += sh;



    }
}