function getEle(id) {
    return document.getElementById(id);
}

function tinhToan() {
    var tongHoaHon = getEle("billamt").value;
    var phanTramTip = getEle("serviceQual").value;
    var soNguoiGop = getEle("peopleamt").value;
    if (tongHoaHon == "" || phanTramTip == 0) {
        alert("Vui lòng chọn giá trị");
        return;
    };
    if (soNguoiGop === "" || soNguoiGop <= 1) {
       soNguoiGop=1;
       getEle("each").style.display = "none";
    }
    else {
        getEle("each").style.display = "block";
    };
    var tienTip = getEle("tip");
    //tinh Toan
    tongTip=tongHoaHon*phanTramTip/soNguoiGop;
    // Làm tròn đến phần thập phân có 2 chữ số
    tongTip = Math.round(tongTip * 100) / 100;
    // Đảm bảo lúc nào cũng có 2 chữ số phần thập phân
    tongTip = tongTip.toFixed(2);
    tienTip.innerHTML = tongTip;
    // ẩn, hiện thẻ TIP
    var theTip = getEle("totalTip");
    if (tongTip == 0) {
        theTip.style.display = "none";
    } else {
        theTip.style.display = "block";
    };
   
}
getEle("totalTip").style.display = "none";
getEle("each").style.display = "none";
