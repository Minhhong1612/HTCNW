// ============================= KIỂM TRA TÊN DN ===============================
function KiemTraTenDN() {
    var re = /^[a-z]\*w/;
    if (re.test(document.getElementById('txtDN').value.trim()) == false) {
        tendn.innerText = "*Bắt buộc, bắt đầu bằng ký tự";
        return false;
    } else {
        tendn.innerText = " *";
        return true;
    }
}
// ============================= KIỂM TRA PASSWORD ===============================
function KiemTraPassWord() {
    var re = /(?=.*\d).{6,}/;
    if (re.test(document.getElementById('txtMK').value.trim()) == false) {
        mk.innerText = " * Phải có chữ, số, ít nhất 6 ký tự";
        return false;
    } else {
        mk.innerText = "*";
        return true;
    }
}
// ============================= KIỂM TRA XÁC NHẬN PASSWORD ===============================
function KiemTraXacNhanPassWord() {
    if (document.getElementById('txtXNMK').value != document.getElementById('txtMK').value) {
        xnmk.innerText = " * Phải giống ô mật khẩu";
        return false;
    } else {
        xnmk.innerText = " *";
        return true;
    }
}
// ============================= KIỂM TRA NGÀY SINH ===============================
function KiemTraNgaySinh() {
    var ns = new Date(document.getElementById('txtNS').value);
    var today = new Date();
    if (eval(today.getFullYear() - ns.getFullYear()) <= 10) {
        ngaysinh.innerText = " Tuổi phải trên 10";
        return false;
    } else {
        ngaysinh.innerText = "";
        return true;
    }
}
// ============================= KIỂM TRA SUBMIT FORM ===============================
function SubmitForm() {
    if (KiemTraTenDN() == false || KiemTraPassWord() == false || KiemTraXacNhanPassWord() == false) {
        alert("Bạn chưa nhập đầy đủ và đúng thông tin!");
    } else {
        var tt1 = document.getElementById("txtName").value;
        var tt2 = document.getElementById("txtNS").value;
        var w = open("FormValidation_info.html", "ketqua");
        w.document.write("<b> THÔNG TIN CÁ NHÂN </b>");
        w.document.write("Họ tên: " + tt1 + "<br>");
        w.document.write("Nam sinh: " + tt2 + "<br>");
    }
}