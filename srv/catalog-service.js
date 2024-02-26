module.exports = srv => {
    console.log(`Service name: ${srv.name} is served at ${srv.path}`)

    srv.after('READ', 'Books', books => {
        console.log(books)

        const newBooks = []

        books.forEach(book => {
            if (book.stock > 500) {
                book.title = `(10% off!) ${book.title}`
            }
            newBooks.push(book)
        })

        console.log(newBooks)
        return newBooks
    })
}