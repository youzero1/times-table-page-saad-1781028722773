import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimesTablePage from '@/pages/TimesTablePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimesTablePage />} />
      </Routes>
    </BrowserRouter>
  );
}
