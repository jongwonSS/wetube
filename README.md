# Wetube

Cloning Youtube with Vanilla and Nodejs



# Note (간단한 것도 잊을 수 있기에 작성합니다.)

## 2020/01/12
- require : node module을 어딘가에서 가져오는 역할
- 해당 파일 디렉토리 내에서 찾아보고, 없으면 node_modules에서 찾음.

## 2020/01/13
- http method get/post
- req, res 객체

## 2020/01/14
- Babel : ES6/ES7 코드를 ECMAScript5 코드로 transpiling 하기 위한 도구
- 프로젝트와 관계없이 개발자에게 필요한 dependency를 추가할 때는, 'npm install nodemon -D'과 같이 -D를 붙이면 devDependencies에 추가됨.
- nodemon : 프로젝트 내의 소스를 모니터링하고 있다가 소스 수정 시 자동으로 서버 재시작
- nodemon --exec babel-node index.js delay -2
    - delay 추가 이유 : delay가 없을 시, nodemon이 수정을 감지하여 서버 재시작 후, 바벨이 소스를 변화시켜 다시 재시작 하기에 2번 재시작되는 현상 발생
- express middleware
    - req(요청) 객체, res(응답) 객체, 그리고 어플리케이션 요청-응답 사이클 도중 그 다음의 미들웨어 함수에 대한 엑세스 권한을 갖는 함수
    - 간단하게 말하면, 클라이언트의 요청을 처리하기 위해 중간에 존재하는 함수들
- express의 route와 같이 connection을 다루는 모든 것들은 request, response, next를 가지고 있음.
    - next : 다음 미들웨어로 제어를 넘기는 key
- 요청의 흐름은 위에서 아래로 흐름.
    - 즉, 'app.use(func_name);'을사용하여 앱 오브젝트의 인스턴스에 바인드하는 위치가 중요함.
    - 앱에 바인드하면, 해당 함수는 앱이 요청을 수신할 때마다 실행되는데, 위에서 아래로 찾아가면서 해당 라인 전에 route를 반환하면 해당 함수 실행 X
