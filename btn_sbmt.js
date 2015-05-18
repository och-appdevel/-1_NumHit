function btn_sbmt(){
  var Ans = document.gameStart.num_ans.value;
console.log("Ans = " + Ans);
  
  var num1 = Ans.slice(0,1);
  var num2 = Ans.slice(1,2);
  var num3 = Ans.slice(2,3);
  var num4 = Ans.slice(3);
console.log("num1 + num2 + num3 + num4 = " + num1 + "+" + num2 + "+" + num3 + "+" + num4);
  
  var Ans = new Array(num1,num2,num3,num4);
console.log("Ans = " + Ans);

  var yourData = new Array(document.input.digit_0.value,
                           document.input.digit_1.value,
                           document.input.digit_2.value,
                           document.input.digit_3.value);
console.log("yourData = " + yourData);
  
// strike判定
  var ansResult_strike = 0;

  for (i = 0; i < 4; i++){
console.log("Ans[" + i + "] = " + Ans[i]);
console.log("yourData[" + i + "] = " + yourData[i]);
    if ( Ans[i] == yourData[i] ){
      ansResult_strike++;
    }
  }

  if ( ansResult_strike == 4 ){
    ansResult_strike = "exellent!!";
  }

console.log("ansResult_strike = " + ansResult_strike);
console.log("- - - - - - - - - - - - - - - -" + "\n" + "\n");

// ball判定
  var ansResult_ball = 0;

  for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
      if ( i != j && Ans[i] == yourData[j] ){
        ansResult_ball++;
      }
console.log("Ans[" + i + "] = " + Ans[i]);
console.log("yourData[" + j + "] = " + yourData[j]);
    }
  }

console.log("ansResult_ball = " + ansResult_ball);
console.log("- - - - - - - - - - - - - - - -" + "\n" + "\n");

//結果出力
  yourData_rslt = yourData[0] + yourData[1] + yourData[2] + yourData[3];
  
  var n = 1;
console.log("n = " + n);
console.log("typeof n = " + typeof n);

  for ( n = 1; n <= 16; n++ ){
    if ( n < 16 && $("td#ans_" + n).text() == "" ){
      $("td#ans_" + n).text(yourData_rslt);
      $("td#strike_" + n).text(ansResult_strike);
      $("td#ball_" + n).text(ansResult_ball);
      n++;
      break;
    } // else if ( n >= 16 ) {
      
//    }
  }


}