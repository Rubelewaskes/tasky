from resources.services import hash_pass, json_serializable
from resources import DB




async def check_user_login(login, password):
    try:
        data = await DB.conn.fetch(
            '''
                select 
                    u.login, 
                    u.password, 
                    u.user_id,
                    u.mail
                from 
                    tasky.user u
            '''
            )

        for item in data:
            if login.lower() == item['login'] and hash_pass.hash_check(hash_pass.generate_password_hash(item['password']), password):
                result = json_serializable('user')
                result.add_features('login', str(item['login']))
                result.add_features('id', str(item['user_id']))
                result.add_features('mail', str(item['mail']))
                return result.data[0]
            else:
                print('Неверный логин или пароль')	

        return 'wrong'
    
    except Exception as e:
        print('Exceprion: ', e)
