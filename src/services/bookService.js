const fetchBooks = async (page, itemsPerPage, filters) => {
    const response = await fetch('/api/books', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page,
            itemsPerPage,
            filters,
        }),
    });
    if (!response.ok) {
        throw new Error('Failed to fetch books. ');
    }
    return response.json();
};

export default fetchBooks;