import { ErrorBoundary } from './infrastructure/errors/error-boundary/error-boundary.js';
import { Providers } from './providers/index.js';

function App() {
  return (
    <ErrorBoundary>
      <Providers>
        <div className='App'>
          <h1>App</h1>
        </div>
      </Providers>
    </ErrorBoundary>
  );
}

export default App;
