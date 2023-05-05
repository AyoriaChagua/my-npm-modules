<h1>Useful functions</h1>
#Use

<h3>To use the getAge function you must enter the date of birth</h3>

``` getAge("2004-10-01") or getAge("2004/10/01")```
```bash
18
```
Any of these formats is acceptable


<h3>To use the daysToChristmas function, simply execute it and that's is!</h3>

``` daysToChristmas() ```
```bash
264 days left until Christmas
```

<h3>To use the formValidator function you need a form as in JSON format and a list of the required fields. The function will return a boolean. It will return <b>true</b> if there are no errors in the validation, and it will return a <b>false</b> with the list of errors if any are found.</h3>

```js
form = {
    "name": "test1",
    "email": "test@test.com",
    "password": "123456",
    "birthday": "2010-10-10"
}
requireFields = ["email", "password"]

console.log(formValidator(form, requireFields))
```
<h3>The console should show the following:</h3>

```bash
true
```

<h3>If you submit a form with errors, these will be displayed in the console and what you will get is false</h3>

```js
form = {
    "email": "testtestcom",
    "password": "1256",
    "birthday": "20asdfas10-10-10"
}

requireFields = ["email", "password", "name"]

console.log(formValidator(form, requireFields))
```
<h3>The console should show the following:</h3>

```bash
{
  errors: {
    name: 'Required',
    email: 'Invalid email',
    password: 'Password must be at least 6 characters long',
    birthday: 'Invalid date format'
  }
}

false
```


