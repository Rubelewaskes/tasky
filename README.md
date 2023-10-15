# Tasky

## Backend

### Настройка (терминал 1)

>  **Необходим Python версии 3.9 и выше**

Настройка директории и установка зависимостей (windows)

```ps
$ cd backend

$ python -m venv env

$ env/scripts/activate

$ powershell

$ New-Item -ItemType file -Path './resources/settings.py'

$ exit

$ pip install -r requirements.txt
```

#### Содержимое settings.py
```python
database_url = 'postgres://username:password@host:port/database'
host = ''
```

### Запуск 
```console
$ cd backend

$ python app.py   
```

## Frontend

### Настройка (терминал 2)

>  **Необходим предустановленный [Node JS]**

```ps
$ cd frontend

$ npm install vue

$ npm install --force
```

### Запуск

```console

$ npm run serve
```

## DataBase
> **Для полноценной работы программы рекомендуется создать базу данных PostgreSQL, все запросы приведены в backend/database/createDB.sql**