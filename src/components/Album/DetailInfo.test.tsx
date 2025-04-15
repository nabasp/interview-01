import React from "react";
import { render } from "@testing-library/react-native";
import { DetailInfo } from "./DetailInfo";

describe("DetailInfo Component", () => {
  it("renders correctly with given info", () => {
    const info = [
      { label: "Artist", value: "John Doe" },
      { label: "Album", value: "Greatest Hits" },
    ];

    const { getByText } = render(<DetailInfo info={info} />);

    expect(getByText("Artist:")).toBeTruthy();
    expect(getByText("John Doe")).toBeTruthy();
    expect(getByText("Album:")).toBeTruthy();
    expect(getByText("Greatest Hits")).toBeTruthy();
  });

  it("renders no items when info is empty", () => {
    const info: any[] = [];

    const { queryByText } = render(<DetailInfo info={info} />);

    expect(queryByText(":")).toBeNull();
  });

  it("renders multiple items correctly", () => {
    const info = [
      { label: "Genre", value: "Rock" },
      { label: "Year", value: "2023" },
      { label: "Tracks", value: 12 },
    ];

    const { getByText } = render(<DetailInfo info={info} />);

    expect(getByText("Genre:")).toBeTruthy();
    expect(getByText("Rock")).toBeTruthy();
    expect(getByText("Year:")).toBeTruthy();
    expect(getByText("2023")).toBeTruthy();
    expect(getByText("Tracks:")).toBeTruthy();
    expect(getByText("12")).toBeTruthy();
  });
});
