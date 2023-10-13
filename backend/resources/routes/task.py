from flask import request
from json import loads
from resources import DB
from resources import app
from resources.queries import testTask


@app.post('/task')
async def task():
    try:
        await DB.connect()

        data = request.data.decode('utf8')
        output = await testTask(loads(data)['userID'], loads(data)['description'])

        await DB.close()

        return output

    except Exception as e:
        print('Ошибка: ',e)