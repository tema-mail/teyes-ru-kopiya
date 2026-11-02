
var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
if (lang.indexOf('zh') > -1) {
    // window.location.href = "https://teyes.cn/en";
}

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const chinaZones = [
    "Asia/Shanghai", "Asia/Chongqing", "Asia/Harbin", "Asia/Urumqi"
];

// 判断是否是中国时区
if (chinaZones.includes(tz)) {
    // document.body.style.display='none'
    // 自动跳转（避免重复跳转：检查当前是否已跳转过）
    if (window.location.hostname == "teyes.ru" || window.location.hostname == "teyes.cn" || window.location.hostname == "cc4.teyes.cn") {
        if (window.location.href.indexOf("teyes.ru/en") > -1 || (window.location.href.indexOf("teyes.cn/en") > -1)) {
            // window.location.href = "https://teyes.cn/en";
        } else {
            // window.location.href = "https://teyes.cn/en";
        }
    }
} else {
    // document.body.style.display='block'

    // 判断完条件后显示页面
    
}

var that = this
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cc4.teyes.cn/check', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data)
        window.localStorage['ct'] = data.c
        if (data.is == '1') {
            // window.location.href = "https://teyes.cn/en";
        }else{
            
        }
    }
};
xhr.send();

window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity='1'
}); 