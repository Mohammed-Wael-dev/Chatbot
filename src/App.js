import './App.css';
import MainBody from './Components/chat/mainBody.js';
import { ThemeProvider } from './Components/ThemeContext.js';

function App() {
  return (
    <ThemeProvider>
        <MainBody/>
    </ThemeProvider>
  )
}
export default App;
