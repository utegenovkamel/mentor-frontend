import ReactDOM from 'react-dom/client';
import App from './App';
import {appStarted} from "~/shared/config";

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

appStarted();
root.render(<App />);


