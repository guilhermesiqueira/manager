import { renderComponent, clickOn } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import WalletLayout from ".";

describe("WalletLayout", () => {
  it("renders the children passed", () => {
    renderComponent(
      <WalletLayout>
        <div>test</div>
      </WalletLayout>,
    );

    expectTextToBeInTheDocument("test");
  });

  describe("when the wallet is connected", () => {
    beforeEach(() => {
      renderComponent(
        <WalletLayout>
          <div>test</div>
        </WalletLayout>,
        {
          walletProviderValue: {
            wallet: "0x6E060041D62fDd76cF27c582f62983b864878E8F",
          },
          networkProviderValue: {
            isValidNetwork: true,
          },
        },
      );
    });

    it("shows the truncated wallet", () => {
      expectTextToBeInTheDocument("0x6E...8E8F");
    });
  });

  describe("when the wallet is not connected", () => {
    const mockConnectWallet = jest.fn();

    beforeEach(() => {
      renderComponent(
        <WalletLayout>
          <div>test</div>
        </WalletLayout>,
        {
          walletProviderValue: {
            connectWallet: mockConnectWallet,
          },
        },
      );
    });

    it("shows the connect wallet button", () => {
      expectTextToBeInTheDocument("connect");
    });

    describe("when the connect button is clicked", () => {
      it("calls the connect wallet method", () => {
        clickOn("connect");
        expect(mockConnectWallet).toHaveBeenCalled();
      });
    });
  });
});
