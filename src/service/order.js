
export async function getOrderItems() {
    // const url = `${PREFIX}/book/${id}`;
    let result;

    result = [];

    for(var i = 1; i <= 10; i++){
        result.push({
            "id": i,
            "receiver": `Sir ${i}`,
            "address": `Street ${i}`,
            "tel": `${i}0000000000`,
            "createAt": "2024-02-25T08:03:28.278Z",
            "item": {
              "id" : i,
              "book": {
                "id": i,
                "title": `Title ${i}`,
                "author": `author ${i}`,
                "description": `Description ${i}`,
                "price": i * 4.5,
                "cover": `books/book${i}.jpg`,
                "sales": i,
              },
              "number" : i,
            }
        })
    }

    return result;
}