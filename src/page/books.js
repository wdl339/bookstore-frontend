import { List } from 'antd';
import Search from 'antd/es/input/Search';
import BookCard from '../components/book_card';
import "../css/global.css";

function Books() {

    const data = [
        {
          title: 'Title 1',
          description: 'Description 1',
          cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
          title: 'Title 2',
            description: 'Description 2',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
          title: 'Title 3',
            description: 'Description 3',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
          title: 'Title 4',
            description: 'Description 4',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
          title: 'Title 5',
            description: 'Description 5',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
          title: 'Title 6',
            description: 'Description 6',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 7',
            description: 'Description 7',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 8',
            description: 'Description 8',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        }
      ];

    return (
          <div className="content-background">    
            <div className='content-container'>
              <Search 
                  placeholder="输入书名查询"
                  allowClear
                  enterButton="搜索"
                  size="large"
              />
              <List
                  grid={{
                  gutter: 32,
                  column: 5
                  }}
                  dataSource={data}
                  renderItem={(item) => (
                  <List.Item>
                      <BookCard book={item}/>
                  </List.Item>
                  )}
                  pagination={{ pageSize: 10 , position: 'bottom', align: 'center'}}
              />
            </div>
          </div>
    );
}


export default Books;