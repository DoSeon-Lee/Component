# React Native 컴포넌트 & 상태 관리 예제

이 프로젝트는 React Native의 다양한 네이티브 컴포넌트와 상태 관리 방법을 보여주는 종합적인 예제 모음입니다. 초보자부터 중급 개발자까지 React Native의 핵심 개념을 학습하는 데 도움이 됩니다.

## 주요 기능

이 앱은 두 개의 주요 섹션으로 구성되어 있습니다:

### 1. 네이티브 컴포넌트

React Native에서 제공하는 기본 UI 컴포넌트의 사용법을 보여줍니다:

- **Text**: 텍스트 표시 및 스타일링
- **Button**: 기본 버튼 사용법
- **TextInput**: 사용자 입력 처리
- **Image**: 이미지 표시 및 스타일링
- **ScrollView**: 스크롤 가능한 컨텐츠
- **FlatList**: 효율적인 목록 렌더링
- **SectionList**: 섹션 분리된 목록
- **Modal**: 모달 창 구현
- **ActivityIndicator**: 로딩 인디케이터
- **TouchableOpacity**: 터치 피드백이 있는 래퍼
- **KeyboardAvoidingView**: 키보드 가리기 방지
- **TouchableWithoutFeedback**: 피드백 없는 터치 영역
- **TouchableHighlight**: 하이라이트 효과 터치 영역
- **Pressable**: 고급 터치 처리
- **StatusBar**: 상태 표시줄 조작

### 2. 상태 관리

다양한 상태 관리 기술과 React Hooks의 사용법을 보여줍니다:

- **useState**: 컴포넌트 로컬 상태 관리
- **useEffect**: 생명주기 및 부수 효과 처리
- **useContext**: Context API를 통한 상태 공유
- **useReducer**: 복잡한 상태 로직 관리
- **useMemo**: 계산 결과 메모이제이션
- **useCallback**: 함수 참조 메모이제이션
- **useRef**: DOM 요소 참조 및 변경 감지 없는 값 저장
- **useLayoutEffect**: DOM 변경 후 동기적 실행
- **useImperativeHandle**: ref에 노출되는 인스턴스 값 사용자 정의
- **Redux**: 중앙 집중식 상태 관리
- **Context API**: 컴포넌트 트리 전체에 데이터 제공
- **Swiper**: 스와이프 제스처를 활용한 UI 구현

## 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/yourusername/react-native-components-template.git
cd react-native-components-template

# 의존성 설치
npm install
# 또는
yarn install

# 앱 실행
expo start
```

## 요구 사항

- Node.js 14.0 이상
- Expo CLI
- iOS 시뮬레이터 / Android 에뮬레이터 또는 실제 기기

## 사용된 패키지

- React Navigation (Bottom Tabs, Native Stack)
- React Native Vector Icons
- Redux 및 React-Redux
- React Native Swiper

## 다크 모드 지원

앱 전체가 다크 모드로 디자인되어 있으며, 일부 예제(Context API)에서는 테마 전환 기능도 제공합니다.

## 프로젝트 구조

```
/src
  /NativeComponents - UI 컴포넌트 예제
  /StateManagement - 상태 관리 예제
/styles - 공통 스타일 정의
App.js - 앱 메인 진입점
```

## 학습 가이드

1. 각 섹션의 예제는 독립적으로 실행되며 자체 설명을 포함합니다.
2. 코드 내 주석을 통해 핵심 개념을 이해할 수 있습니다.
3. 실제 사용 사례를 기반으로 한 예제를 통해 실전 적용 방법을 학습할 수 있습니다.

## 기여하기

버그 수정, 기능 추가 또는 설명 개선을 위한 풀 리퀘스트를 환영합니다.

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.

## 감사의 말

- React Native와 Expo 커뮤니티에 감사드립니다.

---

© 2025 Compotemplate App. All Rights Reserved.
