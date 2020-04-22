function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}import React from"react";import{StyleSheet,Text,View}from"react-native";import{renderNode}from"./renderNode";import{Badge}from"./Badge";import{Button}from"./Button";import colors from"./colors";const cellPositions=["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"];export default class DefaultControls extends React.Component{constructor(a){super(a),_defineProperty(this,"dotsPos",(()=>this._getPos(this.props.dotsPos,"bottom","right"))()),_defineProperty(this,"prevPos",(()=>this._getPos(this.props.prevPos,"bottom-left","top-right"))()),_defineProperty(this,"nextPos",(()=>this._getPos(this.props.nextPos,"bottom-right"))()),this._renderRow=this._renderRow.bind(this),this._renderCell=this._renderCell.bind(this),this._renderDot=this._renderDot.bind(this),this._renderButton=this._renderButton.bind(this)}_getPos(a,b,c){return!1===a?null:a?a:c&&this.props.vertical?c:b}_renderDot({isActive:a,onPress:b}){const{dotProps:d={},dotActiveStyle:c}=this.props,{containerStyle:e,badgeStyle:f,...g}=d;return/*#__PURE__*/React.createElement(Badge,_extends({theme:{colors},containerStyle:StyleSheet.flatten([styles.dotsItemContainer,e]),badgeStyle:StyleSheet.flatten([styles.dotsItem({colors},a),f,a&&c]),onPress:b},g))}_renderDots(){const{vertical:a,count:b,activeIndex:c,dotsTouchable:d,dotsWrapperStyle:e,DotComponent:g=this._renderDot,goTo:f}=this.props;return/*#__PURE__*/React.createElement(View,{style:StyleSheet.flatten([styles.dotsWrapper(a),e])},Array.from({length:b},(a,b)=>b).map(a=>/*#__PURE__*/React.createElement(g,{key:a,index:a,isActive:c===a,onPress:d?()=>f(a):void 0})))}_renderButton({type:a,title:b,titleStyle:c,onPress:d,...e}){return/*#__PURE__*/React.createElement(Button,_extends({theme:{colors},type:"clear",onPress:d,title:b,titleStyle:StyleSheet.flatten([styles.buttonTitleStyle({colors},a),c])},e))}_renderPrev(){const{goToPrev:a,isFirst:b,prevTitle:c,firstPrevElement:d,prevTitleStyle:e,PrevComponent:f=this._renderButton}=this.props;return b?renderNode(Text,d):/*#__PURE__*/React.createElement(f,{type:"prev",title:c,titleStyle:e,onPress:a})}_renderNext(){const{goToNext:a,isLast:b,nextTitle:c,lastNextElement:d,nextTitleStyle:e,NextComponent:f=this._renderButton}=this.props;return b?renderNode(Text,d):/*#__PURE__*/React.createElement(f,{type:"next",title:c,titleStyle:e,onPress:a})}_renderCell({name:a}){const{cellsStyle:b={},cellsContent:c={}}=this.props;return/*#__PURE__*/React.createElement(View,{style:StyleSheet.flatten([styles.cell,b[a]])},this.dotsPos===a&&this._renderDots(),this.prevPos===a&&this._renderPrev(),this.nextPos===a&&this._renderNext(),c[a]&&renderNode(Text,c[a]))}_renderRow({rowAlign:a}){const b=this._renderCell,c=[`${a?a+"-":""}left`,a||"center",`${a?a+"-":""}right`],d=["flex-start","center","flex-end"];return/*#__PURE__*/React.createElement(View,{style:styles.row},c.map((a,c)=>/*#__PURE__*/React.createElement(View,{key:a,style:styles.spaceHolder(d[c])},/*#__PURE__*/React.createElement(b,{name:a}))))}render(){const a=this._renderRow;return/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(a,{rowAlign:"top",contentAlign:"flex-start"}),/*#__PURE__*/React.createElement(a,{contentAlign:"center"}),/*#__PURE__*/React.createElement(a,{rowAlign:"bottom",contentAlign:"flex-end"}))}}// DefaultControls.propTypes = {
//   cellsStyle: PropTypes.shape(
//     cellPositions.reduce(
//       (obj, item) => ({ ...obj, [item]: ViewPropTypes.style }),
//       {}
//     )
//   ),
//   cellsContent: PropTypes.shape(
//     cellPositions.reduce((obj, item) => ({ ...obj, [item]: nodeType }), {})
//   ),
//   dotsPos: PropTypes.oneOf([...cellPositions, true, false]),
//   prevPos: PropTypes.oneOf([...cellPositions, true, false]),
//   nextPos: PropTypes.oneOf([...cellPositions, true, false]),
//   prevTitle: PropTypes.string,
//   nextTitle: PropTypes.string,
//   dotsTouchable: PropTypes.bool,
//   dotsWrapperStyle: ViewPropTypes.style,
//   dotProps: PropTypes.shape(Badge.propTypes),
//   dotActiveStyle: ViewPropTypes.style,
//   DotComponent: PropTypes.func,
//   prevTitleStyle: Text.propTypes.style,
//   nextTitleStyle: Text.propTypes.style,
//   PrevComponent: PropTypes.func,
//   NextComponent: PropTypes.func,
//   firstPrevElement: nodeType,
//   lastNextElement: nodeType,
//   theme: PropTypes.object,
//   vertical: PropTypes.bool,
//   count: PropTypes.number,
//   activeIndex: PropTypes.number,
//   isFirst: PropTypes.bool,
//   isLast: PropTypes.bool,
//   goToPrev: PropTypes.func,
//   goToNext: PropTypes.func,
//   goTo: PropTypes.func,
// };
DefaultControls.defaultProps={prevTitle:"Prev",nextTitle:"Next"};const styles={row:{flexDirection:"row",height:0,alignItems:"center",margin:20},spaceHolder:a=>({height:0,flex:1,alignItems:a,justifyContent:"center"}),cell:{alignItems:"center",justifyContent:"center",position:"absolute"},dotsWrapper:a=>({flexDirection:a?"column":"row",alignItems:"center",justifyContent:"center",minWidth:1,minHeight:1}),dotsItemContainer:{margin:3},dotsItem:(a,b)=>({backgroundColor:b?a.colors.primary:a.colors.grey3,borderColor:"transparent"}),buttonTitleStyle:(a,b)=>({color:"prev"===b?a.colors.grey3:a.colors.primary}),hidden:{opacity:0}};