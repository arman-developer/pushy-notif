import React, {Component} from 'react';
import InsertProps from './InsertProps';
class App extends Component {
  render () {
    return (
      <div>
        <InsertProps jakipsy="jakipsy">arman</InsertProps>
      </div>
    );
  }

  // state = {value: []};

  // loopThrough = () => {
  //   const todoList = this.state.value.map((element, index) => {
  //     return (
  //       <div style={{display: 'flex', width: '200px'}} key={index}>
  //         <div style={{textDecoration: element.line ? 'line-through' : ''}}>
  //           {element.val}
  //         </div>
  //         {/* onClick={this.textDecor(index)} */}
  //         <div
  //           onClick={() => this.textDecor(index)}
  //           style={{padding: '0 10px'}}
  //         >
  //           -
  //         </div>
  //         <div onClick={() => this.delField(index)} style={{padding: '0 10px'}}>
  //           x
  //         </div>
  //       </div>
  //     );
  //   });
  //   return todoList;
  // };

  // textDecor = (index) => {
  //   let newState = this.state.value;

  //   newState[index].line = !newState[index].line;

  //   this.setState({
  //     value: newState,
  //   });
  // };

  // delField = (index) => {
  //   let newState = this.state.value;
  //   delete newState[index];
  //   // newState[index].line = !newState[index].line;

  //   this.setState({
  //     value: newState,
  //   });
  // };

  // // handleDecrement = () => {
  // //   this.setState(prevState => ({
  // //     value: prevState.value - 1,
  // //   }));
  // // };

  // inputHandle = (event) => {
  //   event.preventDefault();
  //   const val1 = event.target.elements.info.value;
  //   this.setState((prevState) => ({
  //     value: [...prevState.value, {val: val1, line: false}],
  //   }));
  //   event.target.elements.info.value = '';
  // };

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.inputHandle}>
  //         <input type="text" name="info" autoComplete="off" />
  //       </form>
  //       {this.loopThrough()}
  //     </div>
  //   );
  // }
}
// const
export default App;
