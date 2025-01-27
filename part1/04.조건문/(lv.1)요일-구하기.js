/**
 * [(lv.1)요일-구하기.js]
 *
 * 요일 번호(dayNumber)를 전달받아 해당 요일을 한글로 반환하세요.
 * 1은 "월", 2는 "화", ..., 7은 "일"입니다.
 * 1부터 7 사이의 숫자가 아니면 "Invalid"를 반환하세요.
 * 반드시 switch문을 사용하세요.
 *
 * @param {number} dayNumber
 * @returns {string} "월", "화", ..., "일" or "Invalid"
 */
function getDayName(dayNumber) {
  let results = "";
  switch (dayNumber) {
    case 1: 
      results = "월"
    case 2:
      results = "화"
    case 3:
      results = "수"
    case 4:
      results = "목"
    case 5:
      results = "금"
    case 6:
      results = "토"
    case 7:
      results= "일"
    default: 
    results ="Invaild"
  }
  // TODO
}

// export 를 수정하지 마세요.
export { getDayName };
