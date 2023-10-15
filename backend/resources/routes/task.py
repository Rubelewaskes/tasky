from flask import request
from json import loads
from resources import DB
from resources import app
from resources.queries import newTask
from resources.queries import getTasks

@app.route('/task', methods=['GET', 'POST'])
async def task():
    try:
        await DB.connect()

        if request.method == 'POST':
                data = request.data.decode('utf8')

                output = await newTask(loads(data)['authorID'], loads(data)['name'], 
                loads(data)['description'], loads(data)['endDate'], 
                loads(data)['executorsID'], loads(data)['difficulty'], loads(data)['points'])

                await DB.close()
                return output

        elif request.method == 'GET':
            await DB.connect()

            data = request.args['id']

            output = await getTasks(loads(data))


            await DB.close()
            print(output)
            return output

    except Exception as e:
        print('Ошибка: ',e)