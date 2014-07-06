function compile(structure) {
	var string = "";
	var first = true;
	for (var i in structure) {
		console.log(i);
		//skip the elem which is where the page element is stored
		if (i == "elem") {
			continue;
		}
		//Skip it if the value is not changed
		if (structure[i].value == structure[i].def) {
			continue;
		}
		//Comma separator for items past the first one
		first ? first = false : string += ",";
		string += structure[i].toString();
	}

	return string;
}