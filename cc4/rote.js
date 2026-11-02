// 阻止移动端横屏 弹出提示 
function rotate(text,src) {
  var orientation = window.orientation;
  var pd = null;
  function createPd() {
    if (document.getElementById("preventTran") === null) {
      var imgData =
        "";
      pd = document.createElement("div");
      pd.setAttribute("id", "preventTran");
      pd.style.position = "fixed";
      pd.style.left = "0";
      pd.style.top = "0";
      pd.style.width = "100%";
      pd.style.height = "100vh";
      pd.style.overflow = "hidden";
      pd.style.backgroundColor = "#090C11";
      pd.style.textAlign = "center";
      pd.style.display = "flex";
      pd.style.flexDirection = "column";
      pd.style.justifyContent = "center";
      pd.style.alignItems = "center";
      document.getElementsByTagName("body")[0].appendChild(pd);
      var img = document.createElement("img");
      img.src = src;
      pd.appendChild(img);
      img.style.marginBottom = "0.2rem";
      img.style.width = "10%";
      var br = document.createElement("br");
      var p = document.createElement("p");
      p.style.width = "100%";
      p.style.height = "auto";
      p.style.fontSize = "14px";
      p.style.color = "#626262";
      p.style.lineHeight = "0.38rem";
      p.style.textAlign = "center";
      p.innerHTML = "<span style='color:#fff;padding-top: 40px;display: inline-block;'>"+text+"</span>";
      p.appendChild(br);
      // p.innerHTML += "";
      pd.appendChild(p);
    }
  }
  if (orientation == 90 || orientation == -90) {
    if (pd == null && document.getElementById("preventTran") === null)
      createPd();
    document.getElementById("preventTran").style.zIndex = "9999";
  }
  //H5新特性 监听用户水平或垂直翻转设备（即方向发生改变）
  window.onorientationchange = function() {
    if (pd == null && document.getElementById("preventTran") == null)
      createPd();
    document.getElementById("preventTran").style.zIndex = "-1";
    rotate();
  };
}


