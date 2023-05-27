import { CustomerServiceOutlined } from "@ant-design/icons";
import "./style/list-music.css";
import { Table } from "antd";
import AudioPlayer from "react-audio-player";
// import ReactAudioPlayer from "react-audio-player";
interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  key: number;
  view: number;
}

interface SongTableProps {
  songs: Song[];
}

function SongTable({ songs }: SongTableProps) {
  const columns = [
    { title: "Tên bài hát", dataIndex: "title", key: "title" },
    { title: "Ca sĩ", dataIndex: "artist", key: "artist" },
    {
      title: "Audio",
      dataIndex: "url",
      key: "url",
      render: (url: string) => <AudioPlayer src={url} controls />,
    },
    {
      title: "Lượt nghe",
      dataIndex: "view",
      key: "view",
      render: (view: number) => (
        <div>
          <CustomerServiceOutlined /> {view}
        </div>
      ),
    },
  ];

  return (
    <Table
      dataSource={songs}
      columns={columns}
      bordered
    />
  );
}

function ListMusic(props: any) {
  const listMusic = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      url: "see-tinh.mp3",
      key: 1,
      view: 564,
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      url: "see-tinh.mp3",
      key: 2,
      view: 543,
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 3,
      view: 8723,
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 4,
      view: 857,
    },

    {
      id: 5,
      title: "Song 5",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 5,
      view: 1287,
    },
    {
      id: 6,
      title: "Song 6",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 6,
      view: 53487,
    },
    {
      id: 7,
      title: "Song 7",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 7,
      view: 687,
    },
    {
      id: 8,
      title: "Song 8",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 8,
      view: 827,
    },
    {
      id: 9,
      title: "Song 9",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 9,
      view: 187,
    },
    {
      id: 10,
      title: "Song 10",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 10,
      view: 387,
    },
    {
      id: 11,
      title: "Song 11",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 11,
      view: 687,
    },
    {
      id: 12,
      title: "Song 12",
      artist: "Artist 3",
      url: "see-tinh.mp3",
      key: 12,
      view: 887,
    },
  ];
  let songs: any = [];
  if (props.page === "1") {
    songs = listMusic;
  } else {
    if (props.page === "2") {
      const sortedList = listMusic.sort((a, b) => b.view - a.view);
      songs = sortedList.slice(0, 10);
    }
  }
  return (
    <div className="list-music">
      <h1>Play List</h1>
      <SongTable songs={songs} />
    </div>
  );
}

export default ListMusic;