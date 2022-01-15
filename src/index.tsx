import ReactDOM from 'react-dom';
import App from './App';
import { ProductsContextProvider } from "./context/Context";

ReactDOM.render(
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>
  ,
  document.getElementById('root')
);

