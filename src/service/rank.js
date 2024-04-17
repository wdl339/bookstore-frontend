
export async function getTopBooks(){
    let result;

    result = [];

    for(var i = 1; i <= 10; i++){
        result.push({
              id : i,
              title: `Title ${i}`,
              author: `author ${i}`,
              description: `Description ${i}`,
              price: i * 4.5,
              cover: `books/book${i}.jpg`,
              sales: (11 - i) * 10,
        })
    }

    return result;
}

export async function getTopUsers(){
    let result;

    result = [];

    for(var i = 1; i <= 10; i++){
        result.push({
              id : i,
              nickName: `Sir ${i}`,
              balance: i * 100,
              number: (11 - i) * 10,
        })
    }

    return result;
}