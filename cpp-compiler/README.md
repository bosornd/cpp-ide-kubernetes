# CPP Compiler on Kubernetes

## Build and Run

```
C:\cpp-ide-kubernetes\cpp-compiler> docker build -t cpp-compiler:v1 .
C:\cpp-ide-kubernetes\cpp-compiler> kubectl apply -f cpp-compiler.yaml

C:\cpp-ide-kubernetes\cpp-compiler> curl -i -X POST -H "Content-Type: application/json" -d @code1.json {minikube ip}{cpp-compiler-service-port}
```
