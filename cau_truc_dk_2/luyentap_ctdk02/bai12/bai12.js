let soTienBanDau = +prompt('Nhập số tiền ban đầu');
let soThangChoVay = +prompt('Nhập số tháng cho vay');
let laiSuatHangThang = +prompt('Nhập lãi xuất hàng tháng (dưới dạng phần trăm)');
if(laiSuatHangThang < 12){
    let tongSoTien = soTienBanDau * Math.pow(1 + laiSuatHangThang, soThangChoVay);
    document.write('Tổng số tiền lãi là: '+tongSoTien)
}else{//ngược lại vượt quá 12 tháng
    let laiXuatVuotQua = 0.02;
    let laiXuatVuotQuaNam = laiXuatVuotQua * 12;
    let soThangVuotQua = 12 - soThangChoVay;
    let tongLaiVuotQua = soTienBanDau * Math.pow(1 + laiXuatVuotQuaNam, soThangVuotQua);
    let tongSoTien = soTienBanDau * Math.pow(1 + laiSuatHangThang, soThangChoVay);
     tongSoTien = tongSoTien + tongLaiVuotQua;
     document.getElementById('Tổng tiền lãi là: '+tongSoTien);
}
