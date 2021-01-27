import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        debugger;
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    };

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const Hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours() + ": "; // fix with date
    const Minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()  + ": ";  // fix with date
    const Second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds() ; // fix with date
    const stringDate = date.getDate() + ": " + (date.getMonth() < 10 ? "0" + (date.getMonth() + 1): date.getMonth() + 1) + ": " + date.getFullYear(); // fix with date

    return (
        <div className={s.main}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
              <span className={s.clock}>
                  {Hour}
                  {Minute}
                  {Second}
              </span>
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
