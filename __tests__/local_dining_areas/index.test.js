// Documentation for jest testing https://testing-library.com/docs/queries/byrole/
// https://jestjs.io/docs/jest-platform
// Documentation for react-testing-library https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries
// To run tests enter npm run test in terminal

import { render, screen } from "@testing-library/react";
import AboutUs from "../../pages/app/local_dining_areas/index";
import "@testing-library/jest-dom";

describe("About Us Page", () => {
  it("renders a heading", () => {
    render(<AboutUs />);

    const heading = screen.queryAllByText("About Us")[0];

    expect(heading).toBeInTheDocument();
  });
  it("renders breadcrumbs", () => {
    render(<AboutUs />);

    const breadcrumbs = screen.getByRole("navigation", {"aria-label": "breadcrumb"} )
    expect(breadcrumbs).toBeInTheDocument();
  })
});