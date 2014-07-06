//Creates description element
function buildDesc(tag) {	
	var desc = document.createElement("span");
	desc.innerText = tag.description;
	desc.className = "tagDescription";
	
	return desc;
}
//Creates title element

function buildTitle(tag) {
	var title = document.createElement("span");
	if (tag.name !== null) {
		title.innerText = tag.name + ":";
	}
	else {
		title.innerText = tag.dispName + ":";
	}
	title.className = "tagTitle";
	return title;
}

//Creates a new line for imputing a umber
function makeNumLine(tag) {		
	var input = document.createElement("input");
	input.type = "number";
	input.value = tag.value;
	input.onchange = function() {
		set(input, tag);
	};
	
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
	};
	
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

//Adds new tags and their respective page elements
function add(template, too) {		
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
	
	too[template.name !== null ? template.name : template.dispName] = newTag;
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