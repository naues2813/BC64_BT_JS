
// bài tập 1

var luong = 100000;
var tongLuong = 0
document.getElementById('btn1').onclick = function (){
    var soNgayLam = document.getElementById('soNgayLam').value*1
    tongLuong = luong * soNgayLam
    document.getElementById("kq1").innerHTML = tongLuong.toLocaleString
('it-IT', 
    {
    style: 'currency',
    currency: 'VND',
    });

}


// bài tập 2


document.getElementById('btn2').onclick = function(){
var so1 = document.getElementById('so1').value*1
var so2 = document.getElementById('so2').value*1
var so3 = document.getElementById('so3').value*1
var so4 = document.getElementById('so4').value*1
var so5 = document.getElementById('so5').value*1
var kq2 = (so1 + so2 + so3 + so4 + so5) / 5
document.getElementById("kq2").innerHTML = 'Trung bình cộng của 5 số là: ' + kq2
}

// bài tập 3
var giaUSD = 23500;
var kq3=0
document.getElementById('btn3').onclick = function(){
    var soUsd = document.getElementById('soUsd').value*1
    var kq3 = soUsd * giaUSD 
    document.getElementById("kq3").innerHTML = kq3.toLocaleString
    ('it-IT', 
        {
        style: 'currency',
        currency: 'VND',
        });
    
}

// bài tập 4
var kq4 = 0;
document.getElementById('btn4').onclick = function(){
    var chieuDai = document.getElementById('chieuDai').value*1 
    var chieuRong = document.getElementById('chieuRong').value*1 
    var kq4 = (chieuDai + chieuRong ) *2
    document.getElementById("kq4").innerHTML = kq4 

}

// bài tập 5
var kq5 = 0
var number = 0;
document.getElementById('btn5').onclick = function(){
    var number = document.getElementById('number').value*1
    
}