var qwestion = []
document.getElementById('btn_2').onclick = function(){
	qwestion.push(document.getElementById('qwestion').value)
	document.getElementById('current').innerHTML += document.getElementById('qwestion').value + ','
	document.getElementById('qwestion').value = ''
}
document.getElementById('btn').onclick = function() {   
	for (var i=0; i<qwestion.length; i++){
		if (qwestion[i]>50) document.getElementById('answer').innerHTML += (qwestion[i]) + ','
	}    
}