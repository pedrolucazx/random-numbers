//   return Math.floor(Math.random() * (60 - 1 + 1)) + 1;
import { Lotto } from './components/Lotto'
import '../src/Styles/app.css'

export function App() {  
  return (
    <div className="App">
      <Lotto />
    </div>
  );
}
