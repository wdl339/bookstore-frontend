import { List, Pagination } from 'antd';
import BookCard from '../components/card';
import "../css/books.css";


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
        },
        {
            title: 'Title 9',
            description: 'Description 9',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 10',
            description: 'Description 10',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 11',
            description: 'Description 11',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 12',
            description: 'Description 12',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 13',
            description: 'Description 13',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 14',
            description: 'Description 14',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 15',
            description: 'Description 15',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 16',
            description: 'Description 16',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 17',
            description: 'Description 17',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        },
        {
            title: 'Title 18',
            description: 'Description 18',
            cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        }
      ];

    return (
          <div className="background">    
            <div className='book-list-container'>
              <List
                  grid={{
                  gutter: 32,
                  column: 4
                  }}
                  dataSource={data}
                  renderItem={(item) => (
                  <List.Item>
                      <BookCard book={item}/>
                  </List.Item>
                  )}
              />
              <Pagination simple defaultCurrent={1} total={50} />
            </div>
          </div>
    );
}


export default Books;