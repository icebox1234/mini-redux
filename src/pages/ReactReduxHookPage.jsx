import { useCallback } from 'react';
// import { useSelector, useDispatch } from "react-redux";
import {
    useSelector,
    useDispatch,
    useSelector1,
    useDispatch1,
} from '../react-redux-nut';

export default function ReactReduxHookPage(props) {
    const count = useSelector1(({ count }) => count);

    const dispatch = useDispatch1();

    const add = useCallback(() => {
        dispatch({ type: 'ADD' });
    }, []);

    return (
        <div>
            <h3>ReactReduxHookPage</h3>

            <button onClick={add}>{count}</button>
        </div>
    );
}
