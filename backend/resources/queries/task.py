from resources.services import json_serializable
from resources import DB
import json


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
        return 'success'	
    
    except Exception as e:
        print('Exceprion: ', e)

async def getTasks(user_id):
    try:
        
        data = await DB.conn.fetch(
            f'''
                select tsk.task_name, tsk_s.task_status_name, tsk.task_desc, tsk.points,
                mk.mark_name, tsk.difficulty, count(exc.executor_id) as taskDealerCount, tsk.end_dttm
                from tasky.task tsk 
                full join tasky.mark mk on mk.task_id = tsk.task_id
                full join tasky.task_status tsk_s on tsk.task_status_id = tsk_s.task_status_id
                full join tasky.executor exc on exc.task_id = tsk.task_id
                where exc.user_id = 2 or tsk_s.task_status_name = 'Выдано'
                group by tsk_s.task_status_id, tsk_s.task_status_name, tsk.end_dttm, tsk.difficulty, tsk.task_name, tsk.task_desc, tsk.points, mk.mark_name
                order by tsk_s.task_status_id, tsk.end_dttm asc;
            '''
            )
        result = json_serializable('tasks')
        for item in data:
            result.add_features('name', str(item['task_name']))
            result.add_features('status', str(item['task_status_name']))
            result.add_features('taskDiscription', str(item['task_desc']))
            result.add_features('taskPoints', int(item['points']))
            result.add_features('taskMark', str(item['mark_name']))
            result.add_features('taskRank', str(item['difficulty']))
            result.add_features('taskDdealerCount', int(item['taskdealercount']))
            result.add_features('taskDate', str(item['end_dttm']))
            result.new_features_tuple()

        return json.dumps(result.data)	
    
    except Exception as e:
        print('Exception: ', e)
