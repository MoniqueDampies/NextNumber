function* nextNumber(len, list) {
	let result = [];
	let val = 0;
	
	while (val < list.length) {
		result = [];
		let i = val
		while(i < val + len)
		{
			if (list[i]) {
				result.push(list[i]);
			}
		i+=1
		}
	
		yield result;
		val += len;
	}
}
list = [
	'1','3','5',
	'7','9','11',
	'13','15','17',
	'19','21'
];

document.getElementById("list").innerHTML = list;

var myArray = nextNumber(1, list);			
	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");	
document.writeln(myArray.next().value+"<br>");		
