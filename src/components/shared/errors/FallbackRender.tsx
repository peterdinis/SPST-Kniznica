import { Button } from '@mui/material'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

interface IProps {
  error: string;
  children?: React.ReactNode;
}

const FallbackRender: React.FC<IProps> = ({error, children}: IProps) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            {error}
            <Button onClick={() => resetErrorBoundary()}>Skúsiť znova</Button>
          </div>
        )}
      >
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
)

export default FallbackRender 