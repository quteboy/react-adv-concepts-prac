import React, {Fragment} from 'react';

const ChildComp = React.forwardRef((props, ref) => (


    <Fragment>
        <div style={{border: '1px solid green'}}>
            <h4>Child Ref Component</h4>
            <input ref={ref} type="text"/>
        </div>

    </Fragment>

));

export default ChildComp;