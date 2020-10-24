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