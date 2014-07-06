function buildDesc(tag) {	//Creates description element
	var desc = document.createElement("span");
	desc.innerText = tag.description;
	desc.className = "tagDescription";
	
	return desc;
}
function buildTitle(tag) {		//Creates title element
	var title = document.createElement("span");
	if (tag.name != null) {
		title.innerText = tag.name + ":";
	}
	else {
		title.innerText = tag.dispName + ":";
	}
	title.className = "tagTitle";
	
	return title;
}

function makeNumLine(tag) {		//Creates a new line for inputing a umber
	var input = document.createElement("input");
	input.type = "number";
	input.value = tag.value;
	input.onchange = function() {
		set(input, tag);
	}
	
	var title = buildTitle(tag);
	var desc = buildDesc(tag);
	
	var line = document.createElement("li");
	line.className = "line";
	line.appendChild(title);
	line.appendChild(input);
	line.appendChild(desc);
	
	return line;
}
function makeTextLine(tag) {
	var input = document.createElement("input");
	input.type = "text";
	input.value = tag.value;
	input.onchange = function() {
		set(input, tag);
	}
	
	var title = buildTitle(tag);
	var desc = buildDesc(tag);
	
	var line = document.createElement("li");
	line.className = "line";
	line.appendChild(title);
	line.appendChild(input);
	line.appendChild(desc);
	
	return line;
}
function makeCompArea(template, tag) {
	var area = document.createElement("li");
	area.className = "line";
	
	var list = document.createElement("ul");
	tag.value.elem = list;
	
	for (var i in template) {
		if (i != "elem") {
			add(template[i], tag.value);
		}
	}
	
	var title = buildTitle(tag);
	var desc = buildDesc(tag);

	area.appendChild(title);
	area.appendChild(desc);
	area.appendChild(list);
	
	return  area;
}

function add(template, too) {		//Adds new tags and their respective page elements
	var newTag = new Tag(template);
	
	switch (checkKind(newTag)) {
		case "number" :
			newTag.elem = makeNumLine(newTag);
			break;
		case "text" :
			newTag.elem = makeTextLine(newTag);
			break;
		case "comp" :
			newTag.elem = makeCompArea(template.def, newTag);
			break;
		default:
			throw new Error("Invalid case");
	}
	
	too[template.name != null ? template.name : template.dispName] = newTag;
	too.elem.appendChild(newTag.elem);
}

function newEntity(template) {
	var entity = {};
	entity.elem = document.getElementById("inputs");
	
	for (var i in template) {
		add(template[i], entity);
	}
	
	return entity;
}