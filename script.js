const prompt = require('prompt-sync')();
function check_num (a){
    if (a % 2 == 0)
        console.log(a + ' la so chan');
    else
        console.log(a + ' la so le');
}
//check_num (12);

function sum(a, b){
    var ketqua = a + b;
    console.log(ketqua);
   // return ketqua;
}

///sum(1, 4);

function showMes (message){
    message = message || 'Khong co tin nhan';
    console.log(message);
}
//showMes();
//showMes('Xin chao cac ban');

function check_nam_nhuan(nam){
    if (nam % 100 == 0){
        if (nam % 400 == 0)
            console.log(nam + ' la nam nhuan');
        else 
            console.log(nam + ' khong phai nam nhuan');
    }
    else if (nam % 4 == 0 )
        console.log(nam + " la nam nhuan");
    else
        console.log(nam + " khong phai nam nhuan");
}
//check_nam_nhuan(2024);

function nam_nhuan_gon(nam){
    nam = prompt('Nhap nam can kiem tra: ');
    if (nam % 100 == 0 && nam % 400 == 0)
        console.log(nam + ' la nam nhuan');
    else if (nam % 4 == 0)
        console.log(nam + ' la nam nhuan');
    else
        console.log(nam + ' khong phai nam nhuan');
}
//nam_nhuan_gon();
//console.log(`Xin chao ${name}`);

function check_love(input){
    console.log('Ban co thich minh khong:');
    input = prompt('Nhap vao y/n: ');
    switch (input) {
        case 'y':
            console.log('Ban thich minh ^^');
            break;
        case 'n':
            console.log('Ban khong thich minh :(');
            break;
        default:
            console.log('Ban nhap sai roi');
            break;
    }
}
//check_love();
var i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5){
}