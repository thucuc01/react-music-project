import "./style/list-music.css";
import { CustomerServiceOutlined, DeleteOutlined } from "@ant-design/icons";
import { Table, Input } from "antd";
import AudioPlayer from "react-audio-player";
import { useNavigate } from "react-router-dom";
import { dataListMusic } from "./data";
import { Col, Row } from "antd";
import { Button, Space } from "antd";

const { Search } = Input;

interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  key: number;
  view: number;
  img: string;
  category: string;
}
interface SongTableProps {
  songs: Song[];
}

const onSearch = (value: string) => console.log(value);
function SongTable({ songs }: SongTableProps) {
  const navigate = useNavigate();
  const onClick = (key: any) => {
    navigate("/detail/" + key);
  };
  const onClickDelete = (key: number) => {
    console.log(key, "key delete");
  };
  let columns = [
    {
      title: "Tên bài hát ",
      dataIndex: "img",
      key: "img",
      colSpan: 2,
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
      colSpan: 0,
      key: "title",
      render: (_: any, record: Song) => (
        <>
          {/* // <Routes ><Route path="detail"><Route path=":record.key"/>{record.title }</Route></Routes> */}

          {/* <button onClick={onClick(record.key)}>{record.title}</button> */}

          <Space>
            <Button type="text" onClick={() => onClick(record.key)}>
              <span style={{ color: "blue" }}>{record.title}</span>
            </Button>
          </Space>
        </>
      ),
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
  if (localStorage.getItem("isLogin") === "1") {
    columns = [
      ...columns,
      {
        title: "Action",
        dataIndex: "key",
        key: "key",
        render: (key: number) => (
          <Button type="primary" onClick={() => onClickDelete(key)}>
            <DeleteOutlined /> Delete
          </Button>
        ),
      },
    ];
  }

  return <Table dataSource={songs} columns={columns} bordered />;
}
function ListMusic(props: any) {
  console.log(props);
  const listMusic = JSON.parse(JSON.stringify(dataListMusic));
  let songs: any = [];
  switch (props.page) {
    case "top10-all":
      console.log(1);
      const sortedList = listMusic.sort((a: any, b: any) => b.view - a.view);
      songs = sortedList.slice(0, 10);
      break;
    case "top10-us":
      break;
    case "top10-vn":
      break;
    default:
      songs = dataListMusic;
  }

  const navigate = useNavigate();
  const onClickCreateSong = () => {
    navigate("/create");
  };
  return (
    <div className="list-music">
      <Row className="title-search">
        <Col flex={4}>
          {localStorage.getItem("isLogin") === "1" && (
            <div>
              <Button type="primary" onClick={onClickCreateSong}>
                Create Song
              </Button>
            </div>
          )}
        </Col>

        <Col flex={1}>
          <Search
            placeholder="Tim kiem theo ten bai hat"
            onSearch={onSearch}
            enterButton
          />
        </Col>
      </Row>

      <SongTable songs={songs} />
    </div>
  );
}

export default ListMusic;
