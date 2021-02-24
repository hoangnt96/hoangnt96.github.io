var xuLyXacNhan = function () {
    // Lấy thông tin người dùng nhập
    var maSinhVien = document.getElementById("maSinhVien").value;
    var tenSinhVien = document.getElementById("tenSinhVien").value;
    var loaiSinhVien = document.getElementById("loaiSinhVien").value;
    var diemRenLuyen = document.getElementById("diemRenLuyen").value;
    var diemToan = document.getElementById("diemToan").value;
    var diemLy = document.getElementById("diemLy").value;
    var diemHoa = document.getElementById("diemHoa").value;
    // Tính điểm trung bình và xếp loại
    var diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    var xepLoai = xepLoaiSinhVien(diemTrungBinh, diemRenLuyen);
    // Xử lý in kết quả ra giao diện
    document.getElementById("textTenSinhVien").innerHTML =tenSinhVien;
    document.getElementById("textMaSinhVien").innerHTML=maSinhVien;
    document.getElementById("textLoaiSinhVien").innerHTML=loaiSinhVien;
    document.getElementById("textDiemTrungBinh").innerHTML=diemTrungBinh.toFixed(2);
    document.getElementById("textXepLoai").innerHTML=xepLoai;
}

var tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
    var diemTrungBinh = (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
    return diemTrungBinh;
}
var xepLoaiSinhVien = function (diemTrungBinh, diemRenLuyen) {
    if (diemRenLuyen < 5) {
        return "Yếu";
    } else {
        if (diemTrungBinh < 5) {
            return "Yếu";
        } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
            return "Trung bình";
        } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
            return "Khá";
        } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
            return "Giỏi";
        } else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
            return "Xuất sác";
        } else {
            return "Không hợp lệ";
        }
    }
}
document.getElementById("btnXacNhan").onclick = xuLyXacNhan;