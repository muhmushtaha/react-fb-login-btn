import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FacebookLoginButton from "./FacebookLoginButton";

describe("FacebookLoginButton", () => {
  const defaultProps = {
    appId: "test_app_id",
    onSuccess: jest.fn(),
    onFail: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the button with default props", () => {
    render(<FacebookLoginButton {...defaultProps} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Login with Facebook");
  });

  it("renders the button with custom text", () => {
    render(
      <FacebookLoginButton {...defaultProps} text="Sign in with Facebook" />,
    );
    expect(screen.getByText("Sign in with Facebook")).toBeInTheDocument();
  });

  it("calls onSuccess when login is successful", () => {
    // Mock the Facebook SDK
    window.FB = {
      login: (callback: Function) => {
        callback({ status: "connected", authResponse: {} });
      },
    } as any;

    render(<FacebookLoginButton {...defaultProps} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(defaultProps.onSuccess).toHaveBeenCalledWith({
      status: "connected",
      authResponse: {},
    });
  });

  it("calls onFail when login fails", () => {
    // Mock the Facebook SDK
    window.FB = {
      login: (callback: Function) => {
        callback({ status: "unknown" });
      },
    } as any;

    render(<FacebookLoginButton {...defaultProps} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(defaultProps.onFail).toHaveBeenCalledWith({ status: "unknown" });
  });
});
