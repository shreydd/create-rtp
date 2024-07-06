import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./src/components/Home";

test("Load home component and measure render time", () => {
  const startTime = performance.now();
  render(<Home />);
  const endTime = performance.now();
  const renderTimeMS = endTime - startTime;
  const renderTimeSec = renderTimeMS / 1000;
  console.log(`The Home component took ${renderTimeSec.toFixed(2)} seconds to load`);
});