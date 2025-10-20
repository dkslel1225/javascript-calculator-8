import { Console } from "@woowacourse/mission-utils";

import { checkSeparator } from "./checkSeparator.js";
import { getOperands } from "./getOperands.js";
import { sumOperands } from "./sumOperands.js";

export const calculator = (input) => {
  const str = input.replace(/\s/g, ""); // 공백 제거
  const separator = checkSeparator(str);
  const operands = getOperands(str, separator);
  const result = sumOperands(operands);
  return result;
};
