/*
*Aman - 194nb.com
*/
/*
欢迎您点开'Nebula-Network'项目的源码。
我是子星议员-缥缈哉，十分欢迎有能力的您加入星尘联盟。
星尘联盟是一个专注共享科技以及发展科技的社会民主团体。
我们拥有大量的技术型人员，期待您的加入！
请加我们的QQ群号：604088037
*/
var WhiteList={
    'dwrm':'https://fs-im-kefu.7moor.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/2021-02-26_23:23:51/1614353031327/73700369.txt',
    'cbwn3d01':'https://fs-im-kefu.7moor.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/2021-02-26_22:27:20/1614349640770/64189591.mp4',
    'cbwn3d02':'https://fs-im-kefu.7moor.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/2021-02-26_22:27:25/1614349645700/11307039.mp4',
    'cbwn3d03':'https://fs-im-kefu.7moor.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/2021-02-26_22:27:37/1614349657287/79389330.mp4'
    };
    document.body.innerHTML='';
    var show=0; 
    var sid=0; 
    var fs=[];
    var kz=false;
    var i=document.createElement('input'); 
    var dsou=document.createElement('div'); 
    var djia=document.createElement('div'); 
    var dshan=document.createElement('div'); 
    var dkz=document.createElement('div');
    var dshang=document.createElement('div'); 
    var dxia=document.createElement('div');
    var tjs=document.createElement('textarea');
    var dzx=document.createElement('div');
    var djj=document.createElement('div');
    dsou.onclick=function(){ 
     dsou.style.borderStyle='inset'; 
     setTimeout(function(){ 
      dsou.style.borderStyle='outset'; 
     },100); 
     if(fs.length!=0 && fs[show].src!=i.value){ 
      fs[show].src=i.value; 
      i.value=fs[show].src; 
     }; 
    }; 
    dsou.ondblclick=function(){ 
     if(fs.length!=0){ 
      setTimeout(function(){ 
       let thergb=prompt('您可以在此设置阅读背景颜色：',fs[show].style.background); 
       if(thergb!='' && thergb!=null){ 
        fs[show].style.background=thergb; 
       }; 
      },150); 
     }; 
     return; 
    };
    djia.onclick=function(){ 
     djia.style.borderStyle='inset'; 
     setTimeout(function(){ 
      djia.style.borderStyle='outset'; 
     },100); 
     for(let i=0;i<fs.length;i++){ 
      fs[i].style.zIndex='0'; 
      fs[i].style.left='-1280'; 
     }; 
     let f=document.createElement('iframe'); 
     f.style.zIndex='9999999'; 
     f.style.background='rgb(255,255,255)'; 
     f.style.position='fixed';
     if(kz){
      f.style.width='1080';
     }else{
      f.style.width='1280';
     };
     f.style.height='720'; 
     f.style.left='0'; 
     f.style.top='50'; 
     document.body.appendChild(f); 
     fs.push(f); 
     show=fs.length-1; 
     sid=show+1; 
     dshang.innerHTML='<center><b><font size="4" color="white">上页'+sid+'/'+fs.length+'</font></b></center>'; 
     dxia.innerHTML='<center><b><font size="4" color="white">下页'+sid+'/'+fs.length+'</font></b></center>'; 
     return; 
    };
    dshan.onclick=function(){ 
     dshan.style.borderStyle='inset'; 
     setTimeout(function(){ 
      dshan.style.borderStyle='outset'; 
     },100); 
     setTimeout(function(){ 
      if(fs.length>1){ 
       let shan=confirm('确认删除当前页面吗？'); 
       if(shan){ 
        for(let i=0;i<fs.length;i++){ 
         fs[i].style.zIndex='0'; 
         fs[i].style.left='-1280'; 
        }; 
        document.body.removeChild(fs[show]); 
        fs.splice(show,1); 
        if(show==fs.length){ 
         show=fs.length-1; 
        }; 
        fs[show].style.zIndex='9999999'; 
        fs[show].style.left='0'; 
        i.value=fs[show].src; 
        sid=show+1; 
        dshang.innerHTML='<center><b><font size="4" color="white">上页'+sid+'/'+fs.length+'</font></b></center>'; 
        dxia.innerHTML='<center><b><font size="4" color="white">下页'+sid+'/'+fs.length+'</font></b></center>'; 
       }; 
      }; 
     },150); 
    };
    dkz.onclick=function(){ 
     dkz.style.borderStyle='inset'; 
     setTimeout(function(){ 
      dkz.style.borderStyle='outset'; 
     },100); 
     if(kz){
      let kzjb=confirm('是否关闭文件提取控制台？');
      if(kzjb==true){
       tjs.style.left='1280';
       dzx.style.left='1280';
       for(let i=0;i<fs.length;i++){
        fs[i].style.width='1280';
       };
       kz=false;
      };
     }else{
      let kzjb=confirm('是否打开文件提取控制台？');
      if(kzjb==true){
       tjs.style.left='1080';
       dzx.style.left='1080';
       for(let i=0;i<fs.length;i++){
        fs[i].style.width='1080';
       };
       kz=true;
      };
     };
    };
    dshang.onclick=function(){ 
     dshang.style.borderStyle='inset'; 
     setTimeout(function(){ 
      dshang.style.borderStyle='outset'; 
     },100); 
     if(fs.length!=0){ 
      for(let i=0;i<fs.length;i++){ 
       fs[i].style.zIndex='0'; 
       fs[i].style.left='-1280'; 
      }; 
      if(show>0){ 
       show--; 
      }else{ 
       show=fs.length-1; 
      }; 
      fs[show].style.zIndex='9999999'; 
      fs[show].style.left='0'; 
      i.value=fs[show].src; 
      sid=show+1; 
      dshang.innerHTML='<center><b><font size="4" color="white">上页'+sid+'/'+fs.length+'</font></b></center>';
      dxia.innerHTML='<center><b><font size="4" color="white">下页'+sid+'/'+fs.length+'</font></b></center>'; 
     }; 
    };
    dxia.onclick=function(){ 
     dxia.style.borderStyle='inset'; 
     setTimeout(function(){ 
      dxia.style.borderStyle='outset'; 
     },100); 
     if(fs.length!=0){ 
      for(let i=0;i<fs.length;i++){ 
       fs[i].style.zIndex='0'; 
       fs[i].style.left='-1280'; 
      }; 
      if(show<fs.length-1){ 
       show++; 
      }else{ 
       show=0; 
      }; 
      fs[show].style.zIndex='9999999'; 
      fs[show].style.left='0'; 
      i.value=fs[show].src; 
      sid=show+1; 
      dshang.innerHTML='<center><b><font size="4" color="white">上页'+sid+'/'+fs.length+'</font></b></center>'; 
      dxia.innerHTML='<center><b><font size="4" color="white">下页'+sid+'/'+fs.length+'</font></b></center>'; 
     }; 
    };
    dzx.onclick=function(){ 
     dzx.style.borderStyle='inset'; 
     setTimeout(function(){ 
      dzx.style.borderStyle='outset'; 
     },100);
        if(WhiteList[tjs.value]!=undefined){
            fs[show].src='about:blank';
            fs[show].contentWindow.location=WhiteList[tjs.value];
        }else{
            alert('您输入的提取码不存在或未获得使用资格！');
        };
    };
    djj.onclick=function(){
        document.body.innerHTML='';
    };
    i.style.position='fixed'; 
    i.placeholder='在此输入网址URL——————————————————————————————————————————————————————————————————————星尘联盟-缥缈哉'; 
    i.style.width='950'; 
    i.style.height='50'; 
    i.style.left='0'; 
    i.style.top='0'; 
    dsou.style.position='fixed'; 
    dsou.innerHTML='<center><b><font size="4" color="white">星尘搜索</font></b></center>'; 
    dsou.style.userSelect='none'; 
    dsou.style.background='rgb(0,255,255)'; 
    dsou.style.lineHeight='2.5'; 
    dsou.style.borderStyle='outset'; 
    dsou.style.borderWidth='2px'; 
    dsou.style.width='78'; 
    dsou.style.height='46'; 
    dsou.style.left='950'; 
    dsou.style.top='0'; 
    djia.style.position='fixed'; 
    djia.innerHTML='<center><b><font size="4" color="white">添加页面</font></b></center>'; 
    djia.style.userSelect='none'; 
    djia.style.background='rgb(0,255,255)'; 
    djia.style.borderStyle='outset'; 
    djia.style.borderWidth='2px'; 
    djia.style.width='48'; 
    djia.style.height='46'; 
    djia.style.left='1030'; 
    djia.style.top='0';
    dshan.style.position='fixed'; 
    dshan.innerHTML='<center><b><font size="4" color="white">删除页面</font></b></center>'; 
    dshan.style.userSelect='none'; 
    dshan.style.background='rgb(0,255,255)'; 
    dshan.style.borderStyle='outset'; 
    dshan.style.borderWidth='2px'; 
    dshan.style.width='48'; 
    dshan.style.height='46'; 
    dshan.style.left='1080'; 
    dshan.style.top='0';
    dkz.style.position='fixed'; 
    dkz.innerHTML='<center><b><font size="4" color="white">提取文件</font></b></center>'; 
    dkz.style.userSelect='none'; 
    dkz.style.background='rgb(0,255,255)'; 
    dkz.style.borderStyle='outset'; 
    dkz.style.borderWidth='2px'; 
    dkz.style.width='48'; 
    dkz.style.height='46'; 
    dkz.style.left='1130'; 
    dkz.style.top='0'; 
    dshang.style.position='fixed'; 
    dshang.innerHTML='<center><b><font size="4" color="white">上页0/0</font></b></center>'; 
    dshang.style.userSelect='none'; 
    dshang.style.background='rgb(0,255,255)'; 
    dshang.style.borderStyle='outset'; 
    dshang.style.borderWidth='2px'; 
    dshang.style.width='48'; 
    dshang.style.height='46'; 
    dshang.style.left='1180'; 
    dshang.style.top='0'; 
    dxia.style.position='fixed'; 
    dxia.innerHTML='<center><b><font size="4" color="white">下页0/0</font></b></center>'; 
    dxia.style.userSelect='none'; 
    dxia.style.background='rgb(0,255,255)'; 
    dxia.style.borderStyle='outset'; 
    dxia.style.borderWidth='2px'; 
    dxia.style.width='48'; 
    dxia.style.height='46'; 
    dxia.style.left='1230'; 
    dxia.style.top='0';
    tjs.style.position='fixed'; 
    tjs.style.width='200'; 
    tjs.style.height='670'; 
    tjs.style.left='1280'; 
    tjs.style.top='50';
    dzx.style.position='fixed';
    dzx.innerHTML='<center><b><font size="4" color="white">提取文件</font></b></center>';
    dzx.style.userSelect='none'; 
    dzx.style.background='rgb(0,255,255)'; 
    dzx.style.borderStyle='outset'; 
    dzx.style.borderWidth='2px';
    dzx.style.width='198';
    dzx.style.height='50'; 
    dzx.style.left='1280'; 
    dzx.style.top='720';
    djj.style.position='fixed';
    djj.style.zIndex='99999999'; 
    djj.innerHTML='<center><b><font size="4" color="white">紧急关闭</font></b></center>';
    djj.style.userSelect='none'; 
    djj.style.background='rgb(0,255,255)'; 
    djj.style.width='50';
    djj.style.height='50'; 
    djj.style.left='1230'; 
    djj.style.top='726';
    document.body.appendChild(i); 
    document.body.appendChild(dsou); 
    document.body.appendChild(djia); 
    document.body.appendChild(dshan);
    document.body.appendChild(dkz);
    document.body.appendChild(dshang);
    document.body.appendChild(dxia);
    document.body.appendChild(tjs);
    document.body.appendChild(dzx);
    document.body.appendChild(djj);
      Leke.modal.open({
        title:'星尘联盟-缥缈哉：',
        size:'mini',
        bgClose:true,
        tpl:'<img src="https://fs-im-kefu.7moor.com/im/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/2021-06-10_21:41:48/1623332508375/80171013.gif" width="100" height="100"/><div style="text-align:left"><img src="https://file.leke.cn'+Leke.user.currentPhoto+'" width="40" height="40" style="float:left"/>'+Leke.user.currentUserName+'您好，欢迎使用星尘平台！</div><div style="text-align:left">您的身份识别码为：'+Leke.user.userId+'</div><div style="text-align:left">本平台版本1.6.4.0，由<b><font color="#00FFFF" style="-webkit-text-stroke:0.5px #000000">星尘联盟-缥缈哉</font></b>独立开发。</div><div style="text-align:left">请阅读后同意<<星尘联盟服务协议>>！</div><div style="text-align:right"><i>——星尘联盟-缥缈哉</i></div>',
        btns:[{
          text:'我拒绝',
          className:'btn-gray',
          cb:function(){
            Leke.modal.close();
            Utils.Notice.print('您已拒绝<<星尘联盟服务协议>>，即将关闭页面。',3000);
            close=function(){
              Note.closeAct('refreshPage');
            };
            setTimeout('close()',3000);
          }
        },
        {
          text:'我同意',
          className:'btn-green',
        cb:function(){
            Leke.modal.close();
            Utils.Notice.print('-<欢迎使用>-',1000);
            setTimeout(function(){djia.click();},1000);}
        }]
      });