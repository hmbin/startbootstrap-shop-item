function changeProject(projectCode){
  if(projectCode == '1'){
    $("#projectIframe").attr("src","./project_1.html");
  }else if(projectCode == '2'){
    $("#projectIframe").attr("src","./project_2.html");
  }
}

