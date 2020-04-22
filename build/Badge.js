function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}import React from"react";import{StyleSheet,Text,View,TouchableOpacity}from"react-native";import{renderNode}from"./renderNode";const Badge=a=>{const{containerStyle:b,textStyle:c,badgeStyle:d,onPress:e,Component:j=e?TouchableOpacity:View,value:f,theme:g,status:h,...i}=a,k=renderNode(Text,f,{style:StyleSheet.flatten([styles.text,c&&c])});return/*#__PURE__*/React.createElement(View,{style:StyleSheet.flatten([b&&b])},/*#__PURE__*/React.createElement(j,_extends({},i,{style:StyleSheet.flatten([styles.badge(g,h),!k&&styles.miniBadge,d&&d]),onPress:e}),k))};// Badge.propTypes = {
//   containerStyle: ViewPropTypes.style,
//   badgeStyle: ViewPropTypes.style,
//   textStyle: Text.propTypes.style,
//   value: PropTypes.node,
//   onPress: PropTypes.func,
//   Component: PropTypes.func,
//   theme: PropTypes.object,
//   status: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
// };
Badge.defaultProps={status:"primary"};const size=18,miniSize=8,styles={badge:(a,b)=>({alignSelf:"center",minWidth:size,height:size,borderRadius:9,alignItems:"center",justifyContent:"center",backgroundColor:a.colors[b],borderWidth:StyleSheet.hairlineWidth,borderColor:"#fff"}),miniBadge:{paddingHorizontal:0,paddingVertical:0,minWidth:miniSize,height:miniSize,borderRadius:miniSize/2},text:{fontSize:12,color:"white",paddingHorizontal:4}};export{Badge};