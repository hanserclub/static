let cdnRoot = '';
const pingImg = 'https://cdn.2550505.com/share/ping.png';
const defaulRoot = 'https://cdn.2550505.com';
self.addEventListener("install", () => {
    self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
    const sourceUrl = e.request.url;
    if (!cdnRoot || sourceUrl === pingImg) {
        return;
    }
    if (sourceUrl.includes(defaulRoot) && cdnRoot && cdnRoot !== defaulRoot) {
        const url = sourceUrl.replace(defaulRoot, cdnRoot);
        const req = new Request(url);
        e.respondWith(
            fetch(req, {
                mode: 'no-cors',
                referrer: cdnRoot
            }).then((response) => {
                return response;
            })
        );
    }
    const thirdPictureDomain = ['gitee.com', 'raw.githubusercontent.com', 'i0.hdslb.com', 'img-blog.csdnimg.cn', 'img2.baidu.com'];
    if (thirdPictureDomain.find((item) => sourceUrl.includes(item))) {
        e.respondWith(
            fetch(sourceUrl, {
                referrerPolicy: 'no-referrer'
            }).then((response) => {
                return response;
            })
        );
    }
});

// 创建或链接数据库
const req = indexedDB.open("cdn", 1);
req.onupgradeneeded = () => {
    const db = req.result;
    // 创建表
    const store = db.createObjectStore("cdnRoot", {keyPath: 'id'}, {autoIncrement: true});
    // 设置id为主键
    store.createIndex('cdnRoot_id_unqiue', 'id', {unique: true});
};

req.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['cdnRoot'], 'readwrite');
    const store = transaction.objectStore('cdnRoot');
    store.get(1).onsuccess = (event) => {
        const storedCdnRoot = event.target.result;
        cdnRoot = 'https://cdn.2550505.com';
        if (storedCdnRoot) {
            cdnRoot = storedCdnRoot.root;
        }
    };
};
req.onerror = () => {
    console.log("数据库出错");
};
