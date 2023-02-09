


function getMathResult(base, repit) {
  if ((typeof repit) != 'number' || repit <= 0) {
    console.log(base);
    console.log(typeof base);
    return base;
  } else {
    let result = '';
    for (let i = 1; i <= repit; i++) {
      result = result + `${base * i}`;
      if (i === repit) {
        result = result + "";
      } else {
        result = result + "---";
      }
    }
     console.log(result);
     console.log(typeof result);
     return result;
  }
}

getMathResult(5, 10);

function getMathResult(num, times) {
  if (typeof(times) !== 'number' || times <= 0) {
      return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
      if (i === times) {
          str += `${num * i}`;
          // Тут без черточек в конце
      } else {
          str += `${num * i}---`;
          // Это тоже самое, что и
          // str = str + num * i + "---"
      }
  }

  return str;
}

getMathResult(10, 5);








function promotion(result) {
  console.log(result * discount)
}

const res = convert(500, usdCurr);
promotion(res);

getMathResult(5, 3);


//2.
function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log("Done");
}

test();


//3. функция всегда что-то возвращает. в данном случе андефайнд
function doNothing() {};
console.log(doNothing() === undefined);