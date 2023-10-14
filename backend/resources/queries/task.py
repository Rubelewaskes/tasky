from resources.services import json_serializable
from resources import DB


async def newTask(authorID, name, description, endDate, executorsID, difficulty, points):
    try:
        await DB.conn.fetch(
            f'''
                insert into tasky.task (author_user_id, task_name, task_desc, 
                end_dttm, points, difficulty)
                values({int(authorID)}, '{name}', '{description}',
                TO_DATE('{endDate}', 'YYYY-MM-DD') , {int(points)}, '{difficulty}')
                returning task_id;
            '''
            )

        for i in executorsID :
            await DB.conn.fetch(
            f'''
                insert into tasky.executor (user_id, task_id)
                values({int(i)}, (select max(task_id) from tasky.task));
            '''
            )
        print('Всё круто')
        return 'success'	
    
    except Exception as e:
        print('Exceprion: ', e)
