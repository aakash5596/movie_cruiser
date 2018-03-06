
window.onload = function (){
	var collection={};
}


import $ from 'jquery';

import { fetch_data } from './fetch_data.js';

$("#myBtn").click(function() {
    fetch_data();
});


import { add_to_dropdown } from './add_to_dropdown.js';

$("#myBt").click(function() {
	debugger;
    add_to_dropdown();
});
