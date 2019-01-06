# CPP IDE on Kubernetes
> Vue / Nuxt / vuetify
> Ace Editor

## Build Setup

```
C:\cpp-ide-kubernetes\cpp-ide> docker build -t cpp-ide:v1 .
C:\cpp-ide-kubernetes\cpp-ide> kubectl apply -f cpp-ide.yaml
```

## Nuxt on kubernetes
```
npm run start를 하면 기본적으로 localhost:3000으로 서버가 구동되는데,
이렇게 서버를 구동하면 다른 서버에서 접근이 안됨.
NUXT_HOST=0.0.0.0 nuxt start로 구동해야 함(package.json 참조)
```
