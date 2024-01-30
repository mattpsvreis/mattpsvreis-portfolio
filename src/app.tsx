import { Providers } from './providers/index.tsx';
import { MainRoutes } from './routes/index.tsx';

function App() {
  return (
    <Providers>
      <MainRoutes />
    </Providers>
  );
}

export default App;
