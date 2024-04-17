export async function getAllBooks() {
    let result;

    result = [];

    for(var i = 1; i <= 12; i++){
        result.push({
            id : i,
            title: `Title ${i}`,
            author: `author ${i}`,
            description: `Description ${i}`,
            price: i * 4.5,
            cover: `books/book${i}.jpg` ,
            sales: i,
        })
    }

    return result;
}

export async function getBookById(id) {
    // const url = `${PREFIX}/book/${id}`;
    let result;

    result = {
        id : id,
        title: `Title ${id}`,
        author: `author ${id}`,
        description: `Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description ${id}`,
        price: id * 4.5,
        cover: `http://localhost:3000/books/book${id}.jpg`,
        sales: id,
        stock: id * 10,
    }

    return result;
}