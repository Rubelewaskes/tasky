import json
from resources.services import json_serializable
from resources import DB

async def leaderTable():
    try:
       values = await DB.conn.fetch(
            f'''
                SELECT
                  u.firstname || ' ' || u.secondname || ' ' || u.thirdname as fio,
                  u.rating,
                  t.team_name,
                  p.profession_name
                FROM tasky.user u
                INNER JOIN tasky.team t ON u.team_id = t.team_id
                INNER JOIN tasky.profession p ON u.profession_id = p.profession_id
                ORDER BY u.rating DESC
                LIMIT 10;
            '''
        )
    except Exception as e: (
        print('Exceprion: ', e))

    result = json_serializable(f'leaderboard')

    for item in values:
        result.add_features('name', str(item['fio']))
        result.add_features('team', str(item['team_name']))
        result.add_features('profession', str(item['profession_name']))
        result.add_features('rating', str(item['rating']))
        result.new_features_tuple()
    return json.dumps(result.data[:-1])

