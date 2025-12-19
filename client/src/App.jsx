import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SongsPage from './pages/SongsPage';
import AlbumsPage from './pages/AlbumsPage';
import AlbumInfoPage from './pages/AlbumInfoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/albums/:album_id" element={<AlbumInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
