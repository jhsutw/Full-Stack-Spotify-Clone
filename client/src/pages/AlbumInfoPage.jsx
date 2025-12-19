import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import SongCard from '../components/SongCard';
import { formatDuration, formatReleaseDate } from '../helpers/formatter';
const config = require('../config.json');

export default function AlbumInfoPage() {
  const { album_id } = useParams();

  const [songData, setSongData] = useState([]);
  const [albumData, setAlbumData] = useState({});
  const [selectedSongId, setSelectedSongId] = useState(null);

  useEffect(() => {
    fetch(`http://${config.server_host}:${config.server_port}/album/${album_id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch album');
        return res.json();
      })
      .then(resJson => setAlbumData(resJson))
      .catch(err => console.error(err));

    fetch(`http://${config.server_host}:${config.server_port}/album_songs/${album_id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch songs');
        return res.json();
      })
      .then(resJson => setSongData(resJson))
      .catch(err => console.error(err));
  }, [album_id]);


  return (
    <Container>
      {selectedSongId && <SongCard songId={selectedSongId} handleClose={() => setSelectedSongId(null)} />}

      {/* Album header section */}
      <Stack direction='row' justifyContent='center' alignItems='center' spacing={4} sx={{ my: 4 }}>
        <img
          src={albumData.thumbnail_url}
          alt={`${albumData.title || ''} album art`}
          style={{
            width: '280px',
            height: '280px',
            borderRadius: '12px',
            objectFit: 'cover'
          }}
        />
        <Stack>
          <h1 style={{ fontSize: 40 }}>{albumData.title}</h1>
          <h2>Released: {albumData.release_date ? formatReleaseDate(albumData.release_date) : 'Unknown'}</h2>
        </Stack>
      </Stack>

      {/* Table section */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Plays</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songData.map((song) => (
              <TableRow key={song.song_id}>
                <TableCell>{song.number}</TableCell>
                <TableCell>
                  <Link onClick={() => setSelectedSongId(song.song_id)}>
                    {song.title}
                  </Link>
                </TableCell>
                <TableCell>{song.plays.toLocaleString()}</TableCell>
                <TableCell>{formatDuration(song.duration)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

