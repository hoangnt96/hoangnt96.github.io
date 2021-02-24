var danhSachSinhVien = new DanhSachSinhVien;
var validate = new Validation;
//Bổ sung thuộc tính
SinhVien.prototype.DiemToan='';
SinhVien.prototype.DiemLy='';
SinhVien.prototype.DiemHoa='';
SinhVien.prototype.DTB='';
SinhVien.prototype.Loai='';
//Thêm phương thức
SinhVien.prototype.TinhDTB=function(){
    this.DTB=(Number(this.DiemToan)+Number(this.DiemLy)+Number(this.DiemHoa))/3;
}
SinhVien.prototype.XepLoai=function(){
    if(this.DTB<=10&&this.DTB>=8){
        this.Loai="Xếp loại Giỏi";
    }else if(this.DTB<8&&this.DTB>=6.5){
        this.Loai="Xếp loại Khá";
    }else if(this.DTB<6.5&&this.DTB>=5){
        this.Loai="Xếp loại Trung Bình";
    }else {
        this.Loai="Xếp loại Yếu";
    }
}
//Hàm get ID
function getEleID(id) {
    return document.getElementById(id);
}
function ThemSinhVien() {
    //Lấy dữ liệu từ người dùng nhập vào
    var masv = getEleID("masv").value;
    var hoten = getEleID("hoten").value;
    var cmnd = getEleID("cmnd").value;
    var email = getEleID("email").value;
    var sdt = getEleID("dienthoai").value;
    //Validation
    var valid = true;
    // kiểm tra rỗng
    valid &= KiemTraDauVaoRong("masv", masv);
    valid &= KiemTraDauVaoRong("hoten", hoten);
    valid &= KiemTraDauVaoRong("cmnd", cmnd);

    // kiểm tra email
    valid &= KiemTraEmail("email", email);
    // kiểm tra sđt
    valid &= KiemTraSoDT("dienthoai", sdt);
    if (!valid) {
        return;
    }
    //Thêm sinh viên
    var sinhVien = new SinhVien(masv, hoten, email, sdt, cmnd);
    sinhVien.DiemToan=getEleID("toan").value;
    sinhVien.DiemLy=getEleID("ly").value;
    sinhVien.DiemHoa=getEleID("hoa").value;
    sinhVien.TinhDTB();
    sinhVien.XepLoai();
    danhSachSinhVien.ThemSinhVien(sinhVien);
    CapNhatDanhSachSV(danhSachSinhVien);
    console.log(danhSachSinhVien);
}
function KiemTraDauVaoRong(ID, value) {
    if (validate.KiemTraRong(value)) {
        getEleID(ID).style.borderColor = "green";
        return true;
    } else {
        getEleID(ID).style.borderColor = "red";
        return false;
    }
}
function KiemTraSoDT(ID, value) {
    if (validate.KiemTraSoDT(value)) {
        getEleID(ID).style.borderColor = "green";
        return true;
    } else {
        getEleID(ID).style.borderColor = "red";
        return false;
    }
}
function KiemTraEmail(ID, value) {
    if (validate.KiemTraEmail(value)) {
        getEleID(ID).style.borderColor = "green";
        return true;
    } else {
        getEleID(ID).style.borderColor = "red";
        return false;
    }
}
function CapNhatDanhSachSV(DanhSachSinhVien) {
    var listTableSV = getEleID("tbodySinhVien");
    listTableSV.innerHTML = "";
    for (var i = 0; i < DanhSachSinhVien.DSSV.length; i++) {
        var sv = DanhSachSinhVien.DSSV[i];
        var trSinhVien = document.createElement("tr");
        trSinhVien.id = sv.MaSV;
        trSinhVien.className = "trSinhVien";
        trSinhVien.setAttribute("onclick", "ChinhSuaSinhVien(" + sv.MaSV + ")");
        var tdCheckBox = document.createElement("td");
        var ckbMaSinhVien = document.createElement("input");
        ckbMaSinhVien.setAttribute("type", "checkbox");
        ckbMaSinhVien.setAttribute("value", sv.MaSV);
        ckbMaSinhVien.setAttribute("class", "ckbMaSV");
        tdCheckBox.appendChild(ckbMaSinhVien);
        var tdMaSV = TaoTheTD("MaSV", sv.MaSV);
        var tdHoTen = TaoTheTD("HoTen", sv.HoTen);
        var tdEmail = TaoTheTD("Email", sv.Email);
        var tdCMND = TaoTheTD("CMND", sv.CMND);
        var tdSDT = TaoTheTD("SDT", sv.SoDT);
        // Tạo td DTB và xếp loại
        var tdDTB=TaoTheTD("DTB",sv.DTB);
        var tdLoai=TaoTheTD("Loai",sv.Loai);
        // Append các td vào tr
        trSinhVien.appendChild(tdCheckBox);
        trSinhVien.appendChild(tdMaSV);
        trSinhVien.appendChild(tdHoTen);
        trSinhVien.appendChild(tdEmail);
        trSinhVien.appendChild(tdCMND);
        trSinhVien.appendChild(tdSDT);
        trSinhVien.appendChild(tdDTB);
        trSinhVien.appendChild(tdLoai);
        // Append các tr vào tdBody
        listTableSV.appendChild(trSinhVien);
    }
}
function TaoTheTD(classname, value) {
    var td = document.createElement("td");
    td.className = classname;
    td.innerHTML = value;
    return td;
}

