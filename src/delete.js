
function delete(name2) {

    for (item in collection) {

        for (value in item) {
            if (collection[item][value] == name2) {

                collection[item].pop(name2);
                console.log(collection);



            }

        }

    }


}






