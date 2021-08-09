<div align="center" id="top">
  <p>
    <a href="https://github.com/brlaney/django-next/commits/master">
      <img src="https://img.shields.io/github/last-commit/brlaney/django-next?style=flat-square">
    </a>
    <a href="#status"><img src="https://img.shields.io/badge/Maintained-yes-green.svg?style=flat-square"></a>
  </p>
  <h1>Django-Next</h1>
  <h5>A basic, full-stack web application</h5>
  <p><b>Django-Next</b> contains a backend <b>Django app</b> that features restful api endpoints. </br> It also contains a <b>Next.js</b> app for the frontend which fetches data from the api.</p>
</div>

# Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Features](#features)
- [Quick Start](#quick-start)
  - [1. Clone repository](#1-clone-repository)
  - [2. Setup the backend **Dj-api**](#2-setup-the-backend-dj-api)
  - [3. Confirm your backend is functioning](#3-confirm-your-backend-is-functioning)
  - [4. Setup the frontend **next-app**](#4-setup-the-frontend-next-app)
- [Connect with me](#connect-with-me)
- [License](#license)
- [Contributions and issues](#contributions-and-issues)

# Features

- 🛢 Backend API endpoints using [Django Rest Framework](https://www.django-rest-framework.org/)
- ✅ Initial data loaded with one command through [fixtures](https://docs.djangoproject.com/en/3.2/ref/django-admin/#dumpdata)
  - To checkout the documentation, click the fixtures link and find `loaddata` in the contents sidebar.
  - The mock data was created using [mockaroo](https://www.mockaroo.com/)
- 🎨 Sleek frontend styling with [Material-UI](https://github.com/mui-org/material-ui)
- 🎬 Basic transitions and animations with [Framer Motion](https://github.com/framer/motion)

# Quick Start

## 1. Clone repository

```C
git clone https://github.com/Brlaney/django-next.git
```

## 2. Setup the backend **Dj-api**

```C
cd dj-api

# Activate a virtual environment
virtualenv ll_env
ll_env\scripts\activate.bat

# Download necessary packages
py -m pip install Django djangorestframework django-cors-headers

# Make database migrations
py manage.py makemigrations
py manage.py migrate 

# Create admin superuser
py manage.py createsuperuser
..<input a username, email, and password>

# Populate your database with initial data from the dj-api/api/fixtures directory
py manage.py loaddata fixture
```

The terminal should output: `Installed 30 object(s) from 1 fixture(s)`.
If an error message appears then run `py manage.py migrate --run-syncdb`
and `py manage.py migrate` first and then `py manage.py loaddata fixture` should work.

## 3. Confirm your backend is functioning

```C
py manage.py runserver
```

Now navigate to http://127.0.0.1:8000/api
and confirm the initial data was loaded properly.

<p align="center">
  <img src="https://user-images.githubusercontent.com/64326462/126901766-e187377d-5b0d-4b75-835f-5dc1d0374094.png"
    alt="screenshot-of-api" align="center" width="50%">
</p>

</br>

## 4. Setup the frontend **next-app**

Open up another terminal (tab or window) and keep your backend running.

```C
# In the new terminal cd into the next-app directory
cd next-app

# Install all dependencies
yarn install 

# or if using npm
npm install

# Create a .env.local file with backend api endpoint inside
echo > .env.local

# In your text editor put the following line in your .env.local file
DJANGO_API=http://localhost:8000/api

# Start your frontend app
yarn dev

# or
npm run dev
```

Opening http://localhost:3000/ in your browser should now show your frontend Next.js app.

# Connect with me

* Email: <brlaney@outlook.com>
* Twitter: [brendan_webdev](https://twitter.com/Brendan_webdev)
* Instagram: [brlaney94](https://www.instagram.com/brlaney94/)

# License

```
MIT License

Copyright (c) 2021 Brendan Laney - Django-Next author.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

# Contributions and issues

I would love your feedback on my project - please feel free to make a pull request or submit an issue if you find any. Thanks for checking out my project!
