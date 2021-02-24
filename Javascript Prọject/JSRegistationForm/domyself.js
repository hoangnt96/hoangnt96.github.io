var nameX = ["firstName", "lastName", "password", "confirmPassword", "phone", "email"];
var erro = ["error_firstName", "error_lastName", "error_password", "error_confirmPassword", "error_phone", "error_email"];
var checkValidation = function () {
    var valid = true;
    //kiểm tra rỗng
    valid = kiemTraRong("firstName", "error_firstName") & kiemTraRong("lastName", "error_lastName") & kiemTraRong("password", "error_password") & kiemTraRong("confirmPassword", "error_confirmPassword");
    // kiểm tra tất cả là chữ
    valid &= kiemTraTatCaLaChu("firstName","error_firstName_all_leter") & kiemTraTatCaLaChu("lastName","error_lastName_all_leter");
    // kiểm tra tất cả là số
    valid&= kiemTraTatCaLaSo("phone","error_phone");
    // kiểm tra email
    valid&= kiemTraEmail("email","error_email");
    // kiểm tra độ dài
    valid&= kiemTraDoDai("password","error_password_min_max_length");
    //kiểm tra giá trị
    valid&= kiemTraGiaTri("password","error_password_min_max_value",5,10)
    if (!valid) {
        return false;
    }
    return true;
}

var kiemTraRong = function (value, selectorError) {
    var obj = document.getElementById(value);
    if (obj.value.trim() === "") {
        document.getElementById(selectorError).innerHTML = obj.name + " không được bỏ trống";
        document.getElementById(selectorError).style.display="block";
        return false;
    } else {
        document.getElementById(selectorError).innerHTML = "";
        document.getElementById(selectorError).style.display="none";
        return true;
    }
}
var kiemTraTatCaLaChu = function (value, selectorError) {
    var regexChu = /^[A-Za-z ]+$/;
    var inputText = document.getElementById(value);
    if (regexChu.test(inputText.value)) {
        //Hợp lệ
        document.getElementById(selectorError).innerHTML = "";
        document.getElementById(selectorError).style.display="none";
        return true;
    } else {
        //Không hợp lệ
        document.getElementById(selectorError).innerHTML = inputText.name + " phải là chữ!";
        document.getElementById(selectorError).style.display="block";
        return false;
    }
}
var kiemTraTatCaLaSo=function (value, selectorError) {
    var regexSo = /^[0-9]+$/;
    var inputText = document.getElementById(value);
    if (regexSo.test(inputText.value)) {
        //Hợp lệ
        document.getElementById(selectorError).innerHTML = "";
        document.getElementById(selectorError).style.display="none";
        return true;
    } else {
        //Không hợp lệ
        document.getElementById(selectorError).innerHTML = inputText.name + " phải là số!";
        document.getElementById(selectorError).style.display="block";
        return false;
    }
}
var kiemTraEmail=function (value, selectorError) {
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var inputText = document.getElementById(value);
    if (regexEmail.test(inputText.value)) {
        //Hợp lệ
        document.getElementById(selectorError).innerHTML = "";
        document.getElementById(selectorError).style.display="none";
        return true;
    } else {
        //Không hợp lệ
        document.getElementById(selectorError).innerHTML = inputText.name + " không hợp lệ!";
        document.getElementById(selectorError).style.display="block";
        return false;
    }
}

var kiemTraDoDai=function(value, selectorError) {
    var inputText = document.getElementById(value);
    if (inputText.value.length>=inputText.minLength&&inputText.value.length<=inputText.maxLength) {
        //Hợp lệ
        document.getElementById(selectorError).innerHTML = "";
        document.getElementById(selectorError).style.display="none";
        return true;
    } else {
        //Không hợp lệ
        document.getElementById(selectorError).innerHTML = inputText.name + " từ "+ inputText.minLength +" đến "+ inputText.maxLength + " ký tự !";
        document.getElementById(selectorError).style.display="block";
        return false;
    }
}

var kiemTraGiaTri=function(value, selectorError,minValue,maxValue) {
    var inputText = document.getElementById(value);
    if (inputText.value>=minValue&&inputText.value<=maxValue) {
        //Hợp lệ
        document.getElementById(selectorError).innerHTML = "";
        document.getElementById(selectorError).style.display="none";
        return true;
    } else {
        //Không hợp lệ
        document.getElementById(selectorError).innerHTML = inputText.name + " từ "+ minValue +" đến "+ maxValue + " !";
        document.getElementById(selectorError).style.display="block";
        return false;
    }
}
for (var pt of nameX) {
    // document.getElementById(pt).onblur = checkValidation;
}
document.getElementById("btnDangKy").onclick = checkValidation;