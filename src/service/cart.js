
export async function getCartItems() {
    // const url = `${PREFIX}/book/${id}`;
    let result;

    result = [];

    for(var i = 1; i <= 10; i++){
        result.push({
            id : i,
            book : {
              id : i,
              title: `Title ${i}`,
              author: `author ${i}`,
              description: `Description ${i}`,
              price: i * 4.5,
              cover: `books/book${i}.jpg`,
              sales: i,
            },
            number: i,
        })
    }

    return result;
}