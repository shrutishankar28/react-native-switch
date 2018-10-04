Object.defineProperty(exports,"__esModule",{value:true});exports.Switch=undefined;var _jsxFileName="lib/Switch.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Switch=exports.Switch=function(_Component){_inherits(Switch,_Component);function Switch(props,context){_classCallCheck(this,Switch);var _this=_possibleConstructorReturn(this,(Switch.__proto__||Object.getPrototypeOf(Switch)).call(this,props,context));_this.handleSwitch=function(){var value=_this.state.value;var _this$props=_this.props,onValueChange=_this$props.onValueChange,disabled=_this$props.disabled,changeValueImmediately=_this$props.changeValueImmediately,propValue=_this$props.value;if(disabled){return;}if(changeValueImmediately){_this.animateSwitch(!propValue);onValueChange(!propValue);}else{_this.animateSwitch(!value,function(){return _this.setState({value:!value},function(){return onValueChange(_this.state.value);});});}};_this.animateSwitch=function(value){var cb=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};_reactNative.Animated.parallel([_reactNative.Animated.spring(_this.state.transformSwitch,{toValue:value?_this.props.circleSize/_this.props.switchLeftPx:-_this.props.circleSize/_this.props.switchRightPx}),_reactNative.Animated.timing(_this.state.backgroundColor,{toValue:value?75:-75,duration:200}),_reactNative.Animated.timing(_this.state.circleColor,{toValue:value?75:-75,duration:200}),_reactNative.Animated.timing(_this.state.circleBorderColor,{toValue:value?75:-75,duration:200})]).start(cb);};_this.state={value:props.value,transformSwitch:new _reactNative.Animated.Value(props.value?props.circleSize/props.switchLeftPx:-props.circleSize/props.switchRightPx),backgroundColor:new _reactNative.Animated.Value(props.value?75:-75),circleColor:new _reactNative.Animated.Value(props.value?75:-75),circleBorderColor:new _reactNative.Animated.Value(props.value?75:-75)};return _this;}_createClass(Switch,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this2=this;var value=this.props.value;if(prevProps.value===this.props.value){return;}if(prevProps.disabled){return;}this.animateSwitch(value,function(){return _this2.setState({value:value});});}},{key:"render",value:function render(){var _state=this.state,transformSwitch=_state.transformSwitch,backgroundColor=_state.backgroundColor,circleColor=_state.circleColor,circleBorderColor=_state.circleBorderColor;var _props=this.props,backgroundActive=_props.backgroundActive,backgroundInactive=_props.backgroundInactive,circleActiveColor=_props.circleActiveColor,circleInActiveColor=_props.circleInActiveColor,activeText=_props.activeText,inActiveText=_props.inActiveText,circleSize=_props.circleSize,containerStyle=_props.containerStyle,activeTextStyle=_props.activeTextStyle,inactiveTextStyle=_props.inactiveTextStyle,barHeight=_props.barHeight,circleInactiveBorderColor=_props.circleInactiveBorderColor,circleActiveBorderColor=_props.circleActiveBorderColor,circleBorderWidth=_props.circleBorderWidth,innerCircleStyle=_props.innerCircleStyle,outerCircleStyle=_props.outerCircleStyle,renderActiveText=_props.renderActiveText,renderInActiveText=_props.renderInActiveText,renderInsideCircle=_props.renderInsideCircle,switchWidthMultiplier=_props.switchWidthMultiplier,value=_props.value;var interpolatedColorAnimation=backgroundColor.interpolate({inputRange:[-75,75],outputRange:[backgroundInactive,backgroundActive]});var interpolatedCircleColor=circleColor.interpolate({inputRange:[-75,75],outputRange:[circleInActiveColor,circleActiveColor]});var interpolatedCircleBorderColor=circleBorderColor.interpolate({inputRange:[-75,75],outputRange:[circleInactiveBorderColor,circleActiveBorderColor]});return _react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this.handleSwitch,__source:{fileName:_jsxFileName,lineNumber:191}},_react2.default.createElement(_reactNative.Animated.View,{style:[styles.container,containerStyle,{backgroundColor:interpolatedColorAnimation,width:circleSize*switchWidthMultiplier,height:barHeight||circleSize,borderRadius:circleSize}],__source:{fileName:_jsxFileName,lineNumber:192}},_react2.default.createElement(_reactNative.Animated.View,{style:[styles.animatedContainer,{left:transformSwitch,width:circleSize*switchWidthMultiplier},outerCircleStyle],__source:{fileName:_jsxFileName,lineNumber:204}},value&&renderActiveText&&_react2.default.createElement(_reactNative.Text,{style:[styles.text,styles.paddingRight,activeTextStyle],__source:{fileName:_jsxFileName,lineNumber:215}},activeText),_react2.default.createElement(_reactNative.Animated.View,{style:[styles.circle,{borderWidth:circleBorderWidth,borderColor:interpolatedCircleBorderColor,backgroundColor:interpolatedCircleColor,width:circleSize,height:circleSize,borderRadius:circleSize/2},innerCircleStyle],__source:{fileName:_jsxFileName,lineNumber:220}},renderInsideCircle()),!value&&renderInActiveText&&_react2.default.createElement(_reactNative.Text,{style:[styles.text,styles.paddingLeft,inactiveTextStyle],__source:{fileName:_jsxFileName,lineNumber:237}},inActiveText))));}}]);return Switch;}(_react.Component);Switch.propTypes={onValueChange:_propTypes2.default.func,disabled:_propTypes2.default.bool,activeText:_propTypes2.default.string,inActiveText:_propTypes2.default.string,backgroundActive:_propTypes2.default.string,backgroundInactive:_propTypes2.default.string,value:_propTypes2.default.bool,circleActiveColor:_propTypes2.default.string,circleInActiveColor:_propTypes2.default.string,circleSize:_propTypes2.default.number,circleBorderActiveColor:_propTypes2.default.string,circleBorderInactiveColor:_propTypes2.default.string,activeTextStyle:_propTypes2.default.object,inactiveTextStyle:_propTypes2.default.object,containerStyle:_propTypes2.default.object,barHeight:_propTypes2.default.number,circleBorderWidth:_propTypes2.default.number,innerCircleStyle:_propTypes2.default.object,renderInsideCircle:_propTypes2.default.func,changeValueImmediately:_propTypes2.default.bool,innerCircleStyle:_propTypes2.default.object,outerCircleStyle:_propTypes2.default.object,renderActiveText:_propTypes2.default.bool,renderInActiveText:_propTypes2.default.bool,switchLeftPx:_propTypes2.default.number,switchRightPx:_propTypes2.default.number,switchWidthMultiplier:_propTypes2.default.number};Switch.defaultProps={value:false,onValueChange:function onValueChange(){return null;},renderInsideCircle:function renderInsideCircle(){return null;},innerCircleStyle:{},disabled:false,activeText:"On",inActiveText:"Off",backgroundActive:"green",backgroundInactive:"gray",circleActiveColor:"white",circleInActiveColor:"white",circleBorderActiveColor:"rgb(100, 100, 100)",circleBorderInactiveColor:"rgb(80, 80, 80)",circleSize:30,barHeight:null,circleBorderWidth:1,changeValueImmediately:true,innerCircleStyle:{alignItems:"center",justifyContent:"center"},outerCircleStyle:{},renderActiveText:true,renderInActiveText:true,switchLeftPx:2,switchRightPx:2,switchWidthMultiplier:2};var styles=_reactNative.StyleSheet.create({container:{width:71,height:30,borderRadius:30,backgroundColor:"black"},animatedContainer:{flex:1,width:78,flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:30,height:30,borderRadius:15,backgroundColor:"white"},text:{color:"white",backgroundColor:"transparent"},paddingRight:{paddingRight:5},paddingLeft:{paddingLeft:5}});
//# sourceMappingURL=Switch.js.map