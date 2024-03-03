import { List } from 'antd';
import Search from 'antd/es/input/Search';
import BookCard from '../components/book_card';
import "../css/global.css";

function Home() {

  const data = []
  for(var i = 1; i <= 12; i++){
      data.push({
          id : i,
          title: `Title ${i}`,
          author: `author ${i}`,
          description: `Description ${i}`,
          price: i * 4.5,
          cover: `books/book${i}.jpg` ,
          sales: i,
      })
  }

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
                  pagination={{ 
                    pageSize: 10 , 
                    position: 'bottom', 
                    align: 'center'
                  }}
              />
            </div>
          </div>
    );
}


export default Home;