var DanhSachSinhVien = function () {
    this.DSSV = [];
    this.ThemSinhVien = function (svThem) {
        this.DSSV.push(svThem);
    }
    this.XoaSinhVien = function (listSVXoa) {
        for (var i = 0; i < listSVXoa.length; i++) {
            for (var j = 0; j < this.DSSV.length; j++) {
                var sinhvien = this.DSSV[j];
                if (listSVXoa[i] === sinhvien.MaSV) {
                    this.DSSV.splice(j, 1);
                }
            }
        }
    }
    this.SuaSinhVien = function (svCapNhat) {
        for(var i=0;i<this.DSSV.length;i++){
            var sinhvien=this.DSSV[i];
            if(sinhvien.MaSV==svCapNhat.MaSV){
                this.DSSV[i]=svCapNhat;
            }
        }
    }
    this.TimKiemSinhVien = function (tukhoa) {
        var listKetQuaTimKiem = new DanhSachSinhVien();
        for (var i = 0; i < this.DSSV.length; i++) {
            var sinhvien = this.DSSV[i];
            if (sinhvien.HoTen.search(tukhoa) != -1) {
                listKetQuaTimKiem.ThemSinhVien(sinhvien);
            }
        }
        return listKetQuaTimKiem;
    }
    this.TimSinhVienTheoMa=function(masv){
        for(var i=0;i<this.DSSV.length;i++){
            var sinhvien=this.DSSV[i];
            if(sinhvien.MaSV==masv){
                return sinhvien;
            }
        }
        return null;
    }
}