
exports.min = function min (array) {
  if(array==undefined){
		return 0;
	}else	if (array.length!==0){
	return Math.min(...array);
	} else {
		return 0;
	}
}

exports.max = function max (array) {
  if(array==undefined){
		return 0;
	}else  if (array.length!==0){
	return (Math.max(...array));
	} else {
		return 0;
	}
}

exports.avg = function avg (array) {
	let avge=0;
	for (let i=0;i<array.length;i++){
		avge+=array[i];
		
		
	}
  if(array==undefined){
		return 0;
	}else if(array.length!==0){
	return(avge/array.length);}
	else { return 0;}
  
}
