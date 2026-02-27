"use client";

import { Component, ReactNode } from "react";

export default class ShowcaseErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute bottom-0 w-full h-70 flex items-center justify-center">
          <p className="font-mono text-xs uppercase text-gray-600">
            Failed to load projects.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
