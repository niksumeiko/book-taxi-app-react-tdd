const http = require('http');

const url = require('url');

function getRandomDelay() {
    return (Math.floor(Math.random() * 2) + 1) * 1000;
}

function getRandomDriver() {
    const drivers = [
        {
            driver: { name: 'Jakub' },
            car: {
                model: 'Porsche Cayenne Turbo',
                isElectric: false,
                plate: 'AA328AD',
            },
        },
        {
            driver: { name: 'Lenka' },
            car: {
                model: 'Tesla M',
                isElectric: true,
                plate: 'AC167BK',
            },
        },
    ];

    return drivers[Math.floor(Math.random() * 2)];
}

http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    };

    const { pathname } = url.parse(req.url, true);

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (req.method === 'POST' && pathname === '/book') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk.toString();
        });
        req.on('end', () => {
            const body = JSON.parse(data);

            setTimeout(() => {
                res.writeHead(200, headers);
                res.write(
                    JSON.stringify({
                        id: new Date().getTime().toString(),
                        destination: body.destination,
                        ...getRandomDriver(),
                    }),
                );
                res.end();
            }, getRandomDelay());
        });
        return;
    }

    res.writeHead(404, headers);
    res.end();
}).listen(9000);
