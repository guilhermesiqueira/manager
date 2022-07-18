import React from "react";
import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router-dom";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export interface RenderWithContextResult {
  component: RenderResult;
  history: MemoryHistory;
}

export async function waitForPromises() {
  // eslint-disable-next-line no-promise-executor-return
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
}

export type RenderComponentProps = {
  history?: MemoryHistory;
  locationState?: Record<any, any>;
};
export function renderComponent(
  component: JSX.Element,
  {
    history = createMemoryHistory(),
    locationState = {},
  }: RenderComponentProps = {},
): RenderWithContextResult {
  const queryClient = new QueryClient();
  const historyObject = history;
  historyObject.location.state = locationState;

  return {
    component: render(
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router history={historyObject} />
        </QueryClientProvider>
      </ThemeProvider>,
    ),
    history,
  };
}

export function clickOn(textOrComponent: string | any) {
  if (typeof textOrComponent === "string") {
    return fireEvent.click(screen.getByText(textOrComponent));
  }

  return fireEvent.click(textOrComponent);
}
