        document.addEventListener('DOMContentLoaded', () => {
            const bookmarkForm = document.getElementById('bookmarkForm');
            const bookmarkList = document.getElementById('bookmarkList');
            let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

            const renderBookmarks = () => {
                bookmarkList.innerHTML = '';
                bookmarks.forEach((bookmark, index) => {
                    const bookmarkItem = document.createElement('div');
                    bookmarkItem.className = 'bookmark-item';
                    bookmarkItem.innerHTML = `
                        <img src="${bookmark.imageUrl}" alt="${bookmark.title}">
                        <h2>${bookmark.title}</h2>
                        <a href="${bookmark.url}" target="_blank"><i class="fas fa-external-link-alt"></i> Visit</a>
                        <button onclick="deleteBookmark(${index})"><i class="fas fa-trash-alt"></i></button>
                    `;
                    bookmarkList.appendChild(bookmarkItem);
                });
            };

            const addBookmark = (e) => {
                e.preventDefault();
                const title = document.getElementById('title').value;
                const url = document.getElementById('url').value;
                const imageUrl = document.getElementById('imageUrl').value;
                const newBookmark = { title, url, imageUrl };
                bookmarks.push(newBookmark);
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                renderBookmarks();
                bookmarkForm.reset();
            };

            const deleteBookmark = (index) => {
                bookmarks.splice(index, 1);
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                renderBookmarks();
            };

            window.deleteBookmark = deleteBookmark;
            bookmarkForm.addEventListener('submit', addBookmark);
            renderBookmarks();
        });
