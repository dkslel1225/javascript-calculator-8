import { Console } from "@woowacourse/mission-utils";

import { checkSeparator } from "./checkSeparator.js";
import { getOperands } from "./getOperands.js";

export const calculator = async () => {
  const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
  const str = input.replace(/\s/g, ""); // 공백 제거
  const separator = checkSeparator(str);
  const operands = getOperands(str, separator);
  Console.print(`결과 : ${result}`);
};
