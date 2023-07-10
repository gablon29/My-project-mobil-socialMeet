import React, { useState } from 'react';
import { View, Text, FlatList, PanResponder } from 'react-native';

const EdadMascota = () => {
  const [anos, setAnos] = useState(0);
  const [meses, setMeses] = useState(0);

  const panResponderAnos = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if(dx > 0){
          setAnos(anos + 1);
        } else {
          setAnos(anos - 1);
        }
        // setDirection(dx > 0 ? 'right' : 'left');
        // if(direction < 10){
        //   // setDirection(0)
        //   console.log(direction, 10)
        //   setDirection(dx > 0 ? direction + 1 : direction - 1);
        // }
        // setDirection(dx > 0 ? direction + 1 : direction - 1);
      }
    },
    // ,
    // onPanResponderRelease: () => {
    //   setDirection(null);
    // },
  });

  const panResponderMeses = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if(dx > 0){
          setMeses(meses + 1);
        } else {
          setMeses(meses - 1);
        }
        // setDirection(dx > 0 ? 'right' : 'left');
        // if(direction < 10){
        //   // setDirection(0)
        //   console.log(direction, 10)
        //   setDirection(dx > 0 ? direction + 1 : direction - 1);
        // }
        // setDirection(dx > 0 ? direction + 1 : direction - 1);
      }
    },
    // ,
    // onPanResponderRelease: () => {
    //   setDirection(null);
    // },
  });

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Qué edad tiene?</Text>
      <View className="flex flex-row" {...panResponderAnos.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{anos - 2}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{anos - 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{anos}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{anos + 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{anos + 2}</Text>
        </View>
      </View>
      <Text className="font-poppins">Años</Text>
      <View className="flex flex-row" {...panResponderMeses.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{meses - 2}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{meses - 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{meses}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{meses + 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{meses + 2}</Text>
        </View>
      </View>
      <Text className="font-poppins">Meses</Text>
    </View>
  );
};

export default EdadMascota;

// const dos = [
//   {
//     changedTouches: [Circular], identifier: 0, locationX: 9.822314262390137, locationY: 25.986719131469727, pageX: 153.8223114013672, pageY: 360.38671875, target: 5489, targetSurface: -1, timestamp: 123227720, touches: [[Circular]]
//   }
// ];

// const uno = {
//   _dispatchInstances: [
//     { _debugHookTypes: null, _debugNeedsRemount: false, _debugOwner: [FiberNode], _debugSource: undefined, actualDuration: 69.26189994812012, actualStartTime: 157704371.621873, alternate: [FiberNode], child: [FiberNode], childLanes: 0, deletions: null, dependencies: null, elementType: 'AndroidHorizontalScrollView', flags: 4, index: 0, key: null, lanes: 0, memoizedProps: [], memoizedState: null, mode: 2, pendingProps: [], ref: [], return: [FiberNode], selfBaseDuration: 0.09059998393058777, sibling: null, stateNode: [ReactNativeFiberHostComponent], subtreeFlags: 8389125, tag: 5, treeBaseDuration: 66.10560023784637, type: 'AndroidHorizontalScrollView', updateQueue: null },
//     { _debugHookTypes: null, _debugNeedsRemount: false, _debugOwner: [FiberNode], _debugSource: undefined, actualDuration: 121.45149993896484, actualStartTime: 157704319.547873, alternate: [FiberNode], child: [FiberNode], childLanes: 1, deletions: null, dependencies: null, elementType: 'RCTScrollView', flags: 0, index: 0, key: null, lanes: 0, memoizedProps: [Object], memoizedState: null, mode: 2, pendingProps: [], ref: [], return: [], selfBaseDuration: 0.04899999499320984, sibling: null, stateNode: [ReactNativeFiberHostComponent], subtreeFlags: 8389125, tag: 5, treeBaseDuration: 117.6308002769947, type: 'RCTScrollView', updateQueue: null },
//   ],
//   _dispatchListeners: [[Function], [Function]],
//   _targetInst: {
//     _debugHookTypes: null,
//     _debugNeedsRemount: false,
//     _debugOwner: { _debugHookTypes: [Array], _debugNeedsRemount: false, _debugOwner: [FiberNode], _debugSource: null, actualDuration: 2.0905000269412994, actualStartTime: 157704410.466073, alternate: [FiberNode], child: [], childLanes: 0, deletions: null, dependencies: [], elementType: [], flags: 8388609, index: 0, key: null, lanes: 0, memoizedProps: [], memoizedState: [], mode: 2, pendingProps: [], ref: null, return: [FiberNode], selfBaseDuration: 1.8234000205993652, sibling: null, stateNode: null, subtreeFlags: 4, tag: 11, treeBaseDuration: 2.0309000313282013, type: [Object], updateQueue: [Object] },
//     _debugSource: undefined,
//     actualDuration: 0.11809998750686646,
//     actualStartTime: 157704412.443373,
//     alternate: { _debugHookTypes: null, _debugNeedsRemount: false, _debugOwner: [FiberNode], _debugSource: undefined, actualDuration: 0.10490003228187561, actualStartTime: 157682341.882473, alternate: [Circular], child: [FiberNode], childLanes: 0, deletions: null, dependencies: null, elementType: 'RCTText', flags: 4, index: 0, key: null, lanes: 0, memoizedProps: [Object], memoizedState: null, mode: 2, pendingProps: [Object], ref: null, return: [FiberNode], selfBaseDuration: 0.05950000882148743, sibling: null, stateNode: [ReactNativeFiberHostComponent], subtreeFlags: 0, tag: 5, treeBaseDuration: 0.09320002794265747, type: 'RCTText', updateQueue: null },
//     child: { _debugHookTypes: null, _debugNeedsRemount: false, _debugOwner: null, _debugSource: null, actualDuration: 0.024899989366531372, actualStartTime: 157704412.521473, alternate: [FiberNode], child: null, childLanes: 0, deletions: null, dependencies: null, elementType: null, flags: 0, index: 0, key: null, lanes: 0, memoizedProps: '2', memoizedState: null, mode: 2, pendingProps: '2', ref: null, return: [Circular], selfBaseDuration: 0.033700019121170044, sibling: null, stateNode: 5165, subtreeFlags: 0, tag: 6, treeBaseDuration: 0.033700019121170044, type: null, updateQueue: null },
//     childLanes: 0,
//     deletions: null,
//     dependencies: null,
//     elementType: 'RCTText',
//     flags: 4,
//     index: 0,
//     key: null,
//     lanes: 0,
//     memoizedProps: { accessibilityLabel: undefined, accessibilityRole: undefined, accessibilityState: [Object], accessible: false, allowFontScaling: true, children: 2, disabled: undefined, ellipsizeMode: 'tail', isHighlighted: false, nativeID: undefined, numberOfLines: undefined, selectable: undefined, selectionColor: null, style: [] },
//     memoizedState: null,
//     mode: 2,
//     pendingProps: { accessibilityLabel: undefined, accessibilityRole: undefined, accessibilityState: [], accessible: false, allowFontScaling: true, children: 2, disabled: undefined, ellipsizeMode: 'tail', isHighlighted: false, nativeID: undefined, numberOfLines: undefined, selectable: undefined, selectionColor: null, style: [] },
//     ref: null,
//     return: { _debugHookTypes: null, _debugNeedsRemount: false, _debugOwner: [FiberNode], _debugSource: undefined, actualDuration: 0.24500000476837158, actualStartTime: 157704412.322073, alternate: [FiberNode], child: [Circular], childLanes: 0, deletions: null, dependencies: null, elementType: [Object], flags: 0, index: 0, key: null, lanes: 0, memoizedProps: [Object], memoizedState: null, mode: 2, pendingProps: [Object], ref: null, return: [FiberNode], selfBaseDuration: 0.10760000348091125, sibling: null, stateNode: null, subtreeFlags: 4, tag: 10, treeBaseDuration: 0.20750001072883606, type: [Object], updateQueue: null },
//     selfBaseDuration: 0.06619998812675476,
//     sibling: null,
//     stateNode: { _children: [Array], _internalFiberInstanceHandleDEV: [], _nativeTag: 5167, viewConfig: [] },
//     subtreeFlags: 0,
//     tag: 5,
//     treeBaseDuration: 0.0999000072479248,
//     type: 'RCTText',
//     updateQueue: null,
//   },
//   bubbles: undefined,
//   cancelable: undefined,
//   currentTarget: {
//     _children: [[ReactNativeFiberHostComponent]],
//     _internalFiberInstanceHandleDEV: {
//       _debugHookTypes: null,
//       _debugNeedsRemount: false,
//       _debugOwner: [FiberNode],
//       _debugSource: undefined,
//       actualDuration: 83.28879991173744,
//       actualStartTime: 157682304.013273,
//       alternate: [FiberNode],
//       child: [FiberNode],
//       childLanes: 0,
//       deletions: null,
//       dependencies: null,
//       elementType: 'AndroidHorizontalScrollView',
//       flags: 4,
//       index: 0,
//       key: null,
//       lanes: 0,
//       memoizedProps: [Object],
//       memoizedState: null,
//       mode: 2,
//       pendingProps: [Object],
//       ref: [Function],
//       return: [FiberNode],
//       selfBaseDuration: 0.055900007486343384,
//       sibling: null,
//       stateNode: [Circular],
//       subtreeFlags: 8389125,
//       tag: 5,
//       treeBaseDuration: 81.68129998445511,
//       type: 'AndroidHorizontalScrollView',
//       updateQueue: null,
//     },
//     _nativeTag: 5113,
//     flashScrollIndicators: [Function],
//     getInnerViewNode: [Function],
//     getInnerViewRef: [Function],
//     getNativeScrollRef: [Function],
//     getScrollResponder: [Function],
//     getScrollableNode: [Function],
//     scrollResponderScrollNativeHandleToKeyboard: [Function],
//     scrollResponderZoomTo: [],
//     scrollTo: [],
//     scrollToEnd: [],
//     viewConfig: { NativeProps: [], bubblingEventTypes: [], directEventTypes: [], uiViewClassName: 'AndroidHorizontalScrollView', validAttributes: [] },
//   },
//   defaultPrevented: undefined,
//   dispatchConfig: { phasedRegistrationNames: { bubbled: 'onTouchMove', captured: 'onTouchMoveCapture' } },
//   eventPhase: undefined,
//   isDefaultPrevented: [Function],
//   isPropagationStopped: [Function],
//   isTrusted: undefined,
//   nativeEvent: { changedTouches: [[Circular]], identifier: 0, locationX: 11.522186279296875, locationY: 25.978515625, pageX: 147.52218627929688, pageY: 361.3118591308594, target: 5167, targetSurface: -1, timestamp: 157939702, touches: [[Circular]] },
//   target: {
//     _children: [5165],
//     _internalFiberInstanceHandleDEV: { _debugHookTypes: null, _debugNeedsRemount: false, _debugOwner: [FiberNode], _debugSource: undefined, actualDuration: 0.11809998750686646, actualStartTime: 157704412.443373, alternate: [FiberNode], child: [FiberNode], childLanes: 0, deletions: null, dependencies: null, elementType: 'RCTText', flags: 4, index: 0, key: null, lanes: 0, memoizedProps: [], memoizedState: null, mode: 2, pendingProps: [], ref: null, return: [FiberNode], selfBaseDuration: 0.06619998812675476, sibling: null, stateNode: [Circular], subtreeFlags: 0, tag: 5, treeBaseDuration: 0.0999000072479248, type: 'RCTText', updateQueue: null },
//     _nativeTag: 5167,
//     viewConfig: { Commands: [], bubblingEventTypes: [], directEventTypes: [], uiViewClassName: 'RCTText', validAttributes: [] },
//   },
//   timeStamp: 1688888578006,
//   type: undefined,
// };
