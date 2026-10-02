// The frame: a Shell header with the logotype and the app's name, over a Panel
// main holding the one screen. An error boundary around it shows a danger alert
// with a reload button instead of a blank page.

import { Component, type ErrorInfo, type ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Alert, Button, EmptyState, Logotype, Panel, Prose, Row, Shell, Stack } from "@livetools/ui";
import { Finder } from "./screens/Finder";

/** Where the app is served from: "/" locally, "/<repository>/" on GitHub Pages
 *  without a custom domain. The router takes it without the trailing slash. */
const BASENAME = import.meta.env.BASE_URL.replace(/\/$/, "");

type BoundaryState = { failed: boolean };

/** React has no hook for catching a render fault, so this one piece is a class. */
class ErrorBoundary extends Component<{ children: ReactNode }, BoundaryState> {
  state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <Panel as="main" className="app-main">
        <Alert variant="danger" title="Something went wrong">
          <Stack gap="sm">
            <Prose>
              <p>This screen hit a fault and stopped. Reloading the page starts it again.</p>
            </Prose>
            <Row>
              <Button onClick={() => window.location.reload()}>Reload the page</Button>
            </Row>
          </Stack>
        </Alert>
      </Panel>
    );
  }
}

function Frame() {
  return (
    <>
      <Shell className="app-band" logoSize="large">
        <Row>
          <Logotype />
          <span className="app-title">Horn System 117</span>
        </Row>
      </Shell>
      <Panel as="main" className="app-main">
        <Routes>
          <Route path="/" element={<Finder />} />
          <Route path="*" element={<EmptyState title="Nothing at this address">This tool has one page.</EmptyState>} />
        </Routes>
      </Panel>
    </>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={BASENAME}>
        <Frame />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
