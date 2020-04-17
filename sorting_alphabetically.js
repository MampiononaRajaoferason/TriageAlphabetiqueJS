let myArr = [
	{
		"lastName": "Andryii",
		"firstName": "Shevchenko"
	},
	
	{
		"lastName": "Zansens",
		"firstName": "Dark"
	},
	{
		"lastName": "Zaed",
		"firstName": "York"
	},
	{
		"lastName": "Calivu",
		"firstName": "Dreso"
	},
	{
		"lastName": "Harmer",
		"firstName": "Garrt"
	},
	{
		"lastName": "Jack",
		"firstName": "Sparrow"
	},
	{
		"lastName": "Spark",
		"firstName": "Mikel"
	},
	{
		"lastName": "Arteta",
		"firstName": "Franck"
	},
	{
		"lastName": "Zendana",
		"firstName": "Zoro"
	}

]

//function sorting_alphabetically_on(arr, prop){
	//return arr.map(({lastName: name})=> (name)).sort()
//	return arr.map(item => item[prop]).sort()
//}

function sorting_on(arr, prop){
	
	let res =  arr.sort(function (a,b ){
		let property = prop;
		return  a[property] === b[property] ? 0 : a[property] > b[property] ? 1 : -1
	})
	return res
}

console.log(myArr[0])


var copy = myArr;
for (let i =0 ; i<copy.length; i++){
	copy[i]['id']= i+1
}

console.log(copy)


for(let i = 0; i<myArr.length;i++){
/*	        var t_row = document.createElement('TR');
	        t_row.setAttribute('id','userRows');
	        
	        var tr_data = document.createElement('TD');
        	var td_text = document.createTextNode(i+1)
        	tr_data.appendChild(td_text);
        	document.body.appendChild(tr_data)	
*/			myArr.id = i+1
        	for(let key in myArr[i]){

        		console.log(myArr[i][key])
	        	/*var tr_data = document.createElement('TD');
        		var td_text = document.createTextNode(output[i][key])
        		tr_data.appendChild(td_text);

        		document.getElementById('userRows').appendChild(tr_data)
*/
        	}
 //       	document.getElementById('userTable').appendChild(tr_data);

        }


