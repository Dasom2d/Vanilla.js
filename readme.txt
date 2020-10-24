[Mission2] TodoApp 업그레이드하기
- index.html 안에 있던 TodoList 함수는 TodoList.js 라는 이름의 스크립트로 분리합니다.
- new TodoList() 를 실행했던 코드 구문은 index.js 라는 이름의 스크립트로 분리합니다.

input 컴포넌트화 하기
- App 이라는 컴포넌트를 만든 뒤, 이 App이 TodoInput과 TodoList를 관리하는 구조가 되게 만듭니다.

TodoCount 컴포넌트 
- TodoCount 라는 컴포넌트를 만듭니다.
- 해당 컴포넌트는 총 Todo의 갯수, 완료처리된 Todo의 갯수를 표시합니다.
- TodoList 컴포넌트 아래에 렌더링 되도록 합니다.

Event delegate 

커스텀 이벤트
- 입력하는 곳 옆에 버튼을 하나 만듭니다. 이 버튼을 누르면 Todo가 모두 삭제됩니다.
- 버튼 클릭 시 removeAll 이벤트가 발생하도록 합니다.
- App에서 removeAll 이라는 이벤트를 받도록 합니다.
- 해당 이벤트를 수신하면 현재 TodoList에 있는 모든 데이터를 삭제합니다.

localStorage
- todo 데이터를 하드코딩 해놓은 부분을 삭제합니다.
- localStorage를 활용해 todo data가 변경될 때마다 localStorage에 저장하게 합시다.
- 프로그램 초기 기동 시 todo는 localStorage에 저장해둔 todo가 있다면 그걸 사용하고, 없으면 빈 배열로 만듭니다.
- 새로고침 시 입력해둔 todo가 유지해되도록 localStorage를 활용해봅시다.

[Mission3] 움짤 검색기 만들기
- ajax를 이용해 서버에서 데이터를 불러오고, 불러온 데이터로 화면을 그리는 코드를 작성

async ~ await 사용하기
- fetch 해오는 코드를 promise에서 async, await를 사용하는 코드로 변경

debounce
- 움짤 키워드 검색 시 debounce 기법을 이용해 불필요한 API 요청이 가는 것을 방지

검색 히스토리
- SearchHistory 라는 컴포넌트를 만듭니다.
- SearchInput 위에 렌더링하면 되며, 움짤을 검색할 때마다 SearchHistory의 히스토리 데이터가 하나씩 쌓입니다.
해당 히스토리를 클릭하면 해당 검색어로 다시 검색합니다. 이때, 히스토리를 클릭해 발생한 검색에 대해선 히스토리에 쌓이지 않습니다.

import
- import 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만듭니다.




[배운 점]
- Vanilla.js를 이용해 작업물을 만들며 vanilla.js를 경험해봄
- 한 컴포넌트는 한 가지 역할만 해야함
- 컴포넌트화를 통해 소스 재사용 -> 그동안 내가 소스를 참 뒤죽박죽하게 짰구나를 느낌
- 자바스크립트 이론을 공부하면서 class를 배웠는데 느낌만 알았지 실제 업무를 통해 활용을 못했음 근데 이게 이렇게 쓰이는구나를 배움
- let const 역할에 대해 정확히 알게됨 -> 그동안 나는 let을 남발함
- fetch -> 개념을 알게 됨. 실무에서 fetch를 적용해봤으나 익스플로러에서 적용이 안돼 아쉬웠음
- debounce ->  실무에서 써보려다 못썼는데 이번 기회를 통해 적용해봄. 
- async, await -> 이 기능을 알기 전에 실무에서 고생을 했었는데 이 작업을 통해 이 기능에 대해 알게되었고, 앞으로 실무에서 많은 도움이 될 것 같음
- 클릭이벤트를 걸고 데이터를 가져오는데 html에 바인딩을 해야함 -> 좀 불편했음
- vue가 이런 식으로 구현되었구나(state)를 알게되어서 재밌었음
