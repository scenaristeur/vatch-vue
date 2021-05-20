# vatch-vue

this is a client for vatch, learn more on the page https://github.com/scenaristeur/vatch

# there are two config on vatch according to what you expect.

* uncomment the good line in src/plugins/vue-socket.js according to your need.

- vatch-vue hosted on github can access your locahost storage
//let socket = Vue.prototype.$socket = io('http://localhost:3000');
- share your localhost storage on your localnetwork
//let socket = Vue.prototype.$socket = io(':3000');




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
