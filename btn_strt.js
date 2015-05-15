function btn_strt(){
  var result = 1;

  while ( result != 0 ){
//乱数で四桁を設定
    var rum = Math.floor(Math.random() * 10000 ); 

//行頭が"0"の場合、明示的に"0"を挿入
    var rum = ("0000" + rum).slice(-4);
console.log("CHK1 rum = " + rum);

//設定した四桁を配列に格納し、重複がないかチェック
    var num1 = rum.slice(0,1);
    var num2 = rum.slice(1,2);
    var num3 = rum.slice(2,3);
    var num4 = rum.slice(3);
  
    var numCheck = new Array(num1, num2, num3, num4);
    var numCheck = numCheck.sort();
console.log("CHK2 numCheck = " + numCheck);

    for (i = 0; i < Object.keys(numCheck).length - 1; i++){
      var j = i + 1;
console.log("CHK3 numCheck[i] = " + numCheck[i]);
console.log("CHK4 numCheck[j] = " + numCheck[j]);
      if ( numCheck[i] == numCheck[j] ){
        result = 1;
        break;
      } else {
        result = 0;
      }
    }
console.log("CHK5 result = " + result);
  }

  var Number = ( num1 + num2 + num3 + num4 );
console.log("CHK6 Number = " + Number);
  document.gameStart.num_ans.value=Number;
}