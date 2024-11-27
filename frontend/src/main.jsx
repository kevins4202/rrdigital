import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FormProvider } from "./contexts/FormContext";

createRoot(document.getElementById('root')).render(
    <FormProvider>
        <App />
    </FormProvider>
)
