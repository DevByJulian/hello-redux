import React from 'react';
import { store } from './store';
import { setTechnology } from './actions'

const ButtonGroup = ({technologies}) => {
    return (
        
        technologies.map((tech, i) => {
            return <button
            data-tech={tech}
            key={`btn-${i}`}
            className="hello-btn"
            onClick={dispatchBtnAction}>
            {tech}
            </button>
        }
        )

    )

}


const dispatchBtnAction = (e) => {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech))
      }

export default ButtonGroup