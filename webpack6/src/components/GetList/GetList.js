import React from 'react';
import { connect } from 'dva';
import './less/getList.less';

class GetList extends React.Component {
   componentWillMount() {
      this.props.dispatch({ type: 'getList/getList', params: {} });
   }

   render() {
      return (
         <div className="get-list">
            getList
         </div>
      );
   }
}


const mapStateToProps = (state) => {
   return {
      ...state,
   };
}
export default connect(mapStateToProps)(GetList);
