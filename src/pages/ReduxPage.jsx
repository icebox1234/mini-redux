import React, { Component } from 'react';
import store from '../store';
export default class ReduxPage extends Component {
    componentDidMount() {
        // 告诉redux，一旦state变化（一旦执行dispatch函数）,就执行的事件
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    add = () => {
        store.dispatch({ type: 'ADD' });
    };

    minus = () => {
        // setTimeout(() => {
        //   store.dispatch({ type: "MINUS" });
        // }, 1000);

        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
                dispatch({ type: 'MINUS' });
            }, 1000);
        });

        // store.dispatch({ type: "MINUS" });
    };

    promiseMinus = () => {
        store.dispatch(
            // Promise.resolve({
            //   type: "MINUS",
            //   payload: 1,
            // })
            {
                type: 'MINUS_CUS',
                payload: new Promise((rs) => {
                    setTimeout(() => {
                        rs(2);
                    }, 500);
                }),
            }
        );
    };

    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState().count}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.promiseMinus}>promiseMinus</button>
            </div>
        );
    }
}
