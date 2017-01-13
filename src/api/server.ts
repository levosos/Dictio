import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import * as express from 'express';
import { join } from 'path';

async function main(): Promise<void> {
    const port = process.env.PORT || 8080;
    const path = join(__dirname, '../app/app');

    const app = createExpressServer({
        controllers: [__dirname + '/controllers/**/*.js'],
        routePrefix: '/rest',
    });

    app.use(express.static(path));

    app.listen(port, function () {
        console.log('Dictio is running [port ' + port + '] under "' + path + '"');
    });
}

try {
    main();
} catch (error) {
    console.log(error);
}
