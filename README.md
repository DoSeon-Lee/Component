# React Native 컴포넌트 템플릿 프로젝트

이 프로젝트는 React Native 컴포넌트와 상태 관리 라이브러리를 학습하고 실험할 수 있는 통합 템플릿 애플리케이션입니다.
다양한 네이티브 컴포넌트와 상태 관리 기법에 대한 실제 예제와 대화형 코드 편집 기능을 제공합니다.

## 목차

- [소개](#소개)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [주요 기능](#주요-기능)
  - [네이티브 컴포넌트](#네이티브-컴포넌트)
  - [상태 관리](#상태-관리)
  - [대화형 사용자 정의](#대화형-사용자-정의)
  - [코드 미리보기](#코드-미리보기)
  - [다크 모드 지원](#다크-모드-지원)
- [컴포넌트 세부 설명](#컴포넌트-세부-설명)
  - [ActivityIndicator 컴포넌트](#activityindicator-컴포넌트)
  - [Modal 컴포넌트](#modal-컴포넌트)
  - [Swiper 컴포넌트](#swiper-컴포넌트)
- [상태 관리 세부 설명](#상태-관리-세부-설명)
  - [Redux](#redux)
  - [Context API](#context-api)
  - [React Hooks](#react-hooks)
- [문제 해결](#문제-해결)
- [기여 방법](#기여-방법)
- [라이센스](#라이센스)

## 소개

이 프로젝트는 React Native 개발자가 다양한 컴포넌트와 상태 관리 기술을 쉽게 학습하고 실험할 수 있도록 설계되었습니다.
각 컴포넌트는 실제 사용 예제, 코드 스니펫, 그리고 사용자 정의 옵션을 제공하여 다양한 구성을 테스트할 수 있게 합니다.

주요 특징:

- 다양한 React Native 네이티브 컴포넌트 예제
- 여러 상태 관리 라이브러리 및 훅 사용 예제
- 대화형 코드 편집 및 실시간 미리보기
- 다크 모드 UI 디자인

## 시작하기

### 필수 조건

- Node.js (v12 이상)
- npm 또는 yarn
- React Native CLI 또는 Expo CLI

### 설치

```bash
# 저장소 클론
git clone https://github.com/yourusername/react-native-component-template.git

# 프로젝트 디렉토리로 이동
cd react-native-component-template

# 의존성 설치
npm install
# 또는
yarn install

# 앱 실행
npx react-native run-ios
# 또는
npx react-native run-android
# 또는 Expo를 사용하는 경우
expo start
```

## 프로젝트 구조

```
compotemplate/
├── App.js               # 메인 앱 진입점
├── styles/
│   └── colors.js        # 앱 전체 색상 테마
├── src/
│   ├── NativeComponents/  # 네이티브 컴포넌트 예제
│   │   ├── ComponentsScreen.js        # 컴포넌트 목록 화면
│   │   ├── TextComponent.js           # Text 컴포넌트 예제
│   │   ├── ButtonComponent.js         # Button 컴포넌트 예제
│   │   ├── ActivityIndicatorComponent.js # ActivityIndicator 예제
│   │   ├── ModalComponent.js          # Modal 컴포넌트 예제
│   │   └── ...                        # 기타 컴포넌트
│   └── StateManagement/  # 상태 관리 예제
│       ├── StateManagementScreen.js   # 상태 관리 목록 화면
│       ├── UseStateExample.js         # useState 훅 예제
│       ├── ReduxExample.js            # Redux 예제
│       ├── ContextAPIExample.js       # Context API 예제
│       ├── SwiperExample.js           # Swiper 컴포넌트 예제
│       └── ...                        # 기타 상태 관리 예제
└── ...
```

## 주요 기능

### 네이티브 컴포넌트

이 프로젝트는 다음과 같은 React Native 네이티브 컴포넌트의 사용 예제를 제공합니다:

- **Text**: 기본 텍스트 표시 및 스타일링
- **Button**: 버튼 컴포넌트 및 이벤트 처리
- **TextInput**: 텍스트 입력 필드와 폼 처리
- **Image**: 이미지 표시 및 로딩
- **ScrollView**: 스크롤 가능한 컨테이너
- **FlatList**: 최적화된 목록 렌더링
- **SectionList**: 섹션 별로 구분된 목록
- **Modal**: 다양한 모달 다이얼로그
- **ActivityIndicator**: 로딩 인디케이터
- **TouchableOpacity**: 터치 피드백 컴포넌트
- **KeyboardAvoidingView**: 키보드 처리
- **TouchableWithoutFeedback**: 피드백 없는 터치 영역
- **TouchableHighlight**: 하이라이트 효과 터치 영역
- **Pressable**: 고급 터치 인터랙션
- **StatusBar**: 상태바 관리

### 상태 관리

다음과 같은 상태 관리 기술 및 패턴의 예제를 제공합니다:

- **useState**: 기본 상태 관리
- **useEffect**: 사이드 이펙트 처리
- **useContext**: Context API와 함께 사용
- **useCallback**: 콜백 메모이제이션
- **useImperativeHandle**: ref를 통한 명령형 핸들 노출
- **useLayoutEffect**: 동기적 레이아웃 효과
- **useMemo**: 계산 결과 메모이제이션
- **useReducer**: 복잡한 상태 로직 처리
- **useRef**: DOM 접근 및 변수 유지
- **Redux**: 전역 상태 관리 라이브러리
- **Context API**: React의 내장 상태 관리 API

### 대화형 사용자 정의

컴포넌트 예제에는 다양한 설정을 실시간으로 조정하고 결과를 확인할 수 있는 인터랙티브한 사용자 정의 패널이 포함되어 있습니다:

- **ActivityIndicator 컴포넌트**: 크기, 색상, 애니메이션 여부 등을 조정
- **Modal 컴포넌트**: 애니메이션 타입, 투명도 등을 조정
- 다른 컴포넌트들도 유사한 사용자 정의 옵션 제공

### 코드 미리보기

각 컴포넌트 예제는 해당 컴포넌트의 구현 코드를 보여주는 코드 스니펫 기능을 제공합니다:

- **코드 보기/숨기기**: 코드를 토글하여 볼 수 있는 기능
- **코드 직접 편집**: 일부 컴포넌트에서는 코드를 직접 편집하고 결과를 실시간으로 미리 볼 수 있음

### 다크 모드 지원

앱 전체가 다크 모드로 디자인되어 있으며, 어두운 배경과 가독성 높은 텍스트 색상을 사용합니다.

## 컴포넌트 세부 설명

### ActivityIndicator 컴포넌트

ActivityIndicator 컴포넌트는 다음과 같은 기능을 제공합니다:

- **크기 조정**: Small, Large, Custom 크기 옵션
- **사용자 정의 크기**: 숫자 값으로 직접 크기 입력 가능
- **색상 변경**: 여러 색상 옵션 중 선택
- **애니메이션 토글**: 애니메이션 활성화/비활성화
- **로딩 버튼**: ActivityIndicator를 버튼에 통합한 예제
- **진행 상황 표시**: 진행률을 보여주는 진행 바 예제
- **로딩 오버레이**: 전체 화면 로딩 오버레이 예제

코드 스니펫 기능을 통해 각 예제의 구현 코드를 확인할 수 있습니다.

### Modal 컴포넌트

Modal 컴포넌트는 다음과 같은 기능을 제공합니다:

- **기본 모달**: 전체 화면 모달 다이얼로그
- **애니메이션 모달**: 슬라이드, 페이드 등의 애니메이션 효과
- **투명 배경 모달**: 반투명 오버레이 위에 표시되는 팝업 모달
- **폼 모달**: 사용자 입력을 받는 폼이 포함된 모달

추가 기능:

- **사용자 정의 컨트롤 패널**: 애니메이션 타입, 투명 배경 등의 옵션 조정
- **코드 직접 편집**: 모달 코드를 직접 편집하고 결과를 미리 볼 수 있는 기능
- **코드 파싱**: 사용자가 수정한 코드에서 속성 값을 자동으로 추출하여 적용
- **오류 검증**: 잘못된 속성 값을 입력할 경우 오류 메시지 표시

실시간 코드 편집 기능을 통해 Modal 컴포넌트의 다양한 속성을 직접 수정하고 결과를 즉시 확인할 수 있습니다.

### Swiper 컴포넌트

Swiper 컴포넌트는 다음과 같은 기능을 제공합니다:

- **자동 슬라이드**: 지정된 시간 간격으로 자동 슬라이드
- **페이지 인디케이터**: 현재 페이지 위치 표시
- **사용자 정의 스타일**: 다크 모드와 호환되는 스타일
- **사용자 제스처**: 스와이프 제스처로 슬라이드 간 이동

## 상태 관리 세부 설명

### Redux

Redux 예제는 다음 개념을 보여줍니다:

- **스토어 설정**: Redux 스토어 구성 방법
- **액션 생성자**: 상태 변경을 위한 액션 정의
- **리듀서**: 상태 업데이트 로직
- **선택자**: 스토어에서 상태 추출
- **연결 컴포넌트**: Redux 스토어와 컴포넌트 연결

### Context API

Context API 예제는 다음 개념을 보여줍니다:

- **컨텍스트 생성**: React.createContext를 사용한 컨텍스트 생성
- **Provider 컴포넌트**: 하위 트리에 상태 제공
- **Consumer 컴포넌트**: 컨텍스트 값 소비
- **useContext 훅**: 함수형 컴포넌트에서 컨텍스트 사용
- **테마 적용**: 전역 테마를 컨텍스트로 관리

### React Hooks

다양한 React Hooks 예제는 각 훅의 일반적인 사용 사례와 패턴을 보여줍니다.

## 문제 해결

### 알려진 이슈

- **react-native-swiper**: 이전 버전의 react-native-swiper 패키지는 최신 React Native 버전과 호환성 문제가 있을 수 있습니다. 최신 버전으로 업데이트하거나 대체 라이브러리 사용을 고려하세요.
- **코드 편집기**: 복잡한 코드 편집 시 모바일 환경에서는 사용성이 제한될 수 있습니다.

### 해결 방법

- **패키지 버전 충돌**: `package.json`의 의존성 버전을 확인하고 호환되는 버전으로 업데이트하세요.
- **렌더링 문제**: 성능 이슈가 있는 경우 `FlatList`나 `SectionList`를 사용하여 최적화하세요.
- **스타일 문제**: 기기별 스타일 차이가 있는 경우 플랫폼별 스타일을 적용하거나 `react-native-responsive-screen` 같은 라이브러리를 사용하세요.

## 기여 방법

프로젝트에 기여하려면:

1. 이 저장소를 포크하세요
2. 새 브랜치를 만드세요 (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. 풀 리퀘스트를 열어주세요

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.

## 연락처

프로젝트 관리자 - [doseon1226@gmail.com]

---

© 2025 compotemplate. All Rights Reserved.
