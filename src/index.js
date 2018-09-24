module.exports = function getZerosCount(number) {
	if (number>=5){
		return(parseInt(number/5)+getZerosCount(parseInt(number/5)));
}
	else return(0);
}
