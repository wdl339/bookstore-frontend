import { List } from 'antd';
import BookCard from './book_card';

function BookList({data, pageSize, current, total, onPageChange}) {
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
                pageSize: pageSize,
                current: current,
                total: total,
                onChange: onPageChange,
                position: 'bottom', 
                align: 'center'
            }}
        />
  );
}

export default BookList;