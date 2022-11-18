import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import WalletCard from ".";

describe("WalletCard", () => {
  it("should render without error", () => {
    renderComponent(<WalletCard />);

    expect(screen.getByText("Integrations Wallet")).toBeInTheDocument();
  });
});
