export const getOperands = (str, separator) => {
  const customized = separator === null;
  const operands = customized
    ? str.split(/[,:]/)
    : str.slice(5).split(separator);
  isValidExpression(operands);
  return operands;
};

const isValidExpression = (operands) => {
  operands.forEach((operand) => {
    if (isNaN(operand)) throw new Error("[ERROR] 숫자가 아닌 값이 있습니다.");
    if (Number(operand) < 0)
      throw new Error("[ERROR] 음수는 계산할 수 없습니다.");
  });
};
