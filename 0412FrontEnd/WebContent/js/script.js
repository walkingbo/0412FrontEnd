

var request
//일반적인 브라우저에서 ajax	요청 객체를 생성
if(window.XMLHttpRequest){
	request = new XMLHttpRequest();
}
//IE 8.0 이하 브라우저에서 ajax 요청 객체를 생성
else{
	request = new ActiveXObject("Microsoft.XMLHTTP")
}
//console.log(request)

//data.xml을 GET방식으로 요청
request.open('GET','data.xml')
request.send()
//ajax 요청 객체의 상태 변화가 생기면 호출되는 콜백 메소드를 설정
request.onreadystatechange= function(){
	//응답이 완료 되면
	if(request.readyState==4){
		//정상적으로 데이터를 받아오면
		if(request.status>=200&&request.status<300){
			//xml은 responseText가 아니라 reponseXML로 읽습니다.
			var xml = request.responseXML
			
			//num태그와 name 태그 전부 가져오기
			var nums = xml.getElementsByTagName("num")
			var names = xml.getElementsByTagName("name")
			//배열을 순회
			for(var idx =0; idx<nums.length; idx = idx +1){
				var num = nums[idx].childNodes[0].nodeValue
				var name = names[idx].childNodes[0].nodeValue
				console.log(num+":"+ name)
			}
			
			
		}else if(request.status >=400 && request.status<500){
			console.log("클라이언트 오류입니다.")
		}else if(request.status>=500&&request.status<600){
			console.log("서버오류입니다.")
			
		}
	}
}
