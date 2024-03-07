/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { expect, vi } from "vitest";
import EVD from "@components/Button/table-evd.jsx";

// button component test for the view edit and delete button
describe("Table Button Component", () => {
  vi.mock("@iconify/react", () => ({
    Icon: vi.fn(() => <span>Icon</span>),
  }));

  const text = "Icon";

  it("should render the evd button evd(edit, view and delete button)", () => {
    render(<EVD />);

    const iconElement = screen.getByText(text);

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent(text);
  });
});
