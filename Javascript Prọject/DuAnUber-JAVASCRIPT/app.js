const giaMoCua = [8000, 9000, 10000];
const gia1Den20 = [12000, 14000, 16000];
const gia20TroDi = [10000, 12000, 14000];
const thoiGianCho = [2000, 3000, 4000];
var tam = -1;
var flag = false;
var tongTienTra = 0;
var theThanhTien = document.querySelector(".thanhTien");
anTheThanhTien();
function getEle(id) {
    return document.getElementById(id);
}
// Kiểm tra checkbox được check và lấy số thứ tự checkbox
function oneCheck(checkbox) {
    flag = false;
    anTheThanhTien();
    var item = document.querySelectorAll(".checkbox");
    for (var j = 0; j < item.length; j++) {
        if (item[j] !== checkbox) {
            item[j].checked = false;
        } else {
            if (item[j].checked == true) {
                flag = true;
                $(".btn-inHoaDon").prop("disabled", false);
            }
            tam = j;
        }
    }
}

function tinhToan(tenXe, tam) {
    xoaNoiDung();
    var giaOpen = giaMoCua[tam];
    var giaCenter = gia1Den20[tam];
    var giaFinal = gia20TroDi[tam];
    var giaCho = thoiGianCho[tam];
    var soKmDi = getEle("soKM").value;
    var tgCho = getEle("thoiGianCho").value;
    var tinhCho = (tgCho - tgCho % 3) / 3;
    if (soKmDi <= 1 && soKmDi > 0) {
        var kmSuDung = 1;
        themHang(tenXe, kmSuDung+" km", giaOpen, giaOpen);
    }
    if (soKmDi > 1 && soKmDi < 20) {
        var kmSuDung = soKmDi - 1;
        themHang(tenXe, 1+" km", giaOpen, giaOpen);
        themHang(tenXe, kmSuDung+" km", giaCenter, kmSuDung * giaCenter);
    }
    if (soKmDi >= 20) {
        var kmSuDung = soKmDi - 19;
        themHang(tenXe, 1+" km", giaOpen, giaOpen);
        themHang(tenXe, 18+" km", giaCenter, 18 * giaCenter);
        themHang(tenXe, kmSuDung+" km", giaFinal, kmSuDung * giaFinal);
    }
    if (tinhCho >= 1) {
        themHang("Thời gian chờ", tgCho+" phút", giaCho, tinhCho * giaCho);
    }
    // Tính tổng tiền
    var thebody = document.querySelector("tbody");
    var listtr = thebody.querySelectorAll("tr");
    tongTienTra = 0;
    for (var tr of listtr) {
        var listtd = tr.querySelectorAll("td");
        tongTienTra += (listtd[3].innerHTML) * 1;
    }
    //Thêm hàng tổng cộng
    themHang("Tổng tiền phải trả", "", "", tongTienTra);
    var listtr = thebody.querySelectorAll("tr");
    var theTongCong = listtr[listtr.length - 1];
    $(theTongCong).addClass("tongTienTra");
}
function themHang(chiTiet, suDung, donGia, tongCong) {
    var hangThem = document.createElement("tr");
    var thebody = document.querySelector("tbody");
    thebody.appendChild(hangThem);
    themCot(chiTiet, hangThem);
    themCot(suDung, hangThem);
    themCot(donGia, hangThem);
    themCot(tongCong, hangThem);
}
function themCot(noiDung, hangThemVao) {
    var cot = document.createElement("td");
    hangThemVao.appendChild(cot);
    cot.innerHTML = noiDung;
}
function inHoaDon() {
    var listXe = document.getElementsByTagName("label");
    if (!flag) {
        $(".btn-inHoaDon").prop("disabled", true);
        canhBao();
        // Delay để có tách không cho hàm enable button hoạt động cùng lúc
        var delayInMilliseconds = 100; //1 second
        setTimeout(function () {
            $(".btn-inHoaDon").prop("disabled", false);
        }, delayInMilliseconds);

    } else {
        $(".btn-inHoaDon").prop("disabled", false);
        var tenXe = listXe[tam].innerHTML;
        tinhToan(tenXe, tam);
    }
}
function xoaNoiDung() {
    var noiDung = document.querySelector("tbody");
    var listXoa = noiDung.querySelectorAll("tr");
    for (var ptXoa of listXoa) {
        ptXoa.remove();
    }
}
function inTongTien() {
    var listXe = document.getElementsByTagName("label");
    if (!flag) {
        canhBao();
    } else {
        var tenXe = listXe[tam].innerHTML;
        tinhToan(tenXe, tam);
        var theTongTien = document.querySelector(".tongTien");
        theTongTien.innerHTML = tongTienTra;
        theThanhTien.style.opacity = "100%";
    }
}
function anTheThanhTien() {
    theThanhTien.style.opacity = "0";
}
function canhBao() {
    alert("Vui lòng chọn loại xe");
}
