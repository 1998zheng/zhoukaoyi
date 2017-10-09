var arr = [1,2,3,5,6,8,7,5,1,2];
function one(arr){
	var brr = [];
	for(var i=0;i<arr.length;i++){
		if(brr.indexOf(arr[i]) == -1){
			brr.push(arr[i]);
		}
	}
	return brr;
}
console.log(one(arr));
function two(arr){
	var brr = [];
	for(var i=0;i<arr.length;i++){
		if(brr.indexOf(arr[i]) == -1){
			brr.unshift(arr[i]);
		}
	}
	return brr;
}
console.log(two(arr));