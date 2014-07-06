function compile(structure) {
	var string = '';
	var first = true;
	for (var i in structure) {
		console.log(i);
		if (i == 'elem') { continue } //skip the elem which is where the page element is stored
		if (structure[i].value == structure[i].def) { continue }	//Skip it if the value is not changed
		first ? first = false : string += ',';	//Comma seperator for items past the first one
		string += structure[i].toString();
	}
	
	return string;
}