var sinhVien = new SinhVien;
var validation = new Validation;
var xuLyXacNhan = function () {
    // Lấy thông tin người dùng nhập
    sinhVien.maSV = document.getElementById("maSinhVien").value;
    sinhVien.tenSV = document.getElementById("tenSinhVien").value;
    sinhVien.loaiSinhVien = document.getElementById("loaiSinhVien").value;
    sinhVien.diemRenLuyen = document.getElementById("diemRenLuyen").value;
    sinhVien.diemToan = document.getElementById("diemToan").value;
    sinhVien.diemLy = document.getElementById("diemLy").value;
    sinhVien.diemHoa = document.getElementById("diemHoa").value;
    // Kiểm tra validation
    //Kiểm tra rỗng
    var valid=true;
    valid&=validation.kiemTraRong(sinhVien.maSV,"Mã sinh viên","#error_maSinhVien_required");
    valid&=validation.kiemTraRong(sinhVien.tenSV,"Tên sinh viên","#error_tenSinhVien_required");
    valid&=validation.kiemTraRong(sinhVien.diemToan,"Điểm toán","#error_diemToan_required");
    valid&=validation.kiemTraRong(sinhVien.diemLy,"Điểm lý","#error_diemLy_required");
    valid&=validation.kiemTraRong(sinhVien.diemHoa,"Điểm hóa","#error_diemHoa_required");
    valid&=validation.kiemTraRong(sinhVien.diemRenLuyen,"Điểm rèn luyện","#error_diemRenLuyen_required");
    //Kiểm tra tất cả là số
    valid&=validation.kiemTraTatCaLaSo(sinhVien.maSV,"Mã sinh viên","#error_maSinhVien_all_number");
    valid&=validation.kiemTraTatCaLaSo(sinhVien.diemToan,"Điểm toán","#error_diemToan_all_number");
    valid&=validation.kiemTraTatCaLaSo(sinhVien.diemLy,"Điểm lý","#error_diemLy_all_number");
    valid&=validation.kiemTraTatCaLaSo(sinhVien.diemHoa,"Điểm hóa","#error_diemHoa_all_number");
    valid&=validation.kiemTraTatCaLaSo(sinhVien.diemRenLuyen,"Điểm rèn luyện","#error_diemRenLuyen_all_number");
    //Kiểm tra độ dài chuỗi
    valid&=validation.kiemTraDoDaiChuoi(sinhVien.maSV,"Mã sinh viên","#error_maSinhVien_min_max_length",4,4);
    //Kiểm tra giá trị
    valid&=validation.kiemTraGiaTri(sinhVien.diemToan,"Điểm toán","#error_diemToan_value",0,10);
    valid&=validation.kiemTraGiaTri(sinhVien.diemLy,"Điểm lý","#error_diemLy_value",0,10);
    valid&=validation.kiemTraGiaTri(sinhVien.diemHoa,"Điểm hóa","#error_diemHoa_value",0,10);
    valid&=validation.kiemTraGiaTri(sinhVien.diemRenLuyen,"Điểm rèn luyện","#error_diemRenLuyen_value",0,10);
    //Kiểm tra tất cả là chữ
    valid&=validation.kiemTraTatCaLaChu(sinhVien.tenSV,"Tên sinh viên","#error_tenSinhVien_all_letter");
    if(!valid){
        return;
    }
    // Xử lý in kết quả ra giao diện
    document.getElementById("textTenSinhVien").innerHTML = sinhVien.tenSV;
    document.getElementById("textMaSinhVien").innerHTML = sinhVien.maSV;
    document.getElementById("textLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien;
    document.getElementById("textDiemTrungBinh").innerHTML = sinhVien.tinhDiemTrungBinh().toFixed(2);
    document.getElementById("textXepLoai").innerHTML = sinhVien.xepLoai();
}
document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;


// var sinhVien = {//scope 1 đối tượng là 1 instance:thể hiện
//     maSV: 1,
//     tenSV: "Nguyễn Văn A",
//     loaiSinhVien: "Khó khăn",
//     diemToan: 1,
//     diemLy: 2,
//     diemHoa: 3,
//     tinhDiemTrungBinh: function(){
//         var dtb= (Number(this.diemToan)+Number(this.diemLy)+Number(this.diemHoa))/3;
//         return dtb;
//     }
// }
// console.log(sinhVien);
// //diemTrungBinh: giá trị nào tính toán được ta không đưa vào lưu trữ
// // console.log(maSV); =>Không xuất được
// //Truy xuất giá trị thuộc tính của đối tượng
// //2 cách truy xuất giá trị thuộc tính
// // C1
// console.log("sinh viên", sinhVien.maSV);
// // C2
// console.log("Tên sinh viên", sinhVien["tenSV"]);
