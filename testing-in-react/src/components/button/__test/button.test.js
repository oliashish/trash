import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="save" />);
    expect(getByTestId("button")).toHaveTextContent("save");
});
