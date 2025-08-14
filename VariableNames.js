var name = "sameer"
age = 23
city = "karachi"


// legal Names

var me = ''
var pic1 = ""
var _me = ""
var $ = ""


// illegal Names

var 12 = ""
var @mlak = ""
var true = ""
var false = ""
var ./,./ = " "

document.writeln(`a) A heading stating Rules for naming JS variables
b) Variable names can only contain numbers, $ and _.
For example $my_1stVariable
c) Variables must begin with a letter ,$ or
_. For example $name, _name or name
d) Variable names are case sensitive
e) Variable names should not be JS keywords`)