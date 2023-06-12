import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils/renders";

import LoginPage from ".";

jest.mock("@react-oauth/google", () => {
  const defaultMockSuccess = {
    tokenId: "tokenId",
  };

  function GoogleLogin({ onSuccess, text }: any) {
    const handleClick = () => {
      onSuccess(defaultMockSuccess);
    };

    return (
      <button type="button" onClick={handleClick}>
        {text}
      </button>
    );
  }

  return {
    ...jest.requireActual("@react-oauth/google"),
    GoogleLogin,
  };
});
describe("Login", () => {
  it("should render without error", () => {
    renderComponent(<LoginPage />);

    expect(screen.getByText("Dapp Manager")).toBeInTheDocument();
  });

  it("should show google provider when click on button", () => {
    const mockFunction = jest.fn(() => ({ Response } as any));
    renderComponent(<LoginPage />, {
      authenticationProviderValue: {
        signInManagerWithGoogle: mockFunction,
      },
    });

    const button = screen.getByText("Login com o Google");
    button.click();

    expect(mockFunction).toHaveBeenCalled();
  });
});
