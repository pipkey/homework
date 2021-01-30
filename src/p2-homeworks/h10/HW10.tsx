import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from "../../img/238.gif"

function HW10() {
    let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    let dispatch = useDispatch();


    const setLoading = () => {
        dispatch(loadingAC(true));
        setInterval(() => dispatch(loadingAC(false)), 2000);
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            <h3>  homeworks 10</h3>

            {/*should work (должно работать)*/}
            {loading
                ? <div><img src={preloader}/></div>

                :
                <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>

            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
