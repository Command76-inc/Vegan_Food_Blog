// Documentation for jest testing https://testing-library.com/docs/queries/byrole/
// https://jestjs.io/docs/jest-platform
// Documentation for react-testing-library https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries
// To run tests enter npm run test in terminal

import next from "next";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const heading = screen.getByText(/We'd like to walk along with /i);

    expect(heading).toBeInTheDocument();
  });
});
