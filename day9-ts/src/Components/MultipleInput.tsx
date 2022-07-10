import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class MultipleInput extends Component {
    state = {
        someData1: 'test',
        someData2: 'etst23',
        someData3: 'tedfas',
    }

    handeChangeSome = (e: any) => {
       const {smdata1 ,smdata2, smdata3} = e.target; 

       this.setState({[smdata1.name]: smdata1.value, [smdata2.name]: smdata2.value, [smdata3.name]: smdata3.value})
    }

    handeSubmit = (e: any) => {
        e.preventDefault();
        
        console.log(this.state);
    }

  render() {
      const {someData1, someData2, someData3} = this.state;

        return (
            <div>
                <form onSubmit={this.handeSubmit}>
                    <input type="text" name="someData1" value={someData1} onChange={this.handeChangeSome}/>
                    <input type="text" name="someData2" value={someData2} onChange={this.handeChangeSome}/>
                    <input type="text" name="someData3" value={someData3} onChange={this.handeChangeSome}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
  }
}