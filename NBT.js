function Tag(template) {
	this.__proto__ = Object.create(template);
	
	var dataType = this.type;
	this.value = this.def;
	
	function isValid(val) {
		switch (dataType) {
			case 'byte' :
				return (val >= -128 && val <= 127 && isInt(val));
			case 'short' :
				return (val >= -32768 && val <= 32767 && isInt(val));
			case 'int' : 
				return (val >= -2147483648 && val <= 2147483647 && isInt(val));
			case 'long' :
				return (val >= -9223372036854775808 && val <= 9223372036854775807 && isInt(val));
			case 'float' :
				return typeof val == 'number';
			case 'double' :
				return typeof val == 'number';
			case 'string' :
				return (typeof val == 'string');
			case 'list' :
				return (typeof val == 'object');
			case 'compound' :
				return (typeof val == 'object');
			default:
				throw new Error(dataType + ' is an unknown type.');
		}
	}
	this.isValid = isValid;
		
	this.setVal = function (val) {
		if (isValid(val)) {
			this.value = val;
			return this.value;
		}
		else {
			throw new Error('"' + val + '" is not a valid ' + this.type + '.');
		}
	}
	
	function isInt(n) {		//Checks that n is not floating point, and that it is a number.
		return (typeof n == 'number') && (n % 1 === 0);
	}
	
	this.toString = function() { 
		var name = '';
		if (this.name != null) {	//When there is a name
			name = this.name + ':';	//We define it, or else it will be an empty string
		}
		
		if (this.type == 'list') {
			return name + '[' + compile(this.value) + ']';	//Always add the name, and if there wasn't one, it will be empty
		}
		else if (this.type == 'compound') {
			return name + '{' + compile(this.value) + '}';
		}
		else {
			return name + this.value.toString();
		}	
	}
	
	
	this.setVal(this.value);
}

function checkKind(tag) {
	switch (tag.type) {
		case 'byte' :
		case 'short' :
		case 'int' :
		case 'long' :
		case 'float' :
		case 'double' :
			return 'number';
		case 'string' :
			return 'text';
		case 'list' :
		case 'compound' :
			return 'comp';
		default:
			throw new Error('Invalid Tag');
	}
}