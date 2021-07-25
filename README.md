<div align="center" id="top">
  <p>
    <a href="https://github.com/brlaney/django-next/commits/master">
      <img src="https://img.shields.io/github/last-commit/brlaney/django-next?style=flat-square">
    </a>
    <a href="#status"><img src="https://img.shields.io/badge/Maintained-yes-green.svg?style=flat-square"></a>
  </p>
  <h1>Django-Next</h1>
  <h5>A basic, full-stack web application</h5>
  <p><b>Django-Next</b> contains a backend <b>Django app</b> that features restful api endpoints. It also contains a Next.js app for the frontend client-side which fetches data from the backend api.</p>
  <a href="https://twitter.com/Brendan_webdev">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?color=%23ffffff00&amp;logo=twitter&amp;style=for-the-badge&amp;url=https%3A%2F%2Fgithub.com%2Fkrishdevdb%2Freadme-template">
  </a>
</div>

# Table Of Contents

* [Features](#features)
* [Quick Start](#quick-start)
  * Clone repository
  * Setup the backend
  * Confirm API works
* [License](#license)
* [Status](#status)

# Features

- Django rest API backend app
- Next.js frontend app
- Styling with Material-UI
- 

# Quick Start

### 1. Clone repository

```
git clone https://github.com/Brlaney/django-next.git
```

### 2. Setup the backend **Dj-api**

```
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

### 3. Confirm your backend is functioning

```
py manage.py runserver
```

Now navigate to [localhost/api](http://127.0.0.1:8000/api) (http://127.0.0.1:8000/api)
and confirm the initial data was loaded properly.

<p align="center">
  <img src="https://user-images.githubusercontent.com/64326462/126901766-e187377d-5b0d-4b75-835f-5dc1d0374094.png"
    alt="screenshot-of-api" align="center" width="50%">
</p>

</br>

### 4. Setup the frontend **next-app**

Open up another terminal (tab or window) and keep your backend running.

```
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

# Starting the frontend app
yarn dev

# or
npm run dev
```

[Back To Top][top]

## Spread

* Twitter: [![](https://img.shields.io/badge/Share-Twitter-%231DA1F2?style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/krishdevdb/readme-template\&text=This%20Readme%20Template%20Helped%20Me%20A%20Lot%20In%20My%20Opensource%20Project.%20Make%20Sure%20To%20Check%20It%20Out)

* Facebook: [![](https://img.shields.io/badge/Share-Facebook-%233b5998?style=flat-square)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/krishdevdb/readme-template)

* Linkedin: [![](https://img.shields.io/badge/Share-Linkedin-%230e76a8?style=flat-square)](https://www.linkedin.com/shareArticle?mini=true\&url=https://github.com/krishdevdb/readme-template)

* Email: [![](https://img.shields.io/badge/Share-Email-green?style=flat-square)](mailto:info@example.com?\&subject=\&cc=\&bcc=\&body=https://github.com/krishdevdb/readme-template%0AThis%20Readme%20Template%20Helped%20Me%20A%20Lot%20In%20My%20Opensource%20Project.%20Make%20Sure%20To%20Check%20It%20Out)

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

# Status

This project is currently being maintained. And Will Be Maintained. If You Like This Project And Want This Project To Never Exhaust. Please Consider Donating.

[top]: #top
[ issues ]: https://github.com/brlaney/django-next/issues
[ pull-requests ]: https://github.com/brlaney/django-next/pulls
