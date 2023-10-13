from resources.services import json_serializable
from resources import DB


async def testTask(userID, description):
    try:
        # data = await DB.conn.fetch(
        #     '''
        #         select 
        #             u.login, 
        #             u.password, 
        #             u.user_id,
        #             ur.role_name
        #         from 
        #             tasky.user u
        #         join tasky.role ur
        #             on ur.role_id = u.role_id
        #     '''
        #     )

        # for item in data:
        #     if login.lower() == item['login'] and hash_pass.hash_check(hash_pass.generate_password_hash(item['password']), password):
        #         result = json_serializable('rsp')
        #         result.add_features('login', str(item['login']))
        #         result.add_features('token', str(item['user_id']))
        #         result.add_features('role', str(item['role_name']))
        #         print('Успех')
                
        #         return result.data[0]	
        print(userID, 'Успех', description)
        return 'wrong'
    
    except Exception as e:
        print('Exceprion: ', e)
