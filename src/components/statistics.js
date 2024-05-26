
function CartStatistics({selectedRowKeys, books}) {
    const getTotalPrice = (selectedRowKeys) => {
        let totalPrice = 0;
        selectedRowKeys.forEach((key) => {
          const item = books.find(item => item.id === key);
          if (item) {
            totalPrice += item.book.price * item.number;
          }
        });
        return totalPrice;
    }

    return (
        <p>已选书本：
            <span className="red-big-text">
            {`${selectedRowKeys.length}类`}
            </span>
            &nbsp;&nbsp;&nbsp; 合计：
            <span className="red-big-text">
            {`${getTotalPrice(selectedRowKeys) / 100}元`}
            </span>
        </p> 
    );
}

function RankStatistics({orders}) {
  const totalBooks = orders.reduce((total, order) => total + order.number, 0);
  const totalPrice = orders.reduce((total, order) => total + order.book.price * order.number, 0);

    return (
      <h3>购书总本数：
          <span className="red-big-text">{`${totalBooks}本`}</span>
          &nbsp;&nbsp;&nbsp; 总金额：
          <span className="red-big-text">{`${totalPrice / 100}元`}</span>
      </h3> 
    );
}

export { CartStatistics, RankStatistics };

