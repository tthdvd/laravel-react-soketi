# laravel-react-soketi
Basic chat application using Soketi and Laravel's broadcasting feature.
You could read more about this [here](). 

## Install
Using Docker and Laravel Sail:

```shell
docker run --rm \
-u "$(id -u):$(id -g)" \
-v $(pwd):/opt \
-w /opt \
laravelsail/php80-composer:latest \
composer install --ignore-platform-reqs
```

Run migration:
```shell
php artisan migrate
```

Install the npm packages and build the js file:
```shell
npm install && npm run dev
```