function SetStorage() {
    // Chuyển đổi Object mảng danh sách sinh viên thành chuỗi JSON
    var jsonDanhSachSinhVien = JSON.stringify(danhSachSinhVien.DSSV);
    // Rồi đem chuỗi JSON lưu vào storagelocal và đặt tên là DanhSachSV
    localStorage.setItem("DanhSachSV", jsonDanhSachSinhVien);
}
function GetStorage() {
    // Lấy ra chuỗi JSON là mảng danh sách sinh viên thông qua tên DanhSachSV
    var jsonDanhSachSinhVien = localStorage.getItem("DanhSachSV");
    var mangDSSV = JSON.parse(jsonDanhSachSinhVien);
    danhSachSinhVien.DSSV = mangDSSV;
    CapNhatDanhSachSV(danhSachSinhVien);

}
function XoaSinhVien() {
    var listMaSV = document.getElementsByClassName("ckbMaSV");
    var listMaSVDuocChon = [];
    for (var i = 0; i < listMaSV.length; i++) {
        if (listMaSV[i].checked) {
            listMaSVDuocChon.push(listMaSV[i].value);
        }
    }
    danhSachSinhVien.XoaSinhVien(listMaSVDuocChon);
    CapNhatDanhSachSV(danhSachSinhVien);
}
function TimKiemSinhVien() {
    var tukhoa = getEleID("timkiem").value;
    var listDSSinhVienTimKiem = danhSachSinhVien.TimKiemSinhVien(tukhoa);
    CapNhatDanhSachSV(listDSSinhVienTimKiem);
}

function ChinhSuaSinhVien(MaSV) {
    var sinhvien = danhSachSinhVien.TimSinhVienTheoMa(MaSV);
    if(sinhvien!=null){
        getEleID("masv").value = sinhvien.MaSV;
        getEleID("hoten").value = sinhvien.HoTen;
        getEleID("cmnd").value = sinhvien.CMND;
        getEleID("email").value = sinhvien.Email;
        getEleID("dienthoai").value = sinhvien.SoDT;
    }
}
function LuuThongTin(){
    //Lấy dữ liệu từ người dùng nhập vào
    var masv = getEleID("masv").value;
    var hoten = getEleID("hoten").value;
    var cmnd = getEleID("cmnd").value;
    var email = getEleID("email").value;
    var sdt = getEleID("dienthoai").value;
    //Validation
    var valid = true;
    // kiểm tra rỗng
    valid &= KiemTraDauVaoRong("masv", masv);
    valid &= KiemTraDauVaoRong("hoten", hoten);
    valid &= KiemTraDauVaoRong("cmnd", cmnd);

    // kiểm tra email
    valid &= KiemTraEmail("email", email);
    // kiểm tra sđt
    valid &= KiemTraSoDT("dienthoai", sdt);
    if (!valid) {
        return;
    }
    //Sửa thông tin sinh viên
    var sinhVien = new SinhVien(masv, hoten, email, sdt, cmnd);
    sinhVien.DiemToan=getEleID("toan").value;
    sinhVien.DiemLy=getEleID("ly").value;
    sinhVien.DiemHoa=getEleID("hoa").value;
    sinhVien.TinhDTB();
    sinhVien.XepLoai();
    danhSachSinhVien.SuaSinhVien(sinhVien);
    CapNhatDanhSachSV(danhSachSinhVien);
}