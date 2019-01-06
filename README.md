# simple CPP-IDE on Kubernetes

```
> Nuxt.js + Vuetify.js project
> Ace Editor
> CPP Compiler
```

# build and deploy on Kubernetes

```
C:\cpp-ide-kubernetes\cpp-compiler> docker build -t cpp-compiler:v1 .
C:\cpp-ide-kubernetes\cpp-compiler> kubectl apply -f cpp-compiler.yaml

C:\cpp-ide-kubernetes\cpp-ide> docker build -t cpp-ide:v1 .
C:\cpp-ide-kubernetes\cpp-ide> kubectl apply -f cpp-ide.yaml
```
