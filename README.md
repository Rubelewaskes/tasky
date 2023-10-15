# UFOffice

## Backend

### Настройка (терминал 1)

>  **Необходим Python версии 3.9 и выше**

Настройка директории и установка зависимостей (windows)

```ps
$ cd backend

$ python -m venv env

$ env/scripts/activate

$ New-Item -ItemType file -Path './resources/settings.py'

$ pip install requirements.txt
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

>  **Необходим предустановленный [Node JS](https://nodejs.org/en/)**

```ps
$ cd frontend

$ npm install vue

$ npm i bootstrap

$ npm i vue-router

$ npm install axios

$ npm i @popperjs/core

$ npm i vuex
```

### Запуск

```console

$ npm run serve
```
