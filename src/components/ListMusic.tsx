import { CustomerServiceOutlined } from "@ant-design/icons";
import "./style/list-music.css";
import { Table } from "antd";
import AudioPlayer from "react-audio-player";
import { useNavigate } from "react-router-dom";
// import ReactAudioPlayer from "react-audio-player";
interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  key: number;
  view: number;
  img: string;
}
interface SongTableProps {
  songs: Song[];
}

function SongTable({ songs }: SongTableProps) {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Tên bài hát ",
      dataIndex: "img",
      key: "img",
      colSpan:2,
      render: (img: string) => (
        <img
          alt="loading......"
          src={img}
          style={{ height: "70px", width: "70px" }}
        />
      ),
    },
    {
      title: "",
      dataIndex: "title",
      colSpan:0,
      key: "title",
      render:(_: any, record: Song) => (
        <><a href={`detail/` + record.key}>{record.title }</a></>
      )
    },
    { title: "Ca sĩ", dataIndex: "artist", key: "artist" },
    {
      title: "Audio",
      dataIndex: "url",
      key: "url",
      render: (url: string) => (
        <div>
          <AudioPlayer src={url} controls />
        </div>
      ),
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
  return <Table dataSource={songs} columns={columns} bordered />;
}
function ListMusic(props: any) {
  const listMusic = [
    {
      id: 1,
      title: "See Tình",
      artist: "Hoàng Thùy Linh",
      url: "see-tinh.mp3",
      key: 1,
      view: 564,
      img: "https://images2.thanhnien.vn/Uploaded/congthang/2022_03_02/anh-1-1930.jpg",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Hòa Minzy",
      url: "thi-mau.mp3",
      key: 2,
      view: 543,
      img: "https://ss-images.saostar.vn/pc/1678091600290/saostar-udgx6krx21ke6met.jpg",
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Jenny - BlackPink",
      url: "solo-Jennie.mp3",
      key: 3,
      view: 8723,
      img: "https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/styles/large/public/2020-09/eijrzntu8aa-lv-1600819839899628200672-2_0.jpg"
    },
    {
      id: 4,
      title: "Song 4",
      artist: "BlackPink",
      url: "boombayah.mp3",
      key: 4,
      view: 857,
      img:"https://static2.yan.vn/YanNews/2167221/201806/black-pink-xinh-dep-long-lon-trong-hinh-anh-nha-hang-cua-mv-moi-13be2748.jpg"
    },
    {
      id: 5,
      title: "Song 5",
      artist: "Lisa - BlackPink",
      url: "see-tinh.mp3",
      key: 5,
      view: 1287,
      img:"https://file.tinnhac.com/resize/600x-/2019/03/25/20190325093647-e63d.jpg"
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
  switch (props.page) {
    case "5":
      const sortedList = listMusic.sort((a, b) => b.view - a.view);
      songs = sortedList.slice(0, 10);
      break;
    default:
      songs = listMusic;
  }

  return (
    <div className="list-music">
      <h1>Play List</h1>
      <SongTable songs={songs} />
    </div>
  );
}
export default ListMusic;
