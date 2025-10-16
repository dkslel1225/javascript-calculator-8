export const checkSeparator = (str) => {
  // 커스텀 구분자를 사용하는지
  if (!isNaN(str[0])) {
    return null;
  }

  // 커스텀 구분자 형식 체크
  const rightStart = str.startsWith("//");
  const rightEnd = str.slice(3, 5) === "\\n";
  if (!rightStart || !rightEnd) {
    throw new Error("[Error] 커스텀 구분자 형식이 잘못되었습니다.");
  }

  // 커스텀 구분자 문자 여부 체크
  const isChar = isNaN(str[2]);
  if (!isChar) {
    throw new Error("[Error] 커스텀 구분자는 문자만 가능합니다.");
  }

  // 커스텀 구분자 반환
  return str[2];
};
