from flask import request
from json import loads
from resources import DB
from resources import app
from resources.queries import leaderTable


@app.get('/leader')
async def leader():
    try:
        await DB.connect()

        output = await leaderTable()

        await DB.close()
        return output

    except Exception as e:
        print('Ошибка: ',e)