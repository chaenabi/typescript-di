# 타입스크립트 및 자바스크립트에서의 DI 주입

자바스크립트는 interface가 존재하지 않기 때문에

스프링 컨테이너처럼 인터페이스 기반의 IOC (inversion of control) 기능을 제공해주지 못합니다.

그러나 개발자가 직접 DI를 수행하도록 구현할 수는 있습니다.

service/index.ts는
스프링의 @Configuration 및 @Bean의 기능을 사용하는 것과 매우 비슷하게 동작합니다.

레포지토리 실행 및 테스트 방법

```
npm install
```

index.ts 에서 export할 서비스 객체를 지정해줍니다.

```
npx tsc
node {root}/index.js
```

나오는 실행결과를 본 뒤, index.ts에서 다시 export할 서비스객체를 변경해보고,


```
npx tsc
node {root}/index.js
```

를 실행하면 의존성 주입이 잘 되는 것을 테스트할 수 있습니다.
