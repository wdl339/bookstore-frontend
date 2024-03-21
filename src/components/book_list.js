import { List } from 'antd';
import BookCard from './book_card';

function BookList({data}) {
  return (
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
  );
}

export default BookList;