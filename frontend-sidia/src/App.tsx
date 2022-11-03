import { GlobalStyle } from './styles/global';
import { RoutesApp } from './routes';
import { AuthProvider } from './hooks/userAuth';
function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  )
}

export default App