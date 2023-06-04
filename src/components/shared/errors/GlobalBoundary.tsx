import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
          <main className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-black tracking-widest">
              Chyba
            </h1>
            <div className="mt-5">
              <button
                onClick={() => this.setState({ hasError: false })}
                className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
              >
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  Refreshnúť stránku
                </span>
              </button>
            </div>
          </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
