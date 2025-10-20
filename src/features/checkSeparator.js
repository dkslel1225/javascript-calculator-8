export const checkSeparator = (str) => {
  // 커스텀 구분자를 사용하는지
  const startCustom = str.startsWith("//");
  if (!startCustom) {
    return null;
  }

  // 커스텀 구분자 형식 체크
  const rightEnd = str.indexOf("\\n") === 3;
  if (!rightEnd) {
    throw new Error("[ERROR] 커스텀 구분자 형식이 잘못되었습니다.");
  }

  // 커스텀 구분자 문자 여부 체크
  const isChar = isNaN(str[2]);
  if (!isChar) {
    throw new Error("[ERROR] 커스텀 구분자는 문자만 가능합니다.");
  }

  // 커스텀 구분자 반환
  return str[2];
};
