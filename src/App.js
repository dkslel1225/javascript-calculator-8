import { calculator } from "./features/calculator.js";

class App {
  async run() {
    try {
      await calculator();
    } catch (e) {
      throw e;
    }
  }
}

export default App;
