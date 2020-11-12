import React, { useRef } from "react";
import interact from 'interactjs';
import bottomFrame from "../GAssets/tests/BottomFrame.svg"
import styles from "./styles/OptionBottom.module.scss"
import { Target } from "@interactjs/types";

const OptionBottom = (props: any) => {
    const draggable =  useRef(null)

    if (draggable.current) {
    interact(draggable.current as unknown as Target)
        .draggable({
            onmove: function(event: any) {
                console.log('qweqwe')
                const target = event.target     

                const dataX = target.getAttribute('data-x');
                const dataY = target.getAttribute('data-y');
                const initialX = parseFloat(dataX) || 0;
                const initialY = parseFloat(dataY) || 0;

                const deltaX = event.dx;
                const deltaY = event.dy;

                const newX = initialX + deltaX;
                const newY = initialY + deltaY;

                target
                    .style
                    .transform = `translate(${newX}px, ${newY}px)`;

                target.setAttribute('data-x', newX);
                target.setAttribute('data-y', newY);
            }
        })
    }
    return(
        <div className={styles.optionContainer} ref={draggable} >
            <img src={bottomFrame} alt="bottom frame" id={styles.bottomFrame}></img>
            {/*<p className={styles.text}>fashion</p>*/}
        </div>
    );
}

export default OptionBottom