/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import BreadCrumb from "../../components/BreadCrumb";
import "@testing-library/jest-dom/vitest";

describe("BreadCrumb", () => {
  it("should render the breadCrumb compoenent", () => {
    const heading = "My Heading";
    const text = "My Text";
    render(<BreadCrumb head={heading} text={text} />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();

    expect(list).toHaveTextContent(new RegExp(`${heading}.*${text}`, "i"));
  });
});
