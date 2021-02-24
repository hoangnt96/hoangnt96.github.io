function Validation() {
    this.KiemTraRong = function (value) {
        if (value.trim() === "") {
            return false;
        }
        return true;
    }
    this.KiemTraEmail = function (value) {
        regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(value.toLowerCase())) {
            return true;
        }
        return false;
    }
    this.KiemTraSoDT = function (value) {
        regexSDT = /^\d+$/;
        if (regexSDT.test(value) && value.length >= 10) {
            return true;
        }
        return false;
    }
}