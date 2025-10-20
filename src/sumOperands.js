export const sumOperands = (operands) => {
  const result = operands.reduce((acc, operand) => {
    return acc + Number(operand);
  }, 0);
  return result;
};
