function changeProject(obj,projectCode){
  if(projectCode == '1'){
    $("#projectIframe").attr("src","./project_1.html");
  }else if(projectCode == '2'){
    $("#projectIframe").attr("src","./project_2.html");
  }

  changeActive(obj);
}

function changeActive(obj){
  $(".list-group-item").removeClass("active");
  $(obj).addClass("active");
}

function getFilenameFromSvn(){
  alert(0);
  /*$.ajax({
            type:"post",
            url:"/basic/zdrk/rygk/ZDRKCommonUtil/getXtCtx.action",
            data:{"ssxt": "DZGL"},
            dataType:"json",
            success:function(data){
                if(data &&  data["CTX"]){
                    $("#dzkScript").attr("src",data["CTX"]+"/basic/dzk/jk/DZK_JKServer/getJkJS.action");
                }
            }
        });*/
}