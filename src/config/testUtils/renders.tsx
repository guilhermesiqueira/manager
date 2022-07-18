import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router-dom";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

import {
  renderHook as renderTestingLibraryHook,
  RenderHookResult,
} from "@testing-library/react-hooks";

export interface RenderWithContextResult {
  component: RenderResult;
  history: MemoryHistory;
}

export type RenderComponentProps = {
  history?: MemoryHistory;
  locationState?: Record<any, any>;
};

function renderAllProviders(
  children: any,
  {
    history = createMemoryHistory(),
    locationState = {},
  }: RenderComponentProps = {},
) {
  const queryClient = new QueryClient();
  const historyObject = history;
  historyObject.location.state = locationState;

  return {
    component: (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router history={historyObject} />
        </QueryClientProvider>
      </ThemeProvider>
    ),
    history: historyObject,
  };
}

export function renderComponent(
  component: JSX.Element,
  renderComponentProps: RenderComponentProps = {},
): RenderWithContextResult {
  const { component: componentWithProviders, history } = renderAllProviders(
    component,
    renderComponentProps,
  );
  return {
    component: render(componentWithProviders),
    history,
  };
}

type RenderHookReturn = {
  hook: RenderHookResult<any, any>;
  history: MemoryHistory;
};
export function renderHook(
  hook: (props: any) => any,
  renderComponentProps: RenderComponentProps = {},
): RenderHookReturn {
  let history = createMemoryHistory();
  const wrapper = ({ children }: any) => {
    const { component, history: historyObject } = renderAllProviders(
      children,
      renderComponentProps,
    );
    history = historyObject;
    return component;
  };

  return {
    hook: renderTestingLibraryHook(hook, { wrapper }),
    history,
  };
}
