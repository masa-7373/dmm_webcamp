let name;
let username;
let userresult;

// prompt() 入力ダイアログを表示させる命令
username = prompt("お名前を教えてください。");


// 課題
if (username == ""){
    username = "名無し"
}
// "name"というidをもつタグに囲まれている文字列をusernameという箱に入ってる値で上書きする
document.getElementById("name").innerHTML = username;


// ランダムで0~4の数値のどれかが取得できる
let rand = Math.floor( Math.random() * 5);

if (rand == 0){
    userresult = "大吉";
}

if (rand == 1){
    userresult = "中吉";
}

if (rand == 2){
    userresult = "小吉";
}

if (rand == 3){
    userresult = "吉";
}

if (rand == 4){
    userresult = "凶";
}

document.getElementById("result").innerHTML = userresult;