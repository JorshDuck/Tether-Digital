import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('Unhandled UI error:', error, info)
  }

  handleReload = (): void => {
    window.location.reload()
  }

  render(): React.ReactNode {
    if (!this.state.hasError) return this.props.children

    return (
      <div
        role="alert"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: '#020617',
          color: '#f8fafc',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '420px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>
            Algo salió mal / Something went wrong
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
            Ocurrió un error inesperado. Recarga la página para intentarlo de nuevo.
            <br />
            An unexpected error occurred. Reload the page to try again.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              background: '#06b6d4',
              color: '#020617',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}
          >
            Recargar / Reload
          </button>
        </div>
      </div>
    )
  }
}
